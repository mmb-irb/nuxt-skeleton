import mongoose from 'mongoose';
import { file } from "../../../models";
import { streamToData } from '../../../utils/db';

// this end point gives the information of a document
export default defineEventHandler(async (event) => { 

  // get the response object
  const respObj = event.node.res;

  // get file id
  const { id } = event.context.params

  // Check if id can be cast to ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    setResponseStatus(event, 400)
    return { message: "Invalid ID" }
  }

  // use mongoose model to find the document
  const fileDoc = await file.findById(id);

  if(!fileDoc){
    setResponseStatus(event, 404)
    return { message: "File not found" }
  }

  // create a GridFSBucket instance
  const gfsBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'fs' });

  // Create a read stream
  const readStream = gfsBucket.openDownloadStream(mongoose.Types.ObjectId.createFromHexString(id));

  // Convert the stream to data
  const body = await streamToData(readStream);

  // Set the response headers
  respObj.setHeader('Content-Type', fileDoc.contentType);
  respObj.setHeader('Content-Length', fileDoc.length );
  respObj.setHeader('Content-Disposition', `attachment; filename="${fileDoc.metadata.filename}"`);

  // Write the data to the response
  respObj.write(body);
  // End the response
  respObj.end();

});
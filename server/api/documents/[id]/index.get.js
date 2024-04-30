import { document } from "../../../models";

// this end point gives the information of a document
export default defineEventHandler(async (event) => { 

  // get document id
  const { id } = event.context.params

  const docData = await document.findOne({ id: id });

  // if document not found, return 404
  if(!docData) {
    setResponseStatus(event, 404)
    return { message: "Document not found" }
  }

  // remove _id from the document data
  let documentData = docData._doc;
  const { _id, ...result } = documentData;

  return result  

});
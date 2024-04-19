import { document } from "../../../models";

// this end point gives the information of a document
export default defineEventHandler(async (event) => { 

  // get document id
  const { id } = event.context.params

  const documentData = await document.findOne({ _id: id });

  return documentData  

});
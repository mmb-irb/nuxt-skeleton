import { document } from "../../models";

// this end point gives the list of documents paginated
export default defineEventHandler(async (event) => { 

  const documentList = await document.find({}, { id: 1, title: 1, description: 1, created: 1 });

  return documentList

});
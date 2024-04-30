import { document } from "../../models";

// this end point gives the list of documents paginated
export default defineEventHandler(async (event) => { 

  // handle query params (GET)
  let { limit, page } = getQuery(event);

  if(!limit) limit = 10;
  if(!page) page = 1;

  const totalCount = await document.countDocuments();

  const docs = await document.find({}, { id: 1, title: 1, description: 1, files: 1, created: 1 })
                                      .skip((page - 1) * limit)
                                      .limit(limit);

  const documentList = docs.map(doc => {
    return {
      id: doc.id,
      title: doc.title,
      description: doc.description,
      files: doc.files.length,
      created: doc.created
    }
  })

  return {
    total: totalCount,
    documents: documentList
  }

});
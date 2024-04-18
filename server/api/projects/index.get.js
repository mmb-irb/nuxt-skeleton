import { project } from "../../models";

// this end point gives the list of projects paginated
export default defineEventHandler(async (event) => { 

  const projectList = await project.find({}, { id: 1, title: 1, description: 1, created: 1 });

  return projectList

});
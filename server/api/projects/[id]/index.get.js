import { project } from "../../../models";

// this end point gives the information of a project
export default defineEventHandler(async (event) => { 

  // get project id
  const { id } = event.context.params

  const projectData = await project.findOne({ id: parseInt(id) });

  return projectData  

});
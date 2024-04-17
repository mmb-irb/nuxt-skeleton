// this end point gives the information of a project
export default defineEventHandler(async (event) => { 

  // get runtime config
  const config = useRuntimeConfig()

  // get project id
  const { id } = event.context.params

  const project = {
    id: 1,
    title: `Project ${id}`,
    description: `This is project ${id}`,
    longDescription: `This is a long description of project ${id}, lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    authors: [
      {
        name: 'Author 1',
        email: 'email1@mail.com'
      },
      {
        name: 'Author 2',
        email: 'email2@mail.com'
      }
    ],
    created: new Date(),
  }

  return project

  /*const uri = `${config.public.externalApi}v1/projects/${id}`

  const response = await $fetch(uri)
              .catch((error) => {
                  setResponseStatus(event, error.status)
                  return { message: error.message }
              });

  return response*/
  

});
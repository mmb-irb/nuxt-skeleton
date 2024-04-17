// this end point gives the list of projects paginated
export default defineEventHandler(async (event) => { 

    // get runtime config
    const config = useRuntimeConfig()

    const projects = [
			{
				id: 1,
				title: 'Project 1',
				description: 'This is project 1',
				created: new Date(),
			},
			{
				id: 2,
				title: 'Project 2',
				description: 'This is project 2',
				created: new Date(),
			}
    ]

    return projects

    /*let data
    try {
        data = await $fetch(uri)
    } catch (error) {
        setResponseStatus(event, error.status)
        return { message: error.message }
    }

    const response = data.projects.map((item) => ({
        id: item.identifier,
        accession: item.accession, 
        name: item.metadata.NAME,
        sequences: item.metadata.SEQUENCES,
        analyses: item.analyses
    }))

    return {
        total: data.filteredCount,
        projects: response
    }*/

 });
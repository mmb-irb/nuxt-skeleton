<template>
  <v-container>

    <h1>Projects</h1>

    <Breadcrumbs :props="{section:'Projects'}" />

    <v-row> 
      <v-col cols="12" >
        <v-card rounded="sm" class="elevation-2 pa-4" >

          <template v-slot:title>
            <v-icon size="small" icon="mdi-clipboard-text-search"></v-icon> PROJECTS
          </template>

          <template v-slot:text>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minima officia placeat velit. At facere iusto veniam, optio exercitationem aspernatur incidunt, esse maiores saepe officia culpa dolores nesciunt itaque iure.</p>
          
            <ProjectItem v-for="(item, index) in projects" :key="`${Math.random()}`" :item="item" />

          </template>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>

  const config = useRuntimeConfig()

  const projectsList = await useFetch(`${config.public.apiBase}/projects`)
  if(projectsList.status.value === 'error')  throw createError({ statusCode: projectsList.error.value.statusCode, message: projectsList.error.value.statusMessage, fatal: true })
  
  let projects = ref(projectsList.data.value)

  useHead({
    title: 'Projects' 
  })

</script>

<style scoped>

</style>
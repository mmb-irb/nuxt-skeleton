<template>
  <v-container>

    <h1>{{ project.title }}</h1>

    <Breadcrumbs :props="{section: 'Projects', title: project.title}" />

    <v-row> 
      <v-col cols="12">
        <v-card rounded="sm" class="elevation-2 pa-4 h-100" >

          <template v-slot:title>
            <v-icon size="small" icon="mdi-text-box-search"></v-icon> &nbsp;OVERVIEW
          </template>

          <template v-slot:text>

            <p>{{ project.longDescription }}</p>

            <v-btn @click="openDialog">Open Dialog</v-btn>

          </template>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

  <Dialog v-model="dialog" ref="dialogRef">
    <template #viewer>
      <ProjectInfo :id="project.id" />
    </template>
  </Dialog>

</template>

<script setup>

  const config = useRuntimeConfig()
  const { id } = useRoute().params

  const dialog = ref(false)

  const projectInfo = await useFetch(`${config.public.apiBase}/projects/${id}`)
  if(projectInfo.status.value === 'error')  throw createError({ statusCode: projectInfo.error.value.statusCode, message: projectInfo.error.value.statusMessage, fatal: true })
  
  let project = ref(projectInfo.data.value)

  const dialogRef = ref(null)
  const openDialog = () => {
    dialogRef.value.updateTitle(project.value.title)
    dialog.value = true
  }

</script>

<style scoped>

</style>
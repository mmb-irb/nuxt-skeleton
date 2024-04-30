<template>
  <v-container>

    <h1>{{ document.title }}</h1>

    <Breadcrumbs :props="{section: 'Documents', title: document.title}" />

    <v-row> 
      <v-col cols="12">
        <v-card rounded="sm" class="elevation-2 pa-4 h-100" >

          <template v-slot:title>
            <v-icon size="small" icon="mdi-text-box-search"></v-icon> &nbsp;OVERVIEW
          </template>

          <template v-slot:text>

            <DocumentInfo :id="document.id" />

            <v-btn v-for="(item, index) in document.files" :key="`${index}`" @click="openDialog(item.id, item.file)" class="mr-2">{{ item.file }}</v-btn>

          </template>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

  <Dialog v-model="dialog" ref="dialogRef">
    <template #viewer>
      <Viewer :id="fileId" />
    </template>
  </Dialog>

</template>

<script setup>

  const config = useRuntimeConfig()
  const { id } = useRoute().params

  const dialog = ref(false)

  const documentInfo = await useFetch(`${config.public.apiBase}/documents/${id}`)
  if(documentInfo.status.value === 'error')  throw createError({ statusCode: documentInfo.error.value.statusCode, message: documentInfo.error.value.statusMessage, fatal: true })
  
  let document = ref(documentInfo.data.value)

  const fileId = ref(null)
  const dialogRef = ref(null)
  const openDialog = (id, fn) => {
    dialogRef.value.updateTitle(fn)
    fileId.value = id
    dialog.value = true
  }

  useHead({
    title: document.value.title
  })

</script>

<style scoped>

</style>
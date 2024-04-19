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

            <p>{{ document.longDescription }}</p>

            <v-btn @click="openDialog">Open Dialog</v-btn>

          </template>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

  <Dialog v-model="dialog" ref="dialogRef">
    <template #viewer>
      <DocumentInfo :id="document._id" />
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

  const dialogRef = ref(null)
  const openDialog = () => {
    dialogRef.value.updateTitle(document.value.title)
    dialog.value = true
  }

</script>

<style scoped>

</style>
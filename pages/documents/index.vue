<template>
  <v-container>

    <h1>Documents</h1>

    <Breadcrumbs :props="{section:'Documents'}" />

    <v-row> 
      <v-col cols="12" >
        <v-card rounded="sm" class="elevation-2 pa-4" >

          <template v-slot:title>
            <v-icon size="small" icon="mdi-clipboard-text-search"></v-icon> DOCUMENTS
          </template>

          <template v-slot:text>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minima officia placeat velit. At facere iusto veniam, optio exercitationem aspernatur incidunt, esse maiores saepe officia culpa dolores nesciunt itaque iure.</p>
          
            <DocumentItem v-for="(item, index) in documents" :key="`${Math.random()}`" :item="item" />

          </template>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>

  const config = useRuntimeConfig()

  const documentsList = await useFetch(`${config.public.apiBase}/documents`)
  if(documentsList.status.value === 'error')  throw createError({ statusCode: documentsList.error.value.statusCode, message: documentsList.error.value.statusMessage, fatal: true })
  
  let documents = ref(documentsList.data.value)

  useHead({
    title: 'Documents' 
  })

</script>

<style scoped>

</style>
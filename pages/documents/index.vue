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
          
            <div v-if="documents.length === 0" class="text-center mt-5">
              <v-icon size="100" color="grey" icon="mdi-file-search"></v-icon>
              <p class="grey--text">No documents found</p>
            </div>

            <div v-else>

              <DocumentItem v-for="(item, index) in documents" :key="`${Math.random()}`" :item="item" />

              <v-row justify="space-between" class="pt-5" > 
                <v-col lg="2" md="2" sm="4" xs="12">
                  <v-select
                    v-model="rows"
                    label="Rows per page"
                    :items="rowsPerPage"
                    @update:modelValue="paginate"
                  ></v-select>
                </v-col>
                <v-col lg="10" md="10" sm="8" xs="12">
                  <v-pagination
                    v-model="page"
                    :length="totalPages"
                    :total-visible="totalVisible"
                    @update:modelValue="paginate"
                  ></v-pagination>
                </v-col>
              </v-row>

            </div>

          </template>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>

  const config = useRuntimeConfig()

  const rows = ref(10)
  const page = ref(1)

  const documentsList = await useFetch(`${config.public.apiBase}/documents/?limit=${rows.value}&page=${page.value}`)
  if(documentsList.status.value === 'error')  throw createError({ statusCode: documentsList.error.value.statusCode, message: documentsList.error.value.statusMessage, fatal: true })

  let documents = ref(documentsList.data.value.documents)
  let totalPages = ref(Math.ceil(documentsList.data.value.total/rows.value))

  useHead({
    title: 'Documents' 
  })

  /* PAGINATION */
  const rowsPerPage = [ 5, 10, 25, 50 ]
  const totalVisible = ref(9)
  const calculateTotalVisible = () => {
    if(window.innerWidth > 960) totalVisible.value = 9
    else if(window.innerWidth <= 960 && window.innerWidth > 780) totalVisible.value = 6
    else if(window.innerWidth <= 780 && window.innerWidth > 600) totalVisible.value = 4
    else totalVisible.value = 3
  }
  calculateTotalVisible()
  window.addEventListener('resize', () => calculateTotalVisible())

  const paginate = async () => {

    let docsList = await useFetch(`${config.public.apiBase}/documents/?limit=${rows.value}&page=${page.value}`)

    documents.value = docsList.data.value.documents
    totalPages.value = Math.ceil(docsList.data.value.total/rows.value)
    if(docsList.data.value.documents.length === 0) {
      page.value = 1
      paginate()
    }
  }

</script>

<style scoped>

</style>
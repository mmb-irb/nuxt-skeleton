<template>
  <div class="document-item">

    <div class="document-content">

      <p class="mt-4">{{ document.longDescription }}</p>

      <p class="mt-4" v-for="(item, index) in document.authors" :key="`${Math.random()}`" :item="item">
        <v-icon size="small" icon="mdi-account"></v-icon> &nbsp;{{ item.name }}
        <v-icon size="small" icon="mdi-mail"></v-icon> &nbsp;<a :href="'mailto:' + item.email">{{ item.email }}</a>
      </p>

      <p class="date">Document creation: {{ new Date(document.created).toLocaleDateString() }}</p>

    </div>
  </div>
</template>

<script setup>

  const config = useRuntimeConfig()
  const { id } = useRoute().params

  const documentInfo = await useFetch(`${config.public.apiBase}/documents/${id}`)
  if(documentInfo.status.value === 'error')  throw createError({ statusCode: documentInfo.error.value.statusCode, message: documentInfo.error.value.statusMessage, fatal: true })
  
  let document = ref(documentInfo.data.value)

</script>

<style scoped>
  .date { font-size: 0.8rem; color: var(--palette-2);}
</style>

<template>
  <div class="project-item">

    <div class="project-content">

      <p class="mt-4">{{ project.longDescription }}</p>

      <p class="mt-4" v-for="(item, index) in project.authors" :key="`${Math.random()}`" :item="item">
        <v-icon size="small" icon="mdi-account"></v-icon> &nbsp;{{ item.name }}
        <v-icon size="small" icon="mdi-mail"></v-icon> &nbsp;<a :href="'mailto:' + item.email">{{ item.email }}</a>
      </p>

      <p class="date">Project creation: {{ new Date(project.created).toLocaleDateString() }}</p>

    </div>
  </div>
</template>

<script setup>

  const config = useRuntimeConfig()
  const { id } = useRoute().params

  const projectInfo = await useFetch(`${config.public.apiBase}/projects/${id}`)
  if(projectInfo.status.value === 'error')  throw createError({ statusCode: projectInfo.error.value.statusCode, message: projectInfo.error.value.statusMessage, fatal: true })
  
  let project = ref(projectInfo.data.value)

</script>

<style scoped>
  .date { font-size: 0.8rem; color: var(--palette-2);}
</style>

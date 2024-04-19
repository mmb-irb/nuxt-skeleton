<template>
  <div class="document-item">

    <div class="document-content">
      <h3 ><NuxtLink :to="`/documents/${item._id}`">{{ item.title }}</NuxtLink></h3>

      <v-row class="mt-2">
        <v-col cols="9" md="6">
          <p class="mt-2">{{ item.description }}</p>
        </v-col>
        <v-col cols="3" md="6">
          <p class="mt-2">{{ new Date(item.created).toLocaleDateString() }}</p>
        </v-col>
      </v-row>

    </div>
  </div>
</template>

<script setup>

  const { item } = defineProps(['item']);

</script>

<style scoped>
  .document-item { display: flex; flex-direction: row; justify-content: space-between; align-items: center; padding: 1rem 0 0; border-bottom: 1px solid var(--palette-1); }
  .document-content { display: flex; flex-direction: column; justify-content: center; align-items: stretch; width: 100%; }
  
</style>

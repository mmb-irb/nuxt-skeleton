<template>
  <div class="document-item">

    <div class="document-content">
      <h3><NuxtLink :to="`/documents/${item.id}`">{{ item.title }}</NuxtLink></h3>

      <v-row class="mt-2">
        <v-col lg="8" md="8" sm="6" cols="12" v-bind:class="{ 'pb-0': display.smAndDown }">
          <p class="mt-2">{{ item.description }}</p>
        </v-col>
        <v-col lg="2" md="2" sm="6" cols="12" v-bind:class="{ 'pb-0': display.smAndDown }">
          <p class="mt-2">total files: {{ item.files }}</p>
        </v-col>
        <v-col lg="2" md="2" sm="12" cols="12" v-bind:class="{ 'pt-0': display.smAndDown }">
          <p class="mt-2">{{ new Date(item.created).toLocaleDateString() }}</p>
        </v-col>
      </v-row>

    </div>
  </div>
</template>

<script setup>
  import { useDisplay } from 'vuetify'

  const { item } = defineProps(['item']);

  const display = ref(useDisplay())

</script>

<style scoped>
  .document-item { display: flex; flex-direction: row; justify-content: space-between; align-items: center; padding: 1rem 0 0; border-bottom: 1px solid var(--palette-1); }
  .document-content { display: flex; flex-direction: column; justify-content: center; align-items: stretch; width: 100%; }
  
</style>

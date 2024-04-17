<template>
  <v-container>

    <h1>About {{ $globals.shortName }}</h1>

    <v-row> 
      <v-col cols="12" >
        <v-card rounded="sm" class="elevation-2 pa-4" >

          <template v-slot:title>
            <v-icon size="small" icon="mdi-information-slab-circle"></v-icon> ABOUT THIS WEBSITE
          </template>

          <template v-slot:text>

            <p><strong>{{ $globals.shortName }}</strong>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae doloremque dignissimos, recusandae quidem cupiditate fugiat omnis beatae rerum. Dolorum exercitationem magnam rem consectetur distinctio quibusdam doloremque, ea rerum perferendis libero, animi obcaecati accusamus temporibus vel autem modi cum, tempore est facere nesciunt! Maxime, corporis. Hic sit, aspernatur libero fuga neque, distinctio ipsa voluptatum minus deserunt ipsum eligendi. Natus quo quae commodi nostrum vitae eaque quas quasi magni porro, ipsam quam mollitia obcaecati fuga deserunt! Porro saepe repellat, nihil aspernatur possimus dolor asperiores magnam consequatur voluptatum nobis alias dolore, nesciunt veniam. Sit maiores soluta aliquid quaerat ea iusto odit at molestiae veritatis quis a ratione id corporis eveniet vitae odio sunt, voluptatibus esse, cum natus autem quo! Quis, odio aliquid! Omnis quam reprehenderit enim. Cum, eveniet? Similique reprehenderit ipsum tempore unde aspernatur sed illo repellat minima itaque iusto rem in nisi quaerat earum consequatur suscipit, asperiores esse cumque necessitatibus dolorem totam odit ipsam expedita. Impedit perferendis neque, officia nesciunt hic praesentium veritatis fuga, animi aspernatur dolor tempore consequuntur aliquid eveniet est obcaecati blanditiis velit deserunt libero odio repellat? Repudiandae, sapiente earum. Autem, voluptas. Expedita mollitia cupiditate officia numquam pariatur. Ex est facere labore doloribus optio assumenda aliquam architecto pariatur, quae quis?</p>

          </template>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

</template>
  
<script setup>

  const { $globals } = useNuxtApp()

  useHead({
    title: 'About' 
  })

</script>


<style scoped>
  h1 { margin-bottom: 1rem; }
</style>
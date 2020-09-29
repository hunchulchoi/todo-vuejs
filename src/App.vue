<template>
  <div id="app">
    <header>
      <h1>choi Todo List</h1>
    </header>
    <AppHeader></AppHeader>
    <ItemInput></ItemInput>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppHeader from "@/components/header.vue";
import ItemInput from "@/components/item-input.vue";
//import Item from '@/components/item.vue'
// import ItemList from "@/views/item-list.vue";

@Component({
  components: {
    AppHeader,
    ItemInput
    //Item,
    //ItemList,
  }
})
export default class App extends Vue {}
</script>
<style>
#app {
  padding: 100px;
}
</style>

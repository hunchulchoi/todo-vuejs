<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item><b-link to='/'>All</b-link></b-breadcrumb-item>
      <b-breadcrumb-item><b-link to='/active'>Active</b-link></b-breadcrumb-item>
      <b-breadcrumb-item><b-link to='/clear'>Clear</b-link></b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";

@Component
export default class Header extends Vue{

}
</script>

<style scoped>

</style>

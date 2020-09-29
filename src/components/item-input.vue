<template>
  <div>
    <b-form-group
        id="input-group-1"
        label="새로운 할일:"
        label-for="input-todo"
        description="새로운 할일을 입력하고 엔터를 누르세요"
    >
      <b-form-input
          id="input-1"
          type="text"
          required
          placeholder="할일을 입력하세요"
      ></b-form-input>
    </b-form-group>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class ItemInput extends Vue{

}

</script>

<style scoped>

</style>

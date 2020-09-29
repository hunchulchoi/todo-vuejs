<template>
  <b-input-group class="mb-2">
    <b-input-group-prepend is-text>
      <input
        type="checkbox"
        aria-label="Checkbox for following text input"
        :checked="item.status === 'clear'"
        @change="changeStatus"
      />
    </b-input-group-prepend>
    <b-form-input
      type="text"
      aria-label="Text input with checkbox"
      :value="item.title"
    ></b-form-input>
    <b-input-group-append>
      <b-button
        v-b-tooltip.hover
        title="삭제됩니다."
        variant="danger"
        size="sm"
      >
        <b-icon icon="trash-fill"></b-icon>
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Item } from "@/store/item.interface";

@Component
export default class Item1 extends Vue {
  @Prop() item!: Item;

  changeStatus(event: Event) {
    console.log(`changeStatus(${event.target.checked})`);

    const status: "clear" | "active" = event.target.checked
      ? "clear"
      : "active";

    this.$store.commit("changeStatus", { id: this.item.id, status: status });
  }
}
</script>

<style scoped></style>

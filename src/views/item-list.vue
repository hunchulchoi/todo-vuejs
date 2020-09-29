<template>
  <div>
    <item v-for="item in itemList" :key="item.id" :item="item"></item>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import item from "@/components/item.vue";
import { mapGetters } from "vuex";
import { Item } from "@/store/item.interface";

@Component({
  components: {
    item
  },
  computed: {
    ...mapGetters(["allItemList", "activeItemList", "clearItemList"])
  }
})
export default class ItemList extends Vue {
  itemList: Item[] = [];

  created() {
    this.getItemList(this.$route.params.status);
  }

  getItemList(status) {
    console.log(`getItemList(${status})`);

    if (!status) this.itemList = this.allItemList;
    else if (status === "active") this.itemList = this.activeItemList;
    else if (status === "clear") this.itemList = this.clearItemList;
  }

  @Watch("$route.params.status")
  route(to: string, from: string) {
    console.log(`route: ${from} --> ${to}`);

    this.getItemList(to);
  }

  @Watch("$store.state.itemList", { deep: true })
  watchItemList() {
    console.log("watchItemList()");
    this.getItemList(this.$route.params.status);
  }
}
</script>

<style scoped></style>

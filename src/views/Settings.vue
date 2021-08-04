<template>
  <div
    class="md:px-20 my-10 p-4"
    v-loading="loading"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="flex justify-between items-center">
      <div class="text-3xl md:text-4xl text-green-500 font-bold mr-10">
        Green House Monitoring
      </div>
      <router-link to="/greenhouse">
        <i class="md:text-4xl text-blue-800 fa fa-2x fa-home"></i>
      </router-link>
    </div>

    <Forms :data="ControlValues" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Forms from "../components/Forms.vue";
export default {
  components: { Forms },

  created() {
    this.getData();
  },
  computed: {
    ...mapState(["ControlValues", "loading"]),
  },
  methods: {
    getData() {
      this.$store.dispatch("SETCONTROLVALUES");
    },
  },
};
</script>

<style lang="scss" scoped></style>

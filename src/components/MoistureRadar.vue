<template>
  <div class="w-full">
    <el-progress
      v-for="(data, idx) in currentData"
      type="line"
      :key="idx"
      :width="300"
      :percentage="data"
      :color="customColors"
      class="mb-5 w-72"
    ></el-progress>
  </div>
</template>
<script>
export default {
  data() {
    return {
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },
  props: ["currentData"],
  methods: {},
};
</script>

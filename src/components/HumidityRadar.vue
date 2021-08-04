<template>
  <div>
    <el-progress
      type="dashboard"
      :percentage="currentData"
      :color="colors"
      :width="200"
      :format="handleFormat"

    ></el-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   percentage: 50,
      colors: [
        { color: "#f56c6c", percentage: 0 },
        { color: "#e6a23c", percentage: 33 },
        { color: "#5cb87a", percentage: 66 },
        { color: "#1989fa", percentage: 100 },
      ],
    };
  },
  props: ["currentData"],
  methods: {
    handleFormat(currentData) {
        return   ` ${currentData}gm-3` ;
    },
  },
};
</script>

<template>
  <div>
    <el-progress
      type="dashboard"
      :percentage="currentData"
      :color="colors"
      :width="200"
    ></el-progress>

    <div class="my-6 flex justify-between">
      <div><i :class="`${icon}  text-3xl`"></i></div>
      <div>
        <span><button class="w-auto p-2 bg-green-500 text-bold rounded-tl-md rounded-bl-md text-white">ON</button></span>
        <span><button class="w-auto p-2 bg-red-500 text-bold rounded-tr-md rounded-br-md text-white">OFF</button></span
        >
      </div>
    </div>
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
  props: ["currentData", "icon"],
  methods: {},
};
</script>

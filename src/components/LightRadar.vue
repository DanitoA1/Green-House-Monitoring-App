<template>
  <div>
    <el-progress
      type="dashboard"
      :percentage="currentData"
      :color="colors"
      :width="200"
    ></el-progress>

    <div class="my-6 flex justify-between">
      <div>
        <i
          :class="
            `${(icon)} ${Bulb ? 'text-yellow-400 ' : 'text-gray-700'}  text-3xl`
          "
        ></i>
      </div>
      <div>
        <span
          ><button
            class="w-auto p-2 bg-green-500 text-bold rounded-tl-md rounded-bl-md text-white"
            :disabled="Bulb"
            @click=" () => {handleOverride(`bulb`)}"
          >
            ON
          </button></span
        >
        <span
          ><button
            :disabled="!Bulb"
            @click="handleOverride(`bulb`)"
            class="w-auto p-2 bg-red-500 text-bold rounded-tr-md rounded-br-md text-white"
          >
            OFF
          </button></span
        >

        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        { color: "#f56c6c", percentage: 0 },
        { color: "#e6a23c", percentage: 33 },
        { color: "#5cb87a", percentage: 66 },
        { color: "#1989fa", percentage: 100 },
      ],
    };
  },
  props: ["currentData", "icon", "Bulb", "handleOverride"],
  methods: {},
  
};
</script>
<style  scoped>
button:disabled{
  background: #333;
  cursor: not-allowed;
}
</style>
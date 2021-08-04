<template>
  <div>
    <el-progress
      type="dashboard"
      :percentage="currentData"
      :color="colors"
      :width="200"
      :format="handleFormat"
    ></el-progress>

    <div class="my-6 flex justify-between">
      <div>
        <i
          :class="
            `${icon} ${
              Fan ? 'rotate-fan text-green-700' : 'text-gray-700'
            }  text-3xl`
          "
        ></i>
      </div>
      <dive>
        <span
          ><button
            class="w-auto p-2 bg-green-500 text-bold rounded-tl-md rounded-bl-md text-white"
            :disabled="Fan"
            @click="
              () => {
                handleOverride(`fan`);
              }
            "
          >
            ON
          </button></span
        >
        <span
          ><button
            :disabled="!Fan"
            @click="
              () => {
                handleOverride(`fan`);
              }
            "
            class="w-auto p-2 bg-red-500 text-bold rounded-tr-md rounded-br-md text-white"
          >
            OFF
          </button></span
        >
      </dive>
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

  created() {
    console.log("Fan :", this.Fan);
  },
  props: ["currentData", "icon", "Fan", "handleOverride"],
  methods: {
    handleFormat(currentData) {
      return `${currentData} C`;
    },
  },
};
</script>
<style scoped>
button:disabled{
  background: #333;
  cursor: not-allowed;
}
.rotate-fan {
  animation: rotate 0.5s infinite;
  animation-delay: 0.5s;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>

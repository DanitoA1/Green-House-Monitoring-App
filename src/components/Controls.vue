<template>
  <div>
    <div class="h-20  rounded-t-3xl w-full flex flex-row justify-between">
      <div
        class="h-full space-y-2 bg-gray-100 w-1/4 border-r-2 hover:text-green-500 cursor-pointer  flex-col flex justify-center items-center"
        v-for="control in controlButton"
        :key="control.name"
        @click="control.handler(control.name)"
      >
        <i
          :class="
            `${control.icon} text-2xl ${activeTab == control.name &&
              'text-green-500'}`
          "
        ></i>
        <p :class="`text-xs font-bold ${activeTab == control.name && 'text-green-500'} `">
          {{ control.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["controlButton", "activeTab"],
};
</script>

<style lang="scss" scoped></style>

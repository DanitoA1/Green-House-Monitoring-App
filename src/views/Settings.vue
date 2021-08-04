<template>
  <div class="md:px-20 my-10 p-4">
    <div class="flex justify-between items-center">
      <div class="text-3xl md:text-4xl text-green-500 font-bold mr-10">
        Green House Monitoring
      </div>
      <router-link to="/greenhouse">
        <i class="md:text-4xl text-blue-800 fa fa-2x fa-home"></i>
      </router-link>
    </div>

    <Forms />
    
  </div>
</template>

<script>
import Forms from '../components/Forms.vue';
export default {
  components: { Forms },};
</script>

<style lang="scss" scoped></style>

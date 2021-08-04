<template>
  <div class="static">
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-auto shadow-lg md:w-1/4  border-gray-200 bg-gray-100 rounded-lg p-6"
    >
      <div
        class="text-xl text-center md:text-4xl text-green-500 font-bold mb-10"
      >
        Green House Monitoring
      </div>
      <form @submit.prevent>
        <div class="space-y-6">
          <input
            type="email"
            v-model="email"
            required
            placeholder="Email"
            class="rounded-md border-2 border-green-500 p-3 w-full outline-none"
          />
          <input
            type="password"
            v-model="password"
            required
            placeholder="Password"
            class="rounded-md border-2 border-green-500 p-3 w-full outline-none"
          />
          <button
            @click="logIn"
            class="bg-green-500 flex justify-center items-center hover:bg-green-700 transition-all  text-center p-2 text-white w-full rounded-lg "
          >
            <span v-if="loading"
              ><div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </span>
            <span v-else>
              Log In
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    async logIn() {
      this.loading = !this.loading;

      const loginData = {
        email: this.email,
        password: this.password,
      };
      await this.$store.dispatch("LOGIN", loginData);
      this.loading = !this.loading;
    },
  },
};
</script>

<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  margin: 5px auto;
  border: 5px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (max-width:600px){
    body{
        background-image: url('../assets/GreenHouseIImage.png');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: red;
    }
} 
</style>

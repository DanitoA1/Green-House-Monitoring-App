<template>
  <div
    class="fixed p-4 md:px-20 h-full w-full"
    v-loading="loading"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="mt-8 mb-2 flex justify-between items-center">
      <div class="text-3xl md:text-4xl text-green-500 font-bold mr-10">
        Green House Monitoring
      </div>
      <router-link to="/settings">
        <el-tooltip
          class="item"
          effect="dark"
          content="Settings"
          placement="bottom"
        >
          <i class="md:text-4xl text-blue-800 fal fa-2x fa-cog"></i>
        </el-tooltip>
      </router-link>
    </div>
    <div
      class="flex justify-between items-center text-blue-500 text-bold text-lg"
    >
      <div>
        <p>{{ currentUser }}</p>
      </div>
      <div>
        <div v-on:click="logOut">
          <el-tooltip
            class="item"
            effect="dark"
            content="Logout"
            placement="bottom"
          >
            <i
              class="md:text-4xl cursor-pointer text-blue-800 fas fa-2x fa-sign-out"
            ></i>
          </el-tooltip>
        </div>
      </div>
    </div>
    <div
      class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
    >
      <div v-if="activeTab === 'Light'">
        <div v-if="loading">
          <LightRadar :currentData="0" :icon="'text-4xl  fas fa-lightbulb'" />
        </div>
        <div v-else>
          <LightRadar
            :currentData="parseFloat((AllSensors[2] * 0.09765625).toFixed(1))"
            :icon="'text-4xl fas fa-lightbulb'"
            :Bulb="Bulb"
            :handleOverride="handleOverride"
          />
        </div>
      </div>
      <div v-else-if="activeTab === 'Humidity'">
        <HumidityRadar
          :currentData="parseFloat((AllSensors[12] * 0.09765625).toFixed(1))"
        />
      </div>
      <div v-else-if="activeTab === 'Moisture Level'">
        <MoistureRadar
          :currentData1="parseInt(AllSensors[4])"
          :currentData2="parseInt(AllSensors[6])"
          :currentData3="parseInt(AllSensors[8])"
        />
      </div>
      <div v-else>
        <TemperatureRadar
          :currentData="parseFloat((AllSensors[10] * 1).toFixed(1))"
          :icon="'fas fa-fan text-4xl'"
          :Fan="Fan"
          :handleOverride="handleOverride"
        />
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0">
      <Controls :controlButton="controlButton" :activeTab="activeTab" />
    </div>
  </div>
</template>

<script>
import LightRadar from "@/components/LightRadar";
import HumidityRadar from "@/components/HumidityRadar";
import MoistureRadar from "@/components/MoistureRadar";
import TemperatureRadar from "@/components/TemperatureRadar";
import Controls from "@/components/Controls";
import { auth } from "../firebase";
import { mapState } from "vuex";

export default {
  components: {
    LightRadar,
    HumidityRadar,
    MoistureRadar,
    TemperatureRadar,
    Controls,
  },
  data() {
    return {
      Fan: 0,
      Bulb: 0,
      currentUser: null,
      radarData: {
        lightCent: 40,
        humidityCent: 67,
        temperatureCent: 20,
        channelMoistureData: [40, 60, 80],
      },
      currentData: 40,
      activeTab: "Light",
      controlButton: [
        { name: "Light", icon: "fal fa-sun", handler: this.handleSwitchTab },
        {
          name: "Humidity",
          icon: "fal fa-cloud-showers",
          handler: this.handleSwitchTab,
        },
        {
          name: "Moisture Level",
          icon: "fal fa-tint",
          handler: this.handleSwitchTab,
        },
        {
          name: "Temperature",
          icon: "fal fa-thermometer-full",
          handler: this.handleSwitchTab,
        },
      ],
    };
  },
  async created() {
    this.currentUser = auth.currentUser.email;
    await this.getData();
   
  },
  mounted() {},
  computed: {
    ...mapState(["AllSensors", "loading"]),
  },

  methods: {
    getData() {
      this.$store.dispatch("SETALLVALUES");
    },

    //Function To override Fan and Bulb
    handleOverride(key) {
      
      if (key === "fan") {
        this.Fan = !this.Fan;
        
        console.log("Fan :", this.Fan);
      } else {
        this.Bulb = !this.Bulb;
        console.log("Bulb :", this.Bulb);
      }
      let data = {
        Bulb : this.Bulb,
        Fan : this.Fan
      }
      let newData = JSON.stringify(data).replace("{", " ").replace("}", " ");
      return this.$store.dispatch("ACTIONOVERTAKER", newData)
    },

    logOut() {
      this.$store.dispatch("LOGOUT");
    },

    handleSwitchTab(control) {
      this.controlButton.filter((key) => {
        if (key.name === control) {
          this.activeTab = key.name;
          switch (key.name) {
            case "Light":
              this.currentData = this.radarData.lightCent;

              break;
            case "Humidity":
              this.currentData = this.radarData.humidityCent;

              break;
            case "Moisture Level":
              this.currentData = this.radarData.channelMoistureData;

              break;
            case "Temperature":
              this.currentData = this.radarData.temperatureCent;

              break;

            default:
              break;
          }
        }
      });
    },
  },
};
</script>
<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
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
@media (max-width: 600px) {
  body {
    background-image: url(../assets/GreenHouseIImage.png);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: red;
  }
}
</style>

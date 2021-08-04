<template>
  <div class="fixed p-4 md:px-20 h-full w-full">
    <div class="my-8 flex justify-between items-center">
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
        <p>Logged in as</p>
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
        <LightRadar
          :currentData="currentData"
          :icon="'text-4xl text-gray-700 fas fa-lightbulb'"
        />
      </div>
      <div v-else-if="activeTab === 'Humidity'">
        <HumidityRadar :currentData="currentData" />
      </div>
      <div v-else-if="activeTab === 'Moisture Level'">
        <MoistureRadar :currentData="currentData" />
      </div>
      <div v-else>
        <TemperatureRadar
          :currentData="currentData"
          :icon="'fas fa-fan text-4xl text-gray-700'"
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
import { mapState } from 'vuex'

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
      currentUser: null,
      tempDialogue: false,
      lightDialogue: false,
      moistureDialogue: false,
      radarData: {
        lightCent: 40,
        humidityCent: 67,
        temperatureCent: 20,
        channelMoistureData: [40, 60, 80],
      },
      currentData: 40,
      activeTab: "Light",
      controlButton: [
        { name: "Light", icon: "fal fa-sun", handler: this.handleLight },
        {
          name: "Humidity",
          icon: "fal fa-cloud-showers",
          handler: this.handleLight,
        },
        {
          name: "Moisture Level",
          icon: "fal fa-tint",
          handler: this.handleLight,
        },
        {
          name: "Temperature",
          icon: "fal fa-thermometer-full",
          handler: this.handleLight,
        },
      ],
    };
  },
  created() {
    this.currentUser = auth.currentUser.email;
    // console.log(this.AllSensors);
  },
  mounted() {
    this.$store.dispatch("SETALLVALUES");

  },
  computed :{
      ...mapState['AllSensors']
  },

  methods: {
    logOut() {
      this.$store.dispatch("LOGOUT");
    },
    showLightModal() {
      this.lightDialogue = true;
    },
    showTempModal() {
      this.tempDialogue = true;
    },
    showMoistureModal() {
      this.moistureDialogue = true;
    },
    handleLight(control) {
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

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>

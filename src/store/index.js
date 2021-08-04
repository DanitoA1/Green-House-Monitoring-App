import { createStore } from "vuex";
import * as fb from "../firebase";
import router from "../router/index";
import firebase from "firebase/app";
import "firebase/database";

export default createStore({
  state: {
    ControlValues: null,
    AllSensors: null,
    loading: true,
  },
  mutations: {
    setControlValues(state, val) {
      state.ControlValues = val;
    },
    setAllSensor(state, val) {
      state.AllSensors = val;
    },
    setLoading(state, val) {
      state.loading = val;
    },
  },
  actions: {
    SETCONTROLVALUES({ commit }) {
      try {
        const starCountRef = firebase.database().ref("ControlValues/settings");
        starCountRef.on("value", (snapshot) => {
          const data = snapshot.val();
          commit("setControlValues", data.split(","));
          commit("setLoading", false);
        });
      } catch (error) {
        console.log(error);
      }
    },
    // Fecth All Current Data
    SETALLVALUES({ commit }) {
      try {
        const starCountRef = firebase.database().ref("Greenhouse");
        starCountRef.on("value", async (snapshot) => {
          const data = await snapshot.val();
          commit("setLoading", false);
          commit("setAllSensor", data.allSensors.split(","));
        });
      } catch (error) {
        console.log(error);
      }
    },
    // Override the initial Settings
    OVERRIDESETTINGS({}, data) {
      try {
        const starCountRef = firebase.database().ref("ControlValues/settings");
        starCountRef.set(data, (error) => {
          if (error) {
            console.log('Override failed...');
          } else {
            console.log("Override successfully!");
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
   //TAKEN TOTAL CONTROL
    ACTIONOVERTAKER({}, data) {
      try {
        const starCountRef = firebase.database().ref("ActionOverRider");
        starCountRef.set(data, (error) => {
          if (error) {
            console.log('Override failed...');
          } else {
            console.log("Override successfully!");
          }
        });
      } catch (error) {
        console.log(error);
      }
    },

    async LOGIN({}, form) {
      try {
        const { user } = await fb.auth.signInWithEmailAndPassword(
          form.email,
          form.password
        );
        alert("Welcome " + user.email);
        router.push("/greenhouse");
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      }
    },
    async LOGOUT() {
      await fb.auth.signOut();
      router.push("/");
      alert("User Signed Out");
    },
  },
  modules: {},
});

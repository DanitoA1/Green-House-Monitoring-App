import { createStore } from "vuex";
import * as fb from "../firebase";
import router from "../router/index";
import firebase from "firebase/app";
import "firebase/database";


export default createStore({
  state: {
    ControlValues: "",
    AllSensors: "",
  },
  mutations: {
    setControlValues(state, val) {
      state.ControlValues = val;
    },
    setAllSensor(state, val) {
      state.AllSensors = val;
    },
  },
  actions: {
    async SETCONTROLVALUES({ commit }) {
      try {
        var starCountRef = firebase.database().ref("ControlValues/settings");
        starCountRef.on("value", (snapshot) => {
          const data = snapshot.val();
          commit("setControlValues", data);
        });
      } catch (error) {
        console.log(error);
      }
    },
    async SETALLVALUES({ commit }) {
      try {
        var starCountRef = firebase.database().ref("Greenhouse");
        starCountRef.on("value", (snapshot) => {
          const data = snapshot.val();
          commit("setAllSensor", data);
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

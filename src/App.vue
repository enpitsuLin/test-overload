<script lang="ts">
import { defineComponent } from "vue";
import Overload1 from "./components/Overload1";
import Overload2 from "./components/Overload2";
export default defineComponent({
  components: { Overload1, Overload2 },
  setup() {
    console.log(Overload1, Overload2);
  }
});
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Overload1 msg="overload 1" />
  <Overload2 msg="overload 2" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

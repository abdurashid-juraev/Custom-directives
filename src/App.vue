<template>
  <div class="wrap">
    <compHeader></compHeader>
    <div class="container">
      <div>
        {{ userName }}
      </div>
      <div v-user-lastname="userLastName"></div>
      <div v-awesome.red.big="textToRender"></div>
      <div v-awesome.blue.small="textToRender"></div>
    </div>
    <compFooter></compFooter>
  </div>
</template>

<script>
import compHeader from "./components/header_footer/header";
import compFooter from "./components/header_footer/footer";
export default {
  data() {
    return {
      userName: "Alex",
      textToRender: "text as value",
      userLastName: "Jones",
    };
  },
  mounted() {
    setTimeout(() => {
      this.userName = "Jhon";
    }, 2000);
  },
  directives: {
    "user-Lastname": {
      bind(el, binding, vnode) {
        el.innerHTML = binding.value;
        console.log(vnode);
      },
    },
  },

  components: {
    compHeader,
    compFooter,
  },
};
</script>

<style>
.container {
  max-width: 1000px;
  margin: 0 auto;
  height: 80vh;
}
*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
}
</style>

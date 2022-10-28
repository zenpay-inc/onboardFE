<template>
  <v-app>
    <v-content>
      <router-view id="content" />
    </v-content>
  </v-app>
</template>
<script>

export default {
  components: {
  },
  mounted() {
    this.$root.$dialogLoader = this.$refs.dialogLoader;
  },
  data() {
    return {
      appTitle: "Awesome App",
      sidebar: false,
    };
  },
  methods: {
    home() {
      this.$router.replace({ name: "Home" });
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  // height: 100vh;
}
#content {
  width: calc(100% - 32px);
  // height: 100%;
  margin-left: 10px;
}
#no-background {
  background-color: transparent !important;
}
</style>

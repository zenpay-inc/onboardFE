<template>
    <p class="title mt-5">Your organization</p>
    <!-- <div class="ml-4">
      <v-text-field
        v-model="title"
        :rules="rules"
        counter="125"
        hint="Enter your legal business name:"
        label="Enter your legal business name:"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="[rules.required, rules.email]"
        hint="Enter your e-mail:"
        label="Enter your e-mail:"
      ></v-text-field>
    </div>
    <v-subheader
      >This email will be used to administer organization and cannot be Changed
      late
    </v-subheader> -->
    <!-- <v-btn
      class="yellow--text mt-16"
      color="green"
      style="margin-left: auto; margin-right: 35px"
      @click="saveDemo()"
    >
      Save and Continue ->
    </v-btn> -->
</template>

<script>
export default {
  name: "Step2",
  props: [],
  data() {
    return {
      title: "",
      email: "",
      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.left-panel {
  background-color: #7c9bca;
}
.right-pannel {
  background-color: rgb(0, 0, 0, 0.1);
  text-align: center;
}
.layout-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-board {
  overflow: hidden;
  height: 100vh;
}
</style>

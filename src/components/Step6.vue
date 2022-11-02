<template>
  <div class="mx-16" style="width: 600px">
    <p class="title mt-5">Primary business contact detail</p>

    <div class="ml-4">
      <v-text-field
        v-model="title"
        :rules="rules"
        counter="125"
        hint="Primary business contact name:"
        label="First, middle, last name"
      ></v-text-field>
      <v-text-field
        v-model="title"
        :rules="rules"
        counter="125"
        hint="Rolw within the business:"
        label="Owner, contact etc, enum"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="[rules.required, rules.email]"
        hint="Primary contact email address:"
        label="Email id:"
      ></v-text-field>
      <v-text-field
        v-model="title1"
        :rules="rules"
        counter="125"
        hint="Primary contact phone number:"
        label="Phone with country code picker and number"
        type="number"
      ></v-text-field>
    </div>
    <!-- <v-btn
      class="yellow--text mt-16"
      color="green"
      style="margin-left: auto; margin-right: 35px"
      @click="saveDemo()"
    >
      Save and continue ->
    </v-btn> -->
  </div>
</template>

<script>
export default {
  name: "Step3",
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

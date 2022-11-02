<template>
  <div class="mx-16" style="width: 600px">
    <p class="title mt-5">Identification information</p>

    <div class="ml-4">
      <v-text-field
        v-model="title"
        :rules="rules"
        counter="125"
        hint="Primary business contact ID:"
        label="Passport of state issued driver's license"
      ></v-text-field>
      <v-text-field
        v-model="title"
        :rules="rules"
        counter="125"
        hint="Secondary business contact ID:"
        label="Passport of state issued driver's license"
      ></v-text-field>
      <v-text-field
        v-model="title"
        :rules="rules"
        counter="125"
        hint="Certificate of incorporation:"
        label="doc"
      ></v-text-field>
      <v-text-field
        v-model="title"
        :rules="rules"
        counter="125"
        hint="Corporate bank account details:"
        label="image of canceled check or bank statement"
      ></v-text-field>
      <v-text-field
        v-model="title"
        :rules="rules"
        counter="125"
        hint="Merchant logo"
        label="Upload image of logo"
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

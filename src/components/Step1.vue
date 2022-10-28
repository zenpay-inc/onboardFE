<template>
  <div class="page-btn-list">
      <v-row class="main-board">
        <v-col class="col-lg-3 col-sm-12 col-xs-12 left-panel layout-center">
            <div class="mx-10">
              <p class="logotxt mt-5">
                ZenPay
              </p>
              <p class="subject mt-10">
                Merchant Payment Systems
              </p>
              <p class="label">
                Simplify your payment system
              </p>
              <p class="label -mt-2">
                Subscribe to your business software
              </p>
            </div>
        </v-col>

        <v-col class="d-flex flex-column col-lg-9 col-sm-12 col-xs-12 right-pannel layout-center">
            <div>
              <p class="subject">
                Welcome to Zenpay Inc. Onboarding Portal
              </p>
              <p class="label">
                You are one step away from simplifying your payment system and your business software and tools.
              </p>
              <p class="label">
                By continuing, you're agreeing to  our
                Customer Terms of Service, Privacy Policy, and Cookie Policy
              </p>
              <v-btn
              class="yellow--text mt-16"
              color="green"
              style="margin-left: auto; margin-right:35px"
              @click="saveDemo()"
            >
              Begin Onboarding ->
            </v-btn>
            </div>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: "Step1",
  props: [],
  methods: {

  },
};
</script>


<style lang="scss" scoped>
.left-panel{
  background-color: #7c9bca;
}
.right-pannel{
  background-color: rgb(0,0,0,0.1);
  text-align: center;
}
.layout-center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-board {
  overflow: hidden;
  height: 100vh;
}
</style>

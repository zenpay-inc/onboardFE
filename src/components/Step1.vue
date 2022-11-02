<template>
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

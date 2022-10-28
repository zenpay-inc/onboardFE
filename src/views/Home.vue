<template>
  <v-container class="" v-cloak fluid>

    <v-col class="page-container">
      <Step1/>
      <Step2/>
      <Step3/>
      <Step4/>
      <Step5/>
    </v-col>
  </v-container>
</template>

<script>
import Step1 from "../components/Step1.vue";
import Step2 from "../components/Step2.vue";
import Step3 from "../components/Step3.vue";
import Step4 from "../components/Step4.vue";
import Step5 from "../components/Step5.vue";


export default {
  name: "Home",
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,

  },
  computed: {
  },
  data() {
    return {
      title: '',
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
    };
  },
  methods: {
   

  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  max-height: 100%;
}
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
.dnd-board {
  border: 1px solid darkgray;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
}
.main-board {
  overflow: hidden;
  height: 100vh;
}
.field-board {
  cursor: pointer;
  background-color: #ffffff !important;
  margin-top: 20px;
}
.upload-board {
  cursor: pointer;
  background-color: #ffffff !important;
}
.v-window__container,
.v-window-item {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.page-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 34vh;
  background-position: center;
  background-size: cover;
}
.home-bg {
  background-color: #7c9bca;
}
.page-container {
 // max-width: 1502px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;

  .title-font {
    font-weight: 600;
    font-size: 45px;
    line-height: 58px;
    color: #ffffff;
    margin-top: 20px;
    padding: 0 16px;
  }

  .desc-font {
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
    padding: 0 16px;
  }

  .page-btn-list {
    height: 100vh;
    .q-btn {
      background-size: 110% 150%;
      background-position: center;
    }
  }
  .v-icon {
    color: #0056f5 !important;
  }
  .theme--light.v-expansion-panels .v-expansion-panel:not(:first-child)::after {
    border-color: rgb(221, 237, 250) !important;
  }
  .v-virtual-scroll__item {
    background: rgb(249, 248, 252);
  }
  .subject {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 36px;
    padding-top: 45px;
  }
  .label {
    font-style: normal;
    font-size: 17px;
    line-height: 36px;
  }
  .logotxt{
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    padding-top: 45px;
    color: yellow;
    text-align: right;
  }
  .title{
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    padding-top: 45px;
  }
  .file-drop-zone {
    width: 100%;
    .file-decorate {
      width: 100%;
      border: 1px dashed #0056f5;
      border-radius: 5px;
      display: inline-flex;
      align-items: center;
      .drop-zone-desc {
        font-weight: 400;
        font-size: 18px;
      }
      .drop-desc {
        font-size: 14px;
      }
    }
  }
  .ctl_background {
    background-color: rgb(249, 248, 252) !important;
  }
  .theme--light.v-tabs > .v-tabs-bar {
    background-color: rgb(249, 248, 252) !important;
  }
  .v-tabs-items {
    padding: 20px;
  }
  .custom-placeholer-color input::placeholder {
    color: #096af5 !important;
    opacity: 1;
  }

  .custom-label-color .v-label {
    color: #096af5;
    opacity: 1;
  }

  .custom-placeholer-color input,
  .custom-label-color input {
    color: #096af5 !important;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1280px) {
  .page-container {
    .title-font {
      font-weight: 600;
      font-size: 30px;
      line-height: 58px;
      color: #ffffff;
      margin-top: 20px;
      padding: 0 16px;
    }
    .page-btn-list {
      margin-top: 250px;
    }
  }
}

@media only screen and (min-width: 425px) and (max-width: 768px) {
  .page-container {
    .title-font {
      font-weight: 600;
      font-size: 24px;
      line-height: 58px;
      color: #ffffff;
      margin-top: 20px;
      padding: 0 16px;
    }
  }
}
@media only screen and (max-width: 425px) {
  .page-container {
    .title-font {
      font-weight: 600;
      font-size: 26px;
      line-height: 58px;
      color: #ffffff;
      margin-top: 20px;
      padding: 0 16px;
    }

    .desc-font {
      font-size: 19px;
      line-height: 19px;
      color: #ffffff;
      padding: 0 16px;
    }
    .page-btn-list {
      margin-top: 460px;
    }
    .file-drop-zone {
      width: 100%;
      .file-decorate {
        width: 100%;
        border: 1px dashed #0056f5;
        border-radius: 5px;
        display: inline-block;
        align-items: center;
        .drop-zone-desc {
          font-weight: 400;
          font-size: 18px;
        }
        .drop-desc {
          font-size: 14px;
        }
        .sm_center {
          text-align: center;
          margin-bottom: 5px;
        }
      }
    }
  }
  .page-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 62vh;
    background-position: center;
    background-size: cover;
  }
  .sm_save_btn {
    line-height: 12;
  }
}
</style>

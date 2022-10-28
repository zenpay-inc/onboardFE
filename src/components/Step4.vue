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
              <div class="mx-16" style="width:600px">
                <p class="title mt-5">
                  Additional Organization Detail
                </p>

                 <div class="ml-4">
                    <v-text-field
                      v-model="title"
                      :rules="rules"
                      counter="125"
                      hint="Enter your business type:"
                      label="Sole proprietorship, partnership, LLP, LLC, S/C corporation"
                    ></v-text-field>
                    <v-text-field
                      v-model="title"
                      :rules="rules"
                      counter="125"
                      hint="Enter your Country of incorporation:"
                      label="Pull down list"
                    ></v-text-field>
                    <v-text-field
                      v-model="title"
                      :rules="rules"
                      counter="125"
                      hint="Enter your State of Incorporation:"
                      label="Pull down list"
                    ></v-text-field>
                </div>
                <v-btn
                class="yellow--text mt-16"
                color="green"
                style="margin-left: auto; margin-right:35px"
                @click="saveDemo()"
              >
                Save and continue ->
              </v-btn>
              </div>
          </v-col>
        </v-row>
      </div>
</template>

<script>
export default {
  name: "Step3",
  props: [],
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
    }
  },
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

<template>
  <v-container class="" v-cloak fluid>
    <v-col class="page-container">
      <div class="page-btn-list">
        <v-row class="main-board">
          <v-col class="col-lg-3 col-sm-12 col-xs-12 left-panel layout-center">
            <div class="mx-10">
              <p class="logotxt mt-5">ZenPay</p>
              <p class="subject mt-10">Merchant Payment Systems</p>
              <p class="label">Simplify your payment system</p>
              <p class="label -mt-2">Subscribe to your business software</p>
            </div>
          </v-col>

          <v-col
            class="d-flex flex-column col-lg-9 col-sm-12 col-xs-12 right-pannel layout-center"
          >
            <div class="mx-16" style="width: 600px">
              <Step1 v-if="this.step === 1" />

              <div v-if="this.step === 2">
                <Step2 />
                <div class="ml-4">
                  <v-text-field
                    v-model="businessName"
                    :rules="rules"
                    counter="125"
                    hint="Enter your legal business name:"
                    label="Enter your legal business name:"
                  ></v-text-field>

                  <v-text-field
                    v-model="businessEmail"
                    :rules="[rules.required, rules.email]"
                    hint="Enter your e-mail:"
                    label="Enter your e-mail:"
                  ></v-text-field>
                </div>
                <v-subheader
                  >This email will be used to administer organization and cannot
                  be Changed late
                </v-subheader>
              </div>
              <div v-if="this.step === 3">
                <div class="mx-16" style="width: 600px">
                  <p class="title mt-5" style="color: green">
                    {{ this.notification }}
                  </p>

                  <p class="title mt-5">Let's verify your email</p>
                  <div class="ml-4">
                    <v-text-field
                      v-model="email"
                      :rules="[rules.required, rules.email]"
                      hint="Registration email:"
                      label="Registration email:"
                    ></v-text-field>
                  </div>
                  <v-subheader
                    ><p>
                      We have sent an email to the above email address.
                    </p></v-subheader
                  >
                  <!-- <v-subheader
                  ><p>
                    Please check your mailbox, copy 6-digit number and paste it
                    into the Token field below.
                  </p>
                </v-subheader> -->
                  <div class="ml-4">
                    <!-- <v-text-field
                    v-model="title"
                    :rules="rules"
                    counter="125"
                    hint="Token:"
                    label="Token:"
                  ></v-text-field> -->
                    <v-text-field
                      v-model="password"
                      :rules="[rules.required, rules.min]"
                      :type="'password'"
                      name="input-10-1"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                    ></v-text-field>
                  </div>
                </div>
              </div>
              <div v-if="this.step === 4">
                <Step4 />
                <div class="ml-4">
                  <v-text-field
                    v-model="businessType"
                    :rules="rules"
                    counter="125"
                    hint="Enter your business type:"
                    label="Sole proprietorship, partnership, LLP, LLC, S/C corporation"
                  ></v-text-field>
                  <v-text-field
                    v-model="incorporationCountry"
                    :rules="rules"
                    counter="125"
                    hint="Enter your Country of incorporation:"
                    label="Pull down list"
                  ></v-text-field>
                  <v-text-field
                    v-model="incorporationState"
                    :rules="rules"
                    counter="125"
                    hint="Enter your State of Incorporation:"
                    label="Pull down list"
                  ></v-text-field>
                </div>
              </div>
              <div v-if="this.step === 5">
                <Step5 />

                <div class="ml-4">
                  <v-text-field
                    value="When was the business registered:"
                    label=""
                    disabled
                  ></v-text-field>
                  <v-date-picker v-model="businessRegistryDate"></v-date-picker>

                  <v-text-field
                    v-model="businessEinTaxId"
                    :rules="rules"
                    counter="125"
                    hint="Enter your EIN/Tax ID Number:"
                    label="Enter your EIN/Tax ID Number:"
                  ></v-text-field>
                  <v-text-field
                    v-model="dunsNumber"
                    :rules="rules"
                    counter="125"
                    hint="Enter your 9-digit DUNS Number if Applicable:"
                    label="Enter your 9-digit DUNS Number if Applicable:"
                    type="number"
                  ></v-text-field>
                </div>
              </div>
              <div v-if="this.step === 6">
                <Step6 />
                <div class="ml-4">
                  <v-text-field
                    v-model="primaryName"
                    :rules="rules"
                    counter="125"
                    hint="Primary business contact name:"
                    label="First, middle, last name"
                  ></v-text-field>
                  <v-text-field
                    v-model="primaryRole"
                    :rules="rules"
                    counter="125"
                    hint="Rolw within the business:"
                    label="Owner, contact etc, enum"
                  ></v-text-field>
                  <v-text-field
                    v-model="primaryEmail"
                    :rules="[rules.required, rules.email]"
                    hint="Primary contact email address:"
                    label="Email id:"
                  ></v-text-field>
                  <v-text-field
                    v-model="primaryPhone"
                    :rules="rules"
                    counter="125"
                    hint="Primary contact phone number:"
                    label="Phone with country code picker and number"
                    type="number"
                  ></v-text-field>
                </div>
              </div>
              <div v-if="this.step === 7">
                <Step7 />
                <div class="ml-4">
                  <v-text-field
                    v-model="secondName"
                    :rules="rules"
                    counter="125"
                    hint="Primary business contact name:"
                    label="First, middle, last name"
                  ></v-text-field>
                  <v-text-field
                    v-model="secondRole"
                    :rules="rules"
                    counter="125"
                    hint="Rolw within the business:"
                    label="Owner, contact etc, enum"
                  ></v-text-field>
                  <v-text-field
                    v-model="secondEmail"
                    :rules="[rules.required, rules.email]"
                    hint="Primary contact email address:"
                    label="Email id:"
                  ></v-text-field>
                  <v-text-field
                    v-model="secondPhone"
                    :rules="rules"
                    counter="125"
                    hint="Primary contact phone number:"
                    label="Phone with country code picker and number"
                    type="number"
                  ></v-text-field>
                </div>
              </div>
              <div v-if="this.step === 8">
                <Step8 />
                <div class="ml-4">
                  <v-text-field
                    v-model="primaryContactId"
                    :rules="rules"
                    counter="125"
                    hint="Primary business contact ID:"
                    label="Passport of state issued driver's license"
                  ></v-text-field>
                  <v-text-field
                    v-model="secondContactId"
                    :rules="rules"
                    counter="125"
                    hint="Secondary business contact ID:"
                    label="Passport of state issued driver's license"
                  ></v-text-field>

                  <v-file-input
                    v-model="certificateDocUrl"
                    show-size
                    counter
                    multiple
                    label="Certificate of incorporation:"
                    hint="doc"
                  ></v-file-input>
                  <v-file-input
                    v-model="bankCanceledCheckUrl"
                    show-size
                    counter
                    multiple
                    hint="Corporate bank account details:"
                    label="image of canceled check or bank statement"
                  ></v-file-input>
                  <v-file-input
                    v-model="merchantLogoUrl"
                    show-size
                    counter
                    multiple
                    hint="Merchant logo"
                    label="Upload image of logo"
                  ></v-file-input>
                </div>
              </div>
            </div>
            <div>
              <v-btn
                class="yellow--text mt-16"
                color="green"
                style="margin-left: auto; margin-right: 35px"
                @click="btnEvent()"
              >
                <span v-if="this.step === 1"> Begin Onboarding -> </span>
                <span v-if="this.step === 2"> Save and Continue -> </span>
                <span v-if="this.step === 3"> Verify and continue -> </span>
                <span v-if="this.step === 4"> Save and continue -> </span>
                <span v-if="this.step === 5"> Save and Continue -> </span>
                <span v-if="this.step === 6"> Save and Continue -> </span>
                <span v-if="this.step === 7"> Save and Continue -> </span>
                <span v-if="this.step === 8"> Save and Continue -> </span>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-container>
</template>

<script>
import Step1 from "../components/Step1.vue";
import Step2 from "../components/Step2.vue";
import Step4 from "../components/Step4.vue";
import Step5 from "../components/Step5.vue";
import Step6 from "../components/Step6.vue";
import Step7 from "../components/Step7.vue";
import Step8 from "../components/Step8.vue";
import { db } from "../firebaseDb";
import firebase from "firebase";

export default {
  name: "Home",
  components: {
    Step1,
    Step2,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
  },
  computed: {},
  data() {
    return {
      title: "",
      email: "",
      businessName: "",
      businessEmail: "",
      password: "",
      businessType: "",
      incorporationCountry: "",
      incorporationState: "",
      businessRegistryDate: "",
      businessEinTaxId: "",
      dunsNumber: "",
      primaryName: "",
      primaryRole: "",
      primaryEmail: "",
      primaryPhone: "",
      secondName: "",
      secondRole: "",
      secondEmail: "",
      secondPhone: "",
      primaryContactId:"",
      secondContactId:"",
      certificateDocUrl: "",
      bankCanceledCheckUrl: "",
      merchantLogoUrl: "",

      notification: "",
      step: 1,
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
  mounted() {
    console.log("step--", this.$route.query.step);
    if (this.$route.query.step > 3) this.step = 4;
  },
  methods: {
    btnEvent: function () {
      console.log("businessName---", localStorage.getItem("businessName"));
      console.log("businessEmail---", localStorage.getItem("businessEmail"));
      console.log("businessType---", this.businessType);
      console.log("incorporationCountry---", this.incorporationCountry);
      console.log("incorporationState---", this.incorporationState);
      console.log("businessRegistryDate---", this.businessRegistryDate);
      console.log("businessEinTaxId---", this.businessEinTaxId);
      console.log("dunsNumber---", this.dunsNumber);
      console.log("primaryName---", this.primaryName);
      console.log("primaryRole---", this.primaryRole);
      console.log("primaryEmail---", this.primaryEmail);
      console.log("primaryPhone---", this.primaryPhone);
      console.log("secondName---", this.secondName);
      console.log("secondRole---", this.secondRole);
      console.log("secondEmail---", this.secondEmail);
      console.log("secondPhone---", this.secondPhone);
      if (this.certificateDocUrl)
        console.log("certificateDocUrl---", this.certificateDocUrl[0].name);
      // console.log("bankCanceledCheckUrl---", this.bankCanceledCheckUrl.File.name);
      // console.log("merchantLogoUrl---", this.merchantLogoUrl.File.name);
      //this.emailVerification();

      if (this.step === 1) this.step = 2;
      else if (this.step === 2) {
        localStorage.setItem("businessName", this.businessName);
        this.step = 3;
      } else if (this.step === 3) {
        localStorage.setItem("businessEmail", this.businessEmail);

        this.emailVerification();
      } else if (this.step === 4) this.step = 5;
      else if (this.step === 5) this.step = 6;
      else if (this.step === 6) this.step = 7;
      else if (this.step === 7) this.step = 8;
      else if (this.step === 8) this.onboardDB();
    },
    emailVerification: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password) //createUserWithEmailAndPassword
        .then(() => {
          const user = firebase.auth().currentUser;
          this.notification =
            "Verification Email Sent. Please Check Your Email";
          const actionCodeSettings = {
            // url: `${process.env.VUE_APP_HOST_NAME}/sign-in/?email=${user.email}`,
            url: `http://localhost:8080/?step=4`,
          };
          user.sendEmailVerification(actionCodeSettings);
        })
        .catch((error) => {
          this.notification = "Auth Error";

          this.error = error.message;
        });
    },
    onboardDB: function () {
      let today = new Date().toLocaleDateString();
      console.log("today", today);
      db.collection("merchants")
        .add({
          merchantId: "",
          onboardDate: today,
          legalBusinessName: this.businessName,
          dba: { present: true, dba: "" },
          incorporation: { country: "", federal: "", state: "" },
          businessEmail: this.businessEmail,
          businessPhone: { countryCode: "", number: "" },
          businessAddress: {
            addrLine1: "",
            addrLine2: "",
            city: "",
            zip: "",
            county: "",
            state: "",
            country: "",
          },
          businessWebsite: "",
          businessRegistryDate: this.businessRegistryDate,
          businessType: "", //given
          businessEinTaxId: this.businessEinTaxId,
          duns: { verified: true, dunsNumber: this.dunsNumber },
          businessWallets: {
            numWallets: 3,
            wallets: [
              { walletId: "", walletName: "" },
              { walletId: "", walletName: "" },
              { walletId: "", walletName: "" },
            ],
          },
          primaryContact: {
            present: true,
            name: { firstName: this.primaryName, middleName: "", lastName: "" },
            role: this.primaryRole,
            email: this.primaryEmail,
            mobileNum: { countryCode: "+1", number: this.primaryPhone },
            empStatus: "owner",
          }, //given
          secondaryContact: {
            present: true,
            name: { firstName: this.secondName, middleName: "", lastName: "" },
            role: this.secondRole,
            email: this.secondEmail,
            mobileNum: { countryCode: "+1", number: this.secondPhone },
            empStatus: "owner",
          }, //given
          primaryContactId: {
            present: true,
            idType: this.primaryContactId,//"Passport",
            idDocUrl: "",
          }, //given
          secondaryContactId: {
            present: true,
            idType: this.secondContactId,//"nationalID",
            idDocUrl: "",
          }, //given
          businessCertificate: {
            present: true,
            type: "Cert of Incorporation",
            docUrl: this.certificateDocUrl[0].name,
          }, //given
          merchantLogo: {
            present: true,
            logoUrl: this.merchantLogoUrl[0].name,
          },
          corpBankDetails: {
            present: true,
            bankName: "",
            routingNum: "",
            accountNum: "",
            canceledCheckUrl: this.bankCanceledCheckUrl[0].name,
          },
        })
        .then(() => {
          alert("User successfully created!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  max-height: 100%;
}
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
  .logotxt {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    padding-top: 45px;
    color: yellow;
    text-align: right;
  }
  .title {
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

<template>
<div class="d-flex justify-center">
    <v-btn
    color="blue-grey"
      prepend-icon="mdi-arrow-left-bold"
      class="ma-5"
      width="200"
      to="/welcome"
    >
      回到主控台
    </v-btn>

    <v-btn
    color="green-darken-1"
      prepend-icon="mdi-content-save-cog"
      class="ma-5"
      width="200"
    >
      儲存變更
    </v-btn>
  </div>


  <v-card 
  max-width="600"
  class="mx-auto ma-5">
    <v-card-title class="bg-green-accent-3">
      設定
    </v-card-title>
    <p class="text-h5 font-weight-bold">
      是否開放使用者註冊
    </p>
    <v-radio-group
      v-model="isRegister"
      column
    >
      <v-radio
        label="是"
        value="true"
      ></v-radio>
      <v-radio
        label="否"
        value="false"
      ></v-radio>
    </v-radio-group>
    <p class="text-h5 font-weight-bold">
      是否開放使用者變更個人資料
    </p>
    <v-radio-group
      v-model="isChangeInfo"
      column
    >
      <v-radio
        label="是"
        value="true"
      ></v-radio>
      <v-radio
        label="否"
        value="false"
      ></v-radio>
    </v-radio-group>
  </v-card>
</template>


<script setup>
const { ref }=require("@vue/reactivity");

const isRegister = ref(null)
const isChangeInfo = ref(null)
</script>
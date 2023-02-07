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
    <v-btn
      color="red-darken-3"
      prepend-icon="mdi-delete-empty"
      class="ma-5"
      width="200"
    >
      刪除此帳號
    </v-btn>
  </div>
  <v-card
    max-width="600"
    class="mx-auto ma-5"
  >
  <v-card-title class="bg-green-accent-3">
    個人資料
  </v-card-title>
  <v-form
  ref="form"
  v-model="form"
  class="pa-4 pt-6"
  >
    <p class="text-h5 font-weight-bold">姓名</p>
    <v-text-field
      v-model="name"
      variant="filled"
      color="success"
      label="姓名"
      style="min-height: 96px"
    ></v-text-field>
    <p class="text-h5 font-weight-bold">E-mail</p>
    <v-text-field
      v-model="email"
      variant="filled"
      color="success"
      label="e-mail"
      style="min-height: 96px"
    ></v-text-field>

    <p class="text-h5 font-weight-bold">簡介</p>
    <Introduction/>
  </v-form>

  </v-card>
</template>

<script setup>
import Introduction from '@/components/persnoalInfoView/IntroductionComponent.vue'
import { ref } from '@vue/reactivity'
const form = ref(false)
const name = ref(undefined)
const email = ref(undefined)
</script>

<template>
  <v-app>
    <v-container class="fill-height">
      <v-row class="justify-center">
        <v-col cols="12" md="5">
          <v-card>
            <v-card-text>
              <h1 class="text-center text-blue-darken-1">登入頁面</h1>
            </v-card-text>
            <v-card-text>
              <v-text-field label="請輸入姓名"></v-text-field>
              <v-text-field label="請輸入密碼" type="password"></v-text-field>
            </v-card-text>
            <v-card-action class="d-flex justify-center">
              <v-btn variant="outlined" color="blue-darken-3" @click="login">登入</v-btn>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { useRouter } from 'vue-router'
  export default {
    name : 'LoginComponent',
    setup() {
      const router = useRouter();
      const login = () => {
        router.push('/welcome')
      }
      return {
        login,
      }
    },
  }

</script>
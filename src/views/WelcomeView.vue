<template>
  <!-- 使用者 -->
  <v-card
    class="mx-auto bg-cyan-accent-4 text-white mt-5"
    max-width="344"
    variant="outlined"
  >
    <v-card-item >
      <div>
        <div class="text-overline mb-1">
          使用人數
        </div>
        <div class="text-h6 mb-1 d-flex justify-center ">
          <v-icon size="100px">
            mdi-account-group
          </v-icon>
          <p class="text-h1">50</p>
        </div>
      </div>
    </v-card-item>

    <v-card-actions class="d-flex justify-center">
      <v-btn variant="outlined" to="/systemmanage/user">
        前往
      </v-btn>
      <v-btn variant="outlined" @click="isOpen = true">
        新增使用者
      </v-btn>
    </v-card-actions>
  </v-card>

  <!-- 新增使用者欄位 -->
    <div :class="['bgc',{'openBgc' : isOpen}]" @click.self="isOpen = false">
      <v-sheet width="300" class="mx-auto rounded-xl" >
        <v-form fast-fail @submit.prevent>
          <div class="d-flex">
            <v-text-field
              v-model="addUser.firstName"
              label="姓"
              :rules="addUser.firstNameRules"
              class="ma-3"
            ></v-text-field>

            <v-text-field
              v-model="addUser.lastName"
              label="名"
              :rules="addUser.lastNameRules"
              class="ma-3"
            ></v-text-field>
          </div>

          <v-text-field
            v-model="addUser.mail"
            label="e-mail"
            :rules="addUser.mailRules"
          ></v-text-field>
          <v-text-field
            v-model="addUser.birth"
            label="生日"
            :rules="addUser.birthRules"
          ></v-text-field>
          <v-text-field
            v-model="addUser.country"
            label="國家"
            :rules="addUser.countryRules"
          ></v-text-field>
          <v-text-field
            v-model="addUser.cell"
            label="電話"
            :rules="addUser.cellRules"
          ></v-text-field>
          <v-text-field
            v-model="addUser.password"
            label="密碼"
            :rules="addUser.passwordRules"
          ></v-text-field>
          <v-btn type="submit" block class="mt-2">Submit</v-btn>
        </v-form>
      </v-sheet>
    
    
    </div>
</template>
<script setup>
const { ref, reactive }=require("@vue/reactivity");

const isOpen = ref(false)


// 新增使用者驗證
const addUser = reactive({
  firstName : '',
  firstNameRules : [
    (value) => {
      if (value?.length > 0 && value?.length < 3) return true
      return '請輸入姓氏'
    }
  ],
  lastName : '',
  lastNameRules : [
    value => {
      if (value?.length > 0) return true
      return '請輸入名字'
    },
  ],
  mail : '',
  mailRules : [
    (value) => {
      if (value?.length > 0 ) return true
      return '請輸入email'
    }
  ],
  birth : '',
  birthRules : [
    (value) => {
      if (value?.length > 0 ) return true
      return '請輸入生日'
    }
  ],
  country : '',
  countryRules : [
    (value) => {
      if (value?.length > 0 ) return true
      return '請輸入國家'
    }
  ],
  cell : '',
  cellRules : [
    (value) => {
      if (value?.length > 0 ) return true
      return '請輸入電話'
    }
  ],
  password : '',
  passwordRules : [
    (value) => {
      if (value?.length > 0 ) return true
      return '請輸入密碼'
    }
  ],

})


</script>

<style lang="scss" scoped>
.bgc{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    visibility: hidden;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.4);
    opacity: 0;
    transition: 500ms;
  &.openBgc{
    opacity: 1;
    visibility: visible;
  }
}

</style>
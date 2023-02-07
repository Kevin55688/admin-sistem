<template>
<nav>
  <!-- 側邊NAV -->
  <v-navigation-drawer  v-model="drawer" >
    <v-card-text class="text-center">
      <p class=" font-weight-black text-h5">後台管理系統</p>
    </v-card-text>
    <v-list>
      <v-list-group prepend-icon="mdi-cog" value="系統管理" >
        <template v-slot:activator="{ props }">
          <v-list-item title="系統管理" v-bind="props">
          </v-list-item>
        </template>

          <v-list-item
            key="用戶管理"
            title="用戶管理"
            value="用戶管理"
            to="/systemmanage/user"
            >
          </v-list-item>
          <v-list-item
            key="各類表單"
            title="各類表單"
            value="各類表單"
            to="/systemmanage/chart">
          </v-list-item>
      </v-list-group>
    </v-list>


  </v-navigation-drawer>
  <!-- 頂部NAV -->
  <v-app-bar  class=" bg-blue-darken-1">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-toolbar-title class="d-flex justify-center">
      <a class="font-weight-black title" href="#/welcome">
        後台管理系統
      </a>
    </v-toolbar-title>
    <div>
      <v-menu>
        <template v-slot:activator="{props}">
          <v-btn variant="outlined" class="ma-2" v-bind="props">
            <v-icon>
              mdi-account
            </v-icon>
            觀迎回來，KW
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item,index) in items" :key="index" :value="index" active-color="blue-darken-1" :to="item.to">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
<!-- 退出 -->
      <v-btn variant="outlined" class="ma-2"  to="/">
          <v-icon>
            mdi-exit-to-app
          </v-icon>
          退出
        </v-btn>
    </div>
  </v-app-bar>
</nav>
</template>

<script>
import { ref } from '@vue/reactivity'
  export default {
    name : 'NavComponent',
    setup () {
      const items = ref([
        {title: '個人資料', to:'/personal/info'},
        {title: '設定' , to:'/personal/config'},
      ])
      const drawer = ref(false)
      return {
        items,
        drawer,
      }
    }
  }

</script>

<style lang="scss" scoped>

.title{
  text-decoration: none;
  &:visited{
    color: white;
  }
}
</style>
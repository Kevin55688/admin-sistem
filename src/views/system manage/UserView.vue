<template>
  <v-table class="ma-16">
    <thead class=" bg-black ">
      <tr>
        <th class="text-left text-white font-weight-bold">
          姓名
        </th>
        <th class="text-left text-white font-weight-bold">
          e-mail
        </th>
        <th class="text-left text-white font-weight-bold">
          生日
        </th>
        <th class="text-left text-white font-weight-bold">
          國家
        </th>
        <th class="text-left text-white font-weight-bold">
          電話
        </th>
        <th class="text-left text-white font-weight-bold">
          密碼
        </th>
      </tr>
    </thead>
    <tbody v-if="isActive">
      <tr v-for="(user,index) in chuckUserList[page]" :key="user.id.value" :class="index % 2 ? 'bg-grey-lighten-3' : 'bg-white'">
        <td>{{ user.name.first }} {{ user.name.last }}</td>
        <td>{{ user.email }}</td>
        <td>{{ new Date(user.dob.date).getFullYear()}}/{{ new Date(user.dob.date).getMonth() + 1}}/{{ new Date(user.dob.date).getDate()}}
        </td>
        <td>{{ user.location.country }}</td>
        <td>{{ user.cell }}</td>
        <td>{{ user.login.password }}</td>
      </tr>
    </tbody>
  </v-table>
    <Pagination :originalUserList="originalUserList" @selectedIndex="pageHandler"/>
</template>
<script>
import Pagination from '@/components/UserView/paginationComponent.vue'
import {getCurrentInstance, onMounted, ref } from '@vue/runtime-core'
  export default {
    components : {
      Pagination
    },
    setup () {
      const {appContext : {config : { globalProperties }}} = getCurrentInstance()
      let originalUserList = ref([])

      let page = ref(0)
      let chuckUserList = ref(null)
      let isActive = ref(false)

      const pageHandler = (val) => {
        page.value = val.childSelectedIndex.value
        chuckUserList.value = val.childChuckUserList.value
        isActive.value = true
        
      }




      onMounted (() => {
        globalProperties.$axios.api.getAllUsers(50).then((res) => originalUserList.value = res.data.results)
      })

      return {
        originalUserList,
        pageHandler,
        page,
        chuckUserList,
        isActive,

      }
    },
  }
</script>

<style lang="scss" scoped>
  .pagination{
    >ul{
      list-style: none;
      >li{
        border: 1px solid rgba(128, 128, 128,.5);

        &.active{
          background-color: rgb(78, 78, 239);
          color: white;
        }
      }
    }
  }



</style>
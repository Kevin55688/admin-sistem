<template>
  <pagination class="pagination d-flex justify-center mt-3">
      <ul class="d-flex justify-center">
        <li class="d-flex justify-center align-center" @click="pretPage">
          <v-icon icon="mdi-chevron-double-left" class="icon"></v-icon>
        </li>
        <li class="pa-2 " v-for="(page,index) in childPagination" :key="page[index]"
            :class="{'active' : index === childSelectedIndex}" @click="childSelectedIndex = index">
          <a>{{ page }}</a>
        </li>
        <li class="d-flex justify-center align-center" @click="nextPage">
          <v-icon icon="mdi-chevron-double-right"></v-icon>
        </li>
      </ul>
    </pagination>
    {{ childSelectedIndex }}
</template>


<script>
import getPagination from '@/components/UserView/use/getPagination'
import { computed, watch, ref} from '@vue/runtime-core'

  export default {
    name : 'PaginationComponent',
    props : ['originalUserList'],
    setup (props,target) {
      // 用一個變數接props值並確保其仍能響應
      const childOriginalUserList = computed (() => {
        return props.originalUserList
      })

      let childChunkSize = ref (null)
      let childSelectedIndex = ref (null)
      let childChuckUserList = ref (null)
      let childPagination = ref (null)


    // 下一頁
    const nextPage = () => {
      if (childSelectedIndex.value === childPagination.value - 1) {
        return 
      } else {
        childSelectedIndex.value ++
      }
    }
    // 上一頁
    const pretPage = () => {
      if (childSelectedIndex.value === 0) {
        return 
      } else {
        childSelectedIndex.value --
      }
    }

    // 父層取得api資料後執行
      watch(childOriginalUserList , () => {
        console.log('test');
        const {chunkSize , selectedIndex, chuckUserList, pagination} = getPagination(childOriginalUserList)
        childChunkSize.value = chunkSize.value
        childSelectedIndex.value = selectedIndex.value
        childChuckUserList.value = chuckUserList.value
        childPagination.value = pagination.value

      })

      // 向父層告知目前的頁數
      watch(childSelectedIndex , () => {
        target.emit('selectedIndex' , {childSelectedIndex, childChuckUserList})
      })

      return {
        childChunkSize, childSelectedIndex , childChuckUserList, childPagination, nextPage, pretPage,childOriginalUserList
      }
    }
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
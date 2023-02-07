import { ref ,computed} from '@vue/runtime-core'





export default function getPagination (originalUserList) {

  let chunkSize =ref(5)
  const selectedIndex = ref(0)
  const chuckUserList = computed (() => {
    const chunks = []
    for (let i = 0 ; i < originalUserList.value.length ; i += chunkSize.value) {
      chunks.push(originalUserList.value.slice(i,i+chunkSize.value))
    }
    return chunks
  })
  const pagination = computed (() => {
    return chuckUserList.value.length
  })
  
  // 下一頁
  const nextPage = () => {
    if (selectedIndex.value === pagination.value - 1) {
      return 
    } else {
      selectedIndex.value ++
    }
  }
  // 上一頁
  const pretPage = () => {
    if (selectedIndex.value === 0) {
      return 
    } else {
      selectedIndex.value --
    }
  }

  return {chunkSize, selectedIndex , chuckUserList, pagination, nextPage, pretPage}
}
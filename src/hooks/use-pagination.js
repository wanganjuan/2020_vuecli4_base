import {reactive} from '@vue/composition-api'
export default function usePagination (options = {}) {
  const kuixingPage = reactive({
    total: 0,
    pageSize: 10,
    pageNo: 1
  })

  const kuixingCurrentChange = () => {
    options.callback && options.callback()
  }
  return {
    ...kuixingPage,
    kuixingCurrentChange
  }
}

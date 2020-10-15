<template>
  <div class="m-common-content">
    <el-table size="larger" :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column label="项目类型">
         <template slot-scope="scope">
          <span>{{(scope.row.projectType && scope.row.projectType.name) || '--'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="行业需求">
         <template slot-scope="scope">
          <span>{{((scope.row.industryCategory && scope.row.industryCategory.cnName) + '/'+(scope.row.industryCategoryItem && scope.row.industryCategoryItem.cnName)) || '--'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="需求描述" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <span>{{scope.row.requirementDesc || '--'}}</span>
        </template>
      </el-table-column>
       <el-table-column label="创建人" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <span>{{scope.row.createdBy || '--'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="240px">
         <template slot-scope="scope">
           <span class="common-text-button" @click="_intoStep(scope.row)">进入项目</span>
           <span class="common-text-button" @click="_modify(scope.row)">编辑</span>
           <span class="common-text-button" @click="_delete(scope.row)">删除</span>
         </template>
      </el-table-column>
    </el-table>
    <el-pagination
      hide-on-single-page
      @current-change="commonPagination.kuixingCurrentChange"
      :current-page.sync="commonPagination.pageNo"
      :page-size="commonPagination.pageSize"
      layout="prev, pager, next, jumper"
      :total="commonPagination.total">
    </el-pagination>
  </div>
</template>

<script>
import {getProjectList} from '@/api/user'
import UsePagination from '@/hooks/use-pagination'
import { reactive, toRefs } from '@vue/composition-api'
export default {
  setup (_, context) {
    const {root: {$message}} = context
    console.log($message)
    const _dataPorxy = reactive({
      tableData: [],
      test: {a: 1}
    })
    const commonPagination = UsePagination({
      callback: () => {
        _initDataList()
      }
    })
    const _initDataList = (option) => {
      const _data = {pageNo: commonPagination.pageNo, pageSize: commonPagination.pageSize, total: commonPagination.total}
      getProjectList(_data).then((res) => {
        if (res.code === 200) {
          _dataPorxy.tableData = res.data.content
          commonPagination.total = res.data.totalElements
        }
      })
    }
    _initDataList()
    // toRefs 对象转成单个实例
    return {
      ...toRefs(_dataPorxy),
      commonPagination
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>

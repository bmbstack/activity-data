<template>
    <div class="table_container">
        <el-row type="flex" align="middle">
            <el-col :span="18"><h2>总体参赛人数</h2></el-col>
            <el-col :span="6"><tab :change="changeHandler"></tab></el-col>
        </el-row>
      	<el-table
      		stripe
            border
      		:data="data"
      		style="width: 100%">
      		<el-table-column
      			property="days"
      			label="日期"></el-table-column>
      		<el-table-column
      			property="num"
      			label="人数"></el-table-column>
      	</el-table>
    </div>
</template>

<script>
    import tab from '../tab/tab';

    export default {
        props: ['data'],
        components: {
            tab
        },
        data() {
            return {
                time: ['日', '周', '月']
            };
        },
        methods: {
            changeHandler(value) {
                alert(22);
            }
        }
    };
</script>

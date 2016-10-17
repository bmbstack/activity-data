<template>
    <div class="table_container">
        <el-row type="flex" align="middle">
            <el-col :span="18"><h2>总体参赛人数</h2></el-col>
            <el-col :span="6"><h2>{{data.totalNum[0].num}}人</h2></el-col>
            <el-col :span="6"><tab :change="changeHandler"></tab></el-col>
        </el-row>
        <!-- 每天总答题人数 -->
        <h2>每天总答题人数</h2>
      	<el-table
      		stripe
            border
      		:data="data.totalDay"
      		style="width: 100%">
      		<el-table-column
      			property="days"
      			label="日期"></el-table-column>
      		<el-table-column
      			property="num"
      			label="人数"></el-table-column>
      	</el-table>
        <!-- 每周总答题人数 -->
        <h2>每周总答题人数</h2>
        <el-table
            stripe
            border
            :data="data.totalWeek"
            style="width: 100%">
            <el-table-column
                property="weeks"
                label="日期"></el-table-column>
            <el-table-column
                property="num"
                label="人数"></el-table-column>
        </el-table>
        <!-- 每月总答题人数 -->
        <h2>每月总答题人数</h2>
        <el-table
            stripe
            border
            :data="data.totalMonth"
            style="width: 100%">
            <el-table-column
                property="months"
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

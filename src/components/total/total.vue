<template>
    <div class="table_container">
        <el-row type="flex" align="middle">
            <el-col :span="18"><h2>总体参赛人数</h2></el-col>
            <!-- <el-col :span="6"><h3>{{data.totalNum[0].num}}人</h3></el-col> -->
        </el-row>
        <el-row type="flex" align="middle">
            <el-col :span="18"><h2>总答题人数</h2></el-col>
            <el-col :span="6"><tab @change="changeHandler"></tab></el-col>
        </el-row>
        <!-- 每天总答题人数 -->
      	<el-table
      		stripe
            border
      		:data="data.totalDay"
            v-show="time === 0"
      		style="width: 100%">
      		<el-table-column
      			property="days"
      			label="日期"></el-table-column>
      		<el-table-column
      			property="num"
      			label="人数"></el-table-column>
      	</el-table>
        <!-- 每周总答题人数 -->
        <el-table
            stripe
            border
            :data="data.totalWeek"
            v-show="time === 1"
            style="width: 100%">
            <el-table-column
                property="weeks"
                label="日期"></el-table-column>
            <el-table-column
                property="num"
                label="人数"></el-table-column>
        </el-table>
        <!-- 每月总答题人数 -->
        <el-table
            stripe
            border
            :data="data.totalMonth"
            v-show="time === 2"
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

    import { getTotalData } from '../../request';

    export default {
        components: {
            tab
        },
        data() {
            return {
                data: {},
                time: 0
            };
        },
        methods: {
            changeHandler(value) {
                this.time = value;
            }
        },
        mounted() {
            getTotalData((response) => {
                let { data } = response;

                this.data = data;
            });
        }
    };
</script>

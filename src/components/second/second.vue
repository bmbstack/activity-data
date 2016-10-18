<template>
	<div class="table_container">
		<el-row type="flex" align="middle">
			<el-col :span="18"><h2>数学真有趣</h2></el-col>
			<el-col :span="6"><tab @change="changeHandler"></tab></el-col>
		</el-row>
		<div v-show="time === 0">
			<!-- 答题人数 -->
		  	<h3>数学真有趣每天答题人数</h3>
		  	<el-table
		  		stripe
		  		border
		  		:data="data.totalDayAnswer"
		  		style="width: 100%">
		  		<el-table-column
		  			property="days"
		  			label="日期"></el-table-column>
		  		<el-table-column
		  			property="num"
		  			label="人数"></el-table-column>
		  	</el-table>
		  	<!-- 首次答题人数 -->
		  	<h3>数学真有趣每天首次答题人数</h3>
		  	<el-table
		  		stripe
		  		border
		  		:data="data.totalDayAnswerFirst"
		  		style="width: 100%">
		  		<el-table-column
		  			property="days"
		  			label="日期"></el-table-column>
		  		<el-table-column
		  			property="num"
		  			label="人数"></el-table-column>
		  	</el-table>
			<!-- 同时参加了口算乐翻天人数 -->
		  	<h3>数学真有趣每天答题同时参加了口算乐翻天人数</h3>
		  	<el-table
		  		stripe
		  		border
		  		:data="data.totalDayAnswerJoinFirst"
		  		style="width: 100%">
		  		<el-table-column
		  			property="days"
		  			label="日期"></el-table-column>
		  		<el-table-column
		  			property="num"
		  			label="人数"></el-table-column>
		  	</el-table>
	  	</div>
	  	<div v-show="time === 1">
			<!-- 答题人数 -->
		  	<h3>数学真有趣每周答题人数</h3>
		  	<el-table
		  		stripe
		  		border
		  		:data="data.totalWeekAnswer"
		  		style="width: 100%">
		  		<el-table-column
		  			property="weeks"
		  			label="日期"></el-table-column>
		  		<el-table-column
		  			property="num"
		  			label="人数"></el-table-column>
		  	</el-table>
		  	<!-- 首次答题人数 -->
		  	<h3>数学真有趣每周首次答题人数</h3>
		  	<el-table
		  		stripe
		  		border
		  		:data="data.totalWeekAnswerFirst"
		  		style="width: 100%">
		  		<el-table-column
		  			property="weeks"
		  			label="日期"></el-table-column>
		  		<el-table-column
		  			property="num"
		  			label="人数"></el-table-column>
		  	</el-table>
			<!-- 同时参加了口算乐翻天人数 -->
		  	<h3>数学真有趣每周答题同时参加了口算乐翻天人数</h3>
		  	<el-table
		  		stripe
		  		border
		  		:data="data.totalWeekAnswerJoinFirst"
		  		style="width: 100%">
		  		<el-table-column
		  			property="weeks"
		  			label="日期"></el-table-column>
		  		<el-table-column
		  			property="num"
		  			label="人数"></el-table-column>
		  	</el-table>
	  	</div>
	  	<div v-show="time === 2">
			<!-- 答题人数 -->
		  	<h3>数学真有趣每月答题人数</h3>
		  	<el-table
		  		stripe
		  		border
		  		:data="data.totalMonthAnswer"
		  		style="width: 100%">
		  		<el-table-column
		  			property="months"
		  			label="日期"></el-table-column>
		  		<el-table-column
		  			property="num"
		  			label="人数"></el-table-column>
		  	</el-table>
		  	<!-- 首次答题人数 -->
		  	<h3>数学真有趣每月首次答题人数</h3>
		  	<el-table
		  		stripe
		  		border
		  		:data="data.totalMonthAnswerFirst"
		  		style="width: 100%">
		  		<el-table-column
		  			property="months"
		  			label="日期"></el-table-column>
		  		<el-table-column
		  			property="num"
		  			label="人数"></el-table-column>
		  	</el-table>
			<!-- 同时参加了口算乐翻天人数 -->
		  	<h3>数学真有趣每月答题同时参加了口算乐翻天人数</h3>
		  	<el-table
		  		stripe
		  		border
		  		:data="data.totalMonthAnswerJoinFirst"
		  		style="width: 100%">
		  		<el-table-column
		  			property="months"
		  			label="日期"></el-table-column>
		  		<el-table-column
		  			property="num"
		  			label="人数"></el-table-column>
		  	</el-table>
	  	</div>
	</div>
</template>

<script>
	import tab from '../tab/tab';

	import { getSecondData } from '../../request';

	export default {
		components: {
			tab
		},
		data() {
			return {
				time: 0,
				data: {}
			};
		},
		methods: {
			changeHandler(value) {
				this.time = value;
			}
		},
		mounted() {
	    	getSecondData((response) => {
	    		let { data } = response;

	    		this.data = data;
	    	});
		}
	};
</script>

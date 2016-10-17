<template>
	<div class="table_container">
		<el-row type="flex" align="middle">
			<el-col :span="18"><h2>口算乐翻天</h2></el-col>
			<el-col :span="6"><tab></tab></el-col>
		</el-row>
		<!-- 答题人数 -->
	  	<h3>口算乐翻天每天答题人数</h3>
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
	  	<h3>口算乐翻天每天首次答题人数</h3>
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
		<!-- 报名人数 -->
	  	<h3>口算乐翻天每天报名人数</h3>
	  	<el-table
	  		stripe
	  		border
	  		:data="data.totalDaySignUp"
	  		style="width: 100%">
	  		<el-table-column
	  			property="days"
	  			label="日期"></el-table-column>
	  		<el-table-column
	  			property="num"
	  			label="人数"></el-table-column>
	  	</el-table>
		<!-- 答题人数 -->
	  	<h3>口算乐翻天每周答题人数</h3>
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
	  	<h3>口算乐翻天每周首次答题人数</h3>
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
		<!-- 报名人数 -->
	  	<h3>口算乐翻天每周报名人数</h3>
	  	<el-table
	  		stripe
	  		border
	  		:data="data.totalWeekSignUp"
	  		style="width: 100%">
	  		<el-table-column
	  			property="weeks"
	  			label="日期"></el-table-column>
	  		<el-table-column
	  			property="num"
	  			label="人数"></el-table-column>
	  	</el-table>
		<!-- 答题人数 -->
	  	<h3>口算乐翻天每月答题人数</h3>
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
	  	<h3>口算乐翻天每月首次答题人数</h3>
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
		<!-- 报名人数 -->
	  	<h3>口算乐翻天每月报名人数</h3>
	  	<el-table
	  		stripe
	  		border
	  		:data="data.totalMonthSignUp"
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
		}
	};
</script>

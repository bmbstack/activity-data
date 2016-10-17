<template>
	<div class="table_container">
		<el-row type="flex" align="middle">
			<el-col :span="18"><h2>科学真好玩</h2></el-col>
			<el-col :span="6"><tab></tab></el-col>
		</el-row>
		<!-- 答题人数 -->
	  	<h3>科学真好玩每天答题人数</h3>
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
	  	<h3>科学真好玩每天首次答题人数</h3>
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
	  	<!-- 首次绑定人数 -->
	  	<h3>科学真好玩每天首次绑定人数</h3>
	  	<el-table
	  		stripe
	  		border
	  		:data="data.totalDayBind"
	  		style="width: 100%">
	  		<el-table-column
	  			property="days"
	  			label="日期"></el-table-column>
	  		<el-table-column
	  			property="num"
	  			label="人数"></el-table-column>
	  	</el-table>
		<!-- 同时参加了口算乐翻天人数 -->
	  	<h3>科学真好玩每天答题同时参加了口算乐翻天人数</h3>
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
		<!-- 同时参加了数学真有趣人数 -->
	  	<h3>科学真好玩每天答题同时参加了数学真有趣人数</h3>
	  	<el-table
	  		stripe
	  		border
	  		:data="data.totalDayAnswerJoinSecond"
	  		style="width: 100%">
	  		<el-table-column
	  			property="days"
	  			label="日期"></el-table-column>
	  		<el-table-column
	  			property="num"
	  			label="人数"></el-table-column>
	  	</el-table>
		<!-- 答题人数 -->
	  	<h3>科学真好玩每周答题人数</h3>
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
	  	<h3>科学真好玩每周首次答题人数</h3>
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
	  	<!-- 首次绑定人数 -->
	  	<h3>科学真好玩每周首次绑定人数</h3>
	  	<el-table
	  		stripe
	  		border
	  		:data="data.totalWeekBind"
	  		style="width: 100%">
	  		<el-table-column
	  			property="weeks"
	  			label="日期"></el-table-column>
	  		<el-table-column
	  			property="num"
	  			label="人数"></el-table-column>
	  	</el-table>
		<!-- 同时参加了口算乐翻天人数 -->
	  	<h3>科学真好玩每周答题同时参加了口算乐翻天人数</h3>
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
		<!-- 同时参加了数学真有趣人数 -->
	  	<h3>科学真好玩每周答题同时参加了数学真有趣人数</h3>
	  	<el-table
	  		stripe
	  		border
	  		:data="data.totalWeekAnswerJoinSecond"
	  		style="width: 100%">
	  		<el-table-column
	  			property="weeks"
	  			label="日期"></el-table-column>
	  		<el-table-column
	  			property="num"
	  			label="人数"></el-table-column>
	  	</el-table>
		<!-- 答题人数 -->
	  	<h3>科学真好玩每月答题人数</h3>
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
	  	<h3>科学真好玩每月首次答题人数</h3>
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
	  	<!-- 首次绑定人数 -->
	  	<h3>科学真好玩每月首次绑定人数</h3>
	  	<el-table
	  		stripe
	  		border
	  		:data="data.totalMonthBind"
	  		style="width: 100%">
	  		<el-table-column
	  			property="months"
	  			label="日期"></el-table-column>
	  		<el-table-column
	  			property="num"
	  			label="人数"></el-table-column>
	  	</el-table>
		<!-- 同时参加了口算乐翻天人数 -->
	  	<h3>科学真好玩每月答题同时参加了口算乐翻天人数</h3>
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
		<!-- 同时参加了数学真有趣人数 -->
	  	<h3>科学真好玩每月答题同时参加了数学真有趣人数</h3>
	  	<el-table
	  		stripe
	  		border
	  		:data="data.totalMonthAnswerJoinSecond"
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

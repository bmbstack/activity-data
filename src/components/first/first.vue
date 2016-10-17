<template>
  <div class="table_container">
  	<h2>口算乐翻天</h2>
  	
  	<h3>答题人数</h3>
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

  	<h3>首次答题人数</h3>
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

  	<h3>报名人数</h3>
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
  </div>
</template>

<script>
	export default {
		props: ['data']
	};
</script>

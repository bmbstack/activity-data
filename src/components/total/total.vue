<template>
  <div class="table_container">
  	<h2>总体参赛人数</h2>
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
    export default {
        props: ['data']
    };
</script>

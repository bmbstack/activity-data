<template>
	<div 
		class="wrapper"
		v-loading="loading"
		:style="{
			height: minHeight + 'px'
		}">
		<div class="container">
			<h1>活动数据详情</h1>
			<total
		    	:data="totalData"></total>
		    <first
		    	:data="firstData"></first>
		    <second
		    	:data="secondData"></second>
		    <third
		    	:data="thirdData"></third>
    	</div>
	</div>
</template>

<script>
	import total from './total/total';
    import first from './first/first';
    import second from './second/second';
    import third from './third/third';

    import { getTotalData, getFirstData, getSecondData, getThirdData } from '../request';

	export default {
	    components: {
	        first,
	        second,
	        third,
	        total
	    },
	    data() {
	    	return {
	    		totalData: [],
	    		firstData: [],
	    		secondData: [],
	    		thirdData: [],
	    		// 控制loading显隐
	    		loading: true,
	    		// 控制wrapper最小高度
	    		minHeight: document.documentElement.clientHeight
	    	};
	    },
	    created() {
	    	// 获取总体数据
	    	getTotalData((response) => {
	    		let { data } = response;

	    		this.totalData = data.totalDay;

	    		this.loading = false;
	    	});

	    	// 获取一期数据
	    	getFirstData((response) => {
	    		let { data } = response;

	    		this.firstData = data;
	    	});
	    	
	    	// 获取二期数据
	    	getSecondData((response) => {
	    		let { data } = response;

	    		this.secondData = data;
	    	});

	    	// 获取三期数据
	    	getThirdData((response) => {
	    		let { data } = response;

	    		this.thirdData = data;
	    	});
	    }
	};
</script>

<style>
	.container {
	  	margin: 0 auto;
	    width: 80%;
	    border: 1px solid #ccc;
	    border-radius: 5px;
	    padding: 10px;
	}
</style>

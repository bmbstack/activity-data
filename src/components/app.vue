<template>
	<div class="wrapper">
		<div class="container">
			<h1>活动数据详情</h1>
			<!-- 筛选器控制路由跳转 -->
			<el-select v-model="hash" @change="changeHandler">
			    <el-option
			      	v-for="item in options"
			      	:label="item.label"
			      	:value="item.value">
			    </el-option>
			</el-select>
			<transition
				name="fade"
				mode="out-in">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
    	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [
					{ value: 'total', label: '总体数据' },
					{ value: 'first', label: '口算乐翻天' },
					{ value: 'second', label: '数学真有趣' },
					{ value: 'third', label: '科学真好玩' },
				],
				// 路由hash
				hash: ''
			};
		},
		methods: {
			changeHandler() {
				let { hash, $router } = this;

				$router.push(hash);
			}
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

	/* 过渡 */
	.fade-enter-active, .fade-leave-active {
		transition: opacity .3s;
	}
	.fade-enter, .fade-leave {
		opacity: 0;
	}
</style>

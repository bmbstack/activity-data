<template>
	<div class="tab">
		<div
			class="tab_button"
			v-for="(n, index) in list"
			@click="changeHandler(n, index)"
			:class="{on: index === i}">{{n.label}}</div>
	</div>
</template>

<script>
	export default {
		props: ['time'],
		data() {
			return {
				list: [
					{ value: 0, label: '日' },
					{ value: 1, label: '周' },
					{ value: 2, label: '月' }
				],
				// 控制button样式
				i: 0
			};
		},
		methods: {
			changeHandler(item, i) {
				this.i = i;
				this.$emit('change', item.value);
			}
		}
	};
</script>

<style>
	.tab {
		overflow: hidden;
	}
	
	.tab_button {
		float: left;
		margin-left: -1px;
		padding: 10px 15px;
		width: 28px;
		line-height: 14px;
		text-align: center;
		cursor: pointer;
		border: 1px solid;
		border-color: #999;
		font-size: 14px;
		color: #999;
	}
	.tab_button:first-child {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		margin-left: 0;
	}
	.tab_button:last-child {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.tab_button.on {
		border-color: #20a0ff;
		color: #20a0ff;
	}
</style>

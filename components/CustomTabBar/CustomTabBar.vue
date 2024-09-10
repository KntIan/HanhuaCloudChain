<template>
	<view class="tab-bar">
		<view
			v-for="(item, index) in tabList"
			:key="index"
			class="tab-bar-item"
			:class="{ active: index === currentIndex }"
			@click="switchTab(index)"
		>
			<image
				:src="
					index === currentIndex
						? item.selectedIconPath
						: item.iconPath
				"
				class="icon"
			/>
			<text
				:style="{
					color: index === currentIndex ? activeColor : inactiveColor,
				}"
				>{{ item.text }}</text
			>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		tabList: {
			type: Array,
			default: () => [],
		},
		currentIndex: {
			type: Number,
			default: 0,
		},
		activeColor: {
			type: String,
			default: '#007aff',
		},
		inactiveColor: {
			type: String,
			default: '#666',
		},
	},
	methods: {
		switchTab(index) {
			this.$emit('switchTab', index)
		},
	},
}
</script>

<style scoped>
.tab-bar {
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 100rpx;
	background-color: #fff;
	border-top: 1px solid #ddd;
}

.tab-bar-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.icon {
	width: 40rpx;
	height: 40rpx;
}
</style>

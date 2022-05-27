<template>
	<header class="PageHeader">
		<div class="top">
			<PageHeaderItem to="/" class="home">
				J
			</PageHeaderItem>
		</div>

		<div class="middle">
			<slot />
		</div>

		<div class="bottom">
			<PageHeaderItem to="/">
				C
			</PageHeaderItem>
			<PageHeaderItem to="/">
				C
			</PageHeaderItem>
			<PageHeaderItem to="/">
				C
			</PageHeaderItem>
		</div>
	</header>
</template>

<script>
export default {
	name: "PageHeader",
};
</script>

<style lang="scss" scoped>
.PageHeader {
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: $header-width;
	height: 100vh;
	background-color: map-get($colors, "grey");
	z-index: 100;

	.home {
		color: map-get($colors, "blue");
	}

	.middle {
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
	}
}
</style>

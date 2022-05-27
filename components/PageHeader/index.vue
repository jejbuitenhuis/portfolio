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
			<PageHeaderItem to="https://github.com/jejbuitenhuis/">
				<fa-icon :icon="[ 'fab', 'github' ]" class="icon" />
			</PageHeaderItem>
			<PageHeaderItem to="https://nl.linkedin.com/in/joram-buitenhuis-43169b1b6/">
				<fa-icon :icon="[ 'fab', 'linkedin' ]" class="icon" />
			</PageHeaderItem>
			<PageHeaderItem to="/">
				<fa-icon :icon="[ 'fas', 'envelope' ]" class="icon" />
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

	.icon {
		height: 1em; // fix for fontawesome icons not being the correct size when build
		font-size: .8em;
	}

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

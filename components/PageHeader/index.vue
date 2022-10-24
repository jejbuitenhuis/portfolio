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
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: $header-width;
	background-color: map-get($colors, "grey");
	z-index: 100;

	@include media(phone) {
		box-shadow: 1px 3px 5px 0px rgba(13, 13, 13, 0.75);
	}

	@include media(tablet, desktop) {
		flex-direction: column;
		width: $header-width;
		height: 100vh;
	}

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

	.bottom {
		display: flex;
		flex-direction: row;

		@include media(tablet, desktop) {
			flex-direction: column;
		}
	}
}
</style>

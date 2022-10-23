<template>
	<div class="PageHeaderScroller" :class="{ active }" :aria-label="`Scroll to ${to}`">
		<div class="tooltip" aria-hidden="true">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: "PageHeaderScroller",
	props: {
		to: {
			type: String,
			required: true,
			validator: t => t.length > 0,
		}
	},
	data() {
		return {
			active: Math.random() > 0.5,
		};
	},
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.PageHeaderScroller {
	position: relative;
	width: $header-width;
	height: $header-width;
	cursor: pointer;
	user-select: none;

	&::after {
		content: "";
		box-sizing: border-box;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 1em;
		height: 1em;
		background-color: map-get($colors, "foreground");
		border-radius: 100px;
		transform: translateX(-50%) translateY(-50%);
	}

	&.active::after {
		background-color: transparent;
		border: .15em solid map-get($colors, "foreground");
	}

	div.tooltip {
		position: absolute;
		top: 50%;
		left: 125%;
		padding: .15em .4em;
		background-color: map-get($colors, "grey");
		border-radius: .3em;
		opacity: 0;
		transition: opacity .3s ease;
		transform: translateY(-50%);
		cursor: default;

		&::before {
			$size: .75em;

			content: "";
			position: absolute;
			top: 50%;
			left: math.div($size, -2);
			width: $size;
			height: $size;
			background-color: map-get($colors, "grey");
			transform:
				translateY(-50%)
				rotate(45deg);
			z-index: -1;
		}
	}

	@include media(desktop) {
		&:hover div.tooltip:not(:hover) {
			opacity: 1;
		}
	}
}
</style>

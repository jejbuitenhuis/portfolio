<template>
	<a
		v-if="isExternal"
		:href="to"
		class="PageHeaderItem"
	>
		<slot />
	</a>

	<NuxtLink
		v-else
		:to="to"
		class="PageHeaderItem"
	>
		<slot />
	</NuxtLink>
</template>

<script>
export default {
	name: "PageHeaderItem",
	props: {
		to: {
			type: String,
			required: true,
			validator: t => t.length > 0,
		}
	},
	computed: {
		isExternal() {
			return this.to.startsWith("http");
		},
	},
};
</script>

<style lang="scss" scoped>
@use "sass:math";

$font-size-multiplier: 2;

.PageHeaderItem {
	display: flex;
	align-items: center;
	justify-content: center;
	width: math.div($header-width, $font-size-multiplier);
	height: math.div($header-width, $font-size-multiplier);
	color: map-get($colors, "foreground");
	text-decoration: none;
	font-family: "Bungee", cursive;
	font-size: 1em * $font-size-multiplier;
	transition: color .3s ease;

	&:hover {
		color: map-get($colors, "blue");
	}
}
</style>

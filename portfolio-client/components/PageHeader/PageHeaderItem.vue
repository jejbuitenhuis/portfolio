<template>
	<div class="PageHeaderItem">
		<NuxtLink :to="to" class="link">
			<slot />
		</NuxtLink>
	</div>
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
};
</script>

<style lang="scss" scoped>
@use "sass:math";

$font-size-multiplier: 2;

.PageHeaderItem {
	.link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: math.div($header-width, $font-size-multiplier);
		height: math.div($header-width, $font-size-multiplier);
		color: inherit;
		text-decoration: none;
		font-family: "Bungee", cursive;
		font-size: 1em * $font-size-multiplier;
	}
}
</style>

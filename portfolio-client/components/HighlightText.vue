<template>
	<span class="HighlightText">
		<slot />
	</span>
</template>

<script>
export default {
	name: "HighlightText",
};
</script>

<style lang="scss" scoped>
.HighlightText {
	color: map-get($colors, "blue");
	font-family: "Bungee", cursive;
}
</style>

<template>
	<h1 class="SectionTitle">
		<slot />
	</h1>
</template>

<script>
export default {
	name: "SectionTitle",
};
</script>

<style lang="scss" scoped>
.SectionTitle {
	position: relative;
	padding: 0 2em;
	font-family: "Bungee", cursive;
	font-size: 2.5em;

	&::before {
		content: "§";
		margin-right: 1em;
		color: map-get($colors, "blue");
	}

	&::after {
		content: "";
		position: absolute;
		top: 50%;
		right: 2em;
		width: 3em;
		height: .25em;
		background-color: map-get($colors, "blue");
		border-radius: 100px;
		transform: translateY(-50%);
	}
}
</style>

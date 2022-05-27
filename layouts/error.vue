<template>
	<div id="Error">
		<h1 class="title">
			{{ error.statusCode }}
		</h1>

		<p class="message">
			{{ error.message || "I don't know what happened but it didn't work" }}
		</p>

		<NuxtLink class="back" to="/">
			Go to the home page
		</NuxtLink>
	</div>
</template>

<script>
export default {
	name: "ErrorLayout",
	props: {
		error: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
#Error {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	font-size: 1.5em;

	h1.title {
		margin: 0;
		color: map-get($colors, "red");
		font-family: "Bungee", cursive;
		font-size: 4em;
	}

	.back {
		color: map-get($colors, "blue");
	}
}
</style>

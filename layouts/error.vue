<template>
	<div id="Error">
		<h1 v-if="code" class="title">
			{{ code }}
		</h1>

		<p class="message">
			{{ message }}
		</p>

		<p class="back" role="link" @click="back()">
			Go back to where you came from
		</p>
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
	computed: {
		code() {
			return this.error?.statusCode;
		},

		message() {
			return this.error?.message || "I don't know what happened but it didn't work";
		},
	},
	methods: {
		back() {
			this.$router.back();
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
		text-decoration: underline;
		cursor: pointer;
	}
}
</style>

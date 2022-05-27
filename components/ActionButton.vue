<template>
	<button
		v-if="type === 'function'"
		class="ActionButton"
		:class="{ outline }"
		@click="action"
	>
		<slot />
	</button>

	<a
		v-else-if="type === 'external-link'"
		class="ActionButton"
		:class="{ outline }"
		:href="action"
	>
		<slot />
	</a>

	<NuxtLink
		v-else
		class="ActionButton"
		:class="{ outline }"
		:to="action"
	>
		<slot />
	</NuxtLink>
</template>

<script>
const TYPES = [
	"function",
	"string",
];

export default {
	name: "ActionButton",
	props: {
		action: {
			required: true,
			validator: a => TYPES.includes(typeof a),
		},
		outline: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		type() {
			const type = typeof this.action;

			if (type === "function") return "function";

			if (type === "string" && type.startsWith("http"))
				return "external-link";

			return "internal-link";
		},
	},
};
</script>

<style lang="scss" scoped>
.ActionButton {
	box-sizing: border-box;
	display: inline-block;
	min-width: 12em;
	margin: 0;
	padding: .5em 1em;
	background-color: map-get($colors, "blue");
	color: map-get($colors, "background");
	border: .1em solid map-get($colors, "blue");
	border-radius: .3em;
	outline: none;
	text-align: center;
	text-decoration: none;
	font-family: inherit;
	font-size: inherit;
	cursor: pointer;

	&.outline {
		background-color: transparent;
		color: map-get($colors, "foreground");
	}
}
</style>

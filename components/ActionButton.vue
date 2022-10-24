<template>
	<button
		v-if="type === 'function'"
		class="ActionButton"
		:class="{ outline, small }"
		@click="action"
	>
		<slot />

		<div class="icon">
			<fa-icon :icon="[ 'fas', 'angle-right' ]" />
		</div>
	</button>

	<a
		v-else-if="type === 'external-link'"
		class="ActionButton"
		:class="{ outline, small }"
		:href="action"
	>
		<slot />

		<div class="icon">
			<fa-icon :icon="[ 'fas', 'angle-right' ]" />
		</div>
	</a>

	<NuxtLink
		v-else
		class="ActionButton"
		:class="{ outline, small }"
		:to="action"
	>
		<slot />

		<div class="icon">
			<fa-icon :icon="[ 'fas', 'angle-right' ]" />
		</div>
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
		small: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		type() {
			const type = typeof this.action;

			if (type === "function") return "function";

			if (type === "string" && this.action.startsWith("http"))
				return "external-link";

			return "internal-link";
		},
	},
};
</script>

<style lang="scss" scoped>
$arrow-show-size: 20%;

.ActionButton {
	box-sizing: border-box;
	position: relative;
	display: grid;
	grid-template-columns: 100% 0;
	margin: 0;
	padding: .25em 1em;
	background-color: map-get($colors, "blue");
	color: map-get($colors, "background");
	border: .1em solid map-get($colors, "blue");
	border-radius: .3em;
	outline: none;
	text-align: center;
	text-decoration: none;
	font-family: inherit;
	font-size: inherit;
	overflow: hidden;
	cursor: pointer;
	transition: grid-template-columns .3s ease;
	z-index: 0;

	&:not(.small) {
		min-width: 12em;
		padding: .5em 1em;
	}

	&.outline {
		background-color: transparent;
		color: map-get($colors, "foreground");
	}

	div.icon {
		display: none;
	}

	@include media(desktop) {
		&:not(.outline):not(.small) {
			div.icon {
				position: absolute;
				top: 0;
				right: -$arrow-show-size;
				display: flex;
				align-items: center;
				justify-content: center;
				width: $arrow-show-size;
				height: 100%;
				color: currentColor;
				font-size: 1.25em;
				transition: right .3s ease;
			}

			&:hover {
				grid-template-columns: #{100% - $arrow-show-size} $arrow-show-size;

				div.icon {
					right: 0;
				}
			}
		}

		&.outline {
			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: unset;
				right: 0;
				width: 0;
				height: 100%;
				background-color: map-get($colors, "blue");
				transition: width .3s ease;
				z-index: -1;
			}

			&:hover::before {
				left: 0;
				right: unset;
				width: 100%;
			}
		}
	}
}
</style>

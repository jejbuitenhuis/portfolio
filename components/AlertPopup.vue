<template>
	<div class="AlertPopup" :class="{ closed }">
		<div class="container">
			<fa-icon class="icon" :icon="[ 'fas', 'triangle-exclamation' ]" />

			<div class="content">
				<slot />
			</div>

			<ActionButton small :action="close" title="Close popup">
				{{ closeText }}
			</ActionButton>
		</div>
	</div>
</template>

<script>
export default {
	name: "AlertPopup",
	props: {
		closeText: {
			type: String,
			required: false,
			default: "Close",
		},
	},
	data() {
		return {
			closed: false,
		};
	},
	methods: {
		close() {
			this.closed = true;
		},
	},
};
</script>

<style lang="scss" scoped>
$padding: 1em;

.AlertPopup {
	box-sizing: border-box;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba( map-get($colors, "background"), 0.85 );
	border-radius: .3em;
	text-align: center;
	transition:
		top .75s ease-out,
		bottom 4s ease-out,
		background-color .5s ease-out;
	z-index: 100;

	@include media(phone) {
		display: flex;
		align-items: center;
	}

	@include media(tablet, desktop) {
		top: unset;
		bottom: $padding;
		left: 50%;
		width: unset;
		height: unset;
		max-width: 50vw;
		transform: translateX(-50%);
	}

	&.closed {
		top: 100%;
		background-color: transparent;

		@include media(tablet, desktop) {
			bottom: -100%;
		}
	}

	div.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
		width: 100%;
		margin: 1em 2em;
		padding: $padding;
		background-color: map-get($colors, "grey");
		border-radius: .3em;
		box-shadow: 1px 3px 5px 0px rgba(13, 13, 13, 0.75);

		@include media(tablet, desktop) {
			flex-direction: row;
			width: unset;
			margin: unset;
		}

		@include media(phone) {
			div.content {
				margin: 1em 0;
			}
		}

		.icon {
			height: 1em; // fix for fontawesome icons not being the correct size when build
			color: map-get($colors, "red");
			font-size: 2.5em;

			@include media(tablet, desktop) {
				font-size: 1.25em;
			}
		}
	}
}
</style>

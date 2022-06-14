<template>
	<div class="AlertPopup" :class="{ closed }">
		<fa-icon class="icon" :icon="[ 'fas', 'triangle-exclamation' ]" />

		<div class="content">
			<slot />
		</div>

		<ActionButton small :action="close" title="Close popup">
			{{ closeText }}
		</ActionButton>
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
.AlertPopup {
	position: fixed;
	bottom: 1em;
	left: 50%;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1em;
	max-width: 50vw;
	padding: 1em;
	background-color: map-get($colors, "grey");
	border-radius: .3em;
	transform: translateX(-50%);
	transition: bottom 4s ease-out;
	z-index: 100;

	&.closed {
		bottom: -100%;
	}

	.icon {
		height: 1em; // fix for fontawesome icons not being the correct size when build
		color: map-get($colors, "red");
		font-size: 1.25em;
	}
}
</style>

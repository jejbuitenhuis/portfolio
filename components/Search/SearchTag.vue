<template>
	<NuxtLink
		:to="searchLink"
		class="SearchTag"
		:class="{ dark }"
		:aria-label="label"
		:title="label"
	>
		{{ searchValue }}
	</NuxtLink>
</template>

<script>
export default {
	name: "SearchTag",
	props: {
		dark: {
			type: Boolean,
			default: false,
		},
		searchKey: {
			type: String,
			required: true,
			validator: k => k.length > 0,
		},
		searchValue: {
			type: String,
			required: true,
			validator: k => k.length > 0,
		},
	},
	computed: {
		label() {
			return `Search for more projects related to ${this.searchValue}`;
		},

		searchLink() {
			const search = encodeURIComponent(this.searchValue.toLowerCase());

			return `/projects/search?${this.searchKey}=${search}`;
		},
	},
};
</script>

<style lang="scss" scoped>
.SearchTag {
	padding: .25em 1em;
	color: map-get($colors, "foreground");
	border: .1em solid map-get($colors, "grey");
	border-radius: 100px;
	font-size: .85em;
	text-decoration: none;
	transition: border-color .3s ease;

	&:not(:first-of-type) {
		margin-left: .5em;
	}

	@include media(desktop) {
		&:hover,
		&.dark:hover {
			border-color: map-get($colors, "blue");
		}
	}

	&.dark {
		border-color: map-get($colors, "background");
	}
}
</style>

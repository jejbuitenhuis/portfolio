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
		tag: {
			type: String,
			required: true,
			validator: k => k.length > 0 && k.includes(":"),
		},
	},
	computed: {
		label() {
			return `Search for more projects, work, etc related to ${this.searchValue}`;
		},

		searchKey() {
			return this.tag.split(":")[0].toLowerCase();
		},

		searchValue() {
			return this.tag.split(":")[1];
		},

		searchLink() {
			const search = encodeURIComponent(this.searchValue.toLowerCase());

			return `/search?${this.searchKey}=${search}`;
		},
	},
};
</script>

<style lang="scss" scoped>
.SearchTag {
	display: inline-block;
	padding: .25em 1em;
	color: map-get($colors, "foreground");
	border: .1em solid map-get($colors, "grey");
	border-radius: 100px;
	font-size: .85em;
	text-decoration: none;
	transition: border-color .3s ease;

	// FIXME: padding under the tag when there is more than one row of tags
	&:not(:last-of-type) {
		margin-right: .5em;
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

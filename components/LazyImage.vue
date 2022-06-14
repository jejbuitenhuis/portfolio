<template>
	<img
		class="LazyImage"
		:src="src"
		:alt="alt"
	>
</template>

<script>
export default {
	name: "LazyImage",
	props: {
		src: {
			type: String,
			required: true,
			validator: i => i.length > 0,
		},
		alt: {
			type: String,
			required: true,
			validator: a => a.length > 10, // it needs to be a good alt text
		},
	},
};
</script>

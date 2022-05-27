<template>
	<div id="App">
		<PageHeader>
			<PageHeaderScroller to="skills">
				Skills
			</PageHeaderScroller>
			<PageHeaderScroller to="experience">
				Experience
			</PageHeaderScroller>
			<PageHeaderScroller to="projects">
				Projects
			</PageHeaderScroller>
		</PageHeader>

		<div class="view">
			<Nuxt />

			<AlertPopup close-text="Ok">
				The website is still under construction. Maybe come back later!
			</AlertPopup>
		</div>
	</div>
</template>

<script>
import PageHeader from "../components/PageHeader/index.vue";

export default {
	name: "DefaultLayout",
	components: {
		PageHeader,
	},
};
</script>

<style lang="scss">
html,
body {
	margin: 0;
	padding: 0;
	background-color: map-get($colors, "background");
	color: map-get($colors, "foreground");
	font-size: 16px;
	line-height: 1.6;
	font-family: 'Poppins', sans-serif;
}

#App {
	div.view {
		margin-left: $header-width;
		width: calc(100vw - $header-width);
	}
}
</style>

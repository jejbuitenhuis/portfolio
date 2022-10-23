<template>
	<div class="ProjectList">
		<div
			v-for="project in projects"
			:key="project.slug"
			class="project"
		>
			<LazyImage
				v-if="project.image"
				:src="`/images/projects/${project.image}`"
				:alt="`Image for ${project.title}.`"
			/>

			<div class="content">
				<NuxtLink
					class="title"
					:to="`/projects/${encodeURIComponent(project.slug)}`"
				>
					{{ project.title }}
				</NuxtLink>

				<div v-if="project.links" class="links">
					<a
						v-for="(link, type) in project.links"
						:key="`project-${project.slug}-link-${type}`"
						class="link"
						:href="link"
						target="_blank"
					>
						<fa-icon class="icon" :icon="getIcon(type)" />
					</a>
				</div>

				<p class="description">
					{{ project.description }}
				</p>

				<div class="tags">
					<SearchTag
						v-for="lang in project.languages"
						:key="`tag-lang-${lang}`"
						dark
						search-key="language"
						:search-value="lang"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const ICONS = {
	github: [ "fab", "github" ],
	external: [ "fas", "external-link-alt" ],
};

export default {
	name: "ProjectList",
	props: {
		projects: {
			type: Array,
			required: true,
			validator: p => p.length > 0,
		},
	},
	methods: {
		/**
		 * Get the fontawesome icon from the `links` key
		 *
		 * @param {string} key
		 * @returns string
		 */
		getIcon(key) {
			return ICONS[key] ?? [ "fas", key ];
		},
	},
};
</script>

<style lang="scss" scoped>
.ProjectList {
	column-count: 1;
	column-gap: 4em;

	@include media(tablet) {
		column-count: 2;
	}

	@include media(desktop) {
		column-count: 3;
	}

	div.project {
		position: relative;
		display: flex;
		flex-direction: column;
		margin-bottom: 4em;
		background-color: map-get($colors, "grey");
		border-radius: 5px;
		box-shadow: 0 0 0 0 #000000;
		transform: translateY(0);
		overflow: hidden;
		transition:
			box-shadow .3s ease,
			transform .3s ease;

		@include media(desktop) {
			&:hover {
				box-shadow: 0 10px 30px -15px #000000;
				transform: translateY(-.5em);
			}
		}

		.LazyImage {
			max-width: 100%;
			max-height: 100%;
			color: map-get($colors, "foreground");
		}

		div.content {
			display: grid;
			grid-template:
				'image image' auto
				'title links' auto
				'description description' auto
				'tags tags' auto
				/ 1fr auto;
			padding: 2em;

			.title {
				grid-area: title;
				color: inherit;
				font-weight: bold;
				font-size: 2em;
				text-decoration: none;
				margin: 0;
				z-index: 1;

				// Trick to make whole card act like the a tag, but when
				// hovered over e.g. github link, that is also clickable
				&::before {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: -1;
				}
			}

			div.links {
				$padding: .75em;

				grid-area: links;
				display: flex;
				flex-direction: row;
				z-index: 2;
				transform: translateX($padding);

				a.link {
					display: flex;
					align-items: center;
					padding: 0 $padding;
					color: currentColor;
					font-size: 1.25em;
					text-decoration: none;
					transition: color .3s ease;

					@include media(desktop) {
						&:hover {
							color: map-get($colors, "blue");
						}
					}

					.icon {
						height: 1em; // fix for fontawesome icons not being the correct size when build
					}
				}
			}

			p.description {
				grid-area: description;
			}

			div.tags {
				grid-area: tags;
				z-index: 2;
			}
		}
	}
}
</style>

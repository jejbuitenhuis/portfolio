<template>
	<div id="Home">
		<section class="landing">
			<div class="welcome">
				<p>Hi! I am <HighlightText>Joram</HighlightText></p>
				<p>I like to program things</p>
			</div>

			<div class="introduction">
				<p>I study Information and Communications Technology (HBO-ICT) at HAN University of Applied Sciences. At the moment I mainly program in Rust, but I also like to make websites with Vue.JS.</p>

				<div class="buttons">
					<ActionButton outline :action="$config.LOCATION_CV">
						View my CV
					</ActionButton>

					<ActionButton :action="scrollToSkills">
						See more
					</ActionButton>
				</div>
			</div>
		</section>

		<section class="experience-work">
			<SectionTitle>Work Experience</SectionTitle>

			<TimeTable>
				<TimeTableItem
					v-for="item in workExperience"
					:key="`experience-work-${item.title}`"
					:title="item.title"
					:start="new Date(item.dates.start)"
					:end="!!item.dates.end ? new Date(item.dates.end) : null"
					:tags="item.tags"
				>
					<nuxt-content :document="item" />
				</TimeTableItem>
			</TimeTable>
		</section>

		<section class="education">
			<SectionTitle>Education</SectionTitle>

			<TimeTable>
				<TimeTableItem
					v-for="item in education"
					:key="`education-${item.title}`"
					:title="item.title"
					:start="new Date(item.dates.start)"
					:end="!!item.dates.end ? new Date(item.dates.end) : null"
					:tags="item.tags"
				>
					<nuxt-content :document="item" />
				</TimeTableItem>
			</TimeTable>
		</section>

		<section class="certificates">
			<SectionTitle>Certificates</SectionTitle>

			<TimeTable>
				<a
					v-for="item in certificates"
					:key="`certificate-${item.title}`"
					:href="item.url"
					target="_blank"
				>
					<TimeTableItem
						:title="item.title"
						:start="new Date(item.issued_on)"
						:end="new Date(item.issued_on)"
					>
						<nuxt-content :document="item" />
					</TimeTableItem>
				</a>
			</TimeTable>
		</section>

		<section class="projects">
			<SectionTitle>Projects</SectionTitle>

			<ProjectList :projects="projects" />
		</section>
	</div>
</template>

<script>
export default {
	name: "HomePage",
	async asyncData({ $content }) {
		const [ projects, workExperience, education, certificates ] = await Promise.all([
			$content("projects").fetch(),
			$content("experience/work").fetch(),
			$content("education").fetch(),
			$content("certificates").fetch(),
		]);

		projects.sort((a, b) => {
			const titleA = a.title.toLowerCase();
			const titleB = b.title.toLowerCase();

			if (titleA < titleB) return -1;
			if (titleA > titleB) return 1;

			return 0;
		});

		return {
			projects,
			workExperience,
			education,
			certificates,
		};
	},
	beforeMount() {
		console.log(this.projects, this.workExperience);
	},
	methods: {
		scrollToSkills() {
			console.log("Scroll to skills!");
		},
	},
};
</script>

<style lang="scss">
#Home {
	section.landing { // {{{
		display: grid;
		align-items: center;
		min-height: 100vh;

		@include media(tablet, desktop) {
			grid-template-columns: 50% 50%;
		}

		p {
			margin: 0;
		}

		div.welcome {
			font-size: 2.5em;

			@include media(tablet, desktop) {
				padding-right: 4rem;
				font-size: 3.5em;
				text-align: left;
			}
		}

		div.introduction {
			font-size: 1.25em;

			@include media(tablet, desktop) {
				padding-left: 4rem;
				font-size: 1.75em;
				text-align: right;
			}

			div.buttons {
				display: flex;
				flex-direction: column;
				margin-top: 2em;
				font-size: .75em;

				>:not(:first-child) {
					margin-top: 1.5em;
				}

				@include media(tablet, desktop) {
					flex-direction: row;

					>:first-child {
						margin-left: auto;
					}

					>:not(:first-child) {
						margin-top: 0;
						margin-left: 2em;
					}
				}
			}
		}
	} // }}}

	section.experience-work { // {{{
		.nuxt-content {
			a {
				position: relative;
				color: map-get($colors, "blue");
				text-decoration: none;

				&::before {
					content: "";
					position: absolute;
					bottom: 0;
					left: 0;
					right: unset;
					width: 100%;
					height: .05em;
					background-color: map-get($colors, "blue");

					@include media(desktop) {
						transition: .3s ease width;
					}
				}

				@include media(desktop) {
					&:hover::before {
						left: unset;
						right: 0;
						width: 0;
					}
				}
			}
		}
	} // }}}

	section.certificates { // {{{
		a {
			color: currentColor;
			text-decoration: none;
		}
	} // }}}
}
</style>

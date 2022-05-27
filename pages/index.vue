<template>
	<div id="Home">
		<div class="landing">
			<div class="welcome">
				<p>Hi! I am <HighlightText>Joram</HighlightText></p>
				<p>I like to program things</p>
			</div>

			<div class="introduction">
				<p>I study Computer Science at HAN University of Applied Sciences. At the moment I mainly program in Rust, but I also like to make websites with Vue.JS.</p>

				<div class="buttons">
					<ActionButton outline action="/cv/">
						View my CV
					</ActionButton>

					<ActionButton :action="scrollToSkills">
						See more
					</ActionButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HomePage",
	methods: {
		scrollToSkills() {
			console.log("Scroll to skills!");
		},
	},
};
</script>

<style lang="scss">
#Home {
	div.landing {
		display: grid;
		grid-template-columns: 50% 50%;
		align-items: center;
		min-height: 100vh;

		p {
			margin: 0;
		}

		div.welcome,
		div.introduction {
			padding: 4rem;
		}

		div.welcome {
			font-size: 3.5em;
			text-align: left;
		}

		div.introduction {
			font-size: 1.75em;
			text-align: right;

			div.buttons {
				margin-top: 2em;
				font-size: .75em;

				>:not(:first-child) {
					margin-left: 2em;
				}
			}
		}
	}
}
</style>

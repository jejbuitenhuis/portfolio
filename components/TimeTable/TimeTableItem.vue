<template>
	<div class="TimeTableItem">
		<div class="header">
			<div class="title">
				<h2>{{ title }}</h2>

				<p class="time" :data-time-spend="getTimeSpend()">
					{{ getStartDate() }} - {{ getEndDate() }}
					<span class="time-mobile" aria-label="Time between start and end">
						({{ getTimeSpend() }})
					</span>
				</p>
			</div>

			<div v-if="tags.length > 0" class="tags">
				<SearchTag
					v-for="tag in tags"
					:key="`timetable-item-${tag}`"
					dark
					:tag="tag"
				/>
			</div>
		</div>

		<div class="additional-information">
			<slot />
		</div>
	</div>
</template>

<script>
import formatDate from "../../assets/js/formatDate";
import timeDifference from "../../assets/js/timeDifference";

export default {
	name: "TimeTableItem",
	props: {
		title: {
			type: String,
			required: true,
			validator: h => h.length > 0 && h.length <= 60,
		},
		start: {
			type: Date,
			required: true,
		},
		end: {
			type: Date,
			required: false,
			default: null,
		},
		tags: {
			type: Array,
			required: false,
			default: () => [],
		},
	},
	methods: {
		getStartDate() {
			return formatDate(this.start);
		},

		getEndDate() {
			if (!this.end) return "Present";

			return formatDate(this.end);
		},

		getTimeSpend() {
			const endDate = !this.end ? new Date() : this.end;

			return timeDifference(this.start, endDate);
		},
	},
};
</script>

<style lang="scss" scoped>
.TimeTableItem {
	padding: 1em 2em;
	background-color: map-get($colors, "grey");
	border-radius: .3em;

	&:not(:first-of-type) {
		/*
		TODO: place margin on the bottom instead of the top because the list is
		reversed
		*/
		margin-bottom: 2em;
	}

	div.header {
		display: flex;
		flex-direction: column;

		@include media(tablet, desktop) {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}

		div.title {
			display: flex;
			flex-direction: column;

			@include media(tablet, desktop) {
				flex-direction: row-reverse;
				align-items: center;
				justify-content: flex-start;
			}

			h2 {
				margin: 0;
			}

			p.time {
				position: relative;
				margin: 0;
				margin-right: 1em;
				color: transparentize( map-get($colors, "foreground"), .35 );

				@include media(phone) {
					margin: 1em 0;
				}

				@include media(tablet, desktop) {
					width: 10em;
				}

				@include media(desktop) {
					&::before {
						content: attr(data-time-spend);
						position: absolute;
						bottom: 100%;
						padding: .25em .5em;
						background-color: darken( map-get($colors, "grey"), 10% );
						border-radius: .3em;
						opacity: 0;
						transition: .3s ease opacity;
						z-index: 2;
					}

					&::after {
						content: "";
						position: absolute;
						left: 10%;
						bottom: 100%;
						width: .5em;
						height: .5em;
						background-color: darken( map-get($colors, "grey"), 10% );
						opacity: 0;
						transform:
						rotate(45deg)
						translateY(50%);
						transition: .3s ease opacity;
						z-index: 1;
					}

					&:hover::after,
					&:hover::before {
						opacity: 1;
					}
				}

				span.time-mobile {
					font-size: .85em;

					@include media(tablet, desktop) {
						display: none;
					}
				}
			}
		}
	}
}
</style>

<template>
	<div class="TimeTable">
		<slot />
	</div>
</template>

<script>
export default {
	name: "TimeTable",
};
</script>

<style lang="scss" scoped>
.TimeTable {
	display: flex;
	flex-direction: column-reverse;
}
</style>

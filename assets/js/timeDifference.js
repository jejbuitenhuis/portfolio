// we're only interested in how many years and months there are between the two
// dates
const TIME_INTERVALS = [ 31536000, 2628000 ];
const INTERVAL_NAMES = [ "year", "month" ];

/**
 * Calculate the difference between two dates.
 *
 * @param {Date} date1 first date
 * @param {Date} date2 second date
 *
 * @return {string} The difference between `date1` and `date2`
 */
export default function timeDiff(date1, date2) {
	if (!(date1 instanceof Date && date2 instanceof Date))
		throw new RangeError("Invalid date arguments");

	let diffInSeconds = Math.abs(date2.getTime() - date1.getTime()) / 1000;
	const ret = [];

	for (let i = 0; i < TIME_INTERVALS.length; i++) {
		const currDiff = Math.floor(diffInSeconds / TIME_INTERVALS[i]);

		if (currDiff >= 1) {
			const currInterval = INTERVAL_NAMES[i];

			diffInSeconds -= currDiff * TIME_INTERVALS[i];

			if (currDiff === 1) ret.push(`${currDiff} ${currInterval}`);
			else ret.push(`${currDiff} ${currInterval}s`);
		}
	}

	if (ret.length === 0) return "0 months";

	return ret.join(", ");
}

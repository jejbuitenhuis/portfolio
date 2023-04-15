const MONTHS = [{
	short: "Jan.",
	long: "January",
}, {
	short: "Feb.",
	long: "February",
}, {
	short: "Mar.",
	long: "March",
}, {
	short: "Apr.",
	long: "April",
}, {
	short: "May",
	long: "May",
}, {
	short: "June",
	long: "June",
}, {
	short: "July",
	long: "July",
}, {
	short: "Aug.",
	long: "August",
}, {
	short: "Sept.",
	long: "September",
}, {
	short: "Oct.",
	long: "October",
}, {
	short: "Nov.",
	long: "November",
}, {
	short: "Dec.",
	long: "December",
}];

/**
 * @param {Date} date
 * @param {boolean} [short=true]
 * @returns {string}
 */
export default function formatDate(date, short = true) {
	let month = MONTHS[date.getMonth()].short;

	if (!short) month = MONTHS[date.getMonth()].long;

	return `${month} ${date.getFullYear()}`;
}

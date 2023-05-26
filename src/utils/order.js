export function orderBy(array) {
	const sortedByDate = array.sort((a,b) => Date.parse(b.date) - Date.parse(a.date));
	return(sortedByDate);
}

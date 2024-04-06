export function getMiles(meters) {
    return Math.round(meters * 0.000621371192);
}

export function getMeters(miles) {
    return Math.round(miles * 1609.344);
}

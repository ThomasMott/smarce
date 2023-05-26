export function timeSince(date) {
    var parsDate = Date.parse(date);

    var seconds = Math.floor((new Date() - parsDate) / 1000);
    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + ' years';
    }
    interval = seconds / 2592000;

    if (interval > 1) {
        let timeToDisplay = Math.floor(interval);
        if (timeToDisplay === 1) {
            return `${timeToDisplay} month ago`;
        } else {
            return `${timeToDisplay} months ago`;
        }
    }
    interval = seconds / 86400;

    if (interval > 1) {
        let timeToDisplay = Math.floor(interval);
        if (timeToDisplay === 1) {
            return `${timeToDisplay} day ago`;
        } else {
            return `${timeToDisplay} days ago`;
        }
    }
    interval = seconds / 3600;

    if (interval > 1) {
        let timeToDisplay = Math.floor(interval);
        if (timeToDisplay === 1) {
            return `${timeToDisplay} hour ago`;
        } else {
            return `${timeToDisplay} hours ago`;
        }
    }
    interval = seconds / 60;

    if (interval > 1) {
        let timeToDisplay = Math.floor(interval);
        if (timeToDisplay === 1) {
            return `${timeToDisplay} minute ago`;
        } else {
            return `${timeToDisplay} minutes ago`;
        }
    }
    return Math.floor(seconds) + ' seconds';
}

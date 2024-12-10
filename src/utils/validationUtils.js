export const validateBio = (bio) => {
    if (bio.length > 300) {
        return 'Bio must be 300 characters or less.';
    }
    return null; // No error
};

export const validateLinks = (links) => {
    if (!links.trim()) {
        return null; // No validation needed if links are empty
    }

    const linkArray = links.split(',').map(link => link.trim());
    if (linkArray.length > 3) {
        return 'You can only provide up to 3 links.';
    }
    const validLinkRegex = /^(ftp|http|https):\/\/[^ "]+$/; // Basic URL validation
    for (const link of linkArray) {
        if (!validLinkRegex.test(link)) {
            return 'One or more links are invalid.';
        }
    }
    return null; // No error
};

export const validateTags = (tags) => {
    const tagArray = tags.split(',').map(tag => tag.trim());
    if (tagArray.length > 3) {
        return 'You can only provide up to 3 tags.';
    }
    return null; // No error
};

export const validateImageSize = (file) => {
    if (file && file.size > 2 * 1024 * 1024) { // 2MB limit
        return 'Image size must be less than 2MB.';
    }
    return null; // No error
};

export const validatePostTitle = (title) => {
    if (title.length > 40) {
        return 'Post title must be less than 40 characters.';
    }
    return null; // No error
};

export const validatePostDescription = (description) => {
    if (description.length > 300) {
        return 'Post description must be 300 characters or less.';
    }
    return null; // No error
}; 
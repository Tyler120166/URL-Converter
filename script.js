function convertToLocalURL(localURL) {
    try {
        // Create an anchor element to parse the local URL
        const anchor = document.createElement('a');
        anchor.href = localURL;

        // Extract the file path from the local URL
        const filePath = anchor.pathname;

        // Remove leading slash if present
        const normalizedFilePath = filePath.startsWith('/') ? filePath.substring(1) : filePath;

        // Replace 'Tyler120166' with your GitHub username
        const username = 'Tyler120166';
        const repository = 'repository'; // Replace 'repository' with your repository name

        // Construct the GitHub Pages URL
        const githubPagesURL = `https://${username}.github.io/${repository}/`;

        // Construct the full public URL
        const publicURL = `${githubPagesURL}${normalizedFilePath}`;
        return publicURL;
    } catch (error) {
        console.error('Error converting local URL to public URL:', error);
        return null;
    }
}

function redirectToPublicURL(localURL) {
    const publicURL = convertToLocalURL(localURL);
    if (publicURL) {
        window.location.href = publicURL;
    } else {
        console.error('Failed to convert the local URL to a public URL.');
    }
}

// Example usage
const localURL = 'file:///C:/Users/tyler/Desktop/virtual-drum-kit/index.html';
redirectToPublicURL(localURL);

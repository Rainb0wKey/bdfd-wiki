const MAP = {
    bdscript: "Functions",
    guides: "Guides",
    resources: "Resources",
    callbacks: "Callbacks",
    premium: "Premium",
    javascript: "JavaScript"
};

const domain = location.origin; // Get the domain dynamically
let path = location.pathname;

// Split into segments first
const segments = path.split('/').filter(segment => segment !== '');

// Handle "Nightly" section
let nightlyPath = '';
if (segments.includes('nightly')) {
    nightlyPath = '/nightly/';
    // Remove 'nightly' from the segments array
    segments.splice(segments.indexOf('nightly'), 1);
}

// Remove the base domain and path from the URL
segments.splice(0, 2); // Remove the first two segments

// Handle ".html" extension
if (segments[segments.length - 1].endsWith(".html")) {
    segments[segments.length - 1] = segments[segments.length - 1].substring(0, segments[segments.length - 1].length - 5);
}

document.write(`<a href="${domain}${nightlyPath}">Home</a>`);

segments.forEach((segment, i) => {
    if (MAP.hasOwnProperty(segment.toLocaleLowerCase())) {
        let name = MAP[segment.toLocaleLowerCase()];
        let link = "introduction.html"; 
        document.write(`<div><a href="${domain}${nightlyPath}${link}">${name}</a></div>`);
    } else if (i === segments.length - 1) {
        // Handle the last segment (filename)
        document.write(`<div><a href="${domain}${nightlyPath}${segment}.html">${segment}</a></div>`);
    } else {
        let name = segment;
        document.write(`<div><a href="${domain}${nightlyPath}${segment}.html">${name}</a></div>`);
    }
});

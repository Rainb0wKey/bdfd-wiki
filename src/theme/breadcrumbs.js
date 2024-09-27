const MAP = {
    bdscript: "Functions",
    guides: "Guides",
    resources: "Resources",
    callbacks: "Callbacks",
    premium: "Premium",
    javascript: "JavaScript"
};

const domain = location.origin;
let path = location.pathname;

let nightlyPath = '';
if (path.includes('/nightly/')) {
    nightlyPath = '/nightly/';
    path = path.replace('/nightly/', '');
}

if (path.endsWith(".html")) {
    path = path.substring(0, path.length - 5);
}

document.write(`<a href="${domain}${nightlyPath}">Home</a>`);

const segments = path.split('/').filter(segment => segment !== '');
// Remove the last segment, which is the filename
const segmentsWithoutFilename = segments.slice(0, -1);

segmentsWithoutFilename.forEach(segment => {
    if (MAP.hasOwnProperty(segment.toLocaleLowerCase())) {
        let name = MAP[segment.toLocaleLowerCase()];
        let link = "introduction.html";
        document.write(`<div><a href="${domain}${nightlyPath}${link}">${name}</a></div>`);
    }
});

// Add the last segment as the filename
const filename = segments.slice(-1)[0];
document.write(`<div><a href="${domain}${nightlyPath}${filename}.html">${filename}</a></div>`);

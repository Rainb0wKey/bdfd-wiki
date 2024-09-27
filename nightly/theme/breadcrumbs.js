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

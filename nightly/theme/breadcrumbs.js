const MAP = {
    bdscript: "Functions",
    guides: "Guides",
    resources: "Resources",
    callbacks: "Callbacks",
    premium: "Premium",
    javascript: "JavaScript"
};

const KEYS = Object.keys(MAP);

function getNameFromTitle() {
    let index = document.title.indexOf('-');
    return document.title.substring(0, index - 1);
}

let root = "/"; // Start with the root
let path = location.pathname; 

if (path.startsWith('/nightly/')) {
    root = "/nightly/";
    path = path.substring(8); // Remove "/nightly/" from the path
}

if (path.endsWith(".html"))
    path = path.substring(0, path.length - 5);

document.write(`<a href="${root}">Home</a>`);
path.split('/').forEach((segment, i, segments) => {
    let name = MAP[segment.toLocaleLowerCase()];
    if (!name) {
        name = segments.length == i + 1 ? getNameFromTitle() : segment;
        if (segment != "")
            segment += ".html";
    } else {
        segment = "introduction.html";
    }
    document.write(`<div><a href="${root}${segment}">${name}</a></div>`)
});

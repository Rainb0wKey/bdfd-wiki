const MAP = {
    bdscript: "Functions",
    guides: "Guides",
    resources: "Resources",
    callbacks: "Callbacks",
    flowchart: "Flowchart",
    premium: "Premium",
    javascript: "JavaScript",
    settings: "Settings" // Add "settings" to MAP
};

const KEYS = Object.keys(MAP);

function getNameFromTitle() {
    let index = document.title.indexOf('-');
    return document.title.substring(0, index - 1);
}

let root = "/";
let path = location.pathname.substring(11);

if (path.startsWith("nightly")) {
    path = path.substring(8);
    root += "nightly/";
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
    // Skip the last segment if it's "settings"
    if (i < segments.length - 1 || segment !== "settings") {
        document.write(`<div><a href="${root}${segment}">${name}</a></div>`)
    }
});

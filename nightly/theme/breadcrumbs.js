const MAP = {
    bdscript: "Functions",
    guides: "Guides",
    resources: "Resources",
    callbacks: "Callbacks",
    flowchart: "Flowchart",
    premium: "Premium",
    javascript: "JavaScript",
    settings: "Settings" 
};

const KEYS = Object.keys(MAP);

function getNameFromTitle() {
    let index = document.title.indexOf('-');
    return document.title.substring(0, index - 1);
}

let root = "/";
let path = location.pathname;

if (path.includes("bdfd-wiki")) {
    root = "/bdfd-wiki/"; 
}

if (path.startsWith("nightly")) {
    path = path.substring(8);
    root += "nightly/";
}

if (path.endsWith(".html"))
    path = path.substring(0, path.length - 5);

document.write(`<a href="${root}">Home</a>`);
const segments = path.split('/');
if (segments[segments.length - 1] === "settings") {
    segments.pop();
}

segments.forEach((segment, i) => {
    let name = MAP[segment.toLocaleLowerCase()];
    if (!name) {
        name = segment;
        if (segment != "")
            segment += ".html";
    } else {
        segment = "introduction.html";
    }
    document.write(`<div><a href="${root}${segment}">${name}</a></div>`)
});

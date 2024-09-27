const MAP = {
    bdscript: "Functions",
    guides: "Guides",
    resources: "Resources",
    callbacks: "Callbacks",
    premium: "Premium",
    javascript: "JavaScript"
};

const KEYS = Object.keys(MAP);
const getNameFromTitle = () => document.title.split('-')[0].trim();
let root = location.pathname.includes("bdfd-wiki") ? "/bdfd-wiki/" : "/";
let path = location.pathname.substring(11).replace(/\.html$/, '');

if (path.startsWith("nightly")) {
    path = path.substring(8);
    root += "nightly/";
}

document.write(`<a href="${root}">Home</a>`);
path.split('/').forEach((segment, i, segments) => {
    let name = MAP[segment.toLowerCase()] || (segment === "settings" && i === segments.length - 1 ? "Settings" : getNameFromTitle());
    document.write(`<div><a href="${segment ? segment + ".html" : ""}">${name}</a></div>`);
});

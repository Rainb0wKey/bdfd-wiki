const MAP = {
    bdscript: "Functions",
    guides: "Guides",
    resources: "Resources",
    callbacks: "Callbacks",
    flowchart: "Flowchart",
    premium: "Premium",
    javascript: "JavaScript"
};

const KEYS = Object.keys(MAP);

function getNameFromTitle() {
    let index = document.title.indexOf('-');
    return document.title.substring(0, index-1);
}

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
segments.forEach((segment, i) => {
    if (MAP.hasOwnProperty(segment.toLocaleLowerCase())) { 
        let name = MAP[segment.toLocaleLowerCase()];
        let link = "introduction.html"; 
        document.write(`<div><a href="${domain}${nightlyPath}${link}">${name}</a></div>`);
    } else {
        if (i === segments.length - 1) {
            let name = getNameFromTitle();
            document.write(`<div><a href="${domain}${nightlyPath}${segment}.html">${name}</a></div>`);
        }
    }
});

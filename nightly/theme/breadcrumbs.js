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
    let index = document.title.indexOf('-'); // Look for hyphen
    if (index !== -1) {
        return document.title.substring(0, index).trim(); 
    } else {
        index = document.title.indexOf('- '); // Look for hyphen and space
        if (index !== -1) {
            return document.title.substring(0, index).trim(); 
        } else {
            return document.title.trim(); // If no hyphen, use the whole title
        }
    }
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
    } else if (i === segments.length - 1) {
        let name = getNameFromTitle();
        let parentName = i > 0 ? MAP[segments[i - 1].toLocaleLowerCase()] : ""; 
        if (parentName) {
            let parentLink = "introduction.html";
            document.write(`<div><a href="${domain}${nightlyPath}${parentLink}">${parentName}</a></div>`);
        }
        document.write(`<div><a href="${domain}${nightlyPath}${segment}.html">${name}</a></div>`);
    } else {
        let name = segment;
        let parentName = i > 0 ? MAP[segments[i - 1].toLocaleLowerCase()] : ""; 
        if (parentName) {
            let parentLink = "introduction.html";
            document.write(`<div><a href="${domain}${nightlyPath}${parentLink}">${parentName}</a></div>`);
        }
        document.write(`<div><a href="${domain}${nightlyPath}${segment}.html">${name}</a></div>`);
    }
});

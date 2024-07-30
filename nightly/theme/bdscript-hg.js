// Load and parse the JSON file
fetch('./bdscript-scheme.json')
  .then(response => response.json())
  .then(data => {
    scheme = data;
    highlight();
  })
  .catch(error => console.error('Error loading scheme file:', error));

// ... rest of your code ... 

function functionHighlight(func) {
    if (scheme.functionsHighlights && scheme.functionsHighlights[func]) {
        let color = ((scheme.functionsHighlights[func].color & 0xFFFFFF)).toString(16).padStart(6, '0').toUpperCase();
        let style = fontStyle(scheme.functionsHighlights[func].style);
        return `<span class="function" style="color: #${color}; ${style}">$&</span>`;
    } else {
        return func; // Or return a default highlighted version, etc.
    }
}

// applies css to the target
function styling(type) {
    let color = ((scheme[type].color & 0xFFFFFF)).toString(16).padStart(6, '0').toUpperCase();
    let style = fontStyle(scheme[type].style);
    return `<span style="color: #${color}; ${style}">$&</span>`;
}

function fontStyle(style) {
    switch (style) {
        case 0:
            return "font-style: normal; font-weight: normal;";
        case 1:
            return "font-style: normal; font-weight: bold;";
        case 2:
            return "font-style: italic; font-weight: normal;";
        case 3:
            return "font-style: italic; font-weight: bold;";
    }
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp")
        .replace(/</g, "&lt")
        .replace(/>/g, "&gt")
        .replace(/"/g, "&quot")
        .replace(/'/g, "&#039")
        .replace(/;/g, "&#059");
}

function highlight() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(codeBlock => {
        let code = escapeHtml(codeBlock.textContent);

        // Apply styles (order matters)
        code = code
            .replace(/\;/g, styling("semicolonHighlight"))
            .replace(/\[/g, styling("bracketHighlight"))
            .replace(/\]/g, styling("bracketHighlight"))
            .replace(/\$[a-zA-Z]*/g, styling("fallbackHighlight")); // Adjust regex if needed

        // Highlight functions
        let keys = Object.keys(scheme.functionsHighlights); 
        keys.sort((a, b) => a.localeCompare(b)); // Sort alphabetically
        keys.forEach(key => {
            code = code.replace(new RegExp(`\\${key}`, 'g'), functionHighlight(key));
        });

        codeBlock.innerHTML = code;
        console.log("Highlighted code: " + code);
    });
}

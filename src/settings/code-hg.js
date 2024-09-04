function functionHighlight(func) {
    let color = ((scheme.functionsHighlights[func].color & 0xFFFFFF)).toString(16).padStart(6, '0').toUpperCase(); // convert dec to hex
    let style = fontStyle(scheme.functionsHighlights[func].style);
    return `<span class="function" style="color: #${color}; ${style}">$&</span>`;
}

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
        .replace(/"/g, "&quot");
}

function highlight() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(codeBlock => {
        let code = escapeHtml(codeBlock.textContent);
	
        code = code
            .replace(/\;/g, styling("semicolonHighlight"))
            .replace(/\[/g, styling("bracketHighlight"))
            .replace(/\]/g, styling("bracketHighlight"))
            .replace(/\$[a-zA-Z]*/g, styling("fallbackHighlight"))
            .replace(/.*/g, styling("defaultTextHighlight"))

        let keys = Object.keys(scheme.functionsHighlights).sort((a, b) => b.length - a.length);
        keys.forEach(key => {
            code = code.replace(new RegExp(`\\${key}`, 'g'), functionHighlight(key));
        });

        codeBlock.innerHTML = code;
        console.log("Highlighted code: " + code);
    });
}


scheme = {"defaultTextHighlight":{"color":4292990207,"style":0},"fallbackHighlight":{"color":4288905212,"style":0},"bracketHighlight":{"color":4288905212,"style":1},"semicolonHighlight":{"color":4288905212,"style":1},"functionsHighlights":{"$nomention":{"color":4288905212,"style":0},"$catch":{"color":4288905212,"style":0},"$else":{"color":4288905212,"style":0},"$elseif":{"color":4288905212,"style":0},"$endif":{"color":4288905212,"style":0},"$endtry":{"color":4288905212,"style":0},"$error":{"color":4288905212,"style":0},"$if":{"color":4288905212,"style":0},"$try":{"color":4288905212,"style":0}}}

highlight()
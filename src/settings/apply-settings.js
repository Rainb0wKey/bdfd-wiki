function applySettings() {
    let data;

    try {
        data = JSON.parse(localStorage.getItem('json'));
    } catch { }

    data ??= {
        "theme-main": "270",
        "theme-bg": "270",
        "theme-text": "270",
        "discord-example-theme": "dark",
        "text-size": "60%",
        "text-hg": "none",
        "text-font": "Open Sans, sans-serif",
    }

    const mainHue = data['theme-main']; // Мяу

    const setSaturation = 80;
    const setLightness = 50;

    const colorTheme1 = `hsl(${mainHue}, ${setSaturation}%, ${setLightness}%)`;
    const colorTheme2 = `hsl(${mainHue}, ${setSaturation}%, ${setLightness - 20}%)`;
    const colorTheme3 = `hsl(${mainHue}, 80%, 15%)`;

    const html = document.querySelector('html');

    html.style.fontFamily = data['text-font'];
    html.style.fontSize = data['text-size'];
    html.style.textShadow = data['text-hg'];

    document.querySelector('.sidebar').style.background = colorTheme3;
    document.querySelector('.chapter li a.active').style.color = colorTheme1;
    document.querySelectorAll('.breadcrumb a').forEach(link => {
        link.style.color = colorTheme1;
    });
    document.getElementById('menu-bar-sticky-container').style.background = `linear-gradient(to bottom right, ${colorTheme1}, ${colorTheme2})`;

    document.body.style.background = data['theme-bg'];
    document.body.style.color = data['theme-text'];
}

applySettings();

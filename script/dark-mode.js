document.addEventListener("DOMContentLoaded", function(){

    // LIGHT/DARK MODE //
    let setActiveStyleSheet = function(title) {
        let css = `link[rel="alternate stylesheet"]`;
        let stylesheets = document.querySelectorAll(css);
        stylesheets.forEach(sheet => sheet.disabled = true);
        let selector = `link[title="${title}"]`
        let activeSheet = document.querySelector(selector);
        activeSheet.disabled = false;
        localStorage.setItem("theme", title);
    }

    let savedSheet = localStorage.getItem("theme");
   
    let switchElm = document.querySelector('.switch input')
    if(savedSheet) {
        if (savedSheet == 'dark') {
            switchElm.checked = true
        }
        setActiveStyleSheet(savedSheet);
    } else {
        setActiveStyleSheet("light");
    }

    switchElm.addEventListener('click', function(event) {
        if (event.target.checked) {
            setActiveStyleSheet('dark')
        } else {
            setActiveStyleSheet('light')
        }

    })
})
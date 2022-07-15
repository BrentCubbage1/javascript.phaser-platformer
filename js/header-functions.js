// import jquery-3.4.0
const scripts = [
    "https://cdn.jsdelivr.net/npm/phaser@3.11.0/dist/phaser.js",
    "//ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js",
    "https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js",
    "./js/utils.js",
    "http://www.w3schools.com/lib/w3data.js"
]
scripts.forEach(script => {
    const text = '<script type="text/javascript" src="'+ script + '"></script>';
    console.log(text)
    document.write(text);
})
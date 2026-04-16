function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript('https://cdn.jsdelivr.net/gh/JVS1328/ChoiceScript_Stats_Modifier@Main/CheatMaster/CheatMaster.js')
    .then(() => {
        console.log('Cheat Master loaded!');
    }).catch(error => {
        console.error(error);
    });

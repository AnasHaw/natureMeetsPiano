var rainSound,
    fireSound,
    windSound,
    btnPLay,
    rainVS,
    fireVS,
    windVS,
    rainVO,
    fireVO,
    windVO,
    rainPS,
    firePS,
    windPS,
    rainPO,
    firePO,
    windPO,
    key1Sound,
    key2Sound,
    key3Sound,
    key4Sound,
    key5Sound,
    key6Sound,
    key7Sound,
    key8Sound,
    key9Sound,
    //tastatur wert
    a = 65,
    s = 83,
    d = 68,
    f = 70,
    g = 71,
    h = 72,
    j = 74,
    k = 75,
    l = 76,
    isCreated = false,
    isPlaying = false,
    windSource,
    windGain,
    windStereoPanner,
    rainSource,
    rainGain,
    rainStereoPanner,
    fireSource,
    fireGain,
    fireStereoPanner;

//src von den sounds
key1Sound = new Audio("sound/klavier/a3.mp3");
key2Sound = new Audio("sound/klavier/b3.mp3");
key3Sound = new Audio("sound/klavier/c3.mp3");
key4Sound = new Audio("sound/klavier/d3.mp3");
key5Sound = new Audio("sound/klavier/e3.mp3");
key6Sound = new Audio("sound/klavier/f3.mp3");
key7Sound = new Audio("sound/klavier/g3.mp3");
key8Sound = new Audio("sound/klavier/a4.mp3");
key9Sound = new Audio("sound/klavier/b4.mp3");

//play pause button
btnPLay = document.getElementById("btnPLay");
//volume slider
rainVS = document.getElementById("rainVS");
fireVS = document.getElementById("fireVS");
windVS = document.getElementById("windVS");
//volume output
rainVO = document.getElementById("rainVO");
fireVO = document.getElementById("fireVO");
windVO = document.getElementById("windVO");
//panning slider
rainPS = document.getElementById("rainPS");
firePS = document.getElementById("firePS");
windPS = document.getElementById("windPS");
//panning output
rainPO = document.getElementById("rainPO");
firePO = document.getElementById("firePO");
windPO = document.getElementById("windPO");
//klavier keys
key1Id = document.getElementById("key1");
key2Id = document.getElementById("key2");
key3Id = document.getElementById("key3");
key4Id = document.getElementById("key4");
key5Id = document.getElementById("key5");
key6Id = document.getElementById("key6");
key7Id = document.getElementById("key7");
key8Id = document.getElementById("key8");
key9Id = document.getElementById("key9");

//volume slider listener
rainVS.addEventListener("input", function (e) {
    var rainVolume = (this.value / 100);
    rainVO.innerHTML = (rainVolume * 100) + " %";
    rainGain.gain.value = rainVolume;
});
fireVS.addEventListener("input", function (e) {
    var fireVolume = (this.value / 100);
    fireVO.innerHTML = (fireVolume * 100) + " %";
    fireGain.gain.value = fireVolume;
});
windVS.addEventListener("input", function (e) {
    var windVolume = (this.value / 100);
    windVO.innerHTML = (windVolume * 100) + " %";
    windGain.gain.value = windVolume;
});
//panning slider listener
rainPS.addEventListener("input", function (e) {
    var pValue = (this.value - 50) / 50;
    rainPO.innerHTML = pValue + " LR";
    rainStereoPanner.pan.value = pValue;
});
firePS.addEventListener("input", function (e) {
    var pValue = (this.value - 50) / 50;
    firePO.innerHTML = pValue + " LR";
    fireStereoPanner.pan.value = pValue;
});
windPS.addEventListener("input", function (e) {
    var pValue = (this.value - 50) / 50;
    windPO.innerHTML = pValue + " LR";
    windStereoPanner.pan.value = pValue;
});
//klavir keys listener
key1Id.addEventListener("click", function (e) {
    keySoundPlay(a);
});
key2Id.addEventListener("click", function (e) {
    keySoundPlay(s);
});
key3Id.addEventListener("click", function (e) {
    keySoundPlay(d);
});
key4Id.addEventListener("click", function (e) {
    keySoundPlay(f);
});
key5Id.addEventListener("click", function (e) {
    keySoundPlay(g);
});
key6Id.addEventListener("click", function (e) {
    keySoundPlay(h);
});
key7Id.addEventListener("click", function (e) {
    keySoundPlay(j);
});
key8Id.addEventListener("click", function (e) {
    keySoundPlay(k);
});
key9Id.addEventListener("click", function (e) {
    keySoundPlay(l);
});
document.body.addEventListener("keydown", function (e) {
    var key_code = e.keyCode;
    keySoundPlay(key_code);
});

function keySoundPlay(key_code) {
    switch (key_code) {
        case a:
            key1Sound.play();
            break;
        case s:
            key2Sound.play();
            break;
        case d:
            key3Sound.play();
            break;
        case f:
            key4Sound.play();
            break;
            s
        case g:
            key5Sound.play();
            break;
        case h:
            key6Sound.play();
            break;
        case j:
            key7Sound.play();
            break;
        case k:
            key8Sound.play();
            break;
        case l:
            key9Sound.play();
            break;
    }
}

function createAudioContext() {
    if (!isCreated) {
        windSound = new Audio("sound/wind.wav");
        windSound.loop = true;
        windSound.crossOrigin = "anonymous";
        var windCon = new AudioContext();
        windSource = windCon.createMediaElementSource(windSound);
        windGain = windCon.createGain();
        windStereoPanner = windCon.createStereoPanner();

        windSource.connect(windGain);
        windGain.connect(windStereoPanner);
        windStereoPanner.connect(windCon.destination);


        rainSound = new Audio("sound/rain.wav");
        rainSound.loop = true;
        rainSound.crossOrigin = "anonymous";
        var rainCon = new AudioContext();
        rainSource = rainCon.createMediaElementSource(rainSound);
        rainGain = rainCon.createGain();
        rainStereoPanner = rainCon.createStereoPanner();

        rainSource.connect(rainGain);
        rainGain.connect(rainStereoPanner);
        rainStereoPanner.connect(rainCon.destination);


        fireSound = new Audio("sound/fire.wav");
        fireSound.loop = true;
        fireSound.crossOrigin = "anonymous";
        var fireCon = new AudioContext();
        fireSource = fireCon.createMediaElementSource(fireSound);
        fireGain = fireCon.createGain();
        fireStereoPanner = fireCon.createStereoPanner();

        fireSource.connect(fireGain);
        fireGain.connect(fireStereoPanner);
        fireStereoPanner.connect(fireCon.destination);
        isCreated = true;
    }
}

function playSound(play) {
    if (play) {
        rainSound.play();
        fireSound.play();
        windSound.play();
        btnPLay.innerHTML = "PAUSE";
        isPlaying = true;
    } else if (!play) {
        rainSound.pause();
        fireSound.pause();
        windSound.pause();
        btnPLay.innerHTML = "PLAY";
        isPlaying = false;
    }
}

//play pause listener
btnPLay.addEventListener("click", function (e) {
    createAudioContext();
    if (!isPlaying) {
        playSound(true);
    } else if (isPlaying) {
        playSound(false);
    }
});
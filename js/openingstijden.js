const time = () => {

    var titel = document.querySelector('#titelh1');
    const monday = document.querySelector('.maandag');
    const tuesday = document.querySelector('.dinsdag');
    const wednesday = document.querySelector('.woensdag');
    const thursday = document.querySelector('.donderdag');
    const friday = document.querySelector('.vrijdag');
    const saturday = document.querySelector('.zaterdag');
    const sunday = document.querySelector('.zondag');
    const datum = new Date().getHours();

    function aftellen() {
        countDate1 = new Date().getHours("10:00");
        const seconden = 1000;
        const minuten = seconden * 60;
        const uren = minuten * 60;
        const dagen = uren * 24;
        // const textdag = Math.floor(tussentijd / dagen);
        // const textuur = Math.floor((tussentijd % dagen) / uren);
        // const textminuut = Math.floor((tussentijd % uren) / minuten);
        // const textseconde = Math.floor((tussentijd % minuten) / seconden);
    }
    let text = document.getElementById("countdown");

    switch (new Date().getDay()) {

        case 1:
            monday.setAttribute("id", "currdate");
            if (datum >= 10 && datum < 12.5 || datum >= 14 && datum < 18) {
                titel.classList.toggle("open");
            } else {
                titel.classList.toggle("closed");
            }
            if (datum < 10) {
                text.innerHTML = "We openen om 10 uur";
            } else if (datum >= 10 && datum < 12.5) {
                text.innerHTML = "Wij sluiten om 12 uur 30";
            } else if (datum >= 12.5 && datum < 14) {
                text.innerHTML = "We openen om 14 uur";
            } else if (datum >= 14 && datum < 18) {
                text.innerHTML = "Wij sluiten om 18 uur";
            } else if (datum >= 18) {
                text.innerHTML = "We openen om 9 uur";
            }
            break;
        case 2:
            tuesday.setAttribute("id", "currdate");

            if (datum >= 9 && datum < 12.5 || datum >= 14 && datum < 18) {
                titel.classList.toggle("open");
            } else {
                titel.classList.toggle("closed");
            }
            if (datum < 9) {
                text.innerHTML = "Wij openen om 9 uur";
            } else if (datum >= 10 && datum < 12.5) {
                text.innerHTML = "Wij sluiten om 12 uur 30";
            } else if (datum >= 12.5 && datum < 14) {
                text.innerHTML = "Wij openen om 14 uur";
            } else if (datum >= 14 && datum < 18) {
                text.innerHTML = "Wij sluiten om 18 uur";
            } else if (datum >= 18) {
                text.innerHTML = "Wij openen om 9 uur";
            }
            break;
        case 3:
            wednesday.setAttribute("id", "currdate");
            if (datum >= 9 && datum < 12.5 || datum >= 14 && datum < 18) {
                titel.classList.toggle("open");
            } else {
                titel.classList.toggle("closed");
            }
            if (datum < 9) {
                text.innerHTML = "Wij openen om 9 uur";
            } else if (datum >= 10 && datum < 12.5) {
                text.innerHTML = "Wij sluiten om 12 uur 30";
            } else if (datum >= 12.5 && datum < 14) {
                text.innerHTML = "Wij openen om 14 uur";
            } else if (datum >= 14 && datum < 18) {
                text.innerHTML = "Wij sluiten om 18 uur";
            } else if (datum >= 18) {
                text.innerHTML = "Wij openen vrijdag om 9 uur";
            }
            break;
        case 4:
            thursday.setAttribute("id", "currdate");
            text.innerHTML = "Wij openen op vrijdag om 9 uur";
            titel.classList.toggle("closed");
            break;
        case 5:
            friday.setAttribute("id", "currdate");
            if (datum >= 9 && datum < 12.5 || datum >= 14 && datum < 18) {
                titel.classList.toggle("open");
            } else {
                titel.classList.toggle("closed");
            }
            if (datum < 9) {
                text.innerHTML = "We openen om 9 uur";
            } else if (datum >= 10 && datum < 12.5) {
                text.innerHTML = "Wij sluiten om 12 uur 30";
            } else if (datum >= 12.5 && datum < 14) {
                text.innerHTML = "We openen om 14 uur";
            } else if (datum >= 14 && datum < 18) {
                text.innerHTML = "Wij sluiten om 18 uur";
            } else if (datum >= 18) {
                text.innerHTML = "Wij openen om 9 uur";
            }
            break;
        case 6:
            saturday.setAttribute("id", "currdate");
            if (datum >= 8 && datum < 18) {
                titel.classList.toggle("open");
            } else {
                titel.classList.toggle("closed");
            }
            if (datum < 8) {
                text.innerHTML = "Wij openen om 8 uur";
            } else if (datum >= 9 && datum < 17) {
                text.innerHTML = "Wij sluiten om 17 uur";
            } else if ( datum > 17) {
                 text.innerHTML = "Wij openen maandag om 10 uur";
            }

            break;
        case 0:
            sunday.setAttribute("id", "currdate");
            titel.classList.toggle("closed");
            text.innerHTML = "Wij openen op maandag om 10 uur";
            break;
    }
    setInterval(aftellen, 1000);
}
time();
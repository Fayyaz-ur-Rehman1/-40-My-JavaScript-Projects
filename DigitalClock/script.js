const [hour, minutes, seconds, ampm] = [
    document.getElementById("hour"),
    document.getElementById("minutes"),
    document.getElementById("seconds"),
    document.getElementById("ampm")
];

function updateClock() {
    let [setCurrHours, setCurrMinutes, setCurrSeconds, setCurrAmPm] = [
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds(),
        "AM"
    ]

    if (setCurrHours > 12) {
        setCurrHours = setCurrHours - 12;
        setCurrAmPm = "PM";
    }

    setCurrHours = setCurrHours < 10 ? "0" + setCurrHours : setCurrHours
    setCurrMinutes = setCurrMinutes < 10 ? "0" + setCurrMinutes : setCurrMinutes

    hour.innerText = setCurrHours;
    minutes.innerText = setCurrMinutes;
    seconds.innerText = setCurrSeconds;
    ampm.innerText = setCurrAmPm

    setInterval(() => {
        updateClock();
    }, 1000)

}
updateClock()
const [month, day, date, year] = [
    document.querySelector(".month"),
    document.querySelector(".day"),
    document.querySelector(".date"),
    document.querySelector(".year")
];


const allFind = new Date();

month.innerText = allFind.toLocaleString('default', { month: 'long' })

day.innerText = allFind.toLocaleString('default', { weekday: "long" })

date.innerText = allFind.getDate();
year.innerText = allFind.getFullYear();
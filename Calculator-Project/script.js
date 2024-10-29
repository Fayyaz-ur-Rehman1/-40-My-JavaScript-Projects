const btns = [...document.querySelectorAll("button")];
const input = document.querySelector("#inputH");

let str = "";

btns.map((ele) =>
    ele.addEventListener("click", (e) => {
        const targeting = e.target.innerText;

        switch (targeting) {
            case "=":
                str = eval(str);
                input.value = str;
                break;
            case "<-":
                str = str.slice(0, -1);
                input.value = str;

                break;
            case "AC":
                str = "";
                input.value = str;
                break;
            default:
                str += targeting;
                input.value = str;
        }
    })
);
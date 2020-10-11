const box = document.getElementById("container");
const checkboxes = document.getElementById("form");

const check_red = document.getElementById("red");
const check_blue = document.getElementById("blue");
const check_yellow = document.getElementById("yellow");

const purpura = () => {
    if (
        box.classList.contains("red") &&
        box.classList.contains("blue") &&
        !box.classList.contains("yellow")
    ) {
        box.classList.remove("red", "blue");
        box.classList.add("purple");
    }
};

const verde = () => {
    if (
        !box.classList.contains("red") &&
        box.classList.contains("blue") &&
        box.classList.contains("yellow")
    ) {
        box.classList.remove("yellow", "blue");
        box.classList.add("green");
    }
};

const anaranjado = () => {
    if (
        box.classList.contains("red") &&
        !box.classList.contains("blue") &&
        box.classList.contains("yellow")
    ) {
        box.classList.remove("red", "yellow");
        box.classList.add("orange");
    }
};

const negro = () => {
    if ((box.classList.contains("red") && box.classList.contains("green")) ||
        (box.classList.contains("blue") && box.classList.contains("orange")) ||
        (box.classList.contains("yellow") && box.classList.contains("purple"))
    ) {
        box.classList.remove("red", "green");
        box.classList.remove("blue", "orange");
        box.classList.remove("yellow", "purple");
        box.classList.add("black");
    }
};

const remover_rojo = () => {
    box.classList.remove("red");
    if (box.classList.contains("orange")) {
        box.classList.remove("orange");
        box.classList.add("yellow");
    } else {
        if (box.classList.contains("purple")) {
            box.classList.remove("purple");
            box.classList.add("blue");
        } else {
            if (box.classList.contains('black')) {
                box.classList.remove("black");
                box.classList.add("green");
            }
        }
    }
};

const remover_azul = () => {
    box.classList.remove("blue");
    if (box.classList.contains("green")) {
        box.classList.remove("green");
        box.classList.add("yellow");
    } else {
        if (box.classList.contains("purple")) {
            box.classList.remove("purple");
            box.classList.add("red");
        } else {
            if (box.classList.contains('black')) {
                box.classList.remove("black");
                box.classList.add("orange");
            }
        }
    }
};

const remover_amarillo = () => {
    box.classList.remove("yellow");
    if (box.classList.contains("orange")) {
        box.classList.remove("orange");
        box.classList.add("red");
    } else {
        if (box.classList.contains("green")) {
            box.classList.remove("green");
            box.classList.add("blue");
        } else {
            if (box.classList.contains('black')) {
                box.classList.remove("black");
                box.classList.add("purple");
            }
        }
    }
};

check_red.addEventListener("change", () => {
    console.log(event)
    //console.log(typeof box.getAttribute('class'))
    if (check_red.checked) {
        box.classList.replace("white", "red");
        box.classList.add("red");
        anaranjado();
        purpura();
        negro()
    } else {
        remover_rojo();
    }
});

check_blue.addEventListener("change", () => {
    if (check_blue.checked) {
        box.classList.replace("white", "blue");
        box.classList.add("blue");
        verde()
        purpura()
        negro()
    } else {
        remover_azul()
    }
});

check_yellow.addEventListener("change", () => {
    if (check_yellow.checked) {
        box.classList.replace("white", "yellow");
        box.classList.add("yellow");
        verde()
        anaranjado()
        negro()
    } else {
        remover_amarillo()
    }
});
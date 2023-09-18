let buttons = document.querySelectorAll(".btn");
let input = document.getElementById("screen");

String = "";
let btn = Array.from(buttons);
btn.forEach(button => {
    button.addEventListener('click', (b) => {
        if (b.target.innerHTML == "=") {
            try {
                String = eval(String);
            } catch (error) {
                String = "Error";
            }

            input.value = String;
        }
        else if (b.target.innerHTML == "AC") {
            String = ""
            input.value = String;
        }
        else if (b.target.innerHTML == "DEL") {
            String = String.slice(0, -1);
            input.value = String;

        }
        else if (b.target.innerHTML == "%") {
            String = String + "/100";
            String = eval(String);
            input.value = String;

        }
        else {
            String = String + b.target.innerHTML;
            input.value = String;
        }
    })
});
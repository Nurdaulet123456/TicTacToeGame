let btn = document.querySelectorAll('.button');
let restart = document.getElementById('restart');
let modal = document.querySelector(".popup");
let newBtn = document.getElementById("new-game");
let message = document.getElementById("message");

let winPat = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];

let x = true;
let sum = 0;

const dBtn = () => {
    btn.forEach((element) => (element.disabled = true));

    
    modal.classList.remove("hide");
};

const enableButtons = () => {
    btn.forEach((element) => {
      element.innerText = "";
      element.disabled = false;
    });

    
    modal.classList.add("hide");
  }


  const winFunc = (letter) => {
      dBtn();

      if(letter == "X") {
        message.innerHTML = "&#x1F389; <br> 'X' Wins";
      } else {
        message.innerHTML = "&#x1F389; <br> 'O' Wins";
      }
  }


const drawFunc = () => {
    dBtn();

    message.innerHTML = "&#x1F60E; <br> It's a Draw";
}

const winPeople = () => {

    winPat.forEach((index) => {
        let [e1, e2, e3] = [
            btn[index[0]].innerText,
            btn[index[1]].innerText,
            btn[index[2]].innerText,
        ];

        if (e1 !== "" && (e2 !== "") & (e3 !== "")) {
            if (e1 == e2 && e2 == e3) {

                winFunc(e1);
            }
        }
    })

}


newBtn.addEventListener('click', () => {
    sum = 0; 
    enableButtons();
});


restart.addEventListener('click', () => {
    sum = 0;
    enableButtons();
})

btn.forEach((element) => {
    element.addEventListener('click', () => {
        if (x) {
            x = false;
            element.innerText = 'X';
            element.disabled = true;
        } else {
            x = true;
            element.innerText = 'O';
            element.disabled = true;
        }

        sum += 1;

        if (sum == 9) {
            drawFunc();
        }

        winPeople();

    })
})

window.onload = enableButtons;
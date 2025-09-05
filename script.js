let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const gencompchoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};
const drawgame = () => {
    msg.innerText = "Game was draw play again";
    msg.style.backgroundColor = "black";
}
const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    if (userchoice === compchoice)
        //draw
        drawgame();
    else {
        let userwin = true;
        if (userchoice === "Rock") {
            userwin = compchoice === "Paper" ? false : true;
        }
        else {
            userwin = compchoice === "Scissors" ? false : true;
        }
        showwinner(userwin);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
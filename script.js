const content = [
  { img: "./photo/astronomy.jpg", info: "When I'm not immersed in coding, you'll often find me gazing up at the stars, captivated by the wonders of the universe. Astronomy is not just a hobby for me; it's a passion that fuels my curiosity and inspires me to explore the infinite mysteries of the cosmos." },
  { img: "./photo/politics.jpg", info: "Keeping a keen eye on the ever-evolving landscape of politics is another facet of my interests. Understanding the dynamics of governance, policy-making, and societal trends fascinates me as I strive to stay informed and engaged in shaping the world around me." },
  { img: "./photo/walking.jpg", info: "Beyond the screen and the keyboard, I find solace in the simple act of walking amidst nature's beauty. Whether it's a leisurely stroll through the woods or a hike up a mountain trail, being outdoors rejuvenates my spirit and connects me with the natural world." },
];

const image = document.querySelector(".tab-img");
const info = document.querySelector(".tab-info");

const changeTab = (tab) => {
  if (tab === "content1") {
    image.innerHTML = `<img src=${content[0].img} alt="Astronomy">`;
    info.innerHTML = `<p>${content[0].info}</p>`;
  }

   if (tab === "content2") {
    image.innerHTML = `<img src=${content[1].img} alt="Politics">`;
    info.innerHTML = `<p>${content[1].info}</p>`;
  }

  if (tab === "content3") {
    image.innerHTML = `<img src=${content[2].img} alt="Walking">`;
    info.innerHTML = `<p>${content[2].info}</p>`;
  }
};

/*----------------------------------*/

const computer = document.querySelector("#computer");

const arr = {
  rock: '<i class="fa-solid fa-hand-back-fist"></i>',
  paper: '<i class="fa-solid fa-toilet-paper"></i>',
  scissors: '<i class="fa-solid fa-scissors"></i>',
}

const choise = (player_choice) => {
  const computerChoice = Object.keys(arr)[Math.floor(Math.random() * Object.keys(arr).length)];


  if (player_choice === computerChoice) {
    computer.innerHTML = arr[computerChoice];
    window.alert("Tie");
  }

  if (player_choice === "rock" && computerChoice === "scissors") {
    computer.innerHTML = arr[computerChoice];
    window.alert("You win");
  }

  if (player_choice === "paper" && computerChoice === "rock") {
    computer.innerHTML = arr[computerChoice];
    window.alert("You win");
  }

  if (player_choice === "scissors" && computerChoice === "paper") {
    computer.innerHTML = arr[computerChoice];
    window.alert("You win");
  }

  if (player_choice === "scissors" && computerChoice === "rock") {
    computer.innerHTML = arr[computerChoice];
    window.alert("You lose");
  }

  if (player_choice === "rock" && computerChoice === "paper") {
    computer.innerHTML = arr[computerChoice];
    window.alert("You lose");
  }

  if (player_choice === "paper" && computerChoice === "scissors") {
    computer.innerHTML = arr[computerChoice];
    window.alert("You lose");
  }
}

/*----------------------------------*/


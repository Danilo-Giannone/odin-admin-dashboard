let projectContainer = document.querySelector("div.projects div.container");
let announcementContainer = document.querySelector("div.announcement div.container");
let trendingContainer = document.querySelector("div.trending div.container");

let projectTitle = [
    "Super Cool Project",
    "Less Cool Project",
    "impossible App",
    "Easy Peasy App",
    "Ad Blocker",
    "Money maker"
];

let projectBody = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia cupiditate voluptate eum, exercitationem doloremque deleniti adipisci fugiat dolorum fugit? ",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia cupiditate voluptate eum, exercitationem doloremque deleniti adipisci fugiat dolorum fugit? ",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia cupiditate voluptate eum, exercitationem doloremque deleniti adipisci fugiat dolorum fugit? ",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia cupiditate voluptate eum, exercitationem doloremque deleniti adipisci fugiat dolorum fugit? ",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia cupiditate voluptate eum, exercitationem doloremque deleniti adipisci fugiat dolorum fugit? ",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia cupiditate voluptate eum, exercitationem doloremque deleniti adipisci fugiat dolorum fugit? ",
];

let announcementTitle = [
    "Site Maintenance",
    "Community Share Day",
    "Update Privacy Policy"
];

let announcementBody = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia cupiditate voluptate eum, exercitationem doloremque deleniti adipisci fugiat dolorum fugit?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia cupiditate voluptate eum, exercitationem doloremque deleniti adipisci fugiat dolorum fugit?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia cupiditate voluptate eum, exercitationem doloremque deleniti adipisci fugiat dolorum fugit?",
];

let trendingName = [
    "@tegan",
    "@morgan",
    "@kendall",
    "@alex"
];

let trendingTitle = [
    "World Peace Builder",
    "Super Cool Project",
    "Life Changing App",
    "No Traffic Maker"
];

for (let i = 0; i < projectTitle.length; i++) {
    createCard(i);
}

function createCard(i) {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("cardbody");

    let cardTitle = document.createElement("div");
    cardTitle.classList.add("cardtitle");
    cardTitle.textContent = projectTitle[i];
    cardBody.appendChild(cardTitle);

    let cardContent = document.createElement("div");
    cardContent.classList.add("cardcontent");
    cardContent.textContent = projectBody[i];
    cardBody.appendChild(cardContent);

    let cardActions = document.createElement("div");
    cardActions.classList.add("cardaction");

    let star = document.createElement("img");
    star.classList.add("star");
    star.src = "./assets/icons/star_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
    cardActions.appendChild(star);

    let eye = document.createElement("img");
    eye.classList.add("eye");
    eye.src = "./assets/icons/visibility_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
    cardActions.appendChild(eye);

    let share = document.createElement("img");
    share.classList.add("share");
    share.src ="./assets/icons/share_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
    cardActions.appendChild(share);

    cardBody.appendChild(cardActions);

    card.appendChild(cardBody);

    projectContainer.appendChild(card);
}
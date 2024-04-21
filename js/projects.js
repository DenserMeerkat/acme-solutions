let areMoreCardsShown = false;

function updateUrlParams(params) {
  const url = new URL(window.location);
  url.search = new URLSearchParams(params).toString();
  window.history.pushState({}, "", url);
}

function getUrlParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function initStateFromUrl() {
  const paramValue = getUrlParam("showMore");
  if (paramValue === "true") {
    areMoreCardsShown = true;
  }
}

initStateFromUrl();

function getMaxHeight() {
  const screenWidth = window.innerWidth;
  let maxHeight = "none";
  if (screenWidth <= 640) {
    maxHeight = "1600px";
  } else {
    maxHeight = "600px";
  }
  return maxHeight;
}

const cardData = [
  {
    image: "../assets/images/9.webp",
    title: "SmartHome IoT Integration",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "June 2023",
  },
  {
    image: "../assets/images/10.webp",
    title: "Network Setup & Security",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "July 2023",
  },
  {
    image: "../assets/images/11.webp",
    title: "FoodieFusion Recipe Sharing",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "Aug 2023",
  },
  {
    image: "../assets/images/12.webp",
    title: "HealthTrack Fitness App",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "May 2023",
  },
];

const showMoreButton = document.getElementById("show-more");
const projectsContainer = document.querySelector(".projects");
const projectsFooter = document.querySelector(".projects-footer");
const shadowOverlay = document.querySelector(".shadow-overlay");

document.addEventListener("DOMContentLoaded", function () {
  if (areMoreCardsShown) {
    appendCards(cardData);
    showMoreButton.textContent = "Show Less";
    projectsContainer.style.maxHeight = "none";
    shadowOverlay.style.display = "none";
    projectsFooter.style.paddingTop = "2rem";
  }

  function createCardElement(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
          <div class="image">
              <img src="${card.image}" alt="${card.title} Thumbnail" loading="lazy">
          </div>
          <div class="content">
              <h3>${card.title}</h3>
              <p>${card.description}</p>
          </div>
          <div class="footer">
              <span class="date">${card.date}</span>
              <a href="#">View Project</a>
          </div>
      `;
    return cardElement;
  }

  function appendCards(cards) {
    cards.forEach((card) => {
      const cardElement = createCardElement(card);
      projectsContainer.appendChild(cardElement);
    });
  }

  function removeAdditionalCards() {
    const children = projectsContainer.children;
    const startIndex = children.length - 4;
    let count = 0;
    while (count < 4 && children.length > 0) {
      projectsContainer.removeChild(children[startIndex]);
      count++;
    }
  }

  showMoreButton.addEventListener("click", function () {
    if (!areMoreCardsShown) {
      appendCards(cardData);
      this.textContent = "Show Less";
      areMoreCardsShown = true;
      projectsContainer.style.maxHeight = "none";
      shadowOverlay.style.display = "none";
      projectsFooter.style.paddingTop = "2rem";
      updateUrlParams({ showMore: true });
    } else {
      removeAdditionalCards(cardData);
      this.textContent = "Show More";
      areMoreCardsShown = false;
      projectsContainer.style.maxHeight = getMaxHeight();
      shadowOverlay.style.display = "block";
      projectsFooter.style.paddingTop = "0";
      updateUrlParams({ showMore: false });
    }
  });
});

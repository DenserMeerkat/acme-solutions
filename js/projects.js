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

const cardData = [
  {
    image: "https://source.unsplash.com/sv8oOQaUb-o",
    title: "SwiftStream Mobile App",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "Jan 2023",
  },
  {
    image: "https://source.unsplash.com/ONQeqIIF4nY",
    title: "Cloudify SaaS Platform",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "Feb 2023",
  },
  {
    image: "https://source.unsplash.com/hpjSkU2UYSU",
    title: "MarketPro E-commerce",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "Mar 2023",
  },
  {
    image: "https://source.unsplash.com/JKUTrJ4vK00",
    title: "AI Insights Dashboard",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "Apr 2023",
  },
  {
    image: "https://source.unsplash.com/IrRbSND5EUc",
    title: "DataDive Analytics",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "Sep 2023",
  },
  {
    image: "https://source.unsplash.com/EUsVwEOsblE",
    title: "SecureNet Cybersecurity",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "Oct 2023",
  },
  {
    image: "https://source.unsplash.com/OqtafYT5kTw",
    title: "DevOps Automation",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "Nov 2023",
  },
  {
    image: "https://source.unsplash.com/w7ZyuGYNpRQ",
    title: "IT Consultancy Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "Dec 2023",
  },
  {
    image: "https://source.unsplash.com/anapPhJFRhM",
    title: "SmartHome IoT Integration",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "June 2023",
  },
  {
    image: "https://source.unsplash.com/40XgDxBfYXM",
    title: "Network Setup & Security",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "July 2023",
  },
  {
    image: "https://source.unsplash.com/mmsQUgMLqUo",
    title: "FoodieFusion Recipe Sharing",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "Aug 2023",
  },
  {
    image: "https://source.unsplash.com/bOhKb8e0Iks",
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
  } else {
    removeAdditionalCards(cardData);
    projectsContainer.style.maxHeight = "600px";
    shadowOverlay.style.display = "block";
    projectsFooter.style.paddingTop = "0";
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
    while (projectsContainer.firstChild)
      projectsContainer.removeChild(projectsContainer.firstChild);
    cards.forEach((card) => {
      const cardElement = createCardElement(card);
      projectsContainer.appendChild(cardElement);
    });
  }

  function removeAdditionalCards(cards) {
    while (projectsContainer.firstChild)
      projectsContainer.removeChild(projectsContainer.firstChild);
    const slicedCards = cards.slice(0, 8);
    slicedCards.forEach((card) => {
      const cardElement = createCardElement(card);
      projectsContainer.appendChild(cardElement);
    });
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
      projectsContainer.style.maxHeight = "600px";
      shadowOverlay.style.display = "block";
      projectsFooter.style.paddingTop = "0";
      updateUrlParams({ showMore: false });
    }
  });
});

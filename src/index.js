const baseUrl = 'https://rickandmortyapi.com/api/';
const mountNode = document.getElementById('js-mount');
const modalMountNode = document.getElementById('js-modal-mount');

async function charFecth(url) {
  const response = await fetch(`${url}character`);
  const { results: characters } = await response.json();
  return characters;
}

let cardCounter = 0;
const overlay = document.querySelector('#overlay');
const toggleModal = (card, overlay) => {
  //TOGGLE MODAL CARD
  card.classList.toggle('hidden');
  card.classList.toggle('flex');
  //TOGGLE OVERLAY
  overlay.classList.toggle('hidden');
  overlay.classList.toggle('flex');
};

async function buildGrid() {
  charFecth(baseUrl)
    // GENERATE CARDS AND MODAL
    .then((characters) => {
      const cardNodeArray = characters.map((character) => {
        //CLOSE BUTTON
        const button = document.createElement('button');
        button.dataset.closeButton = '';
        button.id = `closeButton-${character.id}`;
        button.innerText = '\u0058'; //ADD and "X"
        button.className =
          'text-gray-200 self-end cursor-pointer border-none outline-none font-bold bg-none ';

        const image = document.createElement('img');
        image.loading = 'lazy';
        image.className =
          'char-pic h-2/5 w-3/4 mb-8 md:h-48 md:w-48 rounded-lg  md:mx-0 md:mr-6';
        image.src = `${character.image}`;

        //PERSONAL INFO
        const name = document.createElement('h2');
        name.className = 'text-lg md:text-xl lg:text-2xl text-gray-200';
        name.textContent = character.name;

        const species = document.createElement('div');
        species.className = 'text-yellow-200';
        species.textContent = character.species;

        const origin = document.createElement('div');
        origin.className = 'text-yellow-200';
        origin.textContent = character.origin.name;

        const personalInfo = document.createElement('div');
        personalInfo.className = 'text-center md:text-left';
        personalInfo.appendChild(name);
        personalInfo.appendChild(species);
        personalInfo.appendChild(origin);

        //STATUS AND LOCATION
        const status = document.createElement('div');
        status.className = 'text-yellow-200';
        status.textContent = character.status;

        const location = document.createElement('div');
        location.className = 'text-yellow-200';
        location.textContent = character.location.name;

        const statusAndLocation = document.createElement('div');
        statusAndLocation.className = 'text-center md:text-left';
        statusAndLocation.appendChild(status);
        statusAndLocation.appendChild(location);

        const card = document.createElement('div');
        card.id = `modal-${character.id}`;
        card.className = `w-1/2 h-4/6 flex-col items-center bg-gray-700 rounded-lg p-6  transform hidden`;

        const miniCard = document.createElement('div');
        miniCard.className = ' w-4/5 flex flex-col items-center';

        card.appendChild(button);
        card.appendChild(miniCard);
        miniCard.appendChild(image);
        miniCard.appendChild(personalInfo);
        miniCard.appendChild(statusAndLocation);

        return card;
      });
      modalMountNode.append(...cardNodeArray);

      const gridNodeArray = characters.map((character) => {
        // Create image node
        // <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="avatar.jpg">
        const image = document.createElement('img');
        image.loading = 'lazy';
        image.className =
          'char-pic  w-2/6 md:w-2/5 rounded-lg  md:mx-0 md:mr-6';
        image.src = `${character.image}`;

        // Create heading
        const name = document.createElement('h2');
        name.className =
          'char-name text-lg md:text-xl lg:text-2xl text-gray-200';
        name.textContent = character.name;

        // Create Price
        const status = document.createElement('div');
        status.className = 'char-status text-yellow-200';
        status.textContent = character.status;

        // Wrap price & title
        const nameAndStatus = document.createElement('div');
        nameAndStatus.className = 'text-center md:text-left';
        nameAndStatus.appendChild(name);
        nameAndStatus.appendChild(status);

        // Wrap Img and priceAndTitle
        const card = document.createElement('div');
        card.dataset.openButton = '';
        card.id = character.id;
        card.className =
          'cursor-pointer gallery-card flex justify-around items-center bg-gray-800 rounded-lg p-6 hover:bg-gray-600  ';
        card.appendChild(image);
        card.appendChild(nameAndStatus);

        return card;
      });
      mountNode.append(...gridNodeArray);
    });
}

buildGrid();

// LISTENERS
mountNode.addEventListener('click', (event) => {
  try {
    if (cardCounter < 1 || event.target.hasAttribute('data-open-button')) {
      const cardIndex = event.path.indexOf(mountNode) - 1;
      if (cardIndex > -1) {
        const selectedCardIndex = event.path[cardIndex].id;
        const modalToToggle = document.querySelector(
          `#modal-${selectedCardIndex}`
        );
        cardCounter++;
        toggleModal(modalToToggle, overlay);
      }
    }
  } catch (e) {
    return;
  }
});

modalMountNode.addEventListener('click', (event) => {
  const cardIndex = event.path.indexOf(modalMountNode) - 1;
  const selectedCard = event.path[cardIndex];

  try {
    if (event.target.hasAttribute('data-close-button')) {
      cardCounter--;
      toggleModal(selectedCard, overlay);
    }
  } catch (e) {
    return;
  }
});

// //OVERLAY LISTENER
//   overlay.addEventListener('click', () => {
//     console.log(event);
//     const cardIndex = event.path.indexOf(modalMountNode) - 1;
//     const selectedCard = event.path[cardIndex];
//     console.log(cardIndex);
//     if (cardIndex === 1) {
//       cardCounter--;
//       toggleModal(selectedCard, overlay);
//     }
//   });

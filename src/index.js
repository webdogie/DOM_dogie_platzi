const baseUrl = 'https://rickandmortyapi.com/api/';
const mountNode = document.getElementById('js-mount');
const modalMountNode = document.getElementById('js-modal-mount');

async function charFecth(url) {
  const response = await fetch(`${url}character`);
  const { results: characters } = await response.json();
  return characters;
}

async function buildGrid() {
  charFecth(baseUrl)
    // GENERATE CARDS AND MODAL
    .then((characters) => {
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

      const cardNodeArray = characters.map((character) => {
        //CLOSE BUTTON
        const button = document.createElement('button');
        button.dataset.closeButton = '';
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
        card.className = `w-4/6 h-4/6  flex-col items-center bg-gray-700 rounded-lg p-6  transform hidden`;

        const miniCard = document.createElement('div');
        miniCard.className = 'flex flex-col items-center';

        card.appendChild(button);
        card.appendChild(miniCard);
        miniCard.appendChild(image);
        miniCard.appendChild(personalInfo);
        miniCard.appendChild(statusAndLocation);

        //ADD LISTENERS
        button.addEventListener('click', () => {
          cardCounter--;
          toggleModal(card, overlay);
          console.log('Click close');
        });

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
        // <h2 class="text-lg">Erin Lindford</h2>
        const name = document.createElement('h2');
        name.className =
          'char-name text-lg md:text-xl lg:text-2xl text-gray-200';
        name.textContent = character.name;

        // Create Price
        // <div class="text-gray-600">(555) 765-4321</div>
        const status = document.createElement('div');
        status.className = 'char-status text-yellow-200';
        status.textContent = character.status;

        // Wrap price & title
        // <div class="text-center md:textflex bg-white   rounded-lg p-6 hover:bg-gray-600 bg-gray-800-left"><price ><title ></div>
        const nameAndStatus = document.createElement('div');
        nameAndStatus.className = 'text-center md:text-left';
        nameAndStatus.appendChild(name);
        nameAndStatus.appendChild(status);

        // Wrap Img and priceAndTitle
        // <div class="md:flex bg-white rounded-lg p-6">
        const card = document.createElement('div');
        card.id = `card-${character.id}`;
        card.className =
          'cursor-pointer gallery-card flex justify-around items-center bg-gray-800 rounded-lg p-6 hover:bg-gray-600 ';
        card.appendChild(image);
        card.appendChild(nameAndStatus);

        //ADD LISTENER
        const modalToToggle = document.querySelector(`#modal-${character.id}`);
        card.addEventListener('click', () => {
          if (cardCounter > 0) {
            return;
          } else if (cardCounter === 0) {
            cardCounter++;
            toggleModal(modalToToggle, overlay);
            console.log('Click open');
          }
        });

        return card;
      });
      mountNode.append(...gridNodeArray);
    });
}

buildGrid();

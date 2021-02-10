const baseUrl = "https://rickandmortyapi.com/";
const mountNode = document.getElementById("js-mount");

const formatPrice = (price) =>
  new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

!(async function () {
  const response = await fetch(`${baseUrl}/api/character`);
  // 💡 More about Spread: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  const { results: results } = await response.json();

  // Create the HTML Nodes for each avocado we receive from the API
  // 💡 More about Array.map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  const nodeArray = results.map((character) => {
    // Create image node
    // <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="avatar.jpg">
    const image = document.createElement("img");
    image.className = "h-28 w-28 md:h-32 md:w-32 rounded-lg  md:mx-0 md:mr-6";
    image.src = `${character.image}`;

    // Create heading
    // <h2 class="text-lg">Erin Lindford</h2>
    const name = document.createElement("h2");
    name.className = "text-lg md:text-xl lg:text-2xl text-gray-200";
    name.textContent = character.name;

    // Create Price
    // <div class="text-gray-600">(555) 765-4321</div>
    const status = document.createElement("div");
    status.className = "text-yellow-200";
    status.textContent = character.status;

    // Wrap price & title
    // <div class="text-center md:textflex bg-white rounded-lg p-6 hover:bg-gray-600 bg-gray-800-left"><price ><title ></div>
    const nameAndStatus = document.createElement("div");
    nameAndStatus.className = "text-center md:text-left";
    nameAndStatus.appendChild(name);
    nameAndStatus.appendChild(status);

    // Wrap Img and priceAndTitle
    // <div class="md:flex bg-white rounded-lg p-6">
    const card = document.createElement("div");
    card.className =
      "flex justify-around items-center bg-gray-800 rounded-lg p-6 hover:bg-gray-600 ";
    card.appendChild(image);
    card.appendChild(nameAndStatus);

    return card;
  });

  // Trick: Apply an array as a list of arguments
  mountNode.append(...nodeArray);
})();

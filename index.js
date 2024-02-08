const names = [
  "Bob",
  "Cailey",
  "Addy",
  "Robin",
  "BillyBob",
  "Wayne",
  "Nikki",
  "G-G",
];
const prices = [30, 50, 90, 150, 40, 70, 10, 250];
const occupations = [
  "Writer",
  "Teacher",
  "Programmer",
  "Developer",
  "Student",
  "Assistant",
  "Janitor",
  "Coach",
];
// --- State -----
const state = {
  persons: [
    { names: "Alice", occupations: "Writer", prices: 50 },
    { names: "Bob", occupations: "Teacher", prices: 30 },
  ],
  average: 0,
};
const maxPersons = 9;

function selectRandomElement(persons) {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = prices[Math.floor(Math.random() * prices.length)];
  state.persons.push({
    names: randomName,
    occupations: randomOccupation,
    prices: randomPrice,
  });
}

function updateAveragePrice(state) {
  const total = state.persons.reduce((acc, person) => acc + person.prices, 0);
  state.average = total / state.persons.length;
  // return total;
}

function renderFreelancers(persons) {
  const $persons = persons.map((person) => {
    const $tr = document.createElement("tr");
    $tr.innerHTML = `<td>${person.names}</td>
    <td>${person.occupations}</td>
    <td>${person.prices}</td>`;
    return $tr;
  });

  const $td = document.querySelector("#people");
  $td.replaceChildren(...$persons);
}
function render(state) {
  renderFreelancers(state.persons);
}

function renderAveragePrices(price) {
  const $prices = document.querySelector(".average_price");
  $prices.innerHTML = `<span>$${price.toFixed(2)}</span>`;
}

function render(state) {
  renderFreelancers(state.persons);
  renderAveragePrices(state.average);
}

const addFreelancerInterval = setInterval(function () {
  selectRandomElement(state);
  if (state.persons.length >= maxPersons) {
    clearInterval(addFreelancerInterval);

    setTimeout(() => alert("Too many freelancers! STAAAAAHHHPPP!!!"), 1000);
  }
  updateAveragePrice(state);
  render(state);
}, 2000);

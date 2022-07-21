const main = document.getElementById('main');
const addUser = document.getElementById('add_user');
const doubleMoney = document.getElementById('double');
const sort = document.getElementById('sort');
const show_millonaries = document.getElementById('show_millonaries');
const calculate = document.getElementById('calculate');

let data = [];

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser);
}
function addData(obj){
    data.push(obj);
    updateDom()
}

function updateDom(provided = data){
    main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>";

    provided.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong>${formatMoney(item.money)}`;
        main.appendChild(element);
    })
}

function ShowMillonaries(){
    data = data.filter(user => user.money > 500000)
    updateDom()
}

function calculateWealth(){
    const wealth = data.reduce((acc, user) => (acc+= user.money),0)

    const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
}

function DobleMoney(){
    data = data.map(user => {
        return {...user, money: user.money * 2}
    })
    updateDom()
}

function SortByRichest(){
    data.sort((a, b) => b.money - a.money)
    updateDom()
}

function formatMoney(number) {
    return '₹' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  addUser.addEventListener('click', getRandomUser);
  doubleMoney.addEventListener('click', DobleMoney);
  sort.addEventListener('click', SortByRichest);
  show_millonaries.addEventListener('click', ShowMillonaries);
  calculate.addEventListener('click', calculateWealth)
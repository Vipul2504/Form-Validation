// const Currency_One = document.getElementById('currency-one');
// const Amount_One = document.getElementById('amount-one');
// const Currency_Two = document.getElementById('currency-two');
// const Amount_Two = document.getElementById('amount-two');

// const rate = document.getElementById('rate');
// const swap = document.getElementById('swap');

// Currency_One.addEventListener('change', calculate)
// Currency_Two.addEventListener('change', calculate)
// Amount_One.addEventListener('input', calculate)
// Amount_Two.addEventListener('input', calculate)

// function calculate(){
//     const Currency_One = Currency_One.value;
//     const Currency_Two = Currency_Two.value;

//     fetch(`https://api.exchangerate-api.com/v4/latest/${Currency_One}`)
//     .then(res => res.json())
//     .then(data => {
//         const rate = data.rates[Currency_Two];
//         rate.innerText  = `1 ${Currency_One} = ${rate} ${Currency_Two}`;
//         Amount_Two.value = (Amount_One.value * rate).toFixed(2);
//     })
// }

// swap.addEventListener('click', ()=> {
//     const temp = Currency_One.value;
//     Currency_One.value = Currency_Two.value;
//     Currency_Two.value = temp;
//     calculate()
// })

const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function caclulate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.rates[currency_two];

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// Event listeners
currencyEl_one.addEventListener('change', caclulate);
amountEl_one.addEventListener('input', caclulate);
currencyEl_two.addEventListener('change', caclulate);
amountEl_two.addEventListener('input', caclulate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  caclulate();
});

caclulate();
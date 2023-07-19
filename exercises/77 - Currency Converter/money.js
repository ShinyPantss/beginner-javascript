const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};
const endpoint = 'https://api.ratesapi.io/latest';
const fromSelect = document.querySelector('[name = "from_currency"]')
const toSelect = document.querySelector('[name = "to_currency"]')

const inputNumber = document.querySelector('[name = "from_amount"]')
const outputNumber = document.querySelector('.to_amount')


function generateOptions(options){
  return Object.entries(options).map(([key,value])=> `<option value="${key}">${key} - ${value}</option>`).join('');
}
const optionsHTML = generateOptions(currencies);


fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;
async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`);
  const rates = await res.json();
  return rates;
}
async function convertMoney(amount ,from ,to ){
    const rateFrom = await fetchRates(from);
    const rateTo = await fetchRates(to);
    const rate = rateTo.rates[to]/rateFrom.rates[from];
    const money = amount * rate
    return money;

}

async function handleInput(){
  const rawAmount = inputNumber.value;
  const rawFromCurrency = fromSelect.value;
  const rawToCurrency = toSelect.value;
  const myMoney = await convertMoney(rawAmount,rawFromCurrency,rawToCurrency)
  console.log(myMoney);
}
fromSelect.addEventListener('input', handleInput);
toSelect.addEventListener('input', handleInput);
inputNumber.addEventListener('input', handleInput);

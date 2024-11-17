/**
 * The process of executing a function with some or all of its arguments. The partially applied function then gets returned for later use.
 * 
 * Why this is helpful?
 * 
 * We might only know certain values when functions are invoked
or we want to pre-bind values.
 */

function multiply(a, b) {
  return a * b;
}

function partial(func, ...fixedArgs) {
  return function (...remainingArgs) {
    return func(...fixedArgs, ...remainingArgs);
  };
}

const double = partial(multiply, 2);
const triple = partial(multiply, 3);

function fetchData(url, apiKey, params) {
  const queryString = new URLSearchParams(params).toString();
  const fullUrl = `${url}?${queryString}`;

  console.log(`Sending request to ${fullUrl}`);
  console.log(`With API key of ${apiKey}`);
}

const myApiKey = "my-secret-api-key";
const myApiUrl = "https://api.mywebsite.com/data";

const googleApiKey = "google-secret-api-key";
const googleApiUrl = "https://api.google.com/data";

const fetchMyAPI = partial(fetchData, myApiUrl, myApiKey);
const fetchGoogle = partial(fetchData, googleApiUrl, googleApiKey);

fetchMyAPI({ id: 1, sort: "desc" });

fetchGoogle({ search: "chicken" });

function calculateTax(rate, amount) {
  const total = rate * amount;
  const rounded = total.toFixed(2);
  return Number(rounded);
}

const calculateCASalesTax = partial(calculateTax, 0.07);
const calculateNJSalesTax = partial(calculateTax, 0.06);

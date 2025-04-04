import { findCurrency, addDivResult, addInfoDiv, loadCurrency } from "./index.js";

const uah = 980;
const euro = 978;

loadCurrency().then((data) => {
    const usdToUah = findCurrency(data, uah, euro);

    addInfoDiv('euro');
    addDivResult(usdToUah.rateBuy.toFixed(1), 'euro');
    addDivResult(usdToUah.rateSell.toFixed(1), 'euro');
});
import { findCurrency, addDivResult, addInfoDiv, loadCurrency } from "./index.js";

const usd = 840;
const uah = 980;

loadCurrency().then((data) => {
    const usdToUah = findCurrency(data, uah, usd);

    addInfoDiv('usd');
    addDivResult(usdToUah.rateBuy.toFixed(1), 'usd');
    addDivResult(usdToUah.rateSell.toFixed(1), 'usd');
});
const currencyUrl = "https://api.monobank.ua/bank/currency";



export function addDivResult(text, divName) {
    const divRes = document.createElement("div");
    divRes.classList.add("currency");
    const textContent = document.createTextNode(text);
    divRes.appendChild(textContent);
    const divAllResults = document.getElementById(divName);
    divAllResults.appendChild(divRes);
};

export function addInfoDiv(name) {
    const divAllResults = document.getElementById(`${name}-info`);
    
    let sign;
    const dict = {
        'usd': '$',
        'euro': '€'
    }; // will be expanded

    sign = dict[name];

    const infoDiv = document.createElement('div');

    const infoH1 = document.createElement('h1');
    const info1 = document.createTextNode(`${sign}`);
    infoH1.appendChild(info1);
    infoH1.classList.add('info')
    const infoH2 = document.createElement('h1');
    const info2 = document.createTextNode(`Купити`);
    infoH2.appendChild(info2);
    infoH2.classList.add('info')
    const infoH3 = document.createElement('h1');
    const info3 = document.createTextNode(`Продати`);
    infoH3.appendChild(info3);
    infoH3.classList.add('info')

    infoDiv.appendChild(infoH1);
    infoDiv.appendChild(infoH2);
    infoDiv.appendChild(infoH3);

    infoDiv.classList.add('info-div');

    console.log(infoDiv.classList); // Перевіряємо, які класи є

    divAllResults.prepend(infoDiv);
};


export function findCurrency(data, currencyA, currencyB) {
    const founded = data.find(element => {
        if (element.currencyCodeA == currencyA && element.currencyCodeB == currencyB ||
            element.currencyCodeA == currencyB && element.currencyCodeB == currencyA) {
            return true;
        }
        return false;
    });

    return founded;
};


export function loadCurrency() {
    return fetch(currencyUrl)
    .then(function(response) {
        if (!response.ok) {
            console.error("Запит не успішний");
            alert('Can not get data from API');
            return;
        }
        return response.json();
    })/* 
    .then(function(data) {
       const usdToUah = findCurrency(data, usd, uah);
        addInfoDiv('usd')
        addDivResult(usdToUah.rateBuy.toFixed(1), 'usd');
        addDivResult(usdToUah.rateSell.toFixed(1), 'usd');
        const euroToUah = findCurrency(data, euro, uah);
        addInfoDiv('euro')
        addDivResult(euroToUah.rateBuy.toFixed(1), 'euro');
        addDivResult(euroToUah.rateSell.toFixed(1), 'euro');

        return data
    }); */
};
const buttonToConvert = document.querySelector(".buttonconvert");

async function convertCurrency() {
    const inputValue = document.querySelector(".input").value;
    const currencyValueToConvert = document.querySelector(".brazilian-real");
    const currencyValueConverted = document.querySelector(".eua-dolar");
    const selectKey = document.querySelector(".select-key").value;
    const textConverted = document.querySelector(".text-convert");

    const data = await fetch("https://economia.awesomeapi.com.br/json/last/:moedas").then(response => response.json())
    
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high

    const convertValue = inputValue / dolarToday;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputValue);

    if (document.querySelector(".select-key").value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(convertValue);
        document.querySelector(".usa-flag").src = "./assets/bandeira-EUA.png";
        document.querySelector(".usa-flag").src = "./assets/bandeira-EUA.png";
        document.querySelector(".text-convert").innerHTML = "Dólar Americano";
    }

    if (document.querySelector(".select-key").value === "euro") {
        const convertValueEuro = inputValue / euroToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(convertValueEuro);

        const textConverted = document.querySelector(".text-convert");
        textConverted.innerHTML = "Euro";

        document.querySelector(".usa-flag").src = "./assets/euro.png";
    }

    if (document.querySelector(".select-key").value === "libra") {
        const convertValueLibra = inputValue / libraToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(convertValueLibra);

        const textConverted = document.querySelector(".text-convert");
        textConverted.innerHTML = "Libra";

        document.querySelector(".usa-flag").src = "./assets/libra.png";
    }

}
    buttonToConvert.addEventListener("click", convertCurrency);

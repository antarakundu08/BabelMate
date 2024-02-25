const selectTag = document.querySelectorAll("select");

// adding languages to dropdown list
selectTag.forEach(tag => {
    for(let country_code in  countries){
        let option = `<option value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});


// handling the onclick event on button
const translateBtn = document.querySelector("button");
translateBtn.addEventListener("click", async () => {
    const fromtr = document.querySelector(".row-from select");
    const totr = document.querySelector(".row-to select");
    const lang1 = fromtr.value;
    const lang2 = totr.value;

    const text1 = document.querySelector(".from-text").value;
    const text2 = document.querySelector(".to-text");
    console.log(text1,lang1.slice(0,2),lang2.slice(0,2));

    const apiUrl = `https://api.mymemory.translated.net/get?q=${text1}&langpair=${lang1.slice(0,2)}|${lang2.slice(0,2)}`;
    const response = await fetch(apiUrl);
    const responseText = await response.json();

    text2.value = responseText.responseData.translatedText;
    console.log(responseText);
});


// handle exchange button click
const exchange = document.querySelector('.exchange');
exchange.addEventListener('click', async () => {
    let lang1 = document.querySelector(".row-from select").value;
    let lang2 = document.querySelector(".row-to select").value;

    let temp = lang1;
    lang1=lang2;
    lang2=temp;

    let text1 = document.querySelector(".from-text").value;
    let text2 = document.querySelector(".to-text").value;
    temp = text2;
    text2 = text1;
    text1 = temp;

    document.querySelector(".from-text").value = text1;
    document.querySelector(".to-text").value = text2;

    console.log(text1, text2, lang1.slice(0,2),lang2.slice(0,2));

    const apiUrl = `https://api.mymemory.translated.net/get?q=${text1}&langpair=${lang1.slice(0,2)}|${lang2.slice(0,2)}`;
    const response = await fetch(apiUrl);
    const responseText = await response.json();

    text2.value = responseText.responseData.translatedText;
    console.log(responseText);
});
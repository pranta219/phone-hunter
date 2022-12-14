// Phone Search Field//
let searchPhone = () => {
    let searchField = document.getElementById('input');
    let searchText = searchField.value;

    let error = document.getElementById('error');

    searchField.value = '';
    if (searchText != "") {
        let url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;


        fetch(url)
            .then(res => res.json())
            .then(search => displaySearchResult(search.data))
        error.innerText = "";
    }
    else {
        error.innerText = 'Please Insert a value.'
    }
}

// Phone Search Result//
let displaySearchResult = data => {

    let SearchResult = document.getElementById('search-result');
    SearchResult.innerHTML = '';
    let emptySeach = document.getElementById('empty-search');
    let textSomething = document.getElementById('text');
    if (data.length != 0) {
        data.forEach(data => {

            let div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `<div class="card shadow-lg p-2 mb-4">
                <img src="${data.image}" class="card-img-top img-width" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.phone_name}</h5>
                <h6 class="card-text">BRAND : ${data.brand}</h6>
                <button onclick="phoneDetail('${data.slug}')" type="button" class="btn btn-outline-secondary">See Details</button>
            </div>
        </div>
            `
            SearchResult.appendChild(div);
        })
        emptySeach.innerText = '';
        textSomething.innerText = "";
    }
    else {
        emptySeach.innerText = 'Can\'t find any mobile.'
    }
}

// Phone Details Show//
let phoneDetail = phoneId => {


    let url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;

    fetch(url)
        .then(res => res.json())
        .then(detail => displayPhoneDetail(detail.data))
}
let displayPhoneDetail = phone => {


    let mainDiv = document.getElementById('phone-details')
    mainDiv.textContent = "";
    let div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${phone.name}</h5>
        <h6>Release: ${phone.releaseDate}</h6>
        <h6>Storage: ${phone.mainFeatures.storage}</h6>
        <h6>Display: ${phone.mainFeatures.displaySize}</h6>
        <h6>Chipset: ${phone.mainFeatures.chipSet}</h6>
        <h6>Sensors: ${phone.mainFeatures.sensors}</h6>
        <h6>Memory: ${phone.mainFeatures.memory}</h6>
        <h6>Wlan: ${phone.others.WLAN}</h6>
        <h6>Bluetooth: ${phone.others.Bluetooth}</h6>
        <h6>GPS: ${phone.others.GPS}</h6>
        <h6>NFC: ${phone.others.NFC}</h6>
        <h6>Radio: ${phone.others.Radio}</h6>
        <h6>USB: ${phone.others.USB}</h6>
       
    </div>
    `;
    mainDiv.appendChild(div);

}
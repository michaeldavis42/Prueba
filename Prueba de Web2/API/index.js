const API_URL = 'https://api.boostr.cl/pharmacies/24h.json';

const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');

fetch('${API_URL}')
.then((response) => response.json())
.then((users) =>  {
    user.forEach((user) => {
        let elem = document.createElement("li");
        elem.appendChild(
            document.createTextNode(`${user.id} ${data.name}`)
        );
        ul.appendChild(elem);
    });

    HTMLResponse.appendChild(ul);
});
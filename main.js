const api = "https://www.breakingbadapi.com/api/characters";
async function getData() {
  try {
    const response = await fetch(api);
    const data = await response.json();
    displayData(data);
  } catch (e) {
    console.log(e.message);
  }
};

function displayData(data) {
  const header = document.querySelector("#header");
  const content = document.querySelector("#content");

  header.innerHTML += 
  `
  <select style="margin-bottom: 30px; margin-top: 20px" class="form-control" onchange="getCharacter(this.value)">
  <option>Please Select</option>
    ${data.map( character => `<option>${character.name}</option>` )}
  </select>
  `
}

async function getCharacter(name) {
  const response = await fetch(`${api}?name=${name}`);
  const data = await response.json();
  
  if(name != 'Please Select') {
    content.innerHTML = 
    `
    <h2>${data[0].name} (${data[0].nickname})</h2>
    <h4>Actor : ${data[0].portrayed}</h4>
    <img src="${data[0].img}" width="250" />
    `
  }
}

getData(api);
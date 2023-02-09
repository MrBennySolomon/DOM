const table = document.getElementById('table');

const people = [];
const planet = [];

const fetchData = async (i) => {
try {
  const responsePeople = await fetch(`https://swapi.dev/api/people/${i}/`);
  if(!responsePeople.ok) {
    throw new Error({message:"no response people"});
  }
  const dataPeople = await responsePeople.json()
  people.push(dataPeople);

  const responsePlanet = await fetch(`https://swapi.dev/api/planets/${i}/`);
  if(!responsePlanet.ok) {
    throw new Error({message:"no response planet"});
  }
  const dataPlanet = await responsePlanet.json()
  planet.push(dataPlanet);

  if (i === 10) {
    await updateUI();
  }
} catch (error) {
  throw new Error(error.message);
}

    

};

for (let i = 1; i <= 10; i++) {
  fetchData(i);
}



const updateUI = async () => {
  console.log('people', people);
  for (let i = 0; i < 10; i++) {
    
    table.innerHTML += 
    `
    <tr>
    
      <td class="td">${people[i].name}</td>
      <td class="td">${people[i].hair_color}</td>
      <td class="td">${people[i].height}</td>
      <td class="td">${planet[i].name}</td>
      <td class="td">${planet[i].population}</td>
    </tr>
    `
  }

}


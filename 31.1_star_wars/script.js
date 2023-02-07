// 1. Name
// 2. Height
// 3. Hair Color
// 4. The planet they came from
// 5. Planet population

const dataArr = [
[document.getElementById('name1'), document.getElementById('hair1'), document.getElementById('height1'), document.getElementById('planet-name1'), document.getElementById('planet-population1')],
[document.getElementById('name2'), document.getElementById('hair2'), document.getElementById('height2'), document.getElementById('planet-name2'), document.getElementById('planet-population2')],
[document.getElementById('name3'), document.getElementById('hair3'), document.getElementById('height3'), document.getElementById('planet-name3'), document.getElementById('planet-population3')],
[document.getElementById('name4'), document.getElementById('hair4'), document.getElementById('height4'), document.getElementById('planet-name4'), document.getElementById('planet-population4')],
[document.getElementById('name5'), document.getElementById('hair5'), document.getElementById('height5'), document.getElementById('planet-name5'), document.getElementById('planet-population5')],
[document.getElementById('name6'), document.getElementById('hair6'), document.getElementById('height6'), document.getElementById('planet-name6'), document.getElementById('planet-population6')],
[document.getElementById('name7'), document.getElementById('hair7'), document.getElementById('height7'), document.getElementById('planet-name7'), document.getElementById('planet-population7')],
[document.getElementById('name8'), document.getElementById('hair8'), document.getElementById('height8'), document.getElementById('planet-name8'), document.getElementById('planet-population8')],
[document.getElementById('name9'), document.getElementById('hair9'), document.getElementById('height9'), document.getElementById('planet-name9'), document.getElementById('planet-population9')],
[document.getElementById('name10'), document.getElementById('hair10'), document.getElementById('height10'), document.getElementById('planet-name10'), document.getElementById('planet-population10')]];

const people = [];
const planet = [];

const fetchData = async (i) => {
    const response = await fetch(`https://swapi.dev/api/people/${i}/`);
    const response2 = await fetch(`https://swapi.dev/api/planets/${i}/`);
    const data = await response.json()
    const data2 = await response2.json()
    people.push(data);
    planet.push(data2);
    if (i === 10) updateUI();
};

    



for (let i = 1; i <= 10; i++) {
  fetchData(i);
}

console.log(people);
console.log(planet);

const updateUI = async  () => {

  for (let i = 0; i < 10; i++) {
    dataArr[i][0].textContent = people[i].name;
    dataArr[i][1].textContent = people[i].hair_color;
    dataArr[i][2].textContent = people[i].height;
    dataArr[i][3].textContent = planet[i].name;
    dataArr[i][4].textContent = planet[i].population;
  }
}


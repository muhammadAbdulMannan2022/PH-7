const URL = "https://restcountries.com/v3.1";
const cuntryDetails = document.getElementById("cuntryDetails");

function serchByName(name) {
  fetch(`${URL}/name/${name}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const {
        altSpellings,
        area,
        borders,
        capital,
        cca2,
        coatOfArms,
        currencies,
        flag,
        independent,
        languages,
        latlng,
        region,
        timezones,
        population,
      } = data[0];
      console.log(
        altSpellings,
        area,
        borders,
        capital,
        cca2,
        coatOfArms,
        currencies,
        flag,
        independent,
        languages,
        latlng,
        region,
        timezones,
        population
      );
      let lang = [];
      for (const key in languages) {
        const element = languages[key];
        lang.push(element);
      }
      let a = `
        <div id="name">${altSpellings[1]}</div>
        <div id="area">${area}<sup>2</sup>km</div>
        <div id="population">${population}</div>
        <div id="borderWith">${borders.join(", ")}</div>
        <div id="capital">${capital}</div>
        <div id="cca2">${cca2}</div>
        <div id="coatOfArms">
          <img
            src="${coatOfArms.png}"
            alt="coat of arms"
          />
        </div>
        <div id="currencies">${currencies.BDT.name} ${
        currencies.BDT.symbol
      }</div>
        <div id="flag">${flag}</div>
        <div id="independent">${
          independent ? "indipendent" : "not indipendent"
        }</div>
        <div id="languages">${lang.join(", ")}</div>
        <div id="latAndLan">${latlng[0]},${latlng[1]}</div>
        <div id="region">${region}</div>
        <div id="timeZone">${timezones.join(", ")}</div>
        `;
      cuntryDetails.innerHTML = a;
    })
    .catch((err) => console.log(err));
}
serchByName("bangladesh");

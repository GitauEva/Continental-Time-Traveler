//ASIA;
function displayAsia(event) {
  const selectedCountry = event.target.value;

  let asiaMessage = document.getElementById("asia-message");

  asiaMessage.textContent = `Hello and welcome to Asia! Did you know that this vibrant
                  continent is home to more than 2,300 languages? That’s a lot
                  of ways to say ‘hello’! Ready to explore? Just select a
                  country from the list, and I’ll share the current day, time,
                  and date. Let’s discover what time it is in this wonderful
                  world of diversity!`;

  let asiaTimeZones = [
    {
      country: "Japan",
      countryTimeZone: moment.tz("Asia/Tokyo"),
      countryDay: moment.tz("Asia/Tokyo").format("dddd"),
      countryDate: moment.tz("Asia/Tokyo").format("D"),
      countryTime: moment.tz("Asia/Tokyo").format("h:mm A"),
    },
    {
      country: "India",
      countryTimeZone: moment.tz("Asia/Kolkata"),
      countryDay: moment.tz("Asia/Kolkata").format("dddd"),
      countryDate: moment.tz("Asia/Kolkata").format("D"),
      countryTime: moment.tz("Asia/Kolkata").format("h:mm A"),
    },
    {
      country: "Saudi Arabia",
      countryTimeZone: moment.tz("Etc/GMT-3"),
      countryDay: moment.tz("Etc/GMT-3").format("dddd"),
      countryDate: moment.tz("Etc/GMT-3").format("D"),
      countryTime: moment.tz("Etc/GMT-3").format("h:mm A"),
    },
    {
      country: "China",
      countryTimeZone: moment.tz("Asia/Shanghai"),
      countryDay: moment.tz("Asia/Shanghai").format("dddd"),
      countryDate: moment.tz("Asia/Shanghai").format("D"),
      countryTime: moment.tz("Asia/Shanghai").format("h:mm A"),
    },
    {
      country: "Indonesia",
      countryTimeZone: moment.tz("Asia/Jakarta"),
      countryDay: moment.tz("Asia/Jakarta").format("dddd"),
      countryDate: moment.tz("Asia/Jakarta").format("D"),
      countryTime: moment.tz("Asia/Jakarta").format("h:mm A"),
    },
    {
      country: "Thailand",
      countryTimeZone: moment.tz("Asia/Bangkok"),
      countryDay: moment.tz("Asia/Bangkok").format("dddd"),
      countryDate: moment.tz("Asia/Bangkok").format("D"),
      countryTime: moment.tz("Asia/Bangkok").format("h:mm A"),
    },
    {
      country: "South Korea",
      countryTimeZone: moment.tz("Asia/Seoul"),
      countryDay: moment.tz("Asia/Seoul").format("dddd"),
      countryDate: moment.tz("Asia/Seoul").format("D"),
      countryTime: moment.tz("Asia/Seoul").format("h:mm A"),
    },
    {
      country: "Pakistan",
      countryTimeZone: moment.tz("Asia/Karachi"),
      countryDay: moment.tz("Asia/Karachi").format("dddd"),
      countryDate: moment.tz("Asia/Karachi").format("D"),
      countryTime: moment.tz("Asia/Karachi").format("h:mm A"),
    },
    {
      country: "Vietnam",
      countryTimeZone: moment.tz("Asia/Bangkok"),
      countryDay: moment.tz("Asia/Bangkok").format("dddd"),
      countryDate: moment.tz("Asia/Bangkok").format("D"),
      countryTime: moment.tz("Asia/Bangkok").format("h:mm A"),
    },
    {
      country: "Philippines",
      countryTimeZone: moment.tz("Asia/Manila"),
      countryDay: moment.tz("Asia/Manila").format("dddd"),
      countryDate: moment.tz("Asia/Manila").format("D"),
      countryTime: moment.tz("Asia/Manila").format("h:mm A"),
    },
  ];
  // Using forEach to loop through the array
  asiaTimeZones.forEach((country) => {
    // Changed name to country for clarity
    if (country.country.toUpperCase() === selectedCountry.toUpperCase()) {
      asiaMessage.innerHTML = `<strong>You've chosen ${selectedCountry}! It's currently ${country.countryDay}, ${country.countryDate} at ${country.countryTime} in the vast expanse of Asia.<br/ >Fun fact: Asia is the largest continent, covering about 30% of the Earth's total land area! Who knew time travel could be so enlightening?</strong>`;
    }
  });
}

document
  .getElementById("asia-countries")
  .addEventListener("change", displayAsia);

//AFRICA
function displayAfrica(event) {
  const selectedCountry = event.target.value;

  let africaMessage = document.getElementById("africa-message");

  africaMessage.textContent = `Greetings, traveler! 🐘 Africa, with its majestic wildlife and vibrant cultures, awaits you. Did you know this continent has over 3,000 different languages spoken? Select a country to discover the local day, date, and time. Time to explore!`;

  let africaTimeZones = [
    {
      country: "Morocco",
      countryTimeZone: moment.tz("Africa/Casablanca"),
      countryDay: moment.tz("Africa/Casablanca").format("dddd"),
      countryDate: moment.tz("Africa/Casablanca").format("D"),
      countryTime: moment.tz("Africa/Casablanca").format("h:mm A"),
    },
    {
      country: "South Africa",
      countryTimeZone: moment.tz("Africa/Johannesburg"),
      countryDay: moment.tz("Africa/Johannesburg").format("dddd"),
      countryDate: moment.tz("Africa/Johannesburg").format("D"),
      countryTime: moment.tz("Africa/Johannesburg").format("h:mm A"),
    },
    {
      country: "Kenya",
      countryTimeZone: moment.tz("Africa/Nairobi"),
      countryDay: moment.tz("Africa/Nairobi").format("dddd"),
      countryDate: moment.tz("Africa/Nairobi").format("D"),
      countryTime: moment.tz("Africa/Nairobi").format("h:mm A"),
    },
    {
      country: "Nigeria",
      countryTimeZone: moment.tz("Africa/Lagos"),
      countryDay: moment.tz("Africa/Lagos").format("dddd"),
      countryDate: moment.tz("Africa/Lagos").format("D"),
      countryTime: moment.tz("Africa/Lagos").format("h:mm A"),
    },
    {
      country: "Ghana",
      countryTimeZone: moment.tz("Africa/Accra"),
      countryDay: moment.tz("Africa/Accra").format("dddd"),
      countryDate: moment.tz("Africa/Accra").format("D"),
      countryTime: moment.tz("Africa/Accra").format("h:mm A"),
    },
    {
      country: "Ethiopia",
      countryTimeZone: moment.tz("Africa/Addis_Ababa"),
      countryDay: moment.tz("Africa/Addis_Ababa").format("dddd"),
      countryDate: moment.tz("Africa/Addis_Ababa").format("D"),
      countryTime: moment.tz("Africa/Addis_Ababa").format("h:mm A"),
    },
    {
      country: "Egypt",
      countryTimeZone: moment.tz("Africa/Cairo"),
      countryDay: moment.tz("Africa/Cairo").format("dddd"),
      countryDate: moment.tz("Africa/Cairo").format("D"),
      countryTime: moment.tz("Africa/Cairo").format("h:mm A"),
    },
    {
      country: "Algeria",
      countryTimeZone: moment.tz("Africa/Algiers"),
      countryDay: moment.tz("Africa/Algiers").format("dddd"),
      countryDate: moment.tz("Africa/Algiers").format("D"),
      countryTime: moment.tz("Africa/Algiers").format("h:mm A"),
    },
    {
      country: "Sudan",
      countryTimeZone: moment.tz("Africa/Khartoum"),
      countryDay: moment.tz("Africa/Khartoum").format("dddd"),
      countryDate: moment.tz("Africa/Khartoum").format("D"),
      countryTime: moment.tz("Africa/Khartoum").format("h:mm A"),
    },
    {
      country: "Angola",
      countryTimeZone: moment.tz("Africa/Luanda"),
      countryDay: moment.tz("Africa/Luanda").format("dddd"),
      countryDate: moment.tz("Africa/Luanda").format("D"),
      countryTime: moment.tz("Africa/Luanda").format("h:mm A"),
    },
  ];
  // Using forEach to loop through the array
  africaTimeZones.forEach((country) => {
    // Changed name to country for clarity
    if (country.country.toUpperCase() === selectedCountry.toUpperCase()) {
      africaMessage.innerHTML = `<strong>You've chosen ${selectedCountry}! It's currently ${country.countryDay}, ${country.countryDate} at ${country.countryTime} in the vast expanse of Asia.<br/ >Fun fact: Did you know this continent is home to 54 countries and some of the most diverse cultures in the world? Who knew time travel could be so enlightening?</strong>`;
    }
  });
}

document
  .getElementById("africa-countries")
  .addEventListener("change", displayAfrica);

//NORTH AMERICA
function displayNorthAmerica(event) {
  const selectedCountry = event.target.value;

  let northAmericaMessage = document.getElementById("north-america-message");

  northAmericaMessage.textContent = `Greetings, traveler! 🗽 North America, with its stunning landscapes and diverse cultures, invites you to explore. Did you know this continent is home to breathtaking national parks, bustling cities, and rich histories? Select a country to discover the local day, date, and time. Time to embark on your adventure!`;

  let northAmericaTimeZones = [
    {
      country: "United States",
      countryTimeZone: moment.tz("America/New_York"),
      countryDay: moment.tz("America/New_York").format("dddd"),
      countryDate: moment.tz("America/New_York").format("D"),
      countryTime: moment.tz("America/New_York").format("h:mm A"),
    },
    {
      country: "Mexico",
      countryTimeZone: moment.tz("America/Mexico_City"),
      countryDay: moment.tz("America/Mexico_City").format("dddd"),
      countryDate: moment.tz("America/Mexico_City").format("D"),
      countryTime: moment.tz("America/Mexico_City").format("h:mm A"),
    },
    {
      country: "Canada",
      countryTimeZone: moment.tz("America/Toronto"),
      countryDay: moment.tz("America/Toronto").format("dddd"),
      countryDate: moment.tz("America/Toronto").format("D"),
      countryTime: moment.tz("America/Toronto").format("h:mm A"),
    },
    {
      country: "Guatemala",
      countryTimeZone: moment.tz("America/Guatemala"),
      countryDay: moment.tz("America/Guatemala").format("dddd"),
      countryDate: moment.tz("America/Guatemala").format("D"),
      countryTime: moment.tz("America/Guatemala").format("h:mm A"),
    },
    {
      country: "Jamaica",
      countryTimeZone: moment.tz("America/Jamaica"),
      countryDay: moment.tz("America/Jamaica").format("dddd"),
      countryDate: moment.tz("America/Jamaica").format("D"),
      countryTime: moment.tz("America/Jamaica").format("h:mm A"),
    },
    {
      country: "Panama",
      countryTimeZone: moment.tz("America/Panama"),
      countryDay: moment.tz("America/Panama").format("dddd"),
      countryDate: moment.tz("America/Panama").format("D"),
      countryTime: moment.tz("America/Panama").format("h:mm A"),
    },
    {
      country: "Costa Rica",
      countryTimeZone: moment.tz("America/Costa_Rica"),
      countryDay: moment.tz("America/Costa_Rica").format("dddd"),
      countryDate: moment.tz("America/Costa_Rica").format("D"),
      countryTime: moment.tz("America/Costa_Rica").format("h:mm A"),
    },
    {
      country: "Honduras",
      countryTimeZone: moment.tz("America/Tegucigalpa"),
      countryDay: moment.tz("America/Tegucigalpa").format("dddd"),
      countryDate: moment.tz("America/Tegucigalpa").format("D"),
      countryTime: moment.tz("America/Tegucigalpa").format("h:mm A"),
    },
    {
      country: "Nicaragua",
      countryTimeZone: moment.tz("America/Managua"),
      countryDay: moment.tz("America/Managua").format("dddd"),
      countryDate: moment.tz("America/Managua").format("D"),
      countryTime: moment.tz("America/Managua").format("h:mm A"),
    },
    {
      country: "Cuba",
      countryTimeZone: moment.tz("America/Havana"),
      countryDay: moment.tz("America/Havana").format("dddd"),
      countryDate: moment.tz("America/Havana").format("D"),
      countryTime: moment.tz("America/Havana").format("h:mm A"),
    },
  ];
  // Using forEach to loop through the array
  northAmericaTimeZones.forEach((country) => {
    // Changed name to country for clarity
    if (country.country.toUpperCase() === selectedCountry.toUpperCase()) {
      northAmericaMessage.innerHTML = `<strong>You've chosen ${selectedCountry}! It's currently ${country.countryDay}, ${country.countryDate} at ${country.countryTime} in the vast expanse of Asia.<br/ >Fun fact: Did you know this continent is home to 54 countries and some of the most diverse cultures in the world? Who knew time travel could be so enlightening?</strong>`;
    }
  });
}

document
  .getElementById("north-america-countries")
  .addEventListener("change", displayNorthAmerica);

//SOUTH AMERICA
function displaySouthAmerica(event) {
  const selectedCountry = event.target.value;

  let southAmericaMessage = document.getElementById("south-america-message");

  southAmericaMessage.textContent = `Greetings, explorer! 🦙 South America, with its lush
                rainforests, ancient ruins, and rhythmic beats, welcomes you!
                Did you know it's home to the largest rainforest, the Amazon,
                and the incredible Andes mountain range? Select a country to
                uncover the local day, date, and time. Adventure awaits!`;

  let southAmericaTimeZones = [
    {
      country: "Brazil",
      countryTimeZone: moment.tz("America/Sao_Paulo"),
      countryDay: moment.tz("America/Sao_Paulo").format("dddd"),
      countryDate: moment.tz("America/Sao_Paulo").format("D"),
      countryTime: moment.tz("America/Sao_Paulo").format("h:mm A"),
    },
    {
      country: "Argentina",
      countryTimeZone: moment.tz("America/Argentina/Buenos_Aires"),
      countryDay: moment.tz("America/Argentina/Buenos_Aires").format("dddd"),
      countryDate: moment.tz("America/Argentina/Buenos_Aires").format("D"),
      countryTime: moment.tz("America/Argentina/Buenos_Aires").format("h:mm A"),
    },
    {
      country: "Chile",
      countryTimeZone: moment.tz("America/Santiago"),
      countryDay: moment.tz("America/Santiago").format("dddd"),
      countryDate: moment.tz("America/Santiago").format("D"),
      countryTime: moment.tz("America/Santiago").format("h:mm A"),
    },
    {
      country: "Colombia",
      countryTimeZone: moment.tz("America/Bogota"),
      countryDay: moment.tz("America/Bogota").format("dddd"),
      countryDate: moment.tz("America/Bogota").format("D"),
      countryTime: moment.tz("America/Bogota").format("h:mm A"),
    },
    {
      country: "Venezula",
      countryTimeZone: moment.tz("America/Caracas"),
      countryDay: moment.tz("America/Caracas").format("dddd"),
      countryDate: moment.tz("America/Caracas").format("D"),
      countryTime: moment.tz("America/Caracas").format("h:mm A"),
    },
    {
      country: "Peru",
      countryTimeZone: moment.tz("America/Lima"),
      countryDay: moment.tz("America/Lima").format("dddd"),
      countryDate: moment.tz("America/Lima").format("D"),
      countryTime: moment.tz("America/Lima").format("h:mm A"),
    },
    {
      country: "Ecuador",
      countryTimeZone: moment.tz("America/Guayaquil"),
      countryDay: moment.tz("America/Guayaquil").format("dddd"),
      countryDate: moment.tz("America/Guayaquil").format("D"),
      countryTime: moment.tz("America/Guayaquil").format("h:mm A"),
    },
    {
      country: "Paraguay",
      countryTimeZone: moment.tz("America/Asuncion"),
      countryDay: moment.tz("America/Asuncion").format("dddd"),
      countryDate: moment.tz("America/Asuncion").format("D"),
      countryTime: moment.tz("America/Asuncion").format("h:mm A"),
    },
    {
      country: "Bolivia",
      countryTimeZone: moment.tz("America/La_Paz"),
      countryDay: moment.tz("America/La_Paz").format("dddd"),
      countryDate: moment.tz("America/La_Paz").format("D"),
      countryTime: moment.tz("America/La_Paz").format("h:mm A"),
    },
    {
      country: "Uruguay",
      countryTimeZone: moment.tz("America/Montevideo"),
      countryDay: moment.tz("America/Montevideo").format("dddd"),
      countryDate: moment.tz("America/Montevideo").format("D"),
      countryTime: moment.tz("America/Montevideo").format("h:mm A"),
    },
  ];
  // Using forEach to loop through the array
  southAmericaTimeZones.forEach((country) => {
    // Changed name to country for clarity
    if (country.country.toUpperCase() === selectedCountry.toUpperCase()) {
      southAmericaMessage.innerHTML = `<strong>You've chosen ${selectedCountry}! It's currently ${country.countryDay}, ${country.countryDate} at ${country.countryTime} in the vast expanse of Asia.<br/ >Fun fact: Did you know this continent is home to 54 countries and some of the most diverse cultures in the world? Who knew time travel could be so enlightening?</strong>`;
    }
  });
}

document
  .getElementById("south-america-countries")
  .addEventListener("change", displaySouthAmerica);

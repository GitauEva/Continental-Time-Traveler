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

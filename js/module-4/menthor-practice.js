/*
  |============================
  | First lesson
  |============================
*/

//Написати функцію для банку, яка приймає три параметри:колбек,колбек,масив.
//Перша стрілочна функція буде виконуватись,якщо сума чисел в масиві більша або дорінює 0
// та поветрає рядок 'Користувач не боржник, сумма на його балансі <число>!'
//Друга стрілочна функція буде виконуватись,якщо сума чисел в масиві менша 0
// та повертає рядок 'Користувач винен банку <число>!'
//

// function bankAdmin(resolve, reject, array)

// console.log(bankAdmin([100,500,-600]));
// console.log(bankAdmin([100,500,-300,600]));

/*
  |============================
  | SECOND LECTION
  |============================
*/
// Відсортувати країни за площею не мутуючи початковий масив
//Від найбільшої до най меншої

const countries = [
  {
    name: "Tunisian Republic",
    population: 11818618,
    area: 163610,
    borders: ["DZA", "LBY"],
  },
  { name: "Virgin Islands", population: 30237, area: 151, borders: [] },
  {
    name: "Montenegro",
    population: 621718,
    area: 13812,
    borders: ["ALB", "BIH", "HRV", "UNK", "SRB"],
  },
  {
    name: "Federal Democratic Republic of Nepal",
    population: 29136808,
    area: 147181,
    borders: ["CHN", "IND"],
  },
  {
    name: "Republic of Indonesia",
    population: 273523621,
    area: 1904569,
    borders: ["TLS", "MYS", "PNG"],
  },
  {
    name: "Republic of Rwanda",
    population: 12952209,
    area: 26338,
    borders: ["BDI", "COD", "TZA", "UGA"],
  },
  { name: "Bouvet Island", population: 0, area: 49, borders: [] },
  {
    name: "Kingdom of Denmark",
    population: 5831404,
    area: 43094,
    borders: ["DEU"],
  },
  {
    name: "Republic of Cameroon",
    population: 26545864,
    area: 475442,
    borders: ["CAF", "TCD", "COG", "GNQ", "GAB", "NGA"],
  },
  {
    name: "Republic of Nicaragua",
    population: 6624554,
    area: 130373,
    borders: ["CRI", "HND"],
  },
  {
    name: "Republic of El Salvador",
    population: 6486201,
    area: 21041,
    borders: ["GTM", "HND"],
  },
  {
    name: "Independent and Sovereign Republic of Kiribati",
    population: 119446,
    area: 811,
    borders: [],
  },
  {
    name: "Commonwealth of Australia",
    population: 25687041,
    area: 7692024,
    borders: [],
  },
  { name: "Réunion Island", population: 840974, area: 2511, borders: [] },
  {
    name: "South Georgia and the South Sandwich Islands",
    population: 30,
    area: 3903,
    borders: [],
  },
  { name: "Guam", population: 168783, area: 549, borders: [] },
  {
    name: "Territory of the French Southern and Antarctic Lands",
    population: 400,
    area: 7747,
    borders: [],
  },
  {
    name: "Kingdom of Morocco",
    population: 36910558,
    area: 446550,
    borders: ["DZA", "ESH", "ESP"],
  },
  {
    name: "Republic of Guatemala",
    population: 16858333,
    area: 108889,
    borders: ["BLZ", "SLV", "HND", "MEX"],
  },
  {
    name: "Republic of India",
    population: 1380004385,
    area: 3287590,
    borders: ["BGD", "BTN", "MMR", "CHN", "NPL", "PAK"],
  },
  {
    name: "Kingdom of Saudi Arabia",
    population: 34813867,
    area: 2149690,
    borders: ["IRQ", "JOR", "KWT", "OMN", "QAT", "ARE", "YEM"],
  },
  {
    name: "Principality of Andorra",
    population: 77265,
    area: 468,
    borders: ["FRA", "ESP"],
  },
  {
    name: "Commonwealth of the Bahamas",
    population: 393248,
    area: 13943,
    borders: [],
  },
  { name: "Guiana", population: 254541, area: 83534, borders: ["BRA", "SUR"] },
  {
    name: "Kingdom of Spain",
    population: 47351567,
    area: 505992,
    borders: ["AND", "FRA", "GIB", "PRT", "MAR"],
  },
  {
    name: "Kyrgyz Republic",
    population: 6591600,
    area: 199951,
    borders: ["CHN", "KAZ", "TJK", "UZB"],
  },
  {
    name: "Republic of Yemen",
    population: 29825968,
    area: 527968,
    borders: ["OMN", "SAU"],
  },
  {
    name: "State of Israel",
    population: 9216900,
    area: 20770,
    borders: ["EGY", "JOR", "LBN", "PSE", "SYR"],
  },
  {
    name: "Macao Special Administrative Region of the People`s Republic of China",
    population: 649342,
    area: 30,
    borders: ["CHN"],
  },
  {
    name: "Syrian Arab Republic",
    population: 17500657,
    area: 185180,
    borders: ["IRQ", "ISR", "JOR", "LBN", "TUR"],
  },
  {
    name: "Republic of Iraq",
    population: 40222503,
    area: 438317,
    borders: ["IRN", "JOR", "KWT", "SAU", "SYR", "TUR"],
  },
  {
    name: "Republic of Albania",
    population: 2837743,
    area: 28748,
    borders: ["MNE", "GRC", "MKD", "UNK"],
  },
];

// Відсортувати країни за площею не мутуючи початковий масив
//Від найбільшої до най меншої

// function filterByArea(array) {
//   const resultArray = [...array].sort(
//     (firstCountry, secondCountry) => secondCountry.area - firstCountry.area
//   );
//   return resultArray;
// }

// console.table(filterByArea(countries));

//Порахувати загалье населення країн через reduce

// function countTotalPopulation(array) {
//   const totalPopulation = array.reduce((acc, country) => {
//     acc += country.population;
//     return acc;
//   }, 0);
//   return `Total population of all countries in array is ${totalPopulation} peoples`;
// }

// console.log(countTotalPopulation(countries));

//Створити новий масив без країн,які починаються на букву 'R'

// const countriesWithoutR = countries.filter(
//   (country) => !country.name.startsWith("R")
// );
// console.table(countries);
// console.table(countriesWithoutR);

//Написати функцію,яка буде рахувати середню площу країн
function countMiddleArea(arr) {
  return (
    arr.reduce((acc, country) => (acc += country.area), 0) / countries.length
  );
}

console.log(countMiddleArea(countries));

//---------------------------------------------------------------------------------
// CODING CHALLENGE

// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

// extends to inherit person6 class
class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    // calls parent class
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }

  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per square km.`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classif = new Map();
    classif.set(1, "tiny");
    classif.set(2, "small");
    classif.set(3, "normal");
    classif.set(4, "big");
    classif.set(5, "huge");
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classif.get(
        this.size
      )} street`
    );
  }
}

const allParks = [
  new Park("Green Park", 1987, 0.2, 215),
  new Park("National Park", 1894, 2.9, 3541),
  new Park("Oak Park", 1953, 0.4, 949)
];

const allStreets = [
  new Street("Ocean Avenue", 1999, 1.1, 4),
  new Street("Evergreen Street", 2008, 2.7, 2),
  new Street("4th Street", 2015, 0.8, 1),
  new Street("Sunset Blvd", 1982, 2.5, 5)
];

function calc(arr) {
  //reduce array into a single value

  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log("----------PARKS REPORT -----------");

  //Density
  p.forEach(el => el.treeDensity());

  //Average Age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

  //Which park has more than 1000 trees
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees`);
}

function reportStreets(s) {
  console.log("----------STREETs REPORT -----------");

  //total and average length of the town's streets
  const [totalStreetLength, avgStreetlength] = calc(s.map(el => el.length));
  console.log(
    `our total length of all the town's streets are ${totalStreetLength}Km and the average length is ${avgStreetlength}km`
  );

  //classify sizes
  s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);

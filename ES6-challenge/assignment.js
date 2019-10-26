/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of all town's parks (forumla: sum of all ages/number of parks)
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

class Park extends Element {
  constructor(name, buildYear, numberTrees, parkArea) {
    super(name, buildYear);
    this.numberTrees = numberTrees;
    this.parkArea = parkArea; //km2
  }

  treeDensity() {
    const density = this.numberTrees / this.parkArea;
    console.log(
      `${this.name} has a tree density of ${density} trees per square km`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, streetLength = 150) {
    super(name, buildYear);
    this.streetLength = streetLength;
  }

  getStreetClass() {
    let streetSize;
    const classification = new Map();
    classification.set(50, "tiny");
    classification.set(100, "small");
    classification.set(150, "normal");
    classification.set(200, "big");
    classification.set(250, "huge");
    for (let [key, value] of classification.entries()) {
      if (this.streetLength < key + 25 && this.streetLength > key - 25) {
        streetSize = value;
        console.log(
          `${this.name} , built in ${this.buildYear}, is a ${streetSize} street`
        );
      }
    }
  }
}
const street1 = new Street("1th Avenue", "1988", 130);
const street2 = new Street("2nd Avenue", "1999", 30);
const street3 = new Street("3rd Avenue", "2009");
const street4 = new Street("4th Avenue", "1789", 210);

const park1 = new Park("Park1", 1990, 2200, 80);
const park2 = new Park("Park2", 1890, 50, 10);
const park3 = new Park("Park3", 1950, 400, 400);

const allStreets = [street1, street2, street3, street4];
const allParks = [park1, park2, park3];

function parksReport(parks) {
  console.log("-----PARKS REPORT-----");
  //Density
  parks.forEach(cur => cur.treeDensity());

  //Average age
  let sum = 0,
    fullAge,
    avgAge;
  parks.forEach(cur => {
    fullAge = new Date().getFullYear() - cur.buildYear;
    sum += fullAge;
  });
  avgAge = sum / parks.length;
  console.log(
    `Our ${parks.length} parks have an average age of ${avgAge} years`
  );

  //Park with more then 1000 trees
  parks.forEach(cur => {
    if (cur.numberTrees > 1000) {
      console.log(`${cur.name} has more than 1000 trees`);
    }
  });
}

function streetsReport(streets) {
  console.log("-----STREETS REPORT-----");
  //Total and average length of town's street
  let totalLength = 0,
    averageLength;
  streets.forEach(cur => {
    totalLength += cur.streetLength;
  });
  averageLength = totalLength / streets.length;
  console.log(
    `Our ${streets.length} streets have a total length of ${totalLength} km, with an average length of ${averageLength} km`
  );

  //Classifications for each street
  streets.forEach(cur => cur.getStreetClass());
}

parksReport(allParks);
streetsReport(allStreets);


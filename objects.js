var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    album: "Robert Palmer",

    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

//Keep a copy of the collection for tests
var copyOfCollection = JSON.parse(JSON.stringify(collection));

// update the collection and return It
// track if you do not return the collection
// (My guess: it should be the same results)
function updateRecords(id, property, value) {
  //if we have an empty value it should delete the property (requirement)
  if (value === "") delete collection[id][property];

  /* if we have value for tracks property we should not replace it
  we should add the new value*/
  if (property === "tracks") {
    //it tracks exists we assign itself if does not we assign an empty array
    collection[id][property] = collection[id][property] || [];
    collection[id][property].push(value);
  } else {
    collection[id][property] = value;
  }
  return collection;
}

updateRecords(2468, "tracks", "test");

console.log(copyOfCollection);
console.log(updateRecords(5439, "artist", "ABBA"));
console.log(collection); //as I guessed

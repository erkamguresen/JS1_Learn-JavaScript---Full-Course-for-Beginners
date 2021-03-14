/**
 * Make a sentence from the given words
 * @param {string} myNoun
 * @param {string} myAdjective
 * @param {string} myVerb
 * @param {string} myAdverb
 * @returns a complete sentence build from the input parameters
 */
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";

  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " " +
    "to the store" +
    " " +
    myAdverb;

  return result;
}

console.log(wordBlanks("dog", "big", "run", "quickly"));
console.log(wordBlanks("dog", "big", 3, "quickly")); //interessant
console.log(wordBlanks("bike", "big")); //interessant: The big bike undefined to the store undefined

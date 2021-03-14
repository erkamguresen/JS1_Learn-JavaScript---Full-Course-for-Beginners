function ourReusableFunction() {
  console.log("Hey World!");
}

ourReusableFunction();

function dividedWindow() {
  var asideDiv = document.getElementsByClassName("asideDiv");

  // check if the div exists
  if (asideDiv.length === 0) {
    //create aside div
    asideDiv = document.createElement("div");
    asideDiv.className = "asideDiv";

    //create 2 divs' within the aside div
    var newDiv = document.createElement("div");
    newDiv.className = "asideDiv upperAsideDiv";

    var tag = document.createElement("h1");
    var text = document.createTextNode("this is the first part");
    tag.appendChild(text);
    newDiv.appendChild(tag);

    newDiv = document.createElement("div");
    newDiv.className = "asideDiv lowerAsideDiv";

    tag = document.createElement("h1");
    text = document.createTextNode("this is the second part");
    tag.appendChild(text);
    newDiv.appendChild(tag);

    //append to the body element
    document.body.appendChild(asideDiv);

    //style with borders
    var asideDivs = document.getElementsByClassName;

    for (const asideDiv of asideDivs) {
      iterator.style.border = "1px solid red";
    }

    // make grid 2fr 1 fr

    //alert
    alert("3 window will be initiated");
  } else {
    //alert
    alert("3 window is already exists");
  }
}

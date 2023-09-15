const myImage = document.querySelector("img");

//Bei Klick Bild wechseln. 
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/DSC00235.jpg") {
    myImage.setAttribute("src", "images/DSC01317.jpg");
  } else {
    myImage.setAttribute("src", "images/DSC00235.jpg");
  }
};


//User mit Namen begrüßen. 
let myButton = document.querySelector("button")
let myHeading = document.querySelector("h2")

function setUserName() {  
  const myName = prompt("Bitte gib deinen Namen ein!") //prompt: zeigt Meldung an und speichert die Eingabe in der Variable 
  if (!myName){ //wenn myName keinen Wert hat (also nichts eingegeben wurde), wird die Meldung erneut angezeigt
    setUserName();
  } else{
    localStorage.setItem("name", myName) //API Speicherung im Element "name" mit dem Wert myName.
    myHeading.textContent = `Die Familienmusik Huber ist cool, ${myName}!`
  }
}

if (!localStorage.getItem("name")) {//prüfen, ob bereits ein Name eingegeben wurde. Wenn nicht, dann...
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

myButton.onclick = () => {//beim Drücken des Knopfes kann ein neuer Username eingegeben werden. 
    setUserName();
};
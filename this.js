class NameField {
  constructor(name) {
    const element = document.createElement("li");
    element.textContent = name;
    document.querySelector("#names").appendChild(element);
  }
}
class Namegenerator {
  constructor() {
    this.names = ["Sudhakar", "Vanaja", "Vasanthi", "Jogi", "Sumarchitha"];
    this.namesPointer = 0;
    console.log(this);
    document
      .querySelector("button")
      //   .addEventListener("click", this.addName);
      .addEventListener("click", () => {
        this.addName();
      });
    //   .addEventListener("click", this.addName.bind(this));
  }
  // constructor this refers to class this.
  // Method addName() gets called by the button click event so this refers to the button this i.e. <button>Add Name</button>
  // bind tells javascript this refers to function in future no matter who executes it.
  addName() {
    const name = new NameField(this.names[this.namesPointer]);
    this.namesPointer =
      this.namesPointer >= this.names.length - 1 ? 0 : this.namesPointer + 1;
  }
}

const gen = new Namegenerator();

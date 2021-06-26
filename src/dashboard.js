// import utilities
import createModel from "./utilities/model.js"; // function to create world
import handleForm from "./utilities/formHandler.js"; // function to handle form

// main function
function main() {
  const world = createModel();

  handleForm(world);
}

main();

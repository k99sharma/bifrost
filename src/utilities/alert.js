// function to create alert
function alertHandler(status) {
  const successAlert = document.querySelector(".alert-success"); // alert success
  const dangerAlert = document.querySelector(".alert-danger"); // alert danger

  if (status === "success") {
    successAlert.classList.toggle("d-none");
  } else {
    dangerAlert.classList.toggle("d-none");
  }
}

export default alertHandler;

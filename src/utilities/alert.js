// function to create alert
function alertHandler(status) {
  const alertContainer = document.querySelector("#alert_container");
  let message, type;

  if (status === "success") {
    type = "success";
    message = "<strong>Red Marker</strong> is created on located country!";
  } else if (status === "warning") {
    type = "warning";
    message = "<strong>Wrong input!</strong> Please check and try again";
  } else {
    type = "danger";
    message =
      "<strong>Country not found!</strong> Please check your input or try again later";
  }

  alertContainer.innerHTML = `<div class="alert alert-dismissible alert-${type}" role="alert">
  <img class="img-fluid mx-2" src="/assets/icons/${type}.png" alt = "${type} icon"/>"${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
}

export default alertHandler;

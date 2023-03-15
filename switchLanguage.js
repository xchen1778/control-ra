function changeToSpanish() {
  const url = window.location.href;
  const urlSegments = url.split("/");
  const pageName = urlSegments[urlSegments.length - 1];
  window.location.href = "./es/" + pageName;
}

function changeToEnglish() {
  const url = window.location.href;
  const urlSegments = url.split("/");
  const pageName = urlSegments[urlSegments.length - 1];
  window.location.href = "../" + pageName;
}

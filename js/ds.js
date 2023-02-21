function goToLink() {
  const selectElement = document.getElementById("ds");
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const link = selectedOption.getAttribute("data-link");
  window.location.href = link;
}
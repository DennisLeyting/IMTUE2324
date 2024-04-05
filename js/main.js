function showSecondProtectionOption() {
  var selectElement = document.getElementById("extra_bescherming_select");
  var secondOptionSelection = document.getElementById(
    "second_protection_option"
  );

  if (selectElement.value === "ja") {
    secondOptionSelection.style.display = "block";
  } else {
    secondOptionSelection.style.display = "none";
  }
}

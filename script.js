let statusValue = "OK";

function setStatus(value) {
  statusValue = value;
  document.querySelectorAll(".toggle-buttons button").forEach(btn => {
    btn.classList.remove("active");
  });
  document.getElementById(value).classList.add("active");
}

function saveData() {
  const data = {
    dataMatrix: document.getElementById("dataMatrix").value,
    docNumber: document.getElementById("docNumber").value,
    itemName: document.getElementById("itemName").value,
    nextProcess: document.getElementById("nextProcess").value,
    status: statusValue,
    timestamp: new Date().toISOString()
  };

  let saved = JSON.parse(localStorage.getItem("castingFeedback") || "[]");
  saved.push(data);
  localStorage.setItem("castingFeedback", JSON.stringify(saved));

  alert("Data saved locally!");
}

function cancelForm() {
  document.querySelectorAll("input[type=text]").forEach(input => input.value = "");
  setStatus("OK");
}

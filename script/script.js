function submitForm() {
  document.getElementById("submitButton").disabled = true;
  document.getElementById("spinner").classList.remove("hidden");

  const name = document.getElementById("names").value;
  const mealNo = document.getElementById("mealNo").value;
  const date = document.getElementById("date").value;

  const data = { name, mealNo, date };

  fetch(
    "https://script.google.com/macros/s/AKfycbzXwmADQKnO2psGUV9w4fquRXG5BxlPkXRyxWE9IAzRBqtiKG6Zmjh-TdWbojvAZPE7lg/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      mode: "no-cors",
    }
  )
    .then(() => {
      // You can't access response data here in no-cors mode
      alert("Data submitted (assuming success)");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error submitting your data.");
    });
}

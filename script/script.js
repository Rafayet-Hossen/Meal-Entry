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
      // Replace with your Web App URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      if (result.result === "success") {
        alert("Data submitted successfully!");
      } else {
        alert("Error submitting data: " + result.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error submitting your data.");
    })
    .finally(() => {
      document.getElementById("submitButton").disabled = false;
      document.getElementById("spinner").classList.add("hidden");
    });
}

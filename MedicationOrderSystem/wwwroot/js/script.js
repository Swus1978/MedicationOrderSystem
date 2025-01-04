document
  .getElementById("orderForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
      MedicationName: "jubilia", // Example value
      MedicationType: "Analeptic", // Example value
      Quantity: 13, // Example value
      Distributor: "Empsephar", // Example value
      PharmacyBranch: ["Main", "Secondary"] // Example values
    };

    console.log("JSON Payload:", JSON.stringify(formData, null, 2));

    fetch("/Order/Submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => console.log("Server Response:", data))
      .catch((error) => console.error("Error:", error));
  });

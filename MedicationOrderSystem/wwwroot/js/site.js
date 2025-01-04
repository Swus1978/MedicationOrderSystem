document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("myButton");

  // Log button click
  if (button) {
    button.addEventListener("click", function () {
      console.log("Button clicked");
    });
  } else {
    console.log("Button not found");
  }

  // Handle form submission
  document
    .getElementById("orderForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault(); // Prevent the default form submission

      // Collect form data as an object
      const formData = {
        MedicationName: document.querySelector("#medicationName").value,
        MedicationType: document.querySelector("#medicationType").value,
        Quantity: document.querySelector("#quantity").value,
        Distributor: document.querySelector('input[name="distributor"]:checked')
          ?.value,
        PharmacyBranch: Array.from(
          document.querySelectorAll('input[name="pharmacyBranch"]:checked')
        ).map((checkbox) => checkbox.value)
      };

      console.log(formData); // Add this to check what data is being sent

      try {
        // Make a POST request to submit the order as JSON
        const response = await fetch("/Order/Submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json" // Ensure JSON is sent
          },
          body: JSON.stringify(formData) // Send form data as JSON
        });

        // Handle server response
        const result = await response.json();
        const orderStatus = document.getElementById("orderStatus");

        if (response.ok) {
          orderStatus.textContent =
            result.message || "Order submitted successfully!";
          orderStatus.classList.add("alert-success");
          orderStatus.classList.remove("alert-danger");
        } else {
          orderStatus.textContent = result.message || "Error submitting order.";
          orderStatus.classList.add("alert-danger");
          orderStatus.classList.remove("alert-success");
        }
      } catch (error) {
        const orderStatus = document.getElementById("orderStatus");
        orderStatus.textContent = "Error connecting to the server.";
        orderStatus.classList.add("alert-danger");
        orderStatus.classList.remove("alert-success");
      }
    });
});

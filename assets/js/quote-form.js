/* ==================================================
   SPARKCLEAN FREE QUOTE FORM STARTED
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quote-form");
  const status = document.getElementById("quote-form-status");

  if (!form || !status) return;

  const submitButton = form.querySelector('button[type="submit"]');

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyZM3cdAjvbtPYNkiMV-5lpmENYdEVNM65866eQAIbQfjKP7ZZmfNIHpL4VIaPlJk4/exec";

  let statusTimer;

  /* Status Message Started */
  function showStatus(message, color) {
    clearTimeout(statusTimer);
    status.hidden = false;
    status.textContent = message;
    status.style.color = color;
    status.style.fontWeight = "700";
    status.style.textAlign = "center";
    status.style.marginTop = "12px";
  }
  /* Status Message Ended */

  /* Form Submission Started */
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      location: String(formData.get("location") || "").trim(),
      preferredDate: String(formData.get("preferredDate") || ""),
      requirements: String(formData.get("requirements") || "").trim(),
    };

    submitButton.disabled = true;
    showStatus("Submitting your requirements...", "#087f8c");

    const startedAt = Date.now();

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      const result = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "Submission failed.");
      }

      const remainingDelay = Math.max(0, 1500 - (Date.now() - startedAt));

      await new Promise((resolve) => setTimeout(resolve, remainingDelay));

      showStatus(
        "Your requirements have been submitted successfully!",
        "#16803c",
      );

      form.reset();

      statusTimer = setTimeout(() => {
        status.hidden = true;
        status.textContent = "";
      }, 3000);
    } catch (error) {
      console.error("Free Quote Form Error:", error);

      showStatus(
        "Unable to submit your requirements. Please try again.",
        "#c62828",
      );

      // Preserve all entered details if submission fails.
    } finally {
      submitButton.disabled = false;
    }
  });
  /* Form Submission Ended */
});

/* ==================================================
   SPARKCLEAN FREE QUOTE FORM ENDED
================================================== */

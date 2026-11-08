/* ==================================================
   SPARKCLEAN FREE QUOTE FORM STARTED
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quote-form");
  const status = document.getElementById("quote-form-status");

  if (!form || !status) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const phoneInput = form.querySelector('[name="phone"]');

  if (!submitButton || !phoneInput) return;

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyZM3cdAjvbtPYNkiMV-5lpmENYdEVNM65866eQAIbQfjKP7ZZmfNIHpL4VIaPlJk4/exec";

  const DEFAULT_PHONE = "+91 ";

  let statusTimer;
  let submissionId = null;

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

  /* Phone Validation Started */
  function validatePhone(value) {
    const phone = value.trim();

    const match = phone.match(/^\+([1-9]\d{0,2}) ([0-9]{4,14})$/);

    if (!match) {
      return "Enter a valid phone number, for example +91 9876543210.";
    }

    const countryCode = match[1];
    const number = match[2];

    if (countryCode === "91" && !/^[6-9]\d{9}$/.test(number)) {
      return "Enter a valid 10-digit Indian mobile number.";
    }

    if (countryCode.length + number.length > 15) {
      return "Phone number exceeds the international length limit.";
    }

    return "";
  }

  function checkPhone() {
    const error = validatePhone(phoneInput.value);
    phoneInput.setCustomValidity(error);
    return !error;
  }

  phoneInput.value = DEFAULT_PHONE;

  phoneInput.addEventListener("focus", () => {
    if (phoneInput.value === DEFAULT_PHONE) {
      requestAnimationFrame(() => {
        phoneInput.setSelectionRange(
          DEFAULT_PHONE.length,
          DEFAULT_PHONE.length,
        );
      });
    }
  });

  phoneInput.addEventListener("input", () => {
    phoneInput.setCustomValidity("");
    checkPhone();
    submissionId = null;
  });

  form.addEventListener("input", (event) => {
    if (event.target !== phoneInput) {
      submissionId = null;
    }
  });
  /* Phone Validation Ended */

  /* Submission Identifier Started */
  function createSubmissionId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return window.crypto.randomUUID();
    }

    const bytes = new Uint8Array(16);
    window.crypto.getRandomValues(bytes);

    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join(
      "",
    );
  }
  /* Submission Identifier Ended */

  /* Form Submission Started */
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    checkPhone();

    if (!form.reportValidity()) return;

    const formData = new FormData(form);

    if (!submissionId) {
      submissionId = createSubmissionId();
    }

    const payload = {
      submissionId,
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

      if (!response.ok) {
        throw new Error("Unable to reach the enquiry service.");
      }

      if (result.saved === true) {
        if (result.success === true) {
          showStatus(
            "Your enquiry was submitted successfully. Both confirmation emails have been sent.",
            "#16803c",
          );
        } else {
          showStatus(
            result.message ||
              "Your enquiry was saved, but email delivery was incomplete. Please do not submit again.",
            "#b45309",
          );
        }

        form.reset();
        phoneInput.value = DEFAULT_PHONE;
        phoneInput.setCustomValidity("");
        submissionId = null;

        return;
      }

      if (result.success !== true) {
        showStatus(
          result.message || "Unable to process your enquiry. Please try again.",
          "#c62828",
        );
        return;
      }

      showStatus(
        result.message || "Your enquiry was submitted successfully.",
        "#16803c",
      );

      form.reset();
      phoneInput.value = DEFAULT_PHONE;
      phoneInput.setCustomValidity("");
      submissionId = null;
    } catch (error) {
      console.error("Free Quote Form Error:", error);

      showStatus(
        "Submission status could not be confirmed. Please contact us before submitting again.",
        "#c62828",
      );

      // Preserve entered details and submission ID.
    } finally {
      submitButton.disabled = false;
    }
  });
  /* Form Submission Ended */
});

/* ==================================================
   SPARKCLEAN FREE QUOTE FORM ENDED
================================================== */

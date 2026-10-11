
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

// Replace this placeholder with the barber's real WhatsApp number.
// South African example format: 27821234567
const barberWhatsApp = "";

const bookingButton = document.getElementById("whatsappBooking");

bookingButton.addEventListener("click", (event) => {
  if (!/^\d{10,15}$/.test(barberWhatsApp)) {
    event.preventDefault();
    alert("The barber's WhatsApp number still needs to be added.");
    return;
  }

  event.preventDefault();

  const message = encodeURIComponent(
    "Hi Blade Barber! I'd like to enquire about booking a haircut. What appointments are available?"
  );

  window.open(
    `https://wa.me/${barberWhatsApp}?text=${message}`,
    "_blank"
  );
});

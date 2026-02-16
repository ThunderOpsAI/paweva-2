const cartCount = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const toast = document.getElementById("toast");
const filterChips = document.querySelectorAll(".chip");
const productCards = document.querySelectorAll(".product-card");

let count = 0;
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    cartCount.textContent = String(count);
    showToast(`${button.dataset.product} added to cart`);
  });
});

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;

    filterChips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");

    productCards.forEach((card) => {
      const isVisible = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !isVisible);
    });
  });
});

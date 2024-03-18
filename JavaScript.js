// Get the product elements
const products = document.querySelectorAll('.product');

// Add a click event listener to each product element
products.forEach(product => {
  product.addEventListener('click', () => {
    // Add a class to the product element to highlight it
    product.classList.add('active');

    // Remove the class from all other product elements
    products.forEach(otherProduct => {
      if (otherProduct !== product) {
        otherProduct.classList.remove('active');
      }
    });
  });
});

// Get the reviews element
const reviews = document.querySelector('#reviews');

// Add a scroll event listener to the reviews element
reviews.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = reviews.scrollTop;

  // Get the height of the reviews element
  const elementHeight = reviews.offsetHeight;

  // Get the height of the document
  const documentHeight = document.documentElement.scrollHeight;

  // Calculate the percentage of the reviews element that has been scrolled
  const percentageScrolled = (scrollPosition / (documentHeight - elementHeight)) * 100;

  // Update the progress bar
  const progressBar = document.querySelector('#progress-bar');
  progressBar.style.width = `${percentageScrolled}%`;
});

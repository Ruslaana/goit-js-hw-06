const categoriesList = document.querySelector('#categories');
// console.log(categoriesList);
const categoriesItems = categoriesList.querySelectorAll('li.item');
// console.log(categoriesItem);

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
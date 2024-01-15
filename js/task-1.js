const categories = document.querySelector("#categories");
console.log(categories);
const categoriesItems = categories.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach((item) => {
  const categoriesTitle = item.querySelector("h2").textContent;
  console.log(`Category: ${categoriesTitle}`);
  const categoriesNumbers = item.querySelectorAll("li");
  console.log(`Elements: ${categoriesNumbers.length}`);
});

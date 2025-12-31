
const products = [
  {
    id: 1,
    name: "iPhone",
    category: "Electronics",
    price: 70000,
    image: "https://picsum.photos/seed/iphone/600/400",
  },
  {
    id: 2,
    name: "Laptop",
    category: "Electronics",
    price: 55000,
    image: "https://picsum.photos/seed/laptop/600/400",
  },
  {
    id: 3,
    name: "Shoes",
    category: "Fashion",
    price: 3000,
    image: "https://picsum.photos/seed/shoes/600/400",
  },
  {
    id: 4,
    name: "T-Shirt",
    category: "Fashion",
    price: 1200,
    image: "https://picsum.photos/seed/tshirt/600/400",
  },
  {
    id: 5,
    name: "Mixer",
    category: "Home",
    price: 4000,
    image: "https://picsum.photos/seed/mixer/600/400",
  },
];

let filteredProducts = [...products]; //created a shallow copy with spread operator
let isGridView = true;

const container = document.getElementById("productContainer");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const sortSelect = document.getElementById("sort");
const toggleBtn = document.getElementById("toggleView");

function renderProducts(list) {
  container.innerHTML = "";

  //check: case when list is empty
  if (!list || list.length === 0) { 
    container.innerHTML = `<div class="empty">No products found</div>`;     
    return;
  }

  list.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="category">${product.category}</p>
        <p class="price">₹${product.price.toLocaleString()}</p>
      </div>
    `;

    container.appendChild(div);
  });
}


categorySelect.addEventListener("change", (e) => {
  const category = e.target.value;

  if (category === "all") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter(
      (product) => product.category === category
    );
  }

  renderProducts(filteredProducts);
});


sortSelect.addEventListener("change", (e) => {
  if (e.target.value === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (e.target.value === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  renderProducts(filteredProducts);
});


searchInput.addEventListener("input", (e) => {
  const text = e.target.value.toLowerCase();

  filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(text)
  );

  renderProducts(filteredProducts);
});


function updateToggleText(){
  toggleBtn.textContent = isGridView ? 'List View' : 'Grid View';
}

toggleBtn.addEventListener("click", () => {
  isGridView = !isGridView;
  container.className = isGridView ? "grid" : "list";
  updateToggleText();
});


container.className = isGridView ? "grid" : "list";
updateToggleText();
renderProducts(products);


//commments?
//AI code ok? if ex
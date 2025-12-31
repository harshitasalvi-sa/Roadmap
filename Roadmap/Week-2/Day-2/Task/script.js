const products = [
  { id: 1, name: 'Wireless Headphones', price: 799, category: 'Electronics', image: '../../../Week-1/Day-1/images/pexels-vvs-440853-8839887.jpg' },
  { id: 2, name: 'Running Shoes', price: 599, category: 'Sports', image: '../../../Week-1/Day-1/images/pexels-the-bio-brand-17631772-6442511.jpg' },
  { id: 3, name: 'Classic Shirt', price: 299, category: 'Clothing', image: '../../../Week-1/Day-1/images/pexels-suzyhazelwood-2533266.jpg' },
  { id: 4, name: 'Ceramic Mug', price: 125, category: 'Home', image: '../../../Week-1/Day-1/images/pexels-madebymath-90946.jpg' },
  { id: 5, name: 'Sunglasses', price: 450, category: 'Accessories', image: '../../../Week-1/Day-1/images/pexels-pixabay-258244.jpg' },
  { id: 6, name: 'Laptop Stand', price: 399, category: 'Electronics', image: '../../../Week-1/Day-1/images/pexels-jakubzerdzicki-20943579.jpg' },
  { id: 7, name: 'Face Serum', price: 240, category: 'Beauty', image: '../../../Week-1/Day-1/images/pexels-the-bio-brand-17631772-6442511.jpg' },
  { id: 8, name: 'Notebook', price: 99, category: 'Home', image: '../../../Week-1/Day-1/images/pexels-pixabay-258244.jpg' },
  { id: 9, name: 'Water Bottle', price: 150, category: 'Sports', image: '../../../Week-1/Day-1/images/pexels-alfresco-shop-3475437-5205885.jpg' },
  { id: 10, name: 'Leather Wallet', price: 499, category: 'Accessories', image: '../../../Week-1/Day-1/images/pexels-lancehe-14642108.jpg' }
];

const productsContainer = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const sortSelect = document.getElementById("sortSelect");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");

let result = [...products];
let isGridView = true;
let minValue = 0;
let maxValue = Infinity;

//render function
function renderProducts(list){

  productsContainer.innerHTML = "";
  //check if list is empty
  if(!list || list.length === 0){
    productsContainer.innerText = "No product found";
    return;
  }

  list.forEach((product)=>{
    const div = document.createElement("div");
    div.className = "product-card";

    div.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="info">
            <div>
              <h3>${product.name}</h3>
              <span>Rs. ${product.price}</span>
            </div>
            <p>${product.category}</p>
            <button>Buy</button>
          </div>
    ` 
    productsContainer.appendChild(div);
  })
}

//FITLER : category
categorySelect.addEventListener("change", (e)=>{
  const category = e.target.value;

  //category : all
  if(category ==="all"){
    result = [...products];
  }
  //Other categories
  else{
    result = products.filter(product=>
      product.category === category
    )
    console.log("category selected"+category);
  }
  renderProducts(result);
});

sortSelect.addEventListener("change", (e)=>{
  const priority = e.target.value;

  if(priority === "price-asc"){
    result.sort((a,b)=> a.price - b.price);
  }
  else if(priority === "price-desc"){
    result.sort((a,b)=> b.price - a.price);
  }

  renderProducts(result);
})

//SEARCH : by name
searchInput.addEventListener("input", (e)=>{
  const inputValue = e.target.value.toLowerCase();

  result = products.filter( product => product.name.toLowerCase().includes(inputValue));
  renderProducts(result);
})

//FITLER : price range btwn max and min price
minPrice.addEventListener("input", (e)=>{
  const val = e.target.value;

  minValue = val === "" ? 0 : Number(val);
  // if (isNaN(minValue)) minValue = 0;

  result = products.filter(product => product.price <= maxValue && product.price >= minValue);

  renderProducts(result);
})

maxPrice.addEventListener("input", (e)=>{
  const val = e.target.value;

  maxValue = val === "" ? Infinity : Number(val);
  // if (isNaN(maxValue)) maxValue = Infinity;

  result = products.filter(product => product.price <= maxValue && product.price >= minValue);

  renderProducts(result);
})

gridBtn.addEventListener("click", ()=>{
  if (!productsContainer) return;
  productsContainer.classList.add('grid');
  productsContainer.classList.remove('list');
});

listBtn.addEventListener("click", ()=>{
  if (!productsContainer) return;
  productsContainer.classList.add('list');
  productsContainer.classList.remove('grid');
});

renderProducts(products);

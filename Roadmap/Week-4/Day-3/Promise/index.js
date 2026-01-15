

let container = document.getElementById("container");
const button = document.getElementById("button")

async function getProductsData(){
    const promise = await axios.get("https://dummyjson.com/products");
    

    const data = promise.data.products;
    console.log(data)
    container.innerHTML = "";
    const ul = document.createElement("ul");

    data.map(x => {
        const li = document.createElement("li");
        li.innerHTML = `${x.title} - ${x.price}`;

        ul.appendChild(li);
    })

    container.appendChild(ul);
}

button.addEventListener("click", getProductsData)


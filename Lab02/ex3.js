const response = await fetch("https://dummyjson.com/products");
if (!response.ok) {
    alert("API error");
};
const data = await response.json();
console.log(data);
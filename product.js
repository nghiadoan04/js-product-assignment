function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
let products = [
    new Product(1, "iPhone 15 Pro", 35000000, 5, "Phones", true),
    new Product(2, "Samsung S24 Ultra", 33000000, 3, "Phones", true),
    new Product(3, "AirPods Pro", 6000000, 10, "Accessories", true),
    new Product(4, "Apple Watch", 12000000, 0, "Accessories", true),
    new Product(5, "MacBook Pro", 45000000, 2, "Laptops", false),
    new Product(6, "Logitech Mouse", 1500000, 8, "Accessories", true)
];
let namePriceList = products.map(p => ({
    name: p.name,
    price: p.price
}));

console.log("Câu 3:", namePriceList);
let inStockProducts = products.filter(p => p.quantity > 0);

console.log("Câu 4:", inStockProducts);
let hasPriceOver30M = products.some(p => p.price > 30000000);

console.log("Câu 5:", hasPriceOver30M);
let accessoriesSelling = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

console.log("Câu 6:", accessoriesSelling);
let totalValue = products.reduce((sum, p) => {
    return sum + p.price * p.quantity;
}, 0);

console.log("Câu 7:", totalValue);
console.log("Câu 8:");
for (let p of products) {
    console.log(
        `Tên: ${p.name} | Danh mục: ${p.category} | Trạng thái: ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`
    );
}
console.log("Câu 9:");
for (let key in products[0]) {
    console.log(`Thuộc tính: ${key} - Giá trị: ${products[0][key]}`);
}
let sellingProductNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

console.log("Câu 10:", sellingProductNames);

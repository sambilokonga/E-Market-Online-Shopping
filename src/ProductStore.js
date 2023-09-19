const productsArray = [
  {
    id: "price_1Ns1c9IrRLDn4hC7vfQIJngV",
    title: "Smart TV",
    price: 45.99,
    imgUrl:
      "https://www.intex.in/cdn/shop/products/1_9b8014ad-124e-4742-a628-9a4c4affe617.jpg?v=1648711109",
  },
  {
    id: "price_1Ns1foIrRLDn4hC7GR10snp6",
    title: "Camera",
    price: 25.99,
    imgUrl:
      "https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg",
  },
  {
    id: "price_1Ns1hmIrRLDn4hC7fIY8QZ3c",
    title: "Construction Tools",
    price: 39.99,
    imgUrl:
      "https://media.istockphoto.com/id/177120516/photo/constructor-still-life.jpg?s=612x612&w=0&k=20&c=Sda-M377yBLRBbo5ffP-9rsvJ5c4FMOndx-IsCHSS-8=",
  },
  {
    id: "price_1Ns1jmIrRLDn4hC7paJhYf2o",
    title: "Smart Phone",
    price: 65.99,
    imgUrl:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
  },
  {
    id: "price_1Ns1lcIrRLDn4hC7keBC24Ql",
    title: "Dress",
    price: 14.99,
    imgUrl:
      "https://media.istockphoto.com/id/178851955/photo/flowery-evase-bateau-yellow-dress.jpg?s=612x612&w=0&k=20&c=EOJGCGC6dmFt0IQvbxq3PthCmNXO1flOpjYWC4KkcyQ=",
  },
  {
    id: "price_1Ns1qmIrRLDn4hC7nDprPGUU",
    title: "Shoe",
    price: 12.99,
    imgUrl:
      "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=",
  },
  {
    id: "price_1Ns1sFIrRLDn4hC7bv1SDA0s",
    title: "Welding Machine",
    price: 32.99,
    imgUrl:
      "https://media.istockphoto.com/id/178141905/photo/inverter-welding-machine-and-mask.jpg?s=612x612&w=0&k=20&c=oVE9bTyWwko3mMXsbKpipcrivnzV1bjkLTtyy5aQEcc=",
  },
  {
    id: "price_1Ns1tnIrRLDn4hC75kTZd3tM",
    title: "Furniture",
    price: 55.99,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5tRrLmnB9vjCz7Z2YzEir05jUGcMA_qRUagFQl3S2w&s",
  },
  {
    id: "price_1Ns1w0IrRLDn4hC7bnRgN49K",
    title: "TV Stand",
    price: 9.99,
    imgUrl:
      "https://images.unsplash.com/photo-1552975084-6e027cd345c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHYlMjBzdGFuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("product data does not exist for ID: + id");
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };

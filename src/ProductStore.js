const productsArray = [
  {
    id: 1,
    title: "Coffee",
    price: 4.99,
    imgUrl:
      "https://www.intex.in/cdn/shop/products/1_9b8014ad-124e-4742-a628-9a4c4affe617.jpg?v=1648711109",
  },
  {
    id: 2,
    title: "Sunglass",
    price: 9.99,
    imgUrl:
      "https://t3.ftcdn.net/jpg/00/79/36/04/360_F_79360425_13tH0FGR7nYTNlXWKOWtLmzk7BAikO1b.jpg",
  },
  {
    id: 3,
    title: "Camera",
    price: 39.99,
    imgUrl:
      "https://media.istockphoto.com/id/177120516/photo/constructor-still-life.jpg?s=612x612&w=0&k=20&c=Sda-M377yBLRBbo5ffP-9rsvJ5c4FMOndx-IsCHSS-8=",
  },
  {
    id: 4,
    title: "Camera",
    price: 39.99,
    imgUrl:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
  },
  {
    id: 5,
    title: "Camera",
    price: 39.99,
    imgUrl:
      "https://media.istockphoto.com/id/178851955/photo/flowery-evase-bateau-yellow-dress.jpg?s=612x612&w=0&k=20&c=EOJGCGC6dmFt0IQvbxq3PthCmNXO1flOpjYWC4KkcyQ=",
  },
  {
    id: 6,
    title: "Camera",
    price: 39.99,
    imgUrl: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg",
  },
  {
    id: 7,
    title: "Camera",
    price: 39.99,
    imgUrl:
      "https://media.istockphoto.com/id/178141905/photo/inverter-welding-machine-and-mask.jpg?s=612x612&w=0&k=20&c=oVE9bTyWwko3mMXsbKpipcrivnzV1bjkLTtyy5aQEcc=",
  },
  {
    id: 8,
    title: "Camera",
    price: 39.99,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5tRrLmnB9vjCz7Z2YzEir05jUGcMA_qRUagFQl3S2w&s",
  },
  {
    id: 8,
    title: "Camera",
    price: 39.99,
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

let products = [
  {
    prod_img: "../img/galaxy_a735G_gray.jpg",
    prod_info: "Galaxy-A7",
    prod_priceLabel: "Price : ",
    prod_price: "21,999",
    prod_btn: "Add to Cart",
  },
  {
    prod_img: "../img/galaxy_s21fe5G_pink.jpg",
    prod_info: "Galaxy-S22",
    prod_priceLabel: "Price : ",
    prod_price: "11,999",
    prod_btn: "Add to Cart",
  },
  {
    prod_img: "../img/iqoo_neo65G_blue.jpg",
    prod_info: "IQoo Neo",
    prod_priceLabel: "Price : ",
    prod_price: "35,999",
    prod_btn: "Add to Cart",
  },
  {
    prod_img: "../img/iqoo_z65G_blue.jpg",
    prod_info: "IQoo-Z65",
    prod_priceLabel: "Price : ",
    prod_price: "45,999",
    prod_btn: "Add to Cart",
  },
  {
    prod_img: "../img/oneplus_10pro5G_black.webp",
    prod_info: "Oneplus-10Pro",
    prod_priceLabel: "Price : ",
    prod_price: "65,999",
    prod_btn: "Add to Cart",
  },
  {
    prod_img: "../img/oneplus_nord2t5G_aqua.webp",
    prod_info: "Oneplus-Nord",
    prod_priceLabel: "Price : ",
    prod_price: "17,999",
    prod_btn: "Add to Cart",
  },
  {
    prod_img: "../img/poco_m45G_yellow.webp",
    prod_info: "Poco M45",
    prod_priceLabel: "Price : ",
    prod_price: "35,999",
    prod_btn: "Add to Cart",
  },
  {
    prod_img: "../img/poco_x4pro5G_blue.webp",
    prod_info: "Poco X4",
    prod_priceLabel: "Price : ",
    prod_price: "15,999",
    prod_btn: "Add to Cart",
  },
  {
    prod_img: "../img/realme_narzo505G_blue.webp",
    prod_info: "Narzo 50",
    prod_priceLabel: "Price : ",
    prod_price: "35,999",
    prod_btn: "Add to Cart",
  },
  {
    prod_img: "../img/redmi_note11_blue.webp",
    prod_info: "Redmi-Note-11",
    prod_priceLabel: "Price : ",
    prod_price: "18,999",
    prod_btn: "Add to Cart",
  },
];

products.forEach(function (elem, ind) {
  let columThree = document.createElement("div");
  columContainer = document.createElement("div");
  columImg = document.createElement("div");
  colum_img = document.createElement("img");
  colum_Info = document.createElement("div");
  columPara = document.createElement("p");
  columParaPrice = document.createElement("p");
  columPrice = document.createElement("span");
  columPriceVal = document.createElement("span");
  columBtn = document.createElement("button");
  columA = document.createElement("a");

  columThree.setAttribute("class", "col-2");
  columContainer.setAttribute("class", "card-container");
  columImg.setAttribute("class", "card-img");
  colum_Info.setAttribute("class", "card-info");
  columA.setAttribute("href", "#");

  colum_img.src = elem.prod_img;
  columPara.innerText = elem.prod_info;
  columA.innerText = elem.prod_btn;
  columPrice.innerText = elem.prod_priceLabel;
  columPriceVal.innerText = elem.prod_price;

  columThree.appendChild(columContainer);
  columContainer.append(columImg, colum_Info);
  columImg.appendChild(colum_img);
  colum_Info.append(columPara, columParaPrice, columBtn);
  columParaPrice.append(columPrice, columPriceVal);
  columBtn.appendChild(columA);

  let insertCard = document.getElementById("prod-2");
  insertCard.appendChild(columThree);
});

let addCart = function () {
  
};

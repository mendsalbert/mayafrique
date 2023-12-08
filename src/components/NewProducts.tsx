import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/p1.jpeg",
    title: "African Print",
    desc: "African print",
    rating: 4,
    price: "200.00",
  },
  {
    img: "/p2.jpeg",
    title: "African Print",
    desc: "African print",
    rating: 5,
    price: "200.00",
  },
  {
    img: "/p3.jpeg",
    title: "African Print",
    desc: "African print",
    rating: 3,
    price: "200.00",
  },
  {
    img: "/p4.jpeg",
    title: "African Print",
    desc: "African print",
    rating: 4,
    price: "200.00",
  },
  {
    img: "/p5.jpeg",
    title: "African Print",
    desc: "African Hoodie",
    rating: 3,
    price: "200.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;

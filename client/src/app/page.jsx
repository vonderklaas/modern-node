import Pay from "@/components/Pay";
import { Minus } from "lucide-react";
import Image from "next/image";

const Page = () => {
  const cart = [
    {
      id: 1,
      name: "Nike Air Max",
      price: 129.9,
      image: "/product1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "Adidas Superstar Cap",
      price: 29.9,
      image: "/product2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      name: "Puma Yellow T-Shirt",
      price: 49.9,
      image: "/product3.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="mb-16">
      <h1 className="text-2xl font-bold">Cart Products</h1>
      <div className="flex flex-col lg:flex-row justify-between gap-16 mt-16">
        <div className="flex flex-col gap-16 w-full lg:w-2/3">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="rounded-lg"
                quality={100}
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-800">
                    ${item.price.toFixed(2)}
                  </h2>
                  <div className="flex items-center gap-1 bg-red-100 rounded-md p-1">
                    <Minus className="w-2 h-2 text-red-300" />
                    <span className="text-[10px] text-red-300">Remove</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3">
          <Pay cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Page;

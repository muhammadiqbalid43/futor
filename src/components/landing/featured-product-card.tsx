import { FeaturedProduct } from "@/types/product";
import Image from "next/image";

export default function FeaturedProductCard({
  title,
  price,
  image,
}: FeaturedProduct) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className=" h-[300px] w-[300px] object-cover rounded-md"
        priority
      />
      <h3 className="text-lg font-medium mt-2">{title}</h3>
      <p className="text-green-600 font-bold mt-1">${price}</p>
    </div>
  );
}

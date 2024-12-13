"use client";
import { useEffect, useState } from "react";

export default function DisplayOfProducts() {
  const [theBestProducts, setTheBestProducts] = useState([]);
  useEffect(() => { 
    
  })
  return (
    <div>
      {theBestProducts.map((p) => {
        <section className="bg-backgroundSection h-containerSectionHeight w-containerSectionWidth">
          <div className="my-[14px] mx-[26px]">
            <Image />
          </div>
          <div>
            <p>{p.name}</p>
          </div>
        </section>;
      })}
    </div>
  );
}

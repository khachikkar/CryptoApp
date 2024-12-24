"use client"
import Image from 'next/image'
import {one, two, tree, four} from "../lib/img/images"
import {supabase} from "@/service/supabase";
import {useEffect, useState} from "react";





const nftItems = [
  { id: 1, name: 'Cosmic Cube', price: '0.5 ETH', image: one },
  { id: 2, name: 'Digital Dreamscape', price: '0.8 ETH', image: two },
  { id: 3, name: 'Neon Nexus', price: '0.3 ETH', image: tree },
  { id: 4, name: 'Quantum Quasar', price: '1.2 ETH', image: four },
]







export default function Marketplace() {

    type DataType = {
        id: number;
        name: string;
        price: number;
        image_url: string
    };
    const [mdata, setMdata] = useState<DataType[]>([])

    const getProducts = async () => {
        try {
            const { data, error } = await supabase
                .from('products')  // Make sure the table name is correct
                .select('*');  // Select all columns, or modify it to fetch specific columns like .select('id, name, price')

            if (error) {
                throw new Error(error.message);
            }



            console.log(data, "data")
            setMdata(data)
            return data;  // Returns an array of product data
        } catch (error) {
            console.error('Error fetching products:', error);
            return null;
        }
    };

    useEffect(() => {
        getProducts()

        console.log(mdata, "mdata")
    }, []);







  return (
      <section id="marketplace" className=" bg-gradient-to-r from-blue-950  to-black text-white  py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">NFT Marketplace Preview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {mdata.map((item) => (
                <div key={item.id} className=" bg-gray-700 bg-opacity-30 rounded-lg overflow-hidden">
                  <Image
                      src={item.image_url}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110 overflow-hidden"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <p className="text-purple-400">{item.price} ETH</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}

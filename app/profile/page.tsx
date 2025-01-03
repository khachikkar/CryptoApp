'use client'

import { useUser } from '@clerk/nextjs'
import { observer } from 'mobx-react-lite'
import { userStore } from '../stores/userStore'
import Navigation from '../../components/Navigation'
import NftForm from "@/components/NftForm";
import Footer from "@/components/Footer";
import {useState} from "react";

const ProfilePage = observer(() => {
  const { user } = useUser()

    console.log(user?.fullName, "user")


    const [showNFT, setShowNFT] = useState<boolean>(false);

    const handeAddProduct = () =>{
        console.log("handeAddProduct")
        setShowNFT(prev=> !prev)

    }




  if (!userStore.isAuthenticated) {

    return (
      <div>
        <Navigation />
        <div className=" bg-gray-900 text-white  container mx-auto mt-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    )
  }




  return (
    <div className="bg-black text-white ">
      <Navigation />
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user?.fullName || 'User'}!</h1>
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
          <p><strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress}</p>
          <p><strong>User ID:</strong> {user?.id}</p>
        </div>
      </div>

        <div className="flex justify-center flex-col m-20">

            <button
                className=" h-10 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-[10px] transition-colors"
                onClick={handeAddProduct}
            >Add a Product +</button>

            {
                showNFT && (
                <div>
                    <NftForm/>
                </div>
                )
            }

        </div>
        <Footer/>
    </div>
  )
})

export default ProfilePage


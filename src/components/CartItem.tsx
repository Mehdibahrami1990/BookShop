import React from 'react'

const CartItem = () => {
  return (
     <div className="grid grid-cols-12 bg-slate-100 mb-4" >
          <img
            className="col-span-3 w-40 h-40 sm:w-60 sm:h-60 md:w-50 md:h-45 overflow-hidden flex items-center justify-center"
            src="https://english-e-reader.net/covers/Trapped_The_Aron_Ralston_story-Caroline_Shackleton.jpg"
            alt=""
          />

          <div className="col-span-9 mt-8">
            <h2 className="text-xl font-bold">Product Name</h2>
            <p>
              Number of products : <span>3</span>
            </p>
            <p>
              price : <span>45$</span>
            </p>
            <div className="mt-4">
              <button className="px-4 py-2 bg-sky-500 text-white rounded-2xl cursor-pointer">
                +
              </button>
              <span className="mx-4">3</span>
              <button className="px-4 py-2 bg-sky-500 text-white rounded-2xl cursor-pointer">
                {" "}
                -
              </button>
            </div>
          </div>
        </div>
  )
}

export default CartItem
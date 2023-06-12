import React from 'react'
import './HomePage.css'

export default function HomePage() {
  return (
    <main className='bg-secondary py-12' >
      <div className='px-8'>
        <h1 className='mb-6 text-[46px] text-center uppercase font-sans tracking-wider'>Menus</h1>
        <ul className='flex justify-center text-xs items-center mb-5'>
          <li ><img src="https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-oceanwise.svg" alt="" />Oceanwise</li>
          <li ><img src="https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-veggie.svg" alt="" />Vegetarian</li>
          <li ><img src="https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-glutenfree.svg" alt="" />Gluten-Free</li>
          <li ><img src="https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-organic.svg" alt="" />Organic</li>
        </ul>
        <div>
          <ul className='flex justify-center text-base uppercase items-center bg-[#BD3F39] text-basic'> 
            <li ><span className='border-b-4 border-white'>Dinner Menu</span></li>
            <li><span>Lunch Menu</span></li>
            <li><span>Wine</span></li>
          </ul>
        </div>
      </div>
    </main>
  )
}

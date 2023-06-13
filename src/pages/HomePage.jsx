import React from 'react'
import './HomePage.css'
import Accordion from '../components/accordion/Accordion'
import Meal from '../components/meal/Meal'
import data from '../data.json'

export default function HomePage() {
  const oceanWise = "https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-oceanwise.svg";
  const veggie = "https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-veggie.svg";
  const glutenFree = "c";
  const organic = "https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-glutenfree.svg";


  return (
    <main className='bg-secondary py-12' >
      <div className='px-8'>
        <h1 className='mb-6 text-[46px] text-center uppercase font-sans tracking-wider'>Menus</h1>
        <ul className='flex justify-center text-xs items-center mb-5'>
          <li ><img src={oceanWise} alt="" />Oceanwise</li>
          <li ><img src={veggie} alt="" />Vegetarian</li>
          <li ><img src={glutenFree} alt="" />Gluten-Free</li>
          <li ><img src={organic} alt="" />Organic</li>
        </ul>
        <div className='menu-section bg-basic max-w-screen-lg m-auto'>
          <ul className='flex justify-center text-base uppercase items-center bg-[#BD3F39] text-basic'>
            <li ><span className='active'>Dinner Menu</span></li>
            <li ><span>Lunch Menu</span></li>
            <li><span>Wine</span></li>
          </ul>
          <div className='mt-12 px-16 pb-16 mx-auto'>
            <p className='text-center text-sm'>Available from 4pm daily</p>
            {data.categories.map((section)=>{
              return(
                <Accordion key={section.name} title={section.name} content={<div className='grid grid-cols-2 gap-x-12'>
                  {section.items.map((meals)=>{
                    return(
                      <Meal key={meals.name} title={meals.name} price={meals.price} description={meals.description} icon={meals.options} />
                    )
                  })}
                </div>} />
              )
            })}
          </div>

        </div>
      </div>
    </main>
  )
}

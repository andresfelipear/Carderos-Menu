import React from 'react'
import './HomePage.css'
import Accordion from '../components/accordion/Accordion'
import Meal from '../components/meal/Meal'

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
        <div className='menu-section bg-basic'>
          <ul className='flex justify-center text-base uppercase items-center bg-[#BD3F39] text-basic'>
            <li ><span className='active'>Dinner Menu</span></li>
            <li ><span>Lunch Menu</span></li>
            <li><span>Wine</span></li>
          </ul>
          <div className='mt-12 px-16 pb-16 mx-auto'>
            <p className='text-center text-sm'>Available from 4pm daily</p>
            <Accordion title={'Accordion 1' } content={<div className='grid grid-cols-2 gap-4'>
              <Meal title={'Hummus'} price={'17.50'} description={'cilantro pesto, goat feta, dukkah (contains nuts), kalamata olives, warm naan.'} icon={veggie}/>
              <Meal title={'Hummus'} price={'17.50'} description={'cilantro pesto, goat feta, dukkah (contains nuts), kalamata olives, warm naan.'} icon={veggie}/>
              <Meal title={'Hummus'} price={'17.50'} description={'cilantro pesto, goat feta, dukkah (contains nuts), kalamata olives, warm naan.'} icon={veggie}/>
              <Meal title={'Hummus3'} price={'17.50'} description={'cilantro pesto, goat feta, dukkah (contains nuts), kalamata olives, warm naan.'} icon={veggie}/>
              <Meal title={'Hummus4'} price={'17.50'} description={'cilantro pesto, goat feta, dukkah (contains nuts), kalamata olives, warm naan.'} icon={veggie}/>
              <Meal title={'Hummus'} price={'17.50'} description={'cilantro pesto, goat feta, dukkah (contains nuts), kalamata olives, warm naan.'} icon={veggie}/>
            </div>}/>
            <Accordion title={'Accordion 1' } content={'lorem '}/>
            <Accordion title={'Accordion 1' } content={'lorem '}/>
            <Accordion title={'Accordion 1' } content={'lorem '}/>
          </div>

        </div>
      </div>
    </main>
  )
}

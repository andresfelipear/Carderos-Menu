import React, {useState} from 'react'
import './HomePage.css'
import Accordion from '../components/accordion/Accordion'
import Meal from '../components/meal/Meal'
import data from '../data.json'

export default function HomePage() {
  const [useFilter, setUseFilter] = useState(false);
  const [filterValue, setFilterValue]=useState("");
  const oceanWise = "https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-oceanwise.svg";
  const veggie = "https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-veggie.svg";
  const glutenFree = "https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-glutenfree.svg";

  const applyFilter = (value)=>{
      if(filterValue===""){
        setFilterValue(value);
        setUseFilter(true);
      }
      else if(value !== filterValue){
        setFilterValue(value);
      }
      else{
        setFilterValue("");
        setUseFilter(false);
        
      }
  }

  return (
    <main className='bg-secondary py-12' >
      <div className='px-8'>
        <h1 className='mb-6 text-[46px] text-center uppercase font-sans tracking-wider'>Menus</h1>
        <ul className='flex justify-center text-xs items-center mb-5'>
          <li onClick={()=>{applyFilter('oceanwise')}} className={filterValue==="oceanwise"?'active':''} ><img src={oceanWise} alt="" /><span>Oceanwise</span></li>
          <li onClick={()=>{applyFilter('veggie')}} className={filterValue==="veggie"?'active':''} ><img src={veggie} alt="" /><span>Vegetarian</span></li>
          <li onClick={()=>{applyFilter('glutenfree')}} className={filterValue==="glutenfree"?'active':''}><img src={glutenFree} alt="" /><span>Gluten-Free</span></li>
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
              let meals = section.items;
              if(useFilter){
                meals = section.items.filter(item => item.options && item.options.includes(filterValue));
              }
              if(meals.length ==0){
                return;
              }
              return(
                <Accordion open={useFilter} key={section.name} title={section.name} content={<div className='grid grid-cols-2 gap-x-12'>
                  {meals.map((meal)=>{
                    return(
                      <Meal key={meal.name} title={meal.name} price={meal.price} description={meal.description} icons={meal.options} />
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

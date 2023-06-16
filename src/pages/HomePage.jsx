import React, { useState } from 'react'
import './HomePage.css'
import Accordion from '../components/accordion/Accordion'
import Meal from '../components/meal/Meal'
import data from '../data.json'
import Modal from '../components/notification/Modal'

export default function HomePage() {
  const [useFilter, setUseFilter] = useState(false);
  const [finalData, setFinalData] = useState(data);
  const [filterValue, setFilterValue] = useState("");
  const [mealDetails, setMealDetails] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const oceanWise = "https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-oceanwise.svg";
  const veggie = "https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-veggie.svg";
  const glutenFree = "https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-glutenfree.svg";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (meal) => {
    setMealDetails(meal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const applyFilter = (value) => {
    if (filterValue === "") {
      setFilterValue(value);
      setUseFilter(true);
    }
    else if (value !== filterValue) {
      setFilterValue(value);
    }
    else {
      setFilterValue("");
      setUseFilter(false);

    }
  }

  const showDetails = (meal) => {
    openModal(meal);

  }

  const filterJsonData = (data, term) => {
    // Base case: data is a string
    if (typeof data === 'string') {
      return data.toLowerCase().includes(term.toLowerCase());
    }

    // Base case: data is an array
    if (Array.isArray(data)) {
      return data.some((item) => filterJsonData(item, term));
    }

    // Recursive case: data is an object
    if (typeof data === 'object') {
      return Object.values(data).some((value) => filterJsonData(value, term));
    }

    return false;
  };
  

  //Advance Search
  const search = ()=>{
      var testData = data.categories.map((category) =>{
        const filterItems = category.items.filter(item => filterJsonData(item,searchTerm));
        if(filterItems.length>0){
          category.items = filterItems;
          return category;
        }else{
          return 0;
        }
      });
      testData = testData.filter(item=> item!==0)
      console.log(testData);
  }

  return (
    <main className='bg-secondary py-6 md:py-12' >
      <div className='px-4 md:px-8'>
        <h1 className='mb-4 text-[46px] text-center uppercase font-sans tracking-wider'>Menus</h1>
        <div className='m-auto text-center mb-4'>
          <input
            type="text"
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
            placeholder="Enter search term..."
            className="p-2 border border-gray-300 rounded-l-md w-96 focus:outline-none"
          />
          <button
            onClick={search}
            className="p-2 bg-background text-white rounded-r-md hover:bg-blue-600 transition duration-300"
          >
            Search
          </button>
        </div>
        <ul className='flex justify-center text-xs items-center mb-5 icons'>
          <li onClick={() => { applyFilter('oceanwise') }} className={filterValue === "oceanwise" ? "active" : "flex"} ><img src={oceanWise} alt="" /><span>Oceanwise</span></li>
          <li onClick={() => { applyFilter('veggie') }} className={filterValue === "veggie" ? 'active' : ''} ><img src={veggie} alt="" /><span>Vegetarian</span></li>
          <li onClick={() => { applyFilter('glutenfree') }} className={filterValue === "glutenfree" ? 'active' : ''}><img src={glutenFree} alt="" /><span>Gluten-Free</span></li>
        </ul>
        <div className='menu-section bg-basic max-w-screen-lg m-auto'>
          <ul className='flex justify-center text-xs md:text-base  uppercase items-center bg-[#BD3F39] text-basic'>
            <li ><span className='active'>Dinner Menu</span></li>
            <li ><span>Lunch Menu</span></li>
            <li><span>Wine</span></li>
          </ul>
          <div className='mt-12 px-4 md:px-12 pb-6 md:pb-16 mx-auto'>
            <p className='text-center text-sm'>Available from 4pm daily</p>
            {data.categories.map((section) => {
              let meals = section.items;
              if (useFilter) {
                meals = section.items.filter(item => item.options && item.options.includes(filterValue));
              }
              if (meals.length == 0) {
                return;
              }
              return (
                <Accordion open={useFilter} key={section.name} title={section.name} content={<div className='grid grid-cols-1 gap-x-12 lg:grid-cols-2'>
                  {meals.map((meal) => {
                    return (
                      <Meal onClick={() => showDetails(meal)} key={meal.name} title={meal.name} price={meal.price} description={meal.description} icons={meal.options} />
                    )
                  })}
                </div>} />
              )
            })}
          </div>

        </div>
      </div>
      <Modal isOpen={isModalOpen} meal={mealDetails} onClose={closeModal} />
    </main>
  )
}

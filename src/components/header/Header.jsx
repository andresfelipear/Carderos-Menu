import React from 'react';

function Header() {
  return (
    <header className="bg-secondary block">
      <div className="py-4 text-center font-medium  m-auto flex items-center grid grid-cols-3 gap-4">
        <div className='col-start-2 w-fit'>
          <h1 className="text-primary text-5xl tracking-widest">cardero's</h1>
          <div className="uppercase tracking-[.50em] italic text-gray-400 text-[0.50rem] text-right">restaurant</div>
        </div>
        <div>
          Tel: <strong>604.669.7666</strong>
        </div>

      </div>
      <nav className="grid grid-cols-6 gap-4 p-4 text-sm text-basic bg-gray-900">
        <div className='flex capitalize col-start-2 col-span-4 justify-around'>
          <a href="#">reserve online</a>
          <a href="#">menus</a>
          <a href="#">contact & location</a>
          <a href="#">private events</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;

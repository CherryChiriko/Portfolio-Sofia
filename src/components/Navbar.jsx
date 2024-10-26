import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../style'
import { navLinks } from '../constants'
import { logo } from '../assets/index';
import { menu, close } from '../assets'


const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2'
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }} >
          <img src = { logo } alt='logo'  className='w-9 h-9 object-contain'/>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ?
                "text-white" : "text-secondary"
              } hover: text-white text-[18px] font-medium cursor-pointer
              `}
              onClick={() => setActive(link.title)}
            >
              <Link to={`/${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle? close : menu} alt='menu' 
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)} /> 

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ?
                  "text-white" : "text-secondary"
                } min-w-[100px] font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {setToggle(!toggle); setActive(link.title)}}
              >

                <a href={`#${link.id}`} className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>{link.title}</a>
              </li>
            ))}
            </ul>
          </div>
        </div>
        
      </div>

    </nav>
  )
}

export default Navbar
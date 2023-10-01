import { hamburger } from '../assets/icons'
import { headerLogo } from '../assets/images'
// import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'


const Nav = () => {
  return (
    <div>

      <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'><a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

          <ul className='flex-1 flex justify-center max-lg:hidden'>
            {navLinks.map((items) =>
            (
              <li key={items.label}>
                <a href={items.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray px-[15px] "
                >
                  {items.label}
                </a>
              </li>
            )
            )}



          </ul>


          <div className='max-lg:hidden relative right-14' >
            <button className=' shadow-lg bg-red-400 py-3 px-7 text-white-400 font-montserrat rounded-full hover:bg-white-400 hover:text-black   '>
              Login
            </button>
          </div>


          <div className='hidden max-lg:block'>
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </div>

        </nav>
      </header>
    </div>
  )
}

export default Nav
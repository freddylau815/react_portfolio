import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  let Links = [
    { name: 'WORK', link: '#work' },
    { name: 'ABOUT ME', link: '#about' },
    { name: 'CONTACT', link: '#contact' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <header className='w-full sticky top-0 left-0 border-b-4 border-zinc-900'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='mx-2'>
          <div className='md:flex items-center justify-between py-4'>
            <h1 className='title font-bold text-2xl py-3 cursor-pointer flex items-center'>
              FREDDY LAU
            </h1>

            <div
              onClick={() => setOpen(!open)}
              className='text-4xl absolute right-8 top-6 py-1 cursor-pointer md:hidden'
            >
              {/* <ion-icon name={open ? 'close':'menu'}></ion-icon> */}
            </div>

            <ul
              className={`header-list md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? 'top-20 ' : 'top-[-490px]'
              }`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className='font-medium md:ml-8 text-xl md:my-0 my-7'
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

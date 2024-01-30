import React from 'react'
import github from '../images/github.svg'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full px-7  flex items-center justify-between bg-slate-400 p-2 shadow'>
      <a href="#" className='text-2xl font-semibold font-mono text-slate-800  '>
        Caesar Cipher
      </a>
      <a href="https://github.com/saad810/caesar-cipher" className='flex items-center '>
        <img src={github} alt="github logo" className='w-10 ' />
        <p className='pl-2'>Repo</p>
      </a>
    </header>
  )
}

export default Header
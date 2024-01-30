import React from 'react'
import linkedin from '../images/linkedIn.svg'
import github from '../images/github.svg'
import '../custom.css'

const Images = ({ img }) => {
  return <img src={img} alt='icon' className='icon' />
}
const icons = [github, linkedin];

const Footer = () => {
  return (
    <footer className='py-3 border-t-2 border-slate-800 px-10 flex items-center justify-between'>
      <p className='text-lg font-mono font-medium'>Made by <span className='text-lime-800 font-bold'>Saad Amin</span></p>
      <div className='flex items-center space-x-3'>
        {icons.map((icon, index) => (
          <Images key={index} img={icon} />
        ))}
      </div>
    </footer>
  )
}

export default Footer
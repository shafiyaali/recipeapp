import React from 'react'
// import Cheflogo from '../images/chef-claude-icon.jpg'
const Header = () => {
  return (
    <div className='flex justify-center items-center py-6 gap-6 border-b-0 shadow-md'>
        <div className='w-12 h-12'> <img src="chef-claude-icon.png"/>
        </div>
        <div className='font-medium text-3xl'>Chef Shafiya</div>
    </div>
  )
}

export default Header
import React from 'react'
import './MainContentStyle.css'

export default function MainContent() {
  return (
    <div className='content1'>
      <div className='content1_info'>
        <h4>Hello, I am</h4>
        <h2>Dinesh Chaudhary,</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea impedit distinctio fugit, suscipit voluptates?
        </p>
        <div className='info_Btn'>
          <button>More Info</button>
        </div>
      </div>
      <div className='content1_img'>
        <img src="https://i.pinimg.com/736x/db/21/77/db2177581bb956501e6ecbebb4e8905e.jpg" alt="" />
      </div>
    </div>
  )
}

import React from 'react'
// import {FontAweSomeIcone}from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

function Header ()  {
  return (
    <div className="h-[134px] p-4 flex  " style={{backgroundColor:'rgb(162, 152 ,117) '}}>
      <h1 className='w-[242.56px] h-[87.45px]font-bold text-white flex '>Purity</h1>
      <div className=' flex gap-4 items-center justify-center'>
        <input 
        type="text"
        placeholder='Search for Gold Jewellery,Diamond Jewellery and more...'
        className='p-2 rounded-lg text-white-900 w-[769.89px] h-[56.24px]'
       
        />
  </div>    
        
  </div>
      
    
    )
  }
  
  export default Header 
     
      
        
          
        

      
   
import React from 'react';

const Header=()=>{
  return (
    <>
    <div className="header">
    <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/7b/61/39/7b613966-70d5-590d-a7f8-2e5820292931/source/512x512bb.jpg" alt="logo" width='70' height="50"/>
    <h1 className="text-capitalize text-center"> Rohit Keep</h1>
      </div>
    </>
  )

}
export default Header;






<!-- footer -->



import React, { useState } from 'react';

const Footer=()=>{
    
    const year = new Date().getFullYear();
  return (
    <>
    <footer>
     <p>Copyright © {year}</p>
    </footer>
      
    </>
  )

}
export default Footer;
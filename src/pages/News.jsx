import React, {Component, createContext, useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { NewsContextProvider } from '/src/NewsContext.jsx';
import News2 from "/src/News2.jsx";
import '/src/News.css';
import WestIcon from '@mui/icons-material/West';

const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+ currentYear;

function News() {
const navigateHome = () => {
    navigate('/Home');
 };
  return (
    <div>

      <div>
      <h1 className="head__text" style={{fontSize: '2.5rem',color: 'black', position: 'absolute', top: '8%', right: '43%'}}>Music News</h1>  <br /> <br /> <br /> 
    <a href="/Home"> <WestIcon style={{position: 'absolute', top: '16%', left: '10%'}} /> </a> 
      <NewsContextProvider>
      <News2 />
    </NewsContextProvider>       
    </div>


      <footer className="footer" style={{  marginTop: "1 rem",  padding: "1 rem",  textAlign:'center', color: "white", backgroundColor: "black",  position: "fixed",  bottom: "0",  left: "0",  width: "100%" 
          }}>
 Copyright © { yearTxt } Alrights Reserved.
  </footer>
    </div>
  )
}

export default News

import React, { useEffect, useState } from "react";
import Tabs from './Tabs';
const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+ currentYear;
//import { useParams } from "react-router-dom";
function Pop() {
 
  return (
    <div>
   <Tabs /> 
   

      <footer className="footer" style={{  marginTop: "1 rem",  padding: "1 rem",  textAlign:'center', color: "white", backgroundColor: "black",  position: "fixed",  bottom: "0",  left: "0",  width: "100%" 
          }}>
 Copyright © { yearTxt } Alrights Reserved.
  </footer>	
    </div>
  )
  
}
export default Pop;

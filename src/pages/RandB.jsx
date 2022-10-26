import React, { useEffect, useState } from "react";
import Tabs5 from './Tabs5'; 
const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+ currentYear;

export default function RandB() {
  return (
    <div>
      <Tabs5 /> 

  <footer className="footer" style={{  marginTop: "1 rem",  padding: "1 rem",  textAlign:'center', color: "white", backgroundColor: "black",  position: "fixed",  bottom: "0",  left: "0",  width: "100%" 
          }}>
 Copyright © { yearTxt } Alrights Reserved.
  </footer>	
    </div>
  )
}

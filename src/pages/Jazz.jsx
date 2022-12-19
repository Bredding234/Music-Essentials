import React, { useEffect, useState } from "react";
import Tabs6 from './Tabs6';
import LayoutOne from '/src/components/LayoutOne'
const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+ currentYear;

export default function Jazz() {
  return (
    <div>
      <LayoutOne /> <br />
      <Tabs6 /> 

  <footer className="footer" style={{  marginTop: "1 rem",  padding: "1 rem",  textAlign:'center', color: "white", backgroundColor: "black",  position: "fixed",  bottom: "0",  left: "0",  width: "100%" 
          }}>
 Copyright © { yearTxt } Alrights Reserved.
  </footer>	
    </div>
  )
}

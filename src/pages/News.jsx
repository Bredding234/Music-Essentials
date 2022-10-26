import React from 'react'
const currentYear = (new Date().getFullYear());
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+ currentYear;
function News() {
  return (
    <div>
      <h1> News</h1>

      <footer className="footer" style={{  marginTop: "1 rem",  padding: "1 rem",  textAlign:'center', color: "white", backgroundColor: "black",  position: "fixed",  bottom: "0",  left: "0",  width: "100%" 
          }}>
 Copyright © { yearTxt } Alrights Reserved.
  </footer>
    </div>
  )
}

export default News

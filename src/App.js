import React from "react";
import { Cards } from "./Cards";
import CardData from "./CardData";


function App(){

  return(
    <>     
    <Cards 
       imgSrc ={CardData[0].imgSrc} 
       title = {CardData[0].title }
       sname = {CardData[0].sname}
       link  = {CardData[0].link}
   />

   <Cards 
       imgSrc ={CardData[1].imgSrc} 
       title = {CardData[1].title }
       sname = {CardData[1].sname}
       link  = {CardData[1].link}
   />
                      
   <Cards 
       imgSrc ={CardData[2].imgSrc} 
       title = {CardData[2].title }
       sname = {CardData[2].sname}
       link  = {CardData[2].link}
   />

   <Cards 
       imgSrc ={CardData[3].imgSrc} 
       title = {CardData[3].title }
       sname = {CardData[3].sname}
       link  = {CardData[3].link}
   />
            
   <Cards 
       imgSrc ={CardData[4].imgSrc} 
       title = {CardData[4].title }
       sname = {CardData[4].sname}
       link  = {CardData[4].link}
   />

   <Cards 
       imgSrc ={CardData[5].imgSrc} 
       title = {CardData[5].title }
       sname = {CardData[5].sname}
       link  = {CardData[5].link}
   />
                              
         
  </>
  );
  }

  export default App;

   
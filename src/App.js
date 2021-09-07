import React from "react";
import { Cards } from "./Cards";
import CardData from "./CardData";


// function ncard(val){

//    return(

//        <Cards 
//        imgSrc ={val.imgSrc} 
//        title = {val.title }
//        sname = {val.sname}
//        link  = {val.link}
//    />
//    );

// }

function App(){

return(
    <> 
    <h1 className="Headings">Top 6 series of Netflix</h1>
  {/* map method: The map() method creates a new array with the results of calling a function for every array element.
       we will use it if we want to display all card elements without calling explacitly each card
       it just requird only the first card to display all cards data
       it contain three parameter (value, index, array_name) value: contain all the data of a array does not matter
       how much  index: is the array index array_name: it used in those case if u want ta display data of a specific
       array in many arrays in a components */}
    
    {/* In this i have been called a function "ncard" method. this is one way of using map method*/}
    
    {/* {CardData.map(ncard)} */}

    {/* Another way of using map method is to use flat arrow function in the method method, this way of map method
        is more usable */}

     {CardData.map((val) => {

       return(
         <Cards 
             imgSrc ={val.imgSrc} 
             title = {val.title }
             sname = {val.sname}
             link  = {val.link}
          /> 
            );
       })}
         
  </>
  );
  }

  export default App;

   
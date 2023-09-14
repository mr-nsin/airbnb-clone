import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App(){
  return (
      <div>
        <Navbar />
        {/* <Hero /> */}
        <Card 
            img="katie-zaferes.png"
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with katie zaferes"
            price={136}/>
      </div>
  )
}
import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data"

export default function App(){
  
  const cards = Data.map(obj => {
    return <Card 
        key={obj.id}
        img={obj.coverImg}
        rating={obj.stats.rating}
        reviewCount={obj.stats.reviewCount}
        country={obj.location}
        title={obj.title}
        price={obj.price}
        openSpots={obj.openSpots}/>
  })
  return (
      <div>
        <Navbar />
        {/* <Hero /> */}
        <section className="cards--list">
          {cards}
        </section>
      </div>
  )
}
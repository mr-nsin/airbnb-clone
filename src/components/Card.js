import React from "react";

export default function Card(props){
    // console.log(props)
    return (
        <div className="card">
            <div className="card--badge">SOLD OUT</div>
            <img src={require(`../images/${props.img}`)} className="card--image"/>
            <div className="card--stats">
                <img src={require('../images/star.png')} className="card--star"/>
                <span>5.0</span>
                <span className="gray">({props.reviewCount}) * </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
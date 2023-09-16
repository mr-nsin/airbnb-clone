import React from "react";

export default function Card(props){
    // console.log(props)
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    console.log(props)
    return (
        <div className="card">
            {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../images/${props.coverImg}`)} className="card--image"/>
            <div className="card--stats">
                <img src={require('../images/star.png')} className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) * </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
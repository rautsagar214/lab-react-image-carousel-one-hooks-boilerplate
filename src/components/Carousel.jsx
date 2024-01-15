import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [currIndex, setCurrIndex] = useState(0);

    function handlePrevious(){
        setCurrIndex(currIndex>0 ? currIndex-1 : images.length-1)
    } 
    function handleNext(){
        setCurrIndex(currIndex<images.length-1 ? currIndex+1 : 0)
    } 
    return(
        <>
        <div className="carousel-container flex">
            <div className="leftArrow arrowDiv flex" onClick={handlePrevious}>
                <ArrowBackIosIcon/>
            </div>
            <h2 className="title">{images[currIndex].title}</h2>
            <h4 className="subTitle"> {images[currIndex].subtitle} </h4>
            <img src={images[currIndex].img}/>
            <div className="rightArrow arrowDiv flex" onClick={handleNext}>
                <ArrowForwardIosIcon/>
            </div>
        </div>
        </>
    )
}

export default Carousel;
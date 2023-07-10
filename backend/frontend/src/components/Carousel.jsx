import React from 'react'
const Carousel = () => {
    return (
        <div>
             <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit:"contain" }} >
                <div className="carousel-inner" id='carousel' style={{ height: "650px"}}>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/600×400/?Pizza" className="d-block w-100" style={{
                            filter: "brightness(30%)",objectFit:"fill"
                        }} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/600×400/?Pastry" className="d-block w-100" style={{ filter: "brightness(30%)",objectFit:"fill" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/600×400/?Meal" className="d-block w-100" style={{ filter: "brightness(30%)",objectFit:"fill" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
    
    )
}
export default Carousel;
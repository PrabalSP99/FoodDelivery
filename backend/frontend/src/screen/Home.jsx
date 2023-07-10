import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Carousel  from '../components/Carousel'
import Footer from '../components/Footer'
import Card from '../components/Card'

const Home = () => {
    const [foodcat, setfoodcat] = useState([])
    const [fooditem, setfooditem] = useState([])
    const [search, setsearch] = useState('')

    const loadData = async () => {
        let response = await fetch('http://localhost:5000/cart', {
        
            method: 'GET',
            headers: {
                'content-Type': 'application/json'
            }
        })
        response = await response.json();
        setfoodcat(response[1]);
        setfooditem(response[0]);

    }

    useEffect(() => {
        loadData();
    },[])


    return (
        <div>
            <div><Navbar /></div>
            <div><Carousel/></div>

            {/* search  */}
            <div className='container col-lg-7 col-md-6 col-sm-12 p-0' id='search' style={{ zIndex: "10",marginBottom: '16vh' }}>
                <form className="d-flex " role="search">
                    <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" value={search} onChange={(e)=>setsearch(e.target.value)} />
                    <button type="submit" className="btn btn-outline-warning text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                 </form>
            </div>

            <div className='container'>
                {
                    foodcat !== [] ? foodcat.map((data) => {
                        return (<div className='row '>
                            <div key={data._id} className='fs-3 m-3'> {data.catname} </div>
                            <hr />
                            {fooditem !== [] ? fooditem.filter((item) => (item.catname === data.catname) && (item.fdname.toLowerCase().includes(search.toLocaleLowerCase()))).map((filteritem) => {
                                return (<div key={filteritem._id} className='col-12 col-md-6 col-lg-3'>
                                    <Card
                                        item={filteritem}
                                         id={filteritem._id}
                                         name={filteritem.fdname}
                                         img={filteritem.fdimg}
                                        option={filteritem.options[0]}
    
                                   />
                                </div>)
                            }) : ""}
                        </div>
                        )
                    }) : <div> nothing  happen</div>
                }
            </div>
            <div><Footer /></div>
        </div>

    )
}


export default Home;

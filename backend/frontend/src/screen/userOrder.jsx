import React,{useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const AllOrder =  () => {

    const [orderData, setorderData] = useState([])
   const dataEmail = localStorage.getItem('userEmail')


   const loadData = async()=>{
      const res = await fetch(`http://localhost:5000/myorderdata?email=${dataEmail}`, {
      method: 'GET',
      headers: {
          'content-Type': 'application/json'
      },
   })
    
      let response = await res.json()
       setorderData(response?.order_data)
    //   console.log(response?.order_data);
     
  }

  useEffect(() => {
      loadData();
  },[]);

  return (
      <div>
          <div>
              <Navbar />
          </div>
                 
              <div className='container'>
                  <div className='row'>
                  {orderData?.map(item=>{
               return (    <div className="card" style={{width: "18rem", margin:'1vw'}}>
  <img src={item.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="btn btn-primary">Order date: {item.date}</p>
  </div>
</div>)
                

                  })}
                
                  </div>
              </div> 
             

          <Footer />
      </div>
  )
}
            
export default AllOrder;

































































// const AllOrder =  () => {

//       const [orderData, setorderData] = useState([])
//      const loginEmail = localStorage.getItem('userEmail')
 

//      const loadData = async()=>{
//         const res = await fetch('http://localhost:5000/order', {
//         method: 'GET',
//         headers: {
//             'content-Type': 'application/json'
//         },
//         // body: JSON.stringify({email : loginEmail})
//      })
      
//         let response = await res.json()
//          setorderData(response)
//         console.log(response);
       
//     }

//     useEffect(() => {
//         loadData();
//     },[])

//     return (
//         <div>
//             <div>
//                 <Navbar />
//             </div>
                   
//                 <div className='container'>
//                     <div className='row'>
        
//                           {
                           
//                             orderData !== [] ? orderData.map((filteritem)=>{
//                               return <div> {filteritem.email}
//                               {filteritem.email === loginEmail ? console.log(filteritem.email): console.log("bad fetchig")}
//                               </div>
                             
                              

//                               {/* {filteritem.email===loginEmail? Array(filteritem.order).map((item)=>{
//                                 return <div>
//                                     {item.name}
//                                 </div>
//                               }):console.log('error in fetching')} */}

//                             }) :console.log('not work')
//                           }
//                     </div>
//                 </div>
               



//             <div> hello world</div>

//             <Footer />
//         </div>
//     )
// }
              
// export default AllOrder;


// <div className='container'>
//                 <div className='row'>
                   
//                 {orderData!=={}?Array(orderData).map((chk)=>{
//                     return(
//                         orderData.order_data ? orderData.order_data.slice(0).reverse().map((it)=>{
//                             console.log('it works', orderData.order_data);
//                             return Array(it).map((arrayData)=>{
//                                 return(
            
//                                     <div>
//                                    { arrayData.orderdate ? <div className='m-auto mt-5'>

//                                        {arrayData.orderdate}

//                                        <hr/>
//                                    </div>
                                   
//                                      : <div className='col-12 col-md-6 col-lg-3' >
//                                                             <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                                                                 {/* <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
//                                                                 <div className="card-body">
//                                                                     <h5 className="card-title">{arrayData.name}</h5>
//                                                                     <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                                                         <span className='m-1'>{arrayData.qty}</span>
//                                                                         <span className='m-1'>{arrayData.size}</span>
//                                                                         <span className='m-1'>{arrayData.orderData}</span>
//                                                                         <div className=' d-inline ms-2 h-100 w-20 fs-5' >
//                                                                             ₹{arrayData.price}/-
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                         </div>
//                                      }
                                      
//                                   </div> 
//                                 )
//                             })
//                         }) :console.log("error in loop2") 
                    
//                     )
//                 }):console.log("error in loop1")}
//                 </div>            
//             </div>
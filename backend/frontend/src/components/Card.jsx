import React, { useState,useRef,useEffect } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';


const Card = (props) => {
    
    const priceRef = useRef();
    let options = props.option;
   let priceOption = Object.keys(options);

    let cartdata =useCart();
    let dispatch = useDispatchCart(); 
   
   const [qty, setqty]= useState(1);
   const [size,setsize]= useState('');


    const handleCart=  async ()=>{
    
        let food =[];
        for(const item of cartdata){ 
              if(item.id ===props.id){
               food=item;
                break;
            }
        }
        if(food!==[]){
            if(food.size===size){
                await dispatch({type:'UPDATE', id: props.id, price : finalPrice, qty:qty})
                return
            }
            else if(food.size!==size){
                await dispatch({type:'ADD', id:props.id, name: props.name, img:props.img, price:finalPrice, qty:qty, size:size})
                return
            }
            return
        }

        await dispatch({type:'ADD', id:props.id, name: props.name, img:props.img, price:finalPrice, qty:qty, size:size})
    }
   
   let finalPrice = qty * parseInt(options[size])

    useEffect(()=>{
        setsize(priceRef.current.value)
    },[])

    return (
        <div>
            <div className="card m-5" style={{ "width": "18rem", "maxHeight": "380px",backgroundColor:"honeydew" }}>
                <img src={props.img} className="card-img-top" alt="..." style={{height:"200px", objectFit:"cover",padding:'5px'}}/>
                
                <div className="card-body">
                    <h5 className='card-title'>{props.name}</h5>
                    {/* <p className="card-text">{props.des}</p> */}
                    <div className='container w-100'>
                        <select className='bg-success m-2 h-70 rounded' onChange={(e)=>{setqty(e.target.value)}}>
                            {Array.from(Array(4), (e, i) => {
                                return <option key={i + 1} value={i + 1}>{i + 1}</option>
                            })}
                        </select>
                        <select className='bg-success m-2 h-70  rounded' ref ={priceRef} onChange={(e)=>{setsize(e.target.value)}}>
                             {priceOption.map((data)=>{
                                 return  (<option key={data} value={data}>{data}</option>)
                             })}
                        </select>
                        <div className='d-inline h-100 fs-5'> Rs{finalPrice}/- </div>
                        </div>
                        <hr/>         
                    <button className={`btn btn-success justify-center `} onClick={handleCart}>Add to cart</button>  
                </div>
            </div>     
        </div>
    )
 }


export default Card;
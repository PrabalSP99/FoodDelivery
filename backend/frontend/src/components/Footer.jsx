import React from 'react'
import { Link } from 'react-router-dom'
import { GithubFilled, LinkedinFilled, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';




export default function Footer() {

  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted" style={{ "backgroundColor": "rgba(0, 0, 0, 0.05)" }}>

        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block fs-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>

            <Link to="" className="me-4 text-reset" style={{ fontSize: '2rem', }} >
              <TwitterOutlined />
            </Link>
            <Link to="" className="me-4 text-reset" style={{ fontSize: '2rem' }}>
              <GithubFilled />
            </Link>
            <Link to="" className="me-4 text-reset " style={{ fontSize: '2rem' }} >
              <InstagramOutlined />
            </Link>
            <Link to="" className="me-4 text-reset" style={{ fontSize: '2rem' }}>
              <LinkedinFilled /> </Link>
          </div>

        </section>
        <div className="text-center p-4" >
          Copyright ⓒ {year}: Prabs All Right Reserved
        </div>
      </footer>
    </div>
  )
}







/* <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link to="#!" className="text-reset">Pricing</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Settings</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Orders</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Help</Link>
          </p>
        </div>
        

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            aprabal257730@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> +91 9770116038</p>
        </div>
      </div>
    </div>
  </section> */





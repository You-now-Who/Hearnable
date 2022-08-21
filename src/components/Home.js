import React from 'react'
import {
    Link
  } from "react-router-dom";

export const Home = (props) => {
    const {showAlert} = props
  return (
    <>
        {/* First Div Start */}
        {/* <div className="bg-light">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="display-5 text-center">
                            <strong>Hearnable</strong>
                        </h2>
                        <p className="lead text-center">
                            Try it out now!
                        </p>
                    </div>
                </div>
            </div>
        </div> */}
        {/* First Div end */}

        {/* Second Div start */}

        <div className="bg-white py-5">
            <div className="container py-5">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                        <h2 className="font-weight-light">What is the problem?</h2>
                        <p className="font-italic text-muted mb-4">Hearing loss is a common problem caused by noise, aging, disease, and heredity. More than <strong>1.5 billion </strong> people (nearly <strong>20% of the global population</strong>) live with hearing loss. <strong>430 million</strong> of them have disabling hearing loss. People with hearing loss may find it hard to have conversations with friends and family. </p>
                    </div>
                    <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img
                            src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt=""
                            className="img-fluid mb-4 mb-lg-0"/></div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                            alt="" className="img-fluid mb-4 mb-lg-0"/></div>
                    <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                        <h2 className="font-weight-light">What does this do?</h2>
                        <p className="font-italic text-muted mb-4">Hearnable monitors the noise levels of a persons surroundings, and notifies them if the noise levels around them are getting to high. It provides the complete history of your noise levels as well </p>
                        <Link className="btn btn-light px-5 rounded-pill shadow-sm" id="Learn_more" to="/details">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>

        {/* Second Div end */}

  


        <footer className="bg-light pb-5">
            <div className="container text-center">
                <p className="font-italic text-muted mb-0">&copy; Thank you for reading this page!</p>
            </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
            crossOrigin="anonymous"></script>
    </>
  )
}

export default Home;
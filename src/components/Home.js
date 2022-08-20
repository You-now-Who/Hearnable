import React from 'react'

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
                        <a href="/demo" className="btn btn-light px-5 rounded-pill shadow-sm">See the demo</a>
                    </div>
                    <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img
                            src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt=""
                            className="img-fluid mb-4 mb-lg-0"/></div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                            alt="" className="img-fluid mb-4 mb-lg-0"/></div>
                    <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                        <h2 className="font-weight-light">What else can it do?</h2>
                        <p className="font-italic text-muted mb-4">The AI model becomes personalized on the trends showed by the
                            baby. By using the daily time data shown by the baby, the model predicts the reason why the baby
                            might be crying!</p><button className="btn btn-light px-5 rounded-pill shadow-sm" id="Learn_more">Learn More</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Second Div end */}

        {/* Accordian Start */}

        <div className="bg-light py-5">
            <div className="container py-5">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button " type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How does the reason predictor work?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body font-italic text-muted">
                                By looking at the <strong> daily routine of the baby </strong>, the AI model can pick on
                                various trends of the baby, relating to it's <strong> daily time schedule </strong>. Using
                                this, the AI model predicts the reason for why the baby might be crying.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How was it made?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body font-italic text-muted">
                                The models were made using a combination of <strong> CNN </strong> and <strong> Random Forest Collections </strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Can we try it out?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body font-italic text-muted">
                                Yes, you can try out the <a href="/demo" className="link font-italic text-muted"> <u> demo </u>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


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
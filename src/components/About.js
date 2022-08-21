import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
// import CanvasJSReact from './canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export const About = () => {
    const data = [{name: "20-08-2022", uv: 60, pv: 2400, amt: 2400}, {name: "21-08-2022", uv: 30, pv: 2400, amt: 2400}, {name: "21-08-2022", uv: 75, pv: 2400, amt: 2400}, {name: "21-08-2022", uv: 120, pv: 2400, amt: 2400}];
  return (
    <>
    <div className="container text-center">
        <div className="my-5">
            <h1 className="display-5">You past sound history: </h1>
        </div>
        <div className="d-flex align-items-center justify-content-center">
            <div className="mx-2">
                <h1 className="display-10">Your noise exposure is :  </h1> <h1 className="display-10 text-danger">&nbsp; High</h1>
            </div>
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart> 
        </div>
  </div>
  <br/>
  <div className="container text-center my-5">

    <h1 className="fs-3">Tips to reduce noise exposure</h1>

        <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
        <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
    </div>
    </div>

  </div>
    </>
  );
};

export default About;

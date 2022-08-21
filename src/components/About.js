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
        <p className="text-muted">This may take some time to refresh</p>
  </div>
  <br/>
  <div className="container text-center my-5">

    <h1 className="fs-3 my-4">Tips to reduce noise exposure</h1>

    <div className="container">
      <div className="row hidden-md-up">
        <div className="col-md-4">
          <div className="card">
            <img src="https://thumbs.dreamstime.com/b/no-loud-music-24008781.jpg" alt="https://www.travelandleisure.com/thmb/wAq4PGi2FpaKzBGyexd0xWhfoGU=/1800x1012/smart/filters:no_upscale()/iceland-BEAUTCONT1021-b1aeafa7ac2847a484cbca48d3172b6c.jpg"/>
            <div className="card-block">
              <h4 className="card-title my-1">How loud music leads to hearing loss</h4>
              <h6 className="card-subtitle text-muted my-1">Know it from this article</h6>
              <a href="https://www.webmd.com/connect-to-care/hearing-loss/music-and-hearing-loss-how-loud-is-too-loud" class="btn btn-primary my-2">Check it out here</a>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://d12mivgeuoigbq.cloudfront.net/magento-media/blog/2020/best-quiet-dishwasher_sleeping-baby.jpg" alt="https://www.travelandleisure.com/thmb/wAq4PGi2FpaKzBGyexd0xWhfoGU=/1800x1012/smart/filters:no_upscale()/iceland-BEAUTCONT1021-b1aeafa7ac2847a484cbca48d3172b6c.jpg"/>
            <div className="card-block">
              <h4 className="card-title my-1">How to buy quieter appliances</h4>
              <h6 className="card-subtitle text-muted my-1">And the benefits of having them.</h6>
              <a href="https://thesethreerooms.com/kitchens/how-to-buy-quiet-appliances/" class="btn btn-primary my-2">Check it out here</a>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://us.123rf.com/450wm/belchonock/belchonock1804/belchonock180458357/99378185-male-worker-with-hearing-protectors-indoors.jpg" alt="https://www.travelandleisure.com/thmb/wAq4PGi2FpaKzBGyexd0xWhfoGU=/1800x1012/smart/filters:no_upscale()/iceland-BEAUTCONT1021-b1aeafa7ac2847a484cbca48d3172b6c.jpg"/>
            <div className="card-block">
              <h4 className="card-title my-1">What are hearing protection devices?</h4>
              <h6 className="card-subtitle text-muted my-1">And how should you use one?</h6>
              <a href="https://www.ccohs.ca/oshanswers/prevention/ppe/ear_prot.html" class="btn btn-primary my-2">Check it out here</a>

            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://post.healthline.com/wp-content/uploads/2020/10/DM-Hearing-Loss-THUMB.jpeg" alt="https://www.travelandleisure.com/thmb/wAq4PGi2FpaKzBGyexd0xWhfoGU=/1800x1012/smart/filters:no_upscale()/iceland-BEAUTCONT1021-b1aeafa7ac2847a484cbca48d3172b6c.jpg"/>
            <div className="card-block">
              <h4 className="card-title my-1">Do you think you may have hearing loss?</h4>
              <h6 className="card-subtitle text-muted my-1">See the symptoms from here</h6>
              <a href="https://www.mayoclinic.org/diseases-conditions/hearing-loss/symptoms-causes/syc-20373072" class="btn btn-primary my-2">Check it out here</a>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://www.monash.edu/__data/assets/image/0004/2951077/GUILT.jpg" alt="https://www.travelandleisure.com/thmb/wAq4PGi2FpaKzBGyexd0xWhfoGU=/1800x1012/smart/filters:no_upscale()/iceland-BEAUTCONT1021-b1aeafa7ac2847a484cbca48d3172b6c.jpg"/>
            <div className="card-block">
              <h4 className="card-title my-1">Smoking may also play a big role in hearing loss.</h4>
              <h6 className="card-subtitle text-muted my-1">More than you might think.</h6>
              <a href="https://www.audiologyandhearing.com/blog/how-are-smoking-and-hearing-loss-related/#:~:text=How%20does%20smoking%20affect%20hearing,risk%20of%20developing%20hearing%20loss." class="btn btn-primary my-2">Check it out here</a>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://t3.ftcdn.net/jpg/04/71/05/02/360_F_471050286_7vunZPOxd5hbJgjwDnEqO1sUhMO1yKcT.jpg" alt="https://www.travelandleisure.com/thmb/wAq4PGi2FpaKzBGyexd0xWhfoGU=/1800x1012/smart/filters:no_upscale()/iceland-BEAUTCONT1021-b1aeafa7ac2847a484cbca48d3172b6c.jpg"/>
            <div className="card-block">
              <h4 className="card-title my-1">Try out some Yoga</h4>
              <h6 className="card-subtitle text-muted my-1">It helps to reduce hearing loss.</h6>
              <a href="hhttps://www.pristyncare.com/blog/yoga-poses-for-better-hearing-pc0135/" class="btn btn-primary my-2">Check it out here</a>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
    </>
  );
};

export default About;

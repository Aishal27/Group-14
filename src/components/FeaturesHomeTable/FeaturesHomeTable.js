import React from "react";
import Image from "../Images/Images";

 const FeaturesHomeTable = () => {
return(
    <div className="container py-5">
      <h1 className="pb-2 border-bottom text-center text-success">Features</h1>
        { <div className="row justify-content-center py-5">
        
            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename={"Card1.jpg"}
                  alt="1"
                />
                <h4 className="text-center">Library</h4>
            </div>
            
            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename={"Card2.jpg"}
                  alt="1"
                />
                <h4 className="text-center">Travel</h4>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename={"Card3.jpg"}
                  alt="1"
                />
                <h4 className="text-center">Canteen</h4>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename={"Card4.jpg"}
                  alt="1"
                />
                <h4 className="text-center">Hostel</h4>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename={"Card5.jpg"}
                  alt="1"
                />
                <h4 className="text-center">Chatbox</h4>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename={"Card6.jpg"}
                  alt="1"
                />
             <h4 className="text-center">Five Fold Education</h4>   
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename={"Card7.jpg"}
                  alt="1"
                />
                <h4 className="text-center">Languages</h4>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename={"Card8.jpg"}
                  alt="1"
                />
                <h4 className="text-center">Fest</h4>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename={"Card9.jpg"}
                  alt="1"
                />
                <h4 className="text-center">Departments</h4>
            </div>

          </div>
 }
 </div>
)
}     

 export default FeaturesHomeTable
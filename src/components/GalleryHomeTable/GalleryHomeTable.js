import React from "react";
import Image from "../Images/Images";

 const GalleryHomeTable = () => {
return(
    <div className="container py-5">
      <h1 className="pb-2 border-bottom text-center text-info">Glimpses Of Banasthali Vidyapith</h1>
      <h3 className="pb-2 border-top text-center">OUR SOURCE OF INSPIRATION</h3>
          {<div className="row justify-content-center">
        
        <div className="col-lg-2 col-md-6 col-sm-12">
        <Image
              className="d-block mx-lg-auto img-fluid"
              style={{
                margin: "0 auto",
                height: "200px",
                width: "200px",
              }}
              filename={"GS1.jpg"}
              alt="1"
            />
             <h6 className="text-center">SHANTA BAI</h6>
             </div>
          </div>
 }
        
        {
          <div className="row">
          <div className="col">

          <div className="text-center pb-2" >  
It was on Oct. 6, 1935 that Smt. Ratan Shastri and Pt. Hiralal Shastri  founded
Banasthali Vidyapith to fill up the vaccum caused by the sudden
death of their highly talented and promising daughter Shantabai .
</div>
<br />
<div className="text-center">Our sweet lovely flower</div>
<div className="text-center">withered before its hour.</div>
<div className="text-center">Joy descended sorrow flew.</div>
<div className="text-center">From the ashes garden grew.</div>
<div className="text-center">ShantaBai is not a name to be cherished.</div>
<div className="text-center">It is a conceptual symbol of</div>
<div className="text-center">an educational and social philosophy</div>
<div className="text-center">dynamic in approach,</div>
<div className="text-center">rich in content ,</div>
<div className="text-center">full of realism,</div>
<div className="text-center">freshness and vitality</div>
<br />
          </div>
        </div>
          }

<h3 className="pb-2 border-top text-center">OUR FOUNDERS</h3>
          {<div className="row">
        
        <div className="col-lg-3 col-md-6 col-sm-12">
        <Image
              className="d-block mx-lg-auto img-fluid"
              style={{
                margin: "0 auto",
                height: "200px",
                width: "200px",
              }}
              filename={"GF1.jpg"}
              alt="1"
            />
             <h6 className="text-center">Shri. Hiralal Shastri</h6>
          </div>

          <div className="col-lg-9 col-md-6 col-sm-12">
          Hiralal Shastri was born on November 24, 1899 at Jobner in Jaipur District. Born in a peasant family, he had his early 
          education in Jobner. Hiralal secured the degree of Sahitya Shastri in 1920. He took B.A. degree in 1921 from Maharaja's
          College, Jaipur, securing the first rank.
          From early childhood Hiralal Shastri had a burning desire to go to some village and devote his life to the service
          of the downtrodden. Though he joined Jaipur State Service in 1921 and had a meteoric rise to become Secretary in the
          Home and Foreign Departments, he resigned the same in 1927. While in administrative service he displayed qualities of 
          hard work, efficiency and fearlessness.
          Banasthali Vidyapith, founded by Hiralal Shastri, has today become a premier national institution for women's education. 
          To him goes largely the credit of laying the foundation of a strong, unified and progressive Rajasthan.
          The Posts and Telegraphs Department brought out a commemorative postage stamp in honour of Pandit Hiralal Shastri.
          </div>
          </div>
          }
          <br />

          {
            <div className="row">
        
            <div className="col-lg-3 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                  }}
                  filename={"GF2.jpg"}
                  alt="1"
                />
                 <h6 className="text-center">Smt. Ratan Shastri</h6>
              </div>
    
              <div className="col-lg-9 col-md-6 col-sm-12">Born in the middle class family of school teacher, Ratanji was brought up
              with that blending of affection a discipline which is congenial for the development of rounded personality. She could 
              get little formal education owing to her early marriage but she was a true example of education as the "manifestation of
              perfection already in man".
              That was the reason, when her husband resigned from the prestigious post of Secretary in Home and Foreign Department
              of former Jaipur State, with a view to take up a programme of village reconstruction in a small, remote backward village, 
              she welcomed the move and stood by him amid all the troubles and tribulations.
              The programme that the Shastris took up in the village included Khadi and self-reliance, literacy and medical relief, 
              and social and political awakening. An institution called ''Jiwan Kutir'' was founded by the Shastris in 1929 for rural
              reconstruction work and for training of workers for similar work in other parts of the country.
              She was a recipient of Padma Shri in 1955, Padma Bhushan in 1975, and Jamnalal Bajaj Award for outstanding contribution 
              in the field of uplift and welfare of women and children.
                </div>
                </div>
          }
<br />
<h3 className="text-center border-top pb-2">CAMPUS TOUR</h3>
      <h4 className="pb-2">DEPARTMENTS</h4>
        { <div className="row justify-content-center">
        
            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                  }}
                  filename={"GD1.jpg"}
                  alt="1"
                />
                 <h6 className="text-center">MATHEMATICS and STATISTICS</h6>
            </div>
            
            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                  }}
                  filename={"GD2.jpg"}
                  alt="1"
                />
                <h6 className="text-center">WISDOM</h6>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                  }}
                  filename={"GD3.jpg"}
                  alt="1"
                />
                <h6 className="text-center">COMPUTER SCIENCE</h6>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                  }}
                  filename={"GD4.jpg"}
                  alt="1"
                />
                <h6 className="text-center">AUTOMATION</h6>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                  }}
                  filename={"GD5.jpg"}
                  alt="1"
                />
                <h6 className="text-center">ARCHITECTURE and PLANNING</h6>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12">
            <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "200px",
                    width: "200px",
                  }}
                  filename={"GD6.jpg"}
                  alt="1"
                />
             <h6 className="text-center">LEGAL STUDIES</h6>   
            </div>
            
          </div>
 }
<br />
<h4 className="pb-2">ACCOMMODATION</h4>
          {<div className="row justify-content-center">
        
        <div className="col-lg-2 col-md-6 col-sm-12">
        <Image
              className="d-block mx-lg-auto img-fluid"
              style={{
                margin: "0 auto",
                height: "200px",
                width: "200px",
              }}
              filename={"GH1.jpg"}
              alt="1"
            />
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12">
        <Image
              className="d-block mx-lg-auto img-fluid"
              style={{
                margin: "0 auto",
                height: "200px",
                width: "200px",
              }}
              filename={"GH2.jpg"}
              alt="1"
            />
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12">
        <Image
              className="d-block mx-lg-auto img-fluid"
              style={{
                margin: "0 auto",
                height: "200px",
                width: "200px",
              }}
              filename={"GH3.jpg"}
              alt="1"
            />
          </div>
          </div>
          }
<br />
<h4 className="pb-2">COLLEGE CANTEENS</h4>
          {<div className="row justify-content-center">
        
        <div className="col-lg-2 col-md-6 col-sm-12">
        <Image
              className="d-block mx-lg-auto img-fluid"
              style={{
                margin: "0 auto",
                height: "200px",
                width: "200px",
              }}
              filename={"GC1.jpg"}
              alt="1"
            />
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12">
        <Image
              className="d-block mx-lg-auto img-fluid"
              style={{
                margin: "0 auto",
                height: "200px",
                width: "200px",
              }}
              filename={"GC2.jpg"}
              alt="1"
            />
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12">
        <Image
              className="d-block mx-lg-auto img-fluid"
              style={{
                margin: "0 auto",
                height: "200px",
                width: "200px",
              }}
              filename={"GC3.jpg"}
              alt="1"
            />
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12">
        <Image
              className="d-block mx-lg-auto img-fluid"
              style={{
                margin: "0 auto",
                height: "200px",
                width: "200px",
              }}
              filename={"GC4.jpg"}
              alt="1"
            />
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12">
        <Image
              className="d-block mx-lg-auto img-fluid"
              style={{
                margin: "0 auto",
                height: "200px",
                width: "200px",
              }}
              filename={"GC5.jpg"}
              alt="1"
            />
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12">
        <Image
              className="d-block mx-lg-auto img-fluid"
              style={{
                margin: "0 auto",
                height: "200px",
                width: "200px",
              }}
              filename={"GC6.jpg"}
              alt="1"
            />
          </div>
          </div>
          }
          <br />
          <h4 className="pb-2">HOSPITAL</h4>
          <div>
          The Banasthali University has its own hospital, “Apaji Arogya Mandir" with 60 beds, qualified doctors and other hospital 
          staff. The hospital works round the clock throughout the year.
          </div>
          <br />
          <h4 className="pb-2">GUEST HOUSE</h4>
          <div>
          Round the year there are guests in campus on official  assignments .The  parents and guardians of the students and visitors
          are provided accommodation in the well- maintained and  fully- furnished university guest house. The staff here works on the 
          principle of <h6 className="text-warning text-center">ATITHI DEVO BHAVAH.</h6>
          </div>
          <br />
          <i className="pb-2 text-success">Besides these facilities, the following amenities are available at the campus:</i>
          <div>a. UCO Bank, Co-operative Bank, State Bank of India, UCO Bank ATM, SBI ATM, ICICI Bank ATM</div>
          <div>b. Post office with a facility of Speed Post</div>
          <div>c. BSNL Electronic Exchange</div>
          <div>d. Courier Service</div>
          <div>e. Fully equipped shopping and vegetable marts</div>

 </div>
)
}     

 export default GalleryHomeTable
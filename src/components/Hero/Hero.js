import React from "react"
import Image from "../Images/Images"
const Hero = () => {
    return(
        <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">

      <Image 
             className="d-block mx-lg-auto img-fluid"
             filename={"1.png"}
             alt="1"
             />


      </div>
      <div class="col-md-20">
        <h1 class="display-5 fw-bold lh-1 mb-3">Definitive Guide To College Collections</h1>
        <p class="lead">Banasthali Vidyapith aims at the synthesis of spiritual values and 
        scientific achievements of both the East and the West. Its educational programme is based on the concept of
         "Panchmukhi Shiksha" and aims at all round harmonious development of personality.
Emphasis on Indian culture and thought characterized by simple living and khadi wearing are hallmarks of life at Banasthali.</p>
      </div>
    </div>
  </div>
    )
}

export default Hero

import React from "react"
import { Link } from "gatsby"
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons"
import Image from "../Images/Images"

const Items = [
  {
    image: "Card1",
    name: "Library",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
  {
    image: "Card2",
    name: "Travel",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
  {
    image: "Card3",
    name: "Canteen",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
  {
    image: "Card4",
    name: "Hostel",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
  {
    image: "Card5",
    name: "Senior Junior Chatbox",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
  {
    image: "Card6",
    name: "Five Fold Activities",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
  {
    image: "Card7",
    name: "Languages",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
  {
    image: "Card8",
    name: "Events",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
  {
    image: "Card9",
    name: "Departments",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
]

const Features = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="pb-2 border-bottom text-center">Features</h2>
      <div className="row justify-content-center py-5">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card card-body shadow mb-4">
                <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{
                    margin: "0 auto",
                    height: "250px",
                    width: "1000px",
                  }}
                  filename={`${item.image}.jpg`}
                  alt="1"
                />
                <h4 className="m-2">{item.name}</h4>

                <ul className="list-unstyled justify-content-center d-flex mb-0">
                  <Link className="m-3" to={item.facebook}>
                    <Facebook />
                  </Link>
                  <Link className="m-3" to={item.instagram}>
                    <Instagram />
                  </Link>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Features
import React from "react"
import {Link} from "gatsby"
import Image from "../Images/Images"
const Header = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Fifth navbar example"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Definitive Guide To College Collections
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample05">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="btn text-light text-decoration-none">
              <Link class="text-light text-decoration-none" to="/">
              Home
              </Link>
            </li>
            <li class="btn text-light text-decoration-none">
              <Link class="text-light text-decoration-none" to="/about">
                About
              </Link>
            </li>
            <li class="btn text-light text-decoration-none">
              <Link class="text-light text-decoration-none" to="/contact">
                Contact
              </Link>
            </li>
            <li class="btn text-light text-decoration-none">
              <Link class="text-light text-decoration-none" to="/features">
                Features
              </Link>
              </li>
              
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Announcement Board 📢
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Announcements</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <ul>
      
      {/* <li> 
          Message 2
          </li>  */}

      <li> 
      New Accouncements On The Way  🔔
          </li> 
<br />
      <li> 
      If this is the world of people of KGF doing internships worldwide Then you can be the ROCKY among the rest of them. 😎
      <Image 
             className="d-block mx-lg-auto img-fluid"
             style={{
              margin: "0 auto",
              height: "200px",
              width: "200px",
             }}
             filename={"Accouncement3.png"}
             alt="1"
             />
<p>Join " Project-Based Summer Internship Program 2022 " by Learn and Build</p>

<p className="text-success">▪️ 10+ Tech Domains</p>
<p className="text-success">▪️ Online | Offline </p>
<p className="text-success">▪️ Effective Hands-On Learning</p> 
<p className="text-success">▪️ Industry Grade Project</p>
<p className="text-success">▪️ Build minor and major capstone real industry great projects</p>

<p>Shhh.🤫. There is an offer</p>

<p>Get the Lnb Summer Internship worth ₹30000 just at ₹1500/-</p>
<div class="nav-item mb-2"><Link to="https://bit.ly/ProjectBasedInternship" class="nav-link p-0 text-warning">🔗 Registration Link:Enrol Now. 🚀</Link></div>
<p>Offer Valid Till 17th April 2022</p>
          </li>
<br />
      <li> 
        There is a growing global push towards sustainable practices in businesses across all industries. With that comes
        a demand for professionals with the sustainability skills needed to drive results. Whether you want to specialize in 
        sustainability or incorporate sustainability practices into your current role, you can start building the skills 
        you need to help build a better world today.
        <Image 
             className="d-block mx-lg-auto img-fluid"
             style={{
              margin: "0 auto",
              height: "200px",
              width: "400px",
             }}
             filename={"Accouncement2.png"}
             alt="1"
             />
        <div class="nav-item mb-2"><Link to="https://www.edx.org/search?q=sustainability&utm_source=braze&utm_medium=email&utm_campaign=Sunday_Course_Roundup_International_20220417" class="nav-link p-0 text-warning">Explore Courses</Link></div>
          </li>  
<br />
        <li> 
        The wait is over! 💥
        <Image 
             className="d-block mx-lg-auto img-fluid"
             style={{
              margin: "0 auto",
              height: "200px",
              width: "200px",
             }}
             filename={"Accouncement1.png"}
             alt="1"
             />
<p>Fasten your seatbelts budding designers because we are all set to take off to a world filled with tech and creativity.👩🏻‍💻</p> 
<p>Team Meraki in collaboration with DesignHub IIITD presents to you- EREVNA where you'll get to embark on a journey to become a 
great designer.</p>
<p>From learning about the tools used in UI/UX designs and it's principles to crafting your very own UX portfolio, you'll 
get to know it all, one step at a time.✨</p>
<p>🗓️: 21 to 24 April</p>
<p>🕣: 6-7:30 pm</p>
<p>What are you waiting for? It's time to ignite the spirit of your inner designer🔥</p>
<div class="nav-item mb-2"><Link to="https://forms.gle/DENRzAyWDXTzP8RJ7" class="nav-link p-0 text-warning">Register Now:</Link></div>
          </li>
          </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div> 
             
          </ul>
          <form>
            <input
              class="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            ></input>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header

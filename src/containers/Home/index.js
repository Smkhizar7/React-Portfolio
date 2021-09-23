import { Nav,Footer } from "../../components";
import bg from '../../assests/images/bg.jpg';
import profilePic from '../../assests/images/favicon.png';

function Home(){
    return <div className="Home">
        <Nav />
        <img src={bg} alt="background" className="bgImage" />
        <img src={profilePic} alt="background" className="profile-Image" />
        <div className="name-div">
            <h1>Shaikh Muhammad Khizar</h1>
            <h2>Web Developer</h2>
        </div>
        <div className="About">
            <h3>About : </h3>
            <p>Passionate web designer, skilled in HTML, CSS and JavaScript. Creates seamless UX and UI with creative but functional designs.</p>
        </div>
        <div className="Personal-details">
            <h3>Personal Details : </h3>
            <ul>
                <li><span>Name</span> : <span>Shaikh Muhammad Khizar</span></li>
                <li><span>Date of Birth</span> : <span>07 Jan 2001</span></li>
                <li><span>Phone No</span> :  <span>+92 347 3495685</span></li>
                <li><span>Email Address</span> : <span>shaikh.muhammad.khizar@gmail.com</span></li>
                <li><span>Address</span> :  <span>Fs 38/9 Malir extension Colony Karachi</span></li> 
                <li><span>City</span> : <span>Karachi</span></li>
                <li><span>Country</span> : <span>Pakistan</span></li>
            </ul>
        </div>
        <Footer />
    </div>;
}
export default Home;
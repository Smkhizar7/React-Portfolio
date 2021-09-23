import { Nav,Footer } from "../../components";
import img from '../../assests/images/books.jpg';

function Education() {
    return <div className = "Education" >
        <Nav />
        <h1> Education </h1>
        <img src={img} alt="Books" className="header" />
        <div>
        <h3> Bachlor Of Science in Computer Science </h3>
        <h4> 2020 - Present </h4>
        <p> Federal Urdu University Arts, Science and Technology(FUUAST) </p>
        </div>
        <div>
        <h3> INTERMEDIATE </h3>
        <h4> 2017 - 2019 </h4>
        <p> Govt Degree Boys College Gulistan - e - Johar, Karachi, Pakistan </p>
        </div>
        <div>
        <h3> MATRICULATION </h3>
        <h4> 2015 - 2017 </h4>
        <p> Sun Rise Children Academy, Karachi, Pakistan </p>
        </div>
        <Footer />
        </div>;
}
export default Education;
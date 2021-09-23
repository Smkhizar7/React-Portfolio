import {ImgMediaCard} from '../../components';
import calculator from '../../assests/images/calculator1.PNG';
import calendar from '../../assests/images/Calendar1.PNG';
import dawn from '../../assests/images/Dawn1.PNG';
import foodDelivery from '../../assests/images/food-delivery-app.png';
import pokemon from '../../assests/images/Pokemon1.PNG';
import reportCard from '../../assests/images/Report-Card.PNG';
import todo from '../../assests/images/Todo-App.PNG';
import upwork from '../../assests/images/upwork1.PNG';
import weather from '../../assests/images/weather-status-app.png';
import {Nav,Footer} from '../../components';

function Projects(){
    function Goto(linkto){
        // console.log(linkto);
        let tab = window.open(); 
        tab.location.href = linkto;
    }
    return (
        <div className="Projects-div">
            <Nav />
            <h1>Projects</h1>
            <div class="Projects">
                <ImgMediaCard src={calculator} alt="Calculator App" title="Calculator App" description="Calculator App" btn1="Open Project" btn1OnClick={()=>Goto("https://smkhizar7.github.io/Calculator")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https://github.com/Smkhizar7/Calculator")} /> 
                <ImgMediaCard src={calendar} alt="Calendar App" title="Calendar App" description="Calendar App" btn1="Open Project" btn1OnClick={()=>Goto("https://smkhizar7.github.io/Calendar")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https:github.com/Smkhizar7/Calendar")} /> 
                <ImgMediaCard src={dawn} alt="Dawn Newspaper Website" title="Dawn Newspaper Website" description="Dawn Newspaper Website" btn1="Open Project" btn1OnClick={()=>Goto("https://smkhizar7.github.io/Dawn")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https:github.com/Smkhizar7/Dawn")} /> 
                <ImgMediaCard src={foodDelivery} alt="Food Delivery App" title="Food Delivery App" description="Food Delivery App" btn1="Open Project" btn1OnClick={()=>Goto("https://food-mart-b896b.web.app")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https:github.com/Smkhizar7/Food-Delivery-App")} /> 
                <ImgMediaCard src={pokemon} alt="Pokemon Website" title="Pokemon Website" description="Pokemon Website" btn1="Open Project" btn1OnClick={()=>Goto("https://smkhizar7.github.io/Pokemon")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https:github.com/Smkhizar7/Pokemon")} /> 
                <ImgMediaCard src={reportCard} alt="Report Card" title="Report Card" description="Report Card" btn1="Open Project" btn1OnClick={()=>Goto("https://smkhizar7.github.io/Report-Card")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https:github.com/Smkhizar7/Report-Card")} /> 
                <ImgMediaCard src={todo} alt="Todo App" title="Todo App" description="Todo App" btn1="Open Project" btn1OnClick={()=>Goto("https://smkhizar7.github.io/Todo-App")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https:github.com/Smkhizar7/Todo-App")} /> 
                <ImgMediaCard src={upwork} alt="Upwork Website" title="Upwork Website" description="Upwork Website"btn1="Open Project" btn1OnClick={()=>Goto("https://smkhizar7.github.io/Upwork")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https:github.com/Smkhizar7/Upwork")} /> 
                <ImgMediaCard src={weather} alt="Weather Status App" title="Weather Status App" description="Weather Status App" btn1="Open Project" btn1OnClick={()=>Goto("https://weather-status-app.web.app")} btn2="Open Github Repository" btn2OnClick={()=>Goto("https://github.com/Smkhizar7/React-weather-app")} /> 
            </div>
            <Footer />
        </div>
    );
}
export default Projects;
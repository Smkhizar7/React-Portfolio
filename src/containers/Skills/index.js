import CustomizedProgressBars from '../../components/ProgressBar';
import {Nav,Footer} from '../../components';
function Skills(){
    return (
    <div className="Skills-div">
        <Nav />
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">HTML</h3>
                <h3 className="skill-percent">100%</h3>
            </div>
            <CustomizedProgressBars value={100} />
        </div>
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">CSS</h3>
                <h3 className="skill-percent">80%</h3>
            </div>
            <CustomizedProgressBars value={80} />
        </div>
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">JavaScript</h3>
                <h3 className="skill-percent">80%</h3>
            </div>
            <CustomizedProgressBars value={80} />
        </div>
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">Bootstrap</h3>
                <h3 className="skill-percent">70%</h3>
            </div>
            <CustomizedProgressBars value={70} />
        </div>
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">React</h3>
                <h3 className="skill-percent">60%</h3>
            </div>
            <CustomizedProgressBars value={60} />
        </div>
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">Excel</h3>
                <h3 className="skill-percent">70%</h3>
            </div>
            <CustomizedProgressBars value={70} />
        </div>
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">C</h3>
                <h3 className="skill-percent">80%</h3>
            </div>
            <CustomizedProgressBars value={80} />
        </div>
        <div className="main-div">
            <div className="sub-div">
                <h3 className="skill-name">Java</h3>
                <h3 className="skill-percent">60%</h3>
            </div>
            <CustomizedProgressBars value={60} />
        </div>
        <Footer />
    </div>);
}
export default Skills;
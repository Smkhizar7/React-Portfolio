import {Button} from '../index';
import {Facebook,Instagram,LinkedIn} from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer(){
    function Goto(link){
        let tab = window.open();
        tab.location.href = link;
        return null;
    }
    return (
    <div className="footer">
        <Button onClick={()=>Goto("https://github.com/Smkhizar7")} className="link">
            <GitHubIcon />
        </Button>
        <Button onClick={()=>Goto("https://www.facebook.com/smkhizar.nawaz")} className="link">
            <Facebook />
        </Button>
        <Button onClick={()=>Goto("https://www.instagram.com/shaikhkhizar99")} className="link">
            <Instagram />
        </Button>
        <Button onClick={()=>Goto("https://www.linkedin.com/in/shaikh-muhammad-khizar-98516b1b7/")} className="link">
            <LinkedIn />
        </Button>
    </div>
        );
}
export default Footer;
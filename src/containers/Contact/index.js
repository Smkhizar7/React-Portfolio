import { useState } from "react";
import { Nav,Input,Textbox,Label,Button,Footer } from "../../components";

function Contact(){
    const [name,setname] = useState("");
    const [email,setEmail] = useState("");
    const [sub,setSub] = useState("");
    function Send(){
        let msgbox = document.getElementById('msg');
        let user = {
            name:name,
            email:email,
            subject:sub,
            message:msgbox.value
        }
        console.log(user);
        setname("");
        setEmail("");
        setSub("");
        msgbox.value="";
    }
        return <div className="contact-div">
        <Nav />
        <h1>Contact Page</h1>
        <div className="contact">
            <div className="contact-form">
                <h3>Contact Information</h3>
                <p>Email address : shaikh.muhammad.khizar@gmail.com</p>
                <p>Phone No : +92 347 3495685</p>
                <p>Address : F South 38/9 Malir Extension Colony, Karachi.</p>
            </div>
            <div className="contact-form">
                <h3>Contact Form</h3>
                <div>
                    <Label idFor="name">Name : </Label>
                    <Input id="name" type="text" value={name} onChange={(e)=>setname(e.target.value)} />
                </div>
                <div>
                    <Label idFor="email">Email : </Label>
                    <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <Label idFor="subject">Subject : </Label>
                    <Input id="subject" type="text" value={sub} onChange={(e)=>setSub(e.target.value)} />
                </div>
                <div>
                    <Label idFor="msg">Message : </Label>
                    <Textbox id="msg" cols="20" rows="6" />
                </div>
                <div>
                    <Button onClick={Send}>Send</Button>
                </div>
            </div>
        </div>
        <Footer />    
    </div>;
}
export default Contact;
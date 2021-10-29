import 'typeface-roboto'
import React from 'react';
import computer from '../images/computer.png'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import { display } from '@mui/system';




function Home() {
    return (
        <>
            <div style={{ display: 'flex',  marginTop: 60}}>
                <div style={{ marginLeft: 50 }}>
                    <h1 >A Place Where Developers<br></br>Collaborate &#38; Compensate</h1>
                    <p>This project was created by Team Ghosts in the Shell for oSTEM's 2021 Hackathon.</p>
                </div>
                <div class="art">
                    <img id="computer" src={computer} alt="computer" width={550}/>
                </div>
            </div>
            <br /><br />

            <span id="trending">Trending Requests</span>


            <div class="boxes">
                <div id="box1" style={{display: 'flex', flexDirection: 'column'}}>
                    <div id="boxtitle1" style={{alignItems: 'start'}}>Ben &#38; Jerry's Flavor Ranking</div>
                    <div id="boxsub1">Community &#38; Forum | Website </div>
                    <center><div style={{ali: 'center'}}><img src={image1} alt="ben-jerry" id="pic1" /></div></center>
                    <div id="innerbox1"><div id="text"><a href="frontend/public/benjerry.html">View Request</a></div></div>
                </div>

                <div id="box2">
                    <div id="boxtitle2">Black History Museum Trivia</div>
                    <div id="boxsub2">Education | Mobile App </div>

                    <center><div style={{ali: 'center'}}><img src={image2} alt="black-history" id="pic2" /></div></center>
                    <div id="innerbox2"><div id="text"><a href="#">View Request</a></div></div>
                </div>

                <div id="box3">
                    <div id="boxtitle3">Rocket Blaster Multiplayer</div>
                    <div id="boxsub3">Gaming | Mobile App </div>

                    <center><div style={{ali: 'center'}}><img src={image3} alt="rocket-game" id="pic3" /></div></center>
                    <div id="innerbox3"><div id="text"><a href="#">View Request</a></div></div>
                </div>

                <div id="box4">
                    <div id="boxtitle4">Cooking Pals Recipe Sharing</div>
                    <div id="boxsub4">Community &#38; Forum | Mobile App </div>

                    <center><div style={{ali: 'center'}}><img src={image4} alt="cooking-pal" id="pic4" /></div></center>
                    <div id="innerbox4"><div id="text"><a href="#">View Request</a></div></div>
                </div>

                <div id="box5">
                    <div id="boxtitle5">Canvas LMS Alerts for Chrome</div>
                    <div id="boxsub5">Education | Plugins </div>

                    <center><div style={{ali: 'center'}}><img src={image5} alt="canvas-alerts" id="pic5" /></div></center>
                    <div id="innerbox5"><div id="text"><a href="#">View Request</a></div></div>
                </div>

                <div id="box6">
                    <div id="boxtitle6">AO3 Writing Prompt Generator</div>
                    <div id="boxsub6">Community &#38; Forum | Website </div>

                    <center><div style={{ali: 'center'}}><img src={image6} alt="writing-site" id="pic6" /></div></center>
                    <div id="innerbox6"><div id="text"><a href="#">View Request</a></div></div>
                </div>

            </div>
        </>
    );
}




export default Home;


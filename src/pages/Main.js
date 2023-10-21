import { Card } from "react-bootstrap"; //imported Card
import Col from "react-bootstrap/Col"; //imported rows and columns to be used
import Row from "react-bootstrap/Row";

// imported all the pics to be displayed
import Pic1 from './images/ab67706f00000002d073e656e546e43bc387ad79.jpg'
import Pic2 from './images/ab67706f00000002d6d48b11fd3b11da654c3519.jpg'
import Pic3 from './images/ab67706f00000002fe24d7084be472288cd6ee6c.jpg'
import Pic4 from './images/ab67706f00000002724554ed6bed6f051d9b0bfc.jpg'
import Pic5 from './images/ab67706f00000002e435ce0a86a8b9dc24527618.jpg'
import Pic6 from './images/ab67706f00000002b3823d06a3718d5dc082e91f.jpg'
import Pic7 from './images/ab67706f00000002b5c6a86c3856d6246e587a14.jpg'
import Pic8 from './images/ab67706f00000002b0fe40a6e1692822f5a9d8f1.jpg'
import Pic9 from './images/ab67706f0000000278b4745cb9ce8ffe32daaf7e.jpg'
import Pic10 from './images/ab67706f00000002b60db5d1bcdd9c4fd1ebcffe.jpg'



export default function Main () {
    //component with props for the genre headings
    function Headings1 (props) {
        return (
            <div>{props.titles}</div>
        )
    }
    // component with props for the genre descriptions
    function Descriptions1 (props) {
        return(
            <div>{props.descripts}</div>
        )
    }

    // the arrays with the info to be passed inside the previous functions as props when they are called
    const titles1 = ["Peaceful Piano", "Deep Focus", "Instrumental Study", "Focus Flow", "Workday Lounge"]
    const titles2 = ["Today's Top Hits", "RapCaviar", "All Out 2010s", "Rock Classics", "Chill Hits"]
    const descripts1 = [
        "Peaceful piano to help you slow down, breathe and relax.",
        "Keep calm and focus with ambient and post-rock music.",
        "Focus with soft study music in the background.",
        "Uptempo instrumental hip hop beats.",
        "Lounge and chill out music for your workday."
    ]
    const descripts2 = [
        "Taylor Swift is on top of the Hottest 50.",
        "New music from LilUzi Vert, Lil Tjay and FendiDa Rappa.",
        "The biggest songs of the 2010's.",
        "Rock legends & epic songs that continue to inspire generations.",
        "Kick back to the best new and recent chill hits."
    ]
    //arrays from the images imported
    const imgs = [Pic1, Pic2, Pic3, Pic4, Pic5]
    const imgs2 = [Pic6, Pic7, Pic8, Pic9, Pic10]

    return (
        //making up the main portion of the webpage
        <main>
            <div className="right">
                {/* container for the top bar which will be fixed and slightly transparent  */}
                <div className="Top-container">
                    <Card className="main-card">
                        <Card.Body className="main-body">
                            <i className="fa-solid fa-chevron-left"/><i className="fa-solid fa-chevron-right"/>
                            <button className="sign-up">Sign Up</button><button className="log-in">Log In</button>
                        </Card.Body>
                    </Card>
                </div>
             {/* container for the rest of the code on the page */}
             <div className="g-4">
                <Card.Title className="focus">
                    <b>Focus</b>
                    <u className="show-all">show all</u>
                </Card.Title>
                {/* this creates and specifies the amount of rows and columns to be made */}
              <Row md={5} >
                {/* using the array we only have to create the cards once and just iterate over them 5 times, we do this below once more */}
              {Array.from({ length: 5 }).map((_, idx) => (
                <Col key={idx}>
                <Card className="main-cards2">
                    <Card.Img className="cover-imgs" variant="top" src={imgs[idx]}/>
                    <Card.Body>
                        <Card.Subtitle><Headings1 titles={titles1[idx]}/></Card.Subtitle>
                        <br/>
                        <small><Descriptions1 descripts={descripts1[idx]}/></small>
                    </Card.Body>
                </Card>
                </Col>
                ))}
              </Row>
                <br/>
              <Card.Title className="focus">
                    <b>Spotify Playlists</b>
                    <u className="show-all2">show all</u>
              </Card.Title>
              <Row md={5} >
              {Array.from({ length: 5 }).map((_, idx) => (
                <Col key={idx}>
                <Card className="main-cards2">
                    <Card.Img className="cover-imgs" variant="top" src={imgs2[idx]}/>
                    <Card.Body>
                        <Card.Subtitle><Headings1 titles={titles2[idx]}/></Card.Subtitle>
                        <br/>
                        <small><Descriptions1 descripts={descripts2[idx]}/></small>
                    </Card.Body>
                </Card>
                </Col>
                ))}
              </Row>
              <br/> 
              <br/>
              <br/>
              {/* social media icons */}
              <div className="sm-icons">
                <i className="fa-brands fa-instagram"/><i className="fa-brands fa-twitter"/><i className="fa-brands fa-facebook"/>
              </div>
              {/* table to display company info and such at the bottom of page */}
              <table>
                <thead>
                    <tr>
                        <td><b>Company</b></td>
                        <td><b>Communities</b></td>
                        <td><b>Useful links</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>About</td>
                        <td>For artists</td>
                        <td>Support</td>
                    </tr>
                    <tr>
                        <td>Jobs</td>
                        <td>Developers</td>
                        <td>Free Mobile App</td>
                    </tr>
                    <tr>
                        <td>For the Record</td>
                        <td>Advertising</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Investors</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Vendors</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Spotify for Work</td>
                    </tr>
                </tbody>
             </table>
             <br/>
             <hr/>
             <br/>
             {/* copyright and spotify brand name */}
             <footer>
                <i className="fa-solid fa-copyright"/><small>2023 Spotify AB</small>
             </footer>
             <br/>
             <br/>
             <br/>
             <a href="https://open.spotify.com/">Spotify</a>
             <br/>
             <br/>
             </div>
            </div>
        </main>
    )
}
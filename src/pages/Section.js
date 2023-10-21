import { Card } from "react-bootstrap";

export default function Section () {
    
    return (
        //this makes up the left section of the page
        <section>
            <div className="left">
                {/* home and search buttons and icons */}
                <Card className="section-card">
                    <Card.Body>
                        <i className='fa-solid fa-house' aria-hidden='true'/>Home
                        <br/>
                        <i className="fa-solid fa-magnifying-glass" aria-hidden='true'/>Search
                    </Card.Body>
                </Card>
                <br/>
                {/* library section of the page */}
                <Card className="section-card">
                    <Card.Body>
                        <i className="fa-solid fa-book-open" aria-hidden='true'/><text>Library</text> <i id='plus' className="fa-solid fa-plus" /><br/>
                        
                        <Card.Body className="playList">
                            <Card.Subtitle>Create your first playlist</Card.Subtitle>
                            <p>It's easy, we'll help you</p>
                            <button className="btn">Create playlist</button>
                        </Card.Body>
                        <Card.Body className="playList">
                        <Card.Subtitle>Let's find some podcasts to follow</Card.Subtitle>
                            <p>We'll keep you updated on new episodes</p>
                            <button className="btn">Browse podcasts</button>
                        </Card.Body>
                        <br/>
                        {/* legal/privacy links */}
                        <aside >
                            <text className="bottom">Legal</text><text className="bottom">Privacy Centre</text><text className="bottom">Privacy Policy</text><text className="bottom">Cookies</text>
                            <br/>
                            <text className="bottom">About Ads</text><text className="bottom">Accessibility</text>
                            <br/>
                            <text className="bottom">Cookies</text>
                        </aside>
                        <br/>
                        <button id="lang"><i className="fa-solid fa-globe" style={{paddingRight: "10px"}}/>English</button>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}
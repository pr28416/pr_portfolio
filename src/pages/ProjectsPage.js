import React, { useEffect, useState } from 'react'
import { Button, Card, Nav, Image } from 'react-bootstrap'
import PageBanner from '../components/PageBanner'
import PageNavCtrl from '../components/PageNavCtrl'
import "./css/ProjectsPage.css"
import PillolaCAD from '../assets/pillola/new-pillbuddy-assembly-c2-v39-white_orig.png'
import PillolaBanner from '../assets/pillola/pillola-main_orig.jpeg'
import PillolaLogo from '../assets/pillola/pillola-dark.png'
import PillolaExecPaper from '../assets/pillola/m_tsi_executive_summary_for_pillola.pdf'
import OkaySoLogo from '../assets/okayso/okayso_logo_dark.png'
import OkaySoAppIcon from '../assets/okayso/App_Store_OkaySo_Logo.png'
import COBIcon from '../assets/cob/innovation_and_technology_logo.png'

export default function ProjectsPage() {

    let [viewDidLoad, setViewLoaded] = useState(false);
    let [pageIndex, setPageIndex] = useState(0)

    const pages = [
        {
            title: "City of Boston Visual Analytics",
            hash: "#cob_visualanalytics",
            body: <Card.Body className="ProjectsCardBody">
                <div id="COBVA_LogoBackground">
                    <Image id="COBIcon" src={COBIcon} />
                    <Card.Title className="ProjectsContentTitle">City of Boston - Visual Analytics</Card.Title>
                </div>
                <Card.Text style={{ lineHeight: 1.75 }}>
                    In my freshman spring semester at Harvard, I led a group of fellow software engineering students to develop the Visual Analytics portal for City of Boston. The Visual Analytics portal compiles the public data from the City of Boston's Checkbook Explorer into a comprehensive data visualization tool that allows anyone to become better informed on spending by the City of Boston. This tool improves over the existing site which simply provides CSV data for users, potentially being inaccessible to users who are not experts in data analysis tools like Excel. Working with the City of Boston, we developed a React/Django-powered web app where users can view total spending across different years, view departmental spending, analyze how spending has changed over time, and peruse vendor-specific spending. Through this portal, the City of Boston's spending is more transparent and accessible to Boston citizens.
                </Card.Text>
                <iframe className="ProjectsVideo" style={{ marginTop: "20px" }} src="https://www.youtube.com/embed/0QdFgUVkTl8" title="City of Boston Visual Analytics Demo" />
            </Card.Body>
        },
        {
            title: "OkaySo",
            hash: "#okayso",
            body: <Card.Body className="ProjectsCardBody">
                <div id="OkaySoLogoBackground">
                    <Image id="OkaySoAppIcon" src={OkaySoAppIcon} />
                    <Image id="OkaySoLogo" src={OkaySoLogo} />
                </div>
                <Card.Text style={{ lineHeight: 1.75 }}>
                    In my freshman fall semester at Harvard, I collaborated with fellow social tech entrepreneurs to develop a web platform for OkaySo. OkaySo is a nonprofit initiative that provides a safe space for young adults to anonymously ask questions to experts regarding mental health, identity, relationships, and more. These are topics that many young adults have questions about as they grow older but do not feel comfortable doing so publicly and need authentic, educated advice. However, we found that current online solutions, including OkaySo, were not as readily accessible to both inquirers and experts. Working with OkaySo, we created a React/Node.js-powered web app where experts can efficiently respond to user inquiries and facilitate seamless, secure, message-based conversations with those whom they are helping. As part of our efforts, we were able to substantially increase the team's user base and user satisfaction with expert replies, bringing us one step closer to improving health education.
                </Card.Text>
                <div id="OkaySoVideoDemoBody">
                    <iframe className="ProjectsVideo" src="https://www.youtube.com/embed/ZOuKL-2t-68" title="OkaySo Authentication Demo" />
                    <iframe className="ProjectsVideo" id="MarginedProjectsVideo" src="https://www.youtube.com/embed/TRosPNnx7fk" title="OkaySo Live Chat Demo" />
                    <iframe className="ProjectsVideo" src="https://www.youtube.com/embed/MOTvOn-tx0Y" title="OkaySo Error Handling & Contact Us Demo" />
                </div>
            </Card.Body>
        },
        {
            title: "Pillola",
            hash: "#pillola",
            body: <Card.Body className="ProjectsCardBody">
                <div id="PillolaTopContent">
                    <div id="PillolaTopLeft">
                        <Image id="PillolaCAD" src={PillolaCAD} />
                    </div>
                    <div id="PillolaTopRight">
                        <Image id="PillolaLogo" src={PillolaLogo} />
                        <Card.Title style={{ marginTop: "8px", color: "lightgrey" }}>Smart, secure pill tracking</Card.Title>
                        <Card.Text style={{ marginTop: "16px", lineHeight: 1.75 }}>Pillola is a smart and secure pill bottle that reminds the user to take their medication with audio alerts or mobile notifications, automatically dispenses the correct dose at scheduled times, and provides secure access to the designated user with fingerprint identification. In order to gain access to the pill chambers, a user must input a 4-digit passcode. This eliminates the risk of pills being swapped or tampered with. Monitoring is a key aspect of Pillola. With the Pillola app, both seniors as well as their loved ones will be able to track whether the pill was taken and at what time. These features allow seniors to always take their medications as prescribed, relieve caregivers and family members as they know that the seniors are properly taking their medication, and reassures Independent senior living facilities that their residents' medications are safe.</Card.Text>
                    </div>
                </div>
                <div id="PillolaBottomContent">
                    <div id="PillolaBottomLeft">
                        <Card.Title>Product Promo</Card.Title>
                        <iframe className="ProjectsVideo" src="https://www.youtube.com/embed/X__4-Z4_g2c" title="Pillola Product Promo" />
                    </div>
                    <div id="PillolaBottomRight">
                        <Card.Title>Tech Demo</Card.Title>
                        <iframe className="ProjectsVideo" src="https://www.youtube.com/embed/C8vmkxOuVQU" title="Pillola Tech Demo" />
                    </div>
                </div>
                <div>
                    <div id="PillolaFooterButtonRow">
                        <Button className="PillolaButton" href="https://pranavramesh1.wixsite.com/pillola">Visit product website</Button>
                        <Button className="PillolaButton" href={PillolaExecPaper} target="_blank">View executive summary</Button>
                        <Button className="PillolaButton" href="https://github.com/pr28416/Pillola">View demo code on GitHub</Button>
                    </div>
                    <Image style={{ width: "100%", borderRadius: "12px", marginTop: "28px" }} src={PillolaBanner} />
                </div>
            </Card.Body>
        },
        {
            title: "Table Tennis CV",
            hash: "#tabletenniscv",
            body: <Card.Body className="ProjectsCardBody">
                <Card.Title className="ProjectsContentTitle">Table Tennis CV</Card.Title>
                <Card.Text style={{ lineHeight: 1.75 }}>
                    <p>
                        <b>Table Tennis CV (TTCV)</b> is a computer vision-machine learning project that tracks active table-tennis gameplay. It uses a combination of frame differentiation and elliptical Hough transform to detect the rapidly moving balls and distinguish them from other movement in a frame. To detect whether the ball is in bounds, TTCV uses the shoelace theorem based on the fact that if a point is inside a polygon, then the sum of the areas it creates with every consecutive pair of points is equal to the area of the entire polygon. Ball landing positions on either side of a table based on the rate of change of their rectangular frames. These positions are saved to an output file in the form of tuples, and these multivariate data points are provided as features for a separate supervised machine learning model. Labels in the form of resulting ping pong ball endpoints on the opponent's side are produced by the ML model.
                    </p>
                    <p>

                        Click the link below to see the computer vision demo code on GitHub. The machine learning model is not included in the repository for security and storage reasons, but sample output text files are included.
                    </p>
                </Card.Text>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button className="ProjectsButton" href="https://github.com/pr28416/table-tennis-cv">View computer vision demo code on GitHub</Button>
                </div>
                <Card.Title style={{ marginTop: "28px" }}>Game Tracking Demo</Card.Title>
                <iframe style={{ width: "100%", aspectRatio: 16 / 9, borderRadius: "12px", marginTop: "12px" }} className="Table Tennis CV Demo" src="https://www.youtube.com/embed/123YFJ8GRVk" title="Pillola Tech Demo" />
            </Card.Body>
        },
        {
            title: "Flappy Bird CV",
            hash: "#flappybirdcv",
            body: <Card.Body className="ProjectsCardBody">
                <Card.Title className="ProjectsContentTitle">Flappy Bird CV</Card.Title>
                <Card.Text style={{ lineHeight: 1.75 }}>Flappy Bird CV is a game implemented in Python and OpenCV where a user uses their face to navigate an on-screen bird around pipes on a screen.</Card.Text>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button className="ProjectsButton" href="https://github.com/pr28416/FlappyBirdCV">Click to view full code on GitHub</Button>
                </div>
                <iframe className="ProjectsVideo" style={{ marginTop: "20px" }} src="https://www.youtube.com/embed/Tm7Iy6_YW1w" title="Flappy Bird CV Demo" />
            </Card.Body>
        },
        {
            title: "Rock, Paper, Scissors CV",
            hash: "#rpscv",
            body: <Card.Body className="ProjectsCardBody">
                <Card.Title className="ProjectsContentTitle">Rock, Paper, Scissors CV</Card.Title>
                <Card.Text style={{ lineHeight: 1.75 }}>Rock, Paper, Scissors CV (RPS CV) is a Rock-Paper-Scissors game implemented in Python and OpenCV where two users can play in real-time in front of a webcam and the program will determine what moves were played by each character and who wins.</Card.Text>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button className="ProjectsButton" href="https://github.com/pr28416/RockPaperScissors_CV">Click to view full code on GitHub</Button>
                </div>
                <iframe className="ProjectsVideo" style={{ marginTop: "20px" }} src="https://www.youtube.com/embed/5Hh7tOcgP0U" title="Rock, Paper, Scissors CV Demo" />
            </Card.Body>
        },
        {
            title: "CalcMolar",
            hash: "#calcmolar",
            body: <Card.Body className="ProjectsCardBody">
                <Card.Title className="ProjectsContentTitle">CalcMolar</Card.Title>
                <Card.Text style={{ lineHeight: 1.75 }}>
                    CalcMolar is a stack RPN molar mass calculator for chemical compounds and molecules. Users can input an empirical formula, and CalcMolar will provide the molar mass (to three decimal places, with extra trailing zeroes). I created this during my AP Chemistry course in my junior year of high school to help my classmates calculate molar masses of complex compounds much quicker for stoichiometry and lab experiments.
                </Card.Text>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button className="ProjectsButton" href="https://github.com/pr28416/CalcMolar">Click to view full code on GitHub</Button>
                </div>
            </Card.Body>
        }
    ]
    const hashes = pages.map(page => page.hash)

    const setPageIndexWithHash = hash => {
        const idx = hashes.findIndex(elem => elem == hash)
        if (idx >= 0) setPageIndex(idx)
    }

    useEffect(() => {
        setPageIndexWithHash(window.location.hash)
        setViewLoaded(true)
    }, [])

    const handleTabClicked = event => {
        setPageIndexWithHash(event.target.hash)
    }

    return !viewDidLoad ? null : (
        <PageNavCtrl content={(
            <div id="ProjectsPageCtr">
                <PageBanner title="Projects" description="A screwdriver in one hand and a keyboard in the other is enough to keep me developing new innovative tech solutions, from small projects to larger-scaled products. Below are some of the projects I've worked on over the past few years." />
                <Card id="ProjectsCard" bg="none">
                    <Card.Header>
                        <Nav variant="tabs" fill defaultActiveKey={hashes[pageIndex]} onClick={handleTabClicked}>
                            {pages.map((page, idx) => (
                                <Nav.Item key={idx} className="ProjectsCardTab"><Nav.Link className="ProjectsCardTabLink" href={page.hash}>{page.title}</Nav.Link></Nav.Item>
                            ))}
                        </Nav>
                    </Card.Header>
                    {pages[pageIndex].body}
                </Card>
            </div>
        )} />
    )
}

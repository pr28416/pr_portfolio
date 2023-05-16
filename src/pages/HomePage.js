import React from 'react'
import { Image, Button } from 'react-bootstrap'
import PageNavCtrl from '../components/PageNavCtrl'
import './css/HomePage.css'
import ProfileImg from '../assets/social/pranav_bg_1.png'
import GithubIcon from '../assets/social/icons8-github-90.png'
import LinkedinIcon from '../assets/social/icons8-linkedin-2-90.png'
import EmailIcon from '../assets/social/icons8-secured-letter-90.png'
import Resume from '../assets/Pranav_Ramesh_Resume.pdf'

export default function HomePage() {
    return (
        <PageNavCtrl content={(
            <div id="HomePageCtr">
                <div id="HomePageBanner">
                    <Image roundedCircle="true" src={ProfileImg} id="ProfileImg" />
                    <div id="HomePageBannerContent">
                        <div id="HomePageBannerNameTitle">Pranav Ramesh</div>
                        <div id="HomePageBannerNameSubtitle">
                            <div style={{ color: "#5CBCE0" }}>Computer Science&nbsp;</div>
                            <div style={{ color: "#E05D5D" }}>@ Harvard College</div>
                        </div>
                        <div id="HomePageBannerButtonRow">
                            <Button id="HomePageBannerButtonRow_Button" href={Resume} target="_blank" style={{ backgroundColor: "#2780E8" }}>Resume</Button>
                            <div id="HomePageBannerButtonRow_RightSide">
                                {[
                                    [EmailIcon, "mailto:pranav.ramesh1@gmail.com"],
                                    [LinkedinIcon, "https://www.linkedin.com/in/pranav-ramesh1/"],
                                    [GithubIcon, "https://github.com/pr28416"],
                                ].map((elem, idx) =>
                                    <Button key={idx} id="HomePageBannerButtonRow_Button" style={{ marginLeft: "12px" }} href={elem[1]}>
                                        <img src={elem[0]} style={{ width: "28px" }} />
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="HomePageContent">
                    <p style={{ fontWeight: "bold" }}>
                        Hi! I'm Pranav Ramesh, a first-year undergraduate student at Harvard College concentrating in computer science with a secondary in statistics.
                    </p>
                    <p>
                        I am broadly interested in computer vision, machine learning, and systems architecture. I will be conducting research in self-verification for large language models and generative AI under Professor Nada Amin as part of the Program for Research in Science and Engineering (PRISE) at Harvard. <b>I am also looking for a Software Engineering, Software Development, or Data Engineering internship for Winter 2023/Summer 2024.</b>
                    </p>
                    <p>
                        I have published five apps to the iOS app store, including <a className="CustomHyperlink" href="/apps">GeoScholar</a>, <a className="CustomHyperlink" href="/apps">Scholar.ly</a>, <a className="CustomHyperlink" href="/apps">GSEF Official</a>, <a className="CustomHyperlink" href="/apps">ReadSpeak</a>, and <a className="CustomHyperlink" href="/apps">Gene Xpress</a>. I have also created a variety of projects across multiple disciplines, such as Pillola, a smart, secure pill dispenser, and Table Tennis CV, computer vision project that tracks active table-tennis gameplay. Additionally, I maintain a YouTube channel, <a className="CustomHyperlink" href="https://www.youtube.com/c/codesavant/">CodeSavant</a>, where I publish videos on algorithms and interesting coding topics, and I have published two books, <a className="CustomHyperlink" href="/books">The Python Starterpack</a> and <a className="CustomHyperlink" href="/books">Java Decaffeinated</a>, on Amazon.
                    </p>
                    <p>
                        At Harvard, I am a software engineer as part of Tech for Social Good, with whom I recently finished a semester-long project as part of a team developing an expert web portal in React and Node,js for OkaySo, a platform that connects people who have questions about identity, relationships, and more to experts. I am also a sourcing associate with Harvard Venture Capital Partners, where I source startups for our clients. In my free time, I enjoy arranging Indian music for the piano, playing table tennis, and dancing as part of Harvard College Bhangra.
                    </p>
                    <p>
                        Feel free to reach out to me if you're interested! My <a className="CustomHyperlink" href="mailto:pranav.ramesh1@gmail.com">email</a>, <a className="CustomHyperlink" href="/books">LinkedIn</a>, and <a className="CustomHyperlink" href="/books">GitHub</a> are linked above.
                    </p>
                </div>

            </ div>
        )} />
    )
}

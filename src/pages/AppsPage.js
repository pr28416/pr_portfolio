import React from 'react'
import { Card, Image } from 'react-bootstrap'
import PageBanner from '../components/PageBanner'
import PageNavCtrl from '../components/PageNavCtrl'
import './css/AppsPage.css'
import GeoScholarImage from '../assets/frame-geoscholar_orig.png'
import ScholarlyImage from '../assets/frame-scholarly_orig.png'
import GeneXpressImage from '../assets/frame-gene-express_orig.png'
import ReadSpeakImage from '../assets/frame-readspeak_orig.png'
import GSEFOfficialImage from '../assets/frame-gsef_orig.png'
import TraderInvaderImage from '../assets/frame-traderinvader_orig.png'
import DownloadOnAppStoreImage from '../assets/download-on-app-store_orig.png'
import WatchOnYouTubeImage from '../assets/youtube-button-16.png'

export default function AppsPage() {

    const AppEntry = (title, description, link, linkImage, image) => {
        return {
            title: title,
            description: description,
            link: link,
            linkImage: linkImage,
            image: image
        }
    }

    const appEntries = [
        AppEntry("GeoScholar", "GeoScholar has everything the avid competitor needs to win geography contests with over 6,000 thought-provoking geography questions from the regional to the international level. These questions cover different topics such as physical, cultural, economic, political, historical geography, and more.", "https://apps.apple.com/us/app/geoscholar/id1453068019", DownloadOnAppStoreImage, GeoScholarImage),
        AppEntry("Scholar.ly", "Scholar.ly is a score calculator for high school and middle school students who wish to calculate their current GPA, potential GPA, cumulative GPA, or SAT and PSAT test scores, in order to set goals for their future academic endeavors in school.", "https://apps.apple.com/us/app/scholar-ly/id1453076299", DownloadOnAppStoreImage, ScholarlyImage),
        AppEntry("Gene Xpress", "Gene Xpress lets you convert DNA to a polypeptide. Simply enter in your DNA template strand and your complementary strand, mRNA strand, tRNA strand, and polypeptide chain will instantly be created.", "https://apps.apple.com/us/app/gene-xpress/id1484199669", DownloadOnAppStoreImage, GeneXpressImage),
        AppEntry("ReadSpeak", "Enter any text and ReadSpeak will speak your text back to you in the accent that you choose. There are over 100 different accents to choose from!", "https://apps.apple.com/us/app/readspeak/id1522708269", DownloadOnAppStoreImage, ReadSpeakImage),
        AppEntry("GSEF Official", "GSEF is a student-led organization dedicated to advancing economic literacy in high schools worldwide. This app includes, but is not limited to, Global Student Economics Review articles submitted by members of our own economics community, quiz decks for various economics topics, and podcasts hosted by members of our leadership board!", "https://apps.apple.com/us/app/gsef-official/id1528791451", DownloadOnAppStoreImage, GSEFOfficialImage),
        AppEntry("TraderInvader", "TraderInvader is a strategy game where the player is a pirate ship that seeks to sink the hidden trader ship, which attempts to travel from one corner of the map to another. The purpose is to reinforce a player's memory and also develop strategies to sink the trader.", "https://youtu.be/CCKBXPAbs84", WatchOnYouTubeImage, TraderInvaderImage)
    ]

    return (
        <PageNavCtrl content={(
            <div id="AppsPageCtr">
                <PageBanner title="iOS Apps" description="I am an avid iOS app developer, and have been developing and publishing iOS apps for the past four years. Listed below are some of my apps that I have developed, including those that I have published on the Apple App Store. Check out the apps if you're interested!" />
                <div id="AppsPageGrid">
                    {appEntries.map(app => (
                        <Card className="AppCard" bg="none">
                            <Card.Body className="AppCardContent">
                                <Image className="AppCardImage" src={app.image}></Image>
                                <div className="AppCardSubcontent">
                                    <Card.Title className="AppCardTitle">{app.title}</Card.Title>
                                    <Card.Text>{app.description}</Card.Text>
                                    <div className="AppCardLinkImageContainer">
                                        <a href={app.link}><Image src={app.linkImage} className="AppCardLinkImage" /></a>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        )} />
    )
}

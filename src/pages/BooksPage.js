import React from 'react'
import PageBanner from '../components/PageBanner'
import PageNavCtrl from '../components/PageNavCtrl'
import PythonBookImage from '../assets/python-starterpack-front-cover_orig.png'
import JavaBookImage from '../assets/java-decaffeinated-front-cover_orig.jpg'
import BuyOnAmazonImage from '../assets/order-at-amazon_orig.png'
import { Card, Image } from 'react-bootstrap'
import './css/BooksPage.css'

export default function BooksPage() {

    const books = [
        {
            title: "The Python Starterpack",
            image: PythonBookImage,
            description: <div>
                <p><b>The Python Starterpack</b> is the essential guide to any aspiring programmer who wants to learn the fundamentals of Python 3. By the end of this book, you will be able to create working programs that solve various tasks through learning about the following:</p>
                <ul>
                    <li>Types</li>
                    <li>Variables</li>
                    <li>Math Operations</li>
                    <li>Boolean Expressions</li>
                    <li>Conditional Statements</li>
                    <li>Loops</li>
                    <li>Collections of Data</li>
                    <li>Functions</li>
                    <li>Objects and Classes</li>
                    <li>and more!</li>
                </ul>
                <p>The Python Starterpack discusses concepts that are not only important for Python, but for all object-oriented programming languages, and is a great resource for individuals of all ages. This book will set you on a path to becoming a successful programmer!</p>
            </div>,
            link: "https://www.amazon.com/Python-Starterpack-Simple-Introduction-ebook/dp/B086Z5497V/"
        },
        {
            title: "Java Decaffeinated",
            image: JavaBookImage,
            description: <div>
                <p><b>Java Decaffeinated</b> is the essential guide to any aspiring programmer who wants to learn the fundamentals of Java. By the end of this book, you will be able to create working programs that solve various tasks through learning about the following:</p>
                <ul>
                    <li>Types</li>
                    <li>Variables</li>
                    <li>Math Operations</li>
                    <li>Boolean Expressions</li>
                    <li>Conditional Statements</li>
                    <li>Loops</li>
                    <li>Collections of Data</li>
                    <li>Functions</li>
                    <li>Objects and Classes</li>
                    <li>and more!</li>
                </ul>
                <p>Java Decaffeinated discusses concepts that are not only important for Java, but for all object-oriented programming languages, and is a great resource for individuals of all ages. This book will set you on a path to becoming a successful programmer!</p>
            </div>,
            link: "https://www.amazon.com/dp/B09K5TQWKC/"
        }
    ]

    return (
        <PageNavCtrl content={(
            <div id="BooksPageCtr">
                <PageBanner title="Books" description="Having learned to code in popular programming languages like Python and Java for more than eight years, I've compiled important object-oriented concepts and beginner coding techniques into technical programming guides. These are for anyone who are new to computer programming." />
                <div id="BooksPageGrid">
                    {books.map(book => (
                        <Card className="BooksCard" bg="none">
                            <Card.Body className="BooksCardContent">
                                <div className="BooksCardLeftContent">
                                    <Image rounded="True" className="BooksCardImage" src={book.image} />
                                    <div className="BooksCardPurchaseImageContainerWidescreen">
                                        <a href={book.link}><Image className="BooksCardPurchaseImage" src={BuyOnAmazonImage} /></a>
                                    </div>
                                </div>
                                <div className="BooksCardRightContent">
                                    <Card.Title className="BooksCardTitle">{book.title}</Card.Title>
                                    <Card.Text>{book.description}</Card.Text>
                                    <div className="BooksCardPurchaseImageContainerThinscreen">
                                        <a href={book.link}><Image className="BooksCardPurchaseImage" src={BuyOnAmazonImage} /></a>
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

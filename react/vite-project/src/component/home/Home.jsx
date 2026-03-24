import './Home.css'
import Signin from '../sign/Signin';
import Card from './Card';

function Home() {
    let cards = [
        {
            id:1,
            image :'../../public/1.png',
            para1:"Alec Whitten • 1 Jan 2023",
            h3:"Bill Walsh leadership lessons",
            para2:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        },
        {
            id:2,
            image :'../../public/2.png',
            para1:"Demi WIlkinson • 1 Jan 2023",
            h3:"PM mental models",
            para2:"Mental models are simple expressions of complex processes or relationships.",
        },
        {
            id:3,
            image :'../../public/3.png',
            para1:"Candice Wu • 1 Jan 2023",
            h3:"What is Wireframing?",
            para2:"Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        },
        {
            id:4,
            image :'../../public/2.png',
            para1:"Natali Craig • 1 Jan 2023",
            h3:"How collaboration makes us better designers",
            para2:"Collaboration can make our teams stronger, and our individual designs better.",
        },
        {
            id:5,
            image :'../../public/5.png',
            para1:"Drew Cano • 1 Jan 2023",
            h3:"Our top 10 Javascript frameworks to use",
            para2:"JavaScript frameworks make development easy with extensive features and functionalities.",
        },
        {
            id:6,
            image :'../../public/6.png',
            para1:"Orlando Diggs • 1 Jan 2023",
            h3:"Podcast: Creating a better CX Community",
            para2:"JavaScript frameworks make development easy with extensive features and functionalities.",
        },
    ]
  return (
    <>
      <div className="hero">
        <section className="sectionone">
            <div className="text">
                <h1>Stories and interviews</h1>
                <p>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
            </div>
            <div className="email_and_subscribe">
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </section>
      </div>
      <main>
        <section className="section_card">
            <h2>All Blog Posts</h2>
            <div className="container_card">
                {cards.map(card => {
                    return(
                        <Card
                        key={card.id}
                        image ={card.image}
                        para1 = {card.para1}
                        h3 = {card.h3}
                        para2 = {card.para2}
                        />
                    )
                })
                }
            </div>
        </section>
      </main>
    </>
  )
}

export default Home;

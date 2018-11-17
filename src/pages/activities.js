import React from "react"
import Layout from "../components/layout"
import Icon from "../components/icon"
import PageTitle from "../components/pageTitle"
import '../styles/main.scss'
import TravelStarMap from "../../public/travel_star_map.png"

import NationalMallImg from "../../public/places-images/national_mall.jpg"
import SmithsonianImg from "../../public/places-images/smithsonian_museum.jpg"
import GeorgetownImg from "../../public/places-images/georgetown.jpg"
import EscapeRoomImg from "../../public/places-images/escape_room_2.jpg"
import GreatFallsImg from "../../public/places-images/great_falls.jpg"
import ArlingtonImg from "../../public/places-images/arlington.jpg"

const Activities = () => (
  <Layout>
  <PageTitle pageName="Welcome to DC" imgsrc={TravelStarMap} id="activities"/>
  <div style={{height: "100vh"}} className="container">
    <div className="grid-title"><h1>Things to Do</h1></div>
    <div className="two info-grid">
      <div className="grid-cell">
        <img className="activity-img" src={NationalMallImg}/>
        <h3>The National Mall</h3>
        <p>In the shadow of the Washington Monument is a place that truly
        captures the spirit of America - for on those grass fields is the spot
        that Hillary and Mark met on an intramural soccer team. It is also home
        to some of America’s greatest monuments. Stretching nearly 2 miles from
        the Capitol Building to the Lincoln Memorial, it’s a place to take a
        stroll through history.</p>
      </div>
      <div className="grid-cell">
        <img className="activity-img" src={SmithsonianImg}/>
        <h3>Smithsonian Museums</h3>
        <p>The Smithsonian Air & Space Museum boasts the rare honor of being the
        location of one of Hillary and Mark’s first dates. It is also the most
        visited museum in the world. Spend an afternoon viewing the Spirit of
        St. Louis and the Lunar Module, or visit one of the other 16 world-class
        Smithsonian museums. Admission is always free, and subjects range from
        American craft to Natural History.</p>
      </div>
      <div className="grid-cell">
        <img className="activity-img" src={GeorgetownImg}/>
        <h3>Georgetown</h3>
        <p>Early into dating, Mark took Hillary to a bar in Georgetown to see his
        wonderfully talented sister Lena sing. Afterwards they went to the
        Georgetown Piano Bar, and watched as two of Mark’s favorite teams, the
        Wizards and the Capitals, got destroyed in important playoff games. It was
        a low moment, but Hillary’s company made it a little bit brighter, and
        Mark realized if she still wanted to hang out with him after this, she
        was the real deal. Georgetown is also home to great shopping, delicious eats,
        and regular street festivals. </p>
      </div>
      <div className="grid-cell">
        <img className="activity-img" src={EscapeRoomImg}/>
        <h3>Escape Rooms</h3>
        <p>Escape rooms are one of Hillary and Mark’s favorite things. An activity
        which involves being trapped in a and having 1 hour to escape, with themes
        like “serial killer” and “find the bomb”, this romantic setting was the
        perfect place for Mark to propose. After escaping with 22 minutes to spare,
        the couple entered a room Mark had decorated with flowers and pictures of
        the two of them and got down on one knee. Experience an escape room for
        yourself at Escape Quest in Georgetown, Alexandria or Takoma Park.</p>
      </div>
      <div className="grid-cell">
        <img className="activity-img" src={GreatFallsImg}/>
        <h3>Virginia Parks</h3>
        <p>Hiking in Northern Virginia is one of Mark & Hillary’s favorite things.
        On any warm Saturday, you can find the two of them and their dog, Lando,
        out on the trails. Check out Great Falls Park or Teddy Roosevelt Island,
        and explore the Virginia wilderness the two of them love so much.</p>
      </div>
      <div className="grid-cell">
        <img className="activity-img" src={ArlingtonImg}/>
        <h3>Arlington</h3>
        <p>Step outside DC and get a closer look at the city Mark and Hillary call
        home. With its many neighborhoods, there’s plenty to do and see. Visit
        Clarendon and enjoy some of the city’s nightlife at Don Tito’s and Clarendon Grill,
         or spend an afternoon at the newly opened Ballston Quarter.</p>
      </div>
    </div>


    <div className="grid-title"><h1>Food & Drink</h1></div>
    

  </div>
  </Layout>
)

export default Activities

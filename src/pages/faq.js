import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import '../styles/main.scss'
import TravelStarMap from "../../public/travel_star_map.png"

const FAQ = () => (
  <Layout>
    <Header id="faq-pg" title="FAQ"/>
    <div style={{height: "100vh"}} className="container">
      <div className="info-grid faq-grid">
        <div className="grid-cell faq-cell">
          <h3 className="grid-cell-title sub-title">Can I bring my kids?</h3>
          <p> While we love all your children, we have decided to make this an adult-only party. We hope you understand!</p>
        </div>
        <div className="grid-cell faq-cell">
          <h3 className="grid-cell-title sub-title">Do you have a hotel block?</h3>
          <p> Yes! We have reserved a room block at the <a target="_blank" href="https://www.ihg.com/kimptonhotels/hotels/us/en/find-hotels/hotel/rooms?qDest=2121%20P%20St%20NW,%20Washington,%20DC,%20US&qCiMy=82019&qCiD=27&qCoMy=82019&qCoD=29&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qIta=99801505&qGrpCd=TL9&qSlH=WDCPA&qAkamaiCC=US&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va&qAAR=6CBARC&qWch=0&qSmP=1&setPMCookies=true&qRad=30&qRdU=mi&srb_u=1&icdv=99801505">
          Kimpton Palomar Hotel</a> in Washington, DC. To reserve a room, you can call the Palomar at 877-866-3070 and make the reservation under <b>Scofield Seikaly Wedding Room Block</b>.
          Or you can <a target="_blank" rel="noopener noreferrer" href="https://www.ihg.com/kimptonhotels/hotels/us/en/find-hotels/hotel/rooms?qDest=2121%20P%20St%20NW,%20Washington,%20DC,%20US&qCiMy=82019&qCiD=27&qCoMy=82019&qCoD=29&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qIta=99801505&qGrpCd=TL9&qSlH=WDCPA&qAkamaiCC=US&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va&qAAR=6CBARC&qWch=0&qSmP=1&setPMCookies=true&qRad=30&qRdU=mi&srb_u=1&icdv=99801505">
          Book your room online
          </a>. Make sure to book your room by <b>August 28th, 2019</b>!</p>
        </div>
        <div className="grid-cell faq-cell">
          <h3 className="grid-cell-title sub-title">Is there a dress code?</h3>
          <p>We hope our wedding will be fun excuse to wear your favorite cocktail attire. And make sure to wear your dancing shoes!</p>
        </div>
        <div className="grid-cell faq-cell">
          <h3 className="grid-cell-title sub-title">Will parking be available?</h3>
          <p>Yes! St. Francis Hall has 2 large parking lots with plenty of spots for all guests. Overnight parking will be available at the hotel for guests for an additional fee.</p>
        </div>
        <div className="grid-cell faq-cell">
          <h3 className="grid-cell-title sub-title">Will transportation be provided?</h3>
          <p>A shuttle bus will be provided for those staying at the hotel.</p>
        </div>
        <div className="grid-cell faq-cell">
          <h3 className="grid-cell-title sub-title">How can I RSVP?</h3>
          <p>You should receive a pre-addressed RSVP postcard with your wedding invitation. If it is missing, or you'll afraid you won't be able to send it
          back in time for the RSVP due date, you can send an email to <a href="mailto:hillaryandmark2019@gmail.com">hillaryandmark2019@gmail.com</a> with your name, if you'll be joining us, and one song you'd love to
          hear on the dance floor!</p>
        </div>
        <div className="grid-cell faq-cell">
          <h3 className="grid-cell-title sub-title">When are RSVPs due?</h3>
          <p>We’d love to know if you can make it (we hope you can!). Please RSVP by August 1st using the RSVP card that came in the mail or via the email above.</p>
        </div>
        <div className="grid-cell faq-cell">
          <h3 className="grid-cell-title sub-title">What if I have other questions?</h3>
          <p>We’d love to hear from you! Please e-mail us at <a href="mailto:hillaryandmark2019@gmail.com">hillaryandmark2019@gmail.com</a> with any questions, or just to say “hi!” We can’t wait to see you!</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default FAQ

import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridContainer from '../compartments/GridContainer'
import { GridCell } from '../compartments/GridCells'

const FAQPage = () => (
  <Layout title='faq'>
    <SEO title="Hillary and Mark - FAQ" />
    <div className='index-header-text'>
      Questions
    </div>
    <GridContainer columns={1}>
      <GridCell>
        <h3 className="grid-cell-title sub-title">Can I bring my kids?</h3>
        <p className='grid-details'> While we love all your children, we have decided to make this an adult-only party. We hope you understand!</p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">Do you have a hotel block?</h3>
        <p className='grid-details'> 
          Yes! We have reserved a room block at the <a target="_blank" href="https://www.ihg.com/kimptonhotels/hotels/us/en/find-hotels/hotel/rooms?qDest=2121%20P%20St%20NW,%20Washington,%20DC,%20US&qCiMy=82019&qCiD=27&qCoMy=82019&qCoD=29&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qIta=99801505&qGrpCd=TL9&qSlH=WDCPA&qAkamaiCC=US&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va&qAAR=6CBARC&qWch=0&qSmP=1&setPMCookies=true&qRad=30&qRdU=mi&srb_u=1&icdv=99801505">
          Kimpton Palomar Hotel</a> in Washington, DC. To reserve a room, you can call the Palomar at 877-866-3070 and make the reservation under <b>Scofield Seikaly Wedding Room Block</b>.
          Or you can <a target="_blank" rel="noopener noreferrer" href="https://www.ihg.com/kimptonhotels/hotels/us/en/find-hotels/hotel/rooms?qDest=2121%20P%20St%20NW,%20Washington,%20DC,%20US&qCiMy=82019&qCiD=27&qCoMy=82019&qCoD=29&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qIta=99801505&qGrpCd=TL9&qSlH=WDCPA&qAkamaiCC=US&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va&qAAR=6CBARC&qWch=0&qSmP=1&setPMCookies=true&qRad=30&qRdU=mi&srb_u=1&icdv=99801505">
          Book your room online
          </a>. 
          Make sure to book your room by August 28th, 2019!
        </p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">Is there a dress code?</h3>
        <p className='grid-details'>We hope our wedding will be fun excuse to wear your favorite cocktail attire. And make sure to wear your dancing shoes!</p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">Will parking be available?</h3>
        <p className='grid-details'>Yes! St. Francis Hall has 2 large parking lots with plenty of spots for all guests. Overnight parking will be available at the hotel for guests for an additional fee.</p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">Will transportation be provided?</h3>
        <p className='grid-details'>We are currently working on transportation from the hotel to the venue, and will update this page when we have more information.</p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">How can I RSVP?</h3>
        <p className='grid-details'>
          You should receive a pre-addressed RSVP postcard with your wedding invitation. If it is missing, or you'll afraid you won't be able to send it
          back in time for the RSVP due date, you can send an email to <a href="mailto:hillaryandmark2019@gmail.com">hillaryandmark2019@gmail.com</a> with your name, if you'll be joining us, and one song you'd love to
          hear on the dance floor!
        </p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">When are RSVPs due?</h3>
        <p className='grid-details'>We’d love to know if you can make it (we hope you can!). Please RSVP by August 1st using the RSVP card that came in the mail or via the email above.</p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">What if I have other questions?</h3>
        <p className='grid-details'>We’d love to hear from you! Please e-mail us at <a href="mailto:hillaryandmark2019@gmail.com">hillaryandmark2019@gmail.com</a> with any questions, or just to say “hi!” We can’t wait to see you!</p> 
      </GridCell>
    </GridContainer>
  </Layout>
)

export default FAQPage;

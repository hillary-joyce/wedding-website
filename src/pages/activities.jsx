import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import GridContainer from '../compartments/GridContainer';
import { GridCell } from '../compartments/GridCells';
import Icon from '../components/Icon';
import { ImageContainer } from '../compartments/ImageContainer';

const IMAGE_NAMES = {
  arlington: 'arlington',
  escape: 'escape',
  georgetown: 'georgetown',
  great: 'great',
  mall: 'mall',
  smith: 'smith',
}

const ActivitiesPage = props => (
   <Layout title='activities'>
    <SEO title="Hillary and Mark - Activities" />
    <div className='index-header-text'>
      Activities
    </div>
    <GridContainer columns={2}>
      <GridCell>
        <ImageContainer name={IMAGE_NAMES.mall}/>
        <h3 className="grid-cell-title sub-title">THE NATIONAL MALL</h3>
        <p className='grid-details'>
          In the shadow of the Washington Monument is a place that truly
          captures the spirit of America - for on those grass fields is the spot
          that Hillary and Mark met playing soccer. Stretching nearly 2 miles from
          the Capitol Building to the Lincoln Memorial, the mall is home to some
          of America’s greatest monuments, and a great place to take a stroll through
          history.
        </p>
      </GridCell>
      <GridCell>
        <ImageContainer name={IMAGE_NAMES.smith} />
        <h3 className="grid-cell-title sub-title">SMITHSONAIN MUSEUMS</h3>
        <p className='grid-details'>
          The Smithsonian Air & Space Museum boasts the honor of being the
          location of one of Hillary and Mark’s first dates. It is also the most
          visited museum in the world. Spend an afternoon with the Spirit of
          St. Louis and the Lunar Module, or visit one of the other 16 world-class
          Smithsonian museums. Admission is always free, and subjects range from
          American craft to Natural History.
        </p>
      </GridCell>
      <GridCell>
        <ImageContainer name={IMAGE_NAMES.georgetown}/>
        <h3 className="grid-cell-title sub-title">GEORGETOWN</h3>
        <p className='grid-details'>
          Early into dating, Mark took Hillary to Georgetown to see his
          wonderfully talented sister Lena sing. Afterwards they went to the
          Georgetown Piano Bar and watched two of Mark’s favorite teams (Wizards
          and Capitals) get destroyed in important playoff games. It was
          a low moment, but Hillary’s company made it a little bit brighter, and
          Mark realized if she still wanted to hang out after this she
          was special. Georgetown is also home to great shopping, delicious eats,
          and regular street festivals. 
        </p>
      </GridCell>
      <GridCell>
        <ImageContainer name={IMAGE_NAMES.escape}/>
        <h3 className="grid-cell-title sub-title">ESCAPE ROOMS</h3>
        <p className='grid-details'>
          Hillary and Mark love escape rooms. An activity
          which involves being trapped in a room with 1 hour to escape, with themes
          like “serial killer” and “find the bomb”, this romantic setting was the
          perfect place for Mark to propose. After escaping with 22 minutes to spare,
          the couple entered a space Mark had decorated with flowers and pictures and
          got down on one knee. Experience an escape room for
          yourself at Escape Quest in Georgetown, Alexandria or Takoma Park.
        </p>
      </GridCell>
      <GridCell>
        <ImageContainer name={IMAGE_NAMES.great}/>
        <h3 className="grid-cell-title sub-title">VIRGINIA PARKS</h3>
        <p className='grid-details'>
          Hiking in Northern Virginia is one of Mark & Hillary’s favorite things.
          On any warm Saturday, you can find the two of them and their dog, Lando,
          out on the trails. Check out Great Falls Park or Teddy Roosevelt Island,
          and explore the Virginia wilderness the two of them love so much.
        </p>
      </GridCell>
      <GridCell>
        <ImageContainer name={IMAGE_NAMES.arlington}/>
        <h3 className="grid-cell-title sub-title">ARLINGTON</h3>
        <p className='grid-details'>
          Step outside DC and get a closer look at the city Mark and Hillary call
          home. With its many neighborhoods, there’s plenty to do and see. Visit
          Clarendon and enjoy some of the city’s nightlife at Don Tito’s and Clarendon Grill,
          or spend an afternoon at the newly opened Ballston Quarter.
        </p>
      </GridCell>
    </GridContainer>
    <h1 className='grid-title'>FOOD & DRINK</h1>
    <GridContainer columns={3}>
      <GridCell>
        <h3 className="grid-cell-title sub-title">PENN SOCIAL</h3>
        <p className='grid-details'>Located in the heart of DC, this bar has arcade basketball, cornhole, and
        plenty of arcade games.</p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">GOOD STUFF EATERY</h3>
        <p className='grid-details'>Mark’s favorite burger joint in DC, with fresh ingredients and delicious sauces.</p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">BOARD ROOM</h3>
        <p className='grid-details'>Spend some time at this bar playing one of their board games that you can rent for just $1.</p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">AMBAR</h3>
        <p className='grid-details'>Looking for something different? Ambar serves delicious authentic Balkan food.</p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">FALAFEL INC</h3>
        <p className='grid-details'>Tucked on a side street in Georgetown, this little restaurant serves amazing Mediterranean food.</p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">TONY & JOE'S</h3>
        <p className='grid-details'>Tony & Joe’s serves some of the freshest seafood in all of DC. Try the blue crab, a local favorite!</p>
      </GridCell>
    </GridContainer>
   </Layout>
)

export default ActivitiesPage
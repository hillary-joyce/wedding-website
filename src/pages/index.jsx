import React from "react";
import Layout from "../components/layout"
import { Image } from "../components/image";
import SEO from "../components/seo"
import GridContainer from '../compartments/GridContainer'
import { GridCell } from '../compartments/GridCells'
import Icon from '../components/Icon';
import { FiClock } from "react-icons/fi"
import { FiMapPin } from "react-icons/fi"

const IMAGES = {
  navbar: 'navbarBackground',
  header: 'headerImage',
  footer: 'footerBackground',
}

const IndexPage = () => (
  <Layout title='Main'>
    <SEO title="Hillary and Mark" />
    <div className='index-header-text'>
      Hillary & Mark
    </div>
    <div className='index-header'>
      <Image image={IMAGES.header} />
    </div>
    <div style={{width: '50%', margin: '0 auto'}}>
      <GridContainer columns={2}>
        <GridCell>
          <h1 className="grid-cell-title">WHEN</h1>
          <Icon size="3rem">
            <FiClock />
          </Icon>
          <div>Saturday</div>
          <div>September 28 2019</div>
          <div>4:00 PM</div>
        </GridCell>
        <GridCell>
          <h1 className="grid-cell-title">WHERE</h1>
          <Icon size="3rem">
            <FiMapPin />
          </Icon>
          <div>St. Francis Hall</div>
          <div>1340 Quincy St NE</div>
          <div>Washington, DC 20017</div>
        </GridCell>
      </GridContainer>
    </div>
  </Layout>
)

export default IndexPage

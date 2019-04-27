import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridContainer from '../compartments/GridContainer'
import { GridCell } from '../compartments/GridCells'
import { Image } from '../components/image';


const RegistryPage = () => (
  <Layout title='registry'>
    <SEO title="Hillary and Mark - Registry" />
    <div className='index-header-text'>
      Registry
    </div>
    <GridContainer columns={1}>
      <GridCell>
        <h3> We are registered at:</h3>
        <div style={{width: '30vw', margin: '0 auto'}}>
          <a href="https://www.zola.com/registry/hillaryandmark" target="_blank" rel="noopener noreferrer">
            <Image image='zola'/>
          </a>
          <a href="https://www.zola.com/registry/hillaryandmark" target="_blank" rel="noopener noreferrer">View Registry</a>
        </div>
      </GridCell>
    </GridContainer>
  </Layout>
)

export default RegistryPage;

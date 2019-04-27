import React from 'react'
import styled from '@emotion/styled'

export default class GridContainer extends React.Component {

  static Container = props => {
    const Main = styled.div({
      display: 'grid',
      gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
      gridColumnGap: '10rem',
      width: '90%',
      padding: '0',
      margin: '4rem auto',
      justifyContent: 'center',
      alignItems: 'center',
    })

    return <Main {...props} />
  }

  render(){
    const { Container } = GridContainer;
    return(
      <Container columns={this.props.columns}>
        {this.props.children}
      </Container>
    )
  }
}

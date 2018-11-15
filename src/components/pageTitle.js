import React from 'react'

const PageTitle = props => (
  <div className="page-title">
    <img className="page-star-map" src={props.imgsrc}/>
    <h1 className="page-name">{props.pageName}</h1>
  </div>
)

export default PageTitle;

import React from 'react'

const PageTitle = props => (
  <div className="page-title">
    <h1 id={props.id} className="page-name">{props.pageName}</h1>
  </div>
)

export default PageTitle;

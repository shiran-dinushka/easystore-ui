import React from 'react'
import PageTitle from './PageTitle'


function PageHeading({ title, children }) {
  return (
   <div className="page-heading-container">
        <PageTitle title={title}/>
       {children}
   </div>
  )
}

export default PageHeading
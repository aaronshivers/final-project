import React from "react";

const PageTitle = ({title}) => (
  <>
    <h1>{title}</h1>
    <style jsx>{`
      h1 {
        margin: 0;
      }
    `}</style>
  </>
)

export default PageTitle

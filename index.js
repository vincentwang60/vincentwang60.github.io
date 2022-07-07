import * as React from "react"
import Header from "../components/header"
import Main from "../components/main"
const css = require('../constants.css')

// https://coolors.co/cb997e-f3e9e2-ffe8d6-b7b7a4-a5a58d-6b705c

const IndexPage = () => {

  return (
    <>
      <Header />
      <div style={{padding: '0.5vw', background: "#2B2C26"}}>
        <Main />
      </div>
    </>
  )
}

export default IndexPage
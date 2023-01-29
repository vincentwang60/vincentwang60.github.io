import React, { useState } from "react";
import Main from "../components/main"
import {Helmet} from "react-helmet";
const css = require('../constants.css')

// https://coolors.co/cb997e-f3e9e2-ffe8d6-b7b7a4-a5a58d-6b705c

const IndexPage = () => {
  const [current, setCurrent] = useState(500)

  return (
    <div>
      <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      </Helmet>
      <div style={{padding: '0px', background: "#20211C"}}>
        <Main current = {current} setCurrent = {setCurrent}/>
      </div>
    </div>
  )
}

export default IndexPage
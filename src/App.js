import React from "react"
import ReactDom from "react-dom"

const App = () => (
  <>
    <h1>Hello Bia</h1>
    <p>Basic react configuration!</p>
  </>
)

ReactDom.render(<App />, document.getElementById("root"))
import React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <footer>
        <p>RabbitCon is brought to you by the Usada Kensetsu Corp.</p>
      </footer>
    </div>
  )
}

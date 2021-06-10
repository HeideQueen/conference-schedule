import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <h1>RabbitCon</h1>
      <div>
        <Link to="/location">Location</Link>
        <Link to="/food">Food</Link>
        <Link to="/code">Code of Conduct</Link>
        <Link to="/schedule">Schedule</Link>
      </div>
    </nav>
  )
}

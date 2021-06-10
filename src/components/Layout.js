import React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <footer className="bg-pink-600 text-gray-50 flex justify-center items-center h-14">
        <p>RabbitCon is brought to you by the Usada Kensetsu Corp. 2021</p>
      </footer>
    </div>
  )
}

import { Link } from "gatsby"
import React from "react"

const pages = [
  { url: "/location", name: "Location" },
  { url: "/food", name: "Food" },
  { url: "/code", name: "Code of Conduct" },
  { url: "/schedule", name: "Schedule" },
]

export default function NavbarLinks() {
  return (
    <ul className="pb-5 pt-5 md:pt-0 md:pb-0 md:flex md:gap-5 md:divide-x">
      {pages.map(page => (
        <li className="pl-5 hover:text-pink-200 font-light">
          <Link to={page.url}>{page.name}</Link>
        </li>
      ))}
    </ul>
  )
}

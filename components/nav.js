import React, { useState } from 'react'
import Link from 'next/link'
import { IoMdCart } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'

const links = [
  { href: 'cars', label: 'Cars' },
  { href: 'cart', label: 'Cart' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <>
      <div className="navbar">
        <a className="navbar__brand" href=".">RC Carpenters</a>
        <div className="navbar__icons">
          <a href="./cart">
            <IoMdCart className="navbar__cart" />
          </a>
          <FaBars
            className="navbar__toggle"
            onClick={ () => setShowDropdown(!showDropdown) }
          />
        </div>
        <div
          className={ `navbar__dropdown ${ showDropdown ? "show" : null }` }
        >
          <nav>
            <ul>
              {
                links.map(({ key, href, label }) => (
                  <li key={key}>
                    <a href={href}>{label}</a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>

      <style jsx>{`

        .navbar {
          grid-area: navbar;
          width: 94%;
          position: fixed;
          background-color: white;
          font-size: 1.5rem;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar__brand {
          color: black;
          text-decoration: none;
        }

        .navbar__icons {
          display: inline;
          height: 1.5rem;
          vertical-align: middle;
        }

        .navbar__icons a {
          text-decoration: none;
          color: grey;
        }

        .navbar__toggle {
          cursor: pointer;
        /*  height: 1.5rem;
          vertical-align: middle;*/
        }

        .navbar__dropdown {
          display: none;
          position: absolute;
          left: 0;
          top: 3rem;
          width: 93%;
          padding: 1rem;
          background-color: white;
        }

        .navbar__dropdown ul {
          padding: 0;
          margin: 0;
        }

        .navbar__dropdown li {
          list-style: none;
          padding-top: 1rem;
          text-align: right;
        }

        .navbar__dropdown a {
          text-decoration: none;
          color: black;
        }

        .show {
          display: block;
        }
      `}</style>
    </>
  )
}

export default Nav

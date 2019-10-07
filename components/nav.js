import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaShoppingCart } from 'react-icons/fa'

const links = [
  { href: '/', label: 'Home' },
  { href: 'cars', label: 'Cars' },
  { href: 'cart', label: 'Cart' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="navbar">
      <a className="navbar__brand" href=".">RC Carpenters</a>
      <div className="navbar__icons">
        <a href="./cart">
          <FaShoppingCart className="navbar__cart" />
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

      <style jsx>{`

        .navbar {
          width: 100vw;
          height: 4rem;
          position: fixed;
          top: 0;
          background-color: var(--primary-color);
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar__brand {
          color: black;
          text-decoration: none;
          margin: 1rem;
        }

        .navbar__icons {
          display: inline;
          height: 1.5rem;
          vertical-align: middle;
          margin: 1rem;
          margin-right: 2rem;
        }

        .navbar__icons a {
          text-decoration: none;
          color: black;
          margin-right: 1rem;
        }

        .navbar__toggle {
          cursor: pointer;
          vertical-align: middle;
        }

        .navbar__dropdown {
          display: none;
          position: absolute;
          left: 0;
          top: 4rem;
          width: 100%;
          background-color: var(--primary-color);
          padding-right: 1rem;
        }

        .navbar__dropdown ul {
          margin: 1rem;
        }

        .navbar__dropdown li {
          list-style: none;
          padding-top: 1rem;
          text-align: right;
        }

        .navbar__dropdown li:first-child {
          padding-top: 0;
        }

        .navbar__dropdown a {
          text-decoration: none;
          color: black;
        }

        .show {
          display: block;
        }
      `}</style>
    </div>
  )
}

export default Nav

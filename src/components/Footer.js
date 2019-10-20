import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <center><ul className="icons">
            <li>
              <a href="https://www.instagram.com/itzhoang/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/brianthoang/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span></a>
            </li>
            <li>
              <a href="https://github.com/FlyingViet/" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul></center>
        <p className="copyright">&copy; Brian Hoang. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer

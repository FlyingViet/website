import React from 'react'
import PropTypes from 'prop-types'
import pic from '../images/headshot.png'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={pic} alt="" className="logo"></img>
        </div>
     
        <div className="content">
            <div className="inner">
                <h1>Brian Hoang</h1>
                <p>Full Stack Software Developer</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About Me</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('discord')}}>Discord Bot</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('media')}}>Media</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header

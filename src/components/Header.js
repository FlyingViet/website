import React from 'react'
import PropTypes from 'prop-types'
import pic from '../images/headshot.png'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
    <img src={pic} alt="" className="logo"></img>
     
        <div className="content">
            <div className="inner">
                <h1>Brian Hoang</h1>
                <p>Full Stack Software Engineer</p>
            </div>
        </div>
        <nav>
            <center>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About Me</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('career')}}>Career</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('discord')}}>Discord Bot</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('media')}}>Media</a></li>
            </ul>
            </center>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header

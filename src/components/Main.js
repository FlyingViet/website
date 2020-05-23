import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/headshot.png'
import InstaFeed from './InstaFeed'
import live from '../images/live.png'

class Main extends React.Component {

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <center>
            <h2 className="major">About Me</h2>
            <img src={pic01} alt="" id="profile" />
            <p>Hello, I am Brian Hoang.</p>
          </center>        
          <p>
            I am a Computer Science major at University of Wisconsin - Milwaukee. <br/>
            I am a Software Development Engineer Intern at Amazon for Summer 2020. <br/>
            I am a quick learner with a passion for programming.<br/>
            Loves to travel, eat, take pictures, and hang out with friends and family.<br/>
            If you want to connect, feel free to add me on <a href="https://www.linkedin.com/in/brianthoang/" target="_blank">LinkedIn</a>
          </p>
          {close}
        </article>

        <article
          id="career"
          className={`${this.props.article === 'career' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <center><h2 className="major">Career</h2></center>
          <p>
            <h3>Quad</h3>
            <p>Software Developer Intern | June 2019 - Current<br/>C# ∙ ASP.Net ∙ TypeScript ∙ React ∙ T-SQL</p>
          </p>
          <p>
            <h3>vcpi</h3>
            <p>Customer Support Representative | March 2018 - April 2019</p>
          </p>
          <center><h2 className="major">Education</h2></center>
          <p>
            <h3>University of Wisconsin - Milwaukee</h3>
            <p>Bachelor of Computer Science</p>
          </p>
          {close}
        </article>

        <article
          id="media"
          className={`${this.props.article === 'media' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <InstaFeed/>
          {close}
        </article>
        <article
          id="discord"
          className={`${this.props.article === 'discord' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <center><h2 className="major">Discord Bot</h2></center>
          <p>
          <center><img src={live} alt="" id="live-commands" /></center>
            <center><p>This is a discord bot written by me with various commands. 
            Some of the most commonly used commands are for league of legends and quality of life for server management.</p></center>
            <center><p>Check out more at my <a href="https://github.com/FlyingViet/DiscordBot" target="_blank" >Github</a> for a list of the commands</p> </center>
            <center>
              <button><a href="https://discordapp.com/oauth2/authorize?client_id=599401316107943946&permissions=2146958839&scope=bot" target="_blank" >Add to server</a></button>
            </center>
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/headshot.png'
import pic02 from '../images/background.jpg'

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
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={pic01} alt="" id="profile" />
          </span>
          <p>
            My name is Brian Hoang and I am a Software Engineer.
          </p>
          <p>
            I am currently attending University of Wisconsin - Milwaukee and studying Computer Science. I like to travel the world and take pictures.
            In my free time I like to program, eat, do some boxing, and sleep.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Work Experience</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            <h2>Quad</h2>
            <p>Software Developer Intern | June 2019 - Current<br/>C# | ASP.Net | TypeScript | React | T-SQL</p>
          </p>
          <p>
            <h2>vcpi</h2>
            <p>Customer Support Representative | March 2018 - April 2019</p>
          </p>
          {close}
        </article>

        <article
          id="media"
          className={`${this.props.article === 'media' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Instagram</h2>
          <ul>

          </ul>

          {close}
        </article>
        <article
          id="discord"
          className={`${this.props.article === 'discord' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Discord Bot</h2>
          <p>
            <h2>List of General Commands</h2>
            <ul>
              <li>!clear</li>
              <li>!help</li>
              <li>!invite</li>
              <li>!maplestory</li>
              <li>!pin</li>
              <li>!pinthis</li>
              <li>!prefix</li>
              <li>!roll</li>
            </ul>
            <h2>League of Legends commands</h2>
            <ul>
              <li>!rankna</li>
              <li>!rankeuw</li>
              <li>!rankkr</li>
              <li>!rankna</li>
              <li>!rankoce</li>
            </ul>
            
            <button><a href="https://discordapp.com/oauth2/authorize?client_id=599401316107943946&permissions=2146958839&scope=bot">Add to server</a></button>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:brihoang1995@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name:<br/></label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email:<br/></label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message:<br/></label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
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
          </ul>
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

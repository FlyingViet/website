import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/headshot.png'
import {StaticQuery, graphql} from 'gatsby'

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
          <center><h2 className="major">About Me</h2></center>
          <span className="image main">
            <img src={pic01} alt="" id="profile" />
          </span>
          <p>
            Hello, I am Brian Hoang.
          </p>
          <p>
            I am a Computer Science major at University of Wisconsin - Milwaukee. <br/>Currently working at Quad doing full stack development.<br/>
            I am a quick learner with a passion for programming.<br/>
            Loves to travel, eat, take pictures, and hang out with friends and family.
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
          <center><h2 className="major">Instagram</h2></center>
          <center>
            <ul>
              <StaticQuery
                query={graphql`
                {
                  allInstaNode {
                    edges {
                      node {
                        original
                        dimensions {
                          height
                          width
                        }
                      }
                    }
                  }
                }              
              `}
              render={data => (
                data.allInstaNode.edges.map(edge => {
                  return <img src={edge.node.original} alt="" width="200px" height="200px"/>
                })
              )}
              />
            </ul>
          </center>
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
          <center><h2 className="major">Connect with me</h2></center>

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

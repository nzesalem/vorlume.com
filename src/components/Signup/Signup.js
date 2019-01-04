import React from 'react'

import './Signup.css'
import newsletterImage from './newsletter.svg';

class Signup extends React.Component {
  render() {
    return (
      <div className="signup-wrap">
        <div className="signup-full">
          <div className="details">
            <h1
              className="signup-header"
              style={{
                color: 'rgb(77, 77, 77)',
                fontSize: '20px',
                fontWeight: 700,
              }}
            >
              Join the Newsletter
            </h1>
            <div
              className="subheader"
              style={{ color: 'rgb(104, 104, 104)', fontsize: '15px' }}
            >
              <p>Subscribe to get my latest content by email.</p>
            </div>
            <div className="signup-image">
              <img
                src={newsletterImage}
                style={{ maxWidth: '100%' }}
              />
            </div>
          </div>
          <div className="form-col">
            <form action="https://vorlume.us7.list-manage.com/subscribe/post?u=6a389e4eed2e9d417661ac271&amp;id=9347f1702b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <div className="field-group">
                    <input type="text" name="FNAME" placeholder="Your first name" className="signup-input" autoComplete="off" id="mce-FNAME"/>
                  </div>
                  <div className="field-group">
                    <input type="email" name="EMAIL" placeholder="Your email address" className="signup-input required email" autoComplete="off" id="mce-EMAIL" />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                    <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                  </div>
                  {/*Real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_6a389e4eed2e9d417661ac271_9347f1702b" tabIndex="-1" /></div>
                  <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
                </div>
                <div
                  className="signup-guarantee"
                  style={{
                    color: 'rgb(77, 77, 77)',
                    fontSize: '13px',
                    fontWeight: 400,
                  }}
                >
                  <p>I won't send you spam.</p>
                  <p>
                    Unsubscribe at <em>any</em> time.
                  </p>
                </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup

import React from 'react';
import Mail from '../../assets/images/mail.png';
import Phone from '../../assets/images/phone.png';
import Facebook from '../../assets/images/facebook.png';
import Twitter from '../../assets/images/twitter.png';
import './footer.css';

const Footer = props => (
    <div className="footer">
        <div className="connect">
          <div className="info-ctr">
              <div className="img-ctr">
                  <img src={ Mail } alt=""/>
              </div>
              <div className="text-ctr">
                  <a href="mailto:order@mboutique.com">
                      orders@mboutique.com
                  </a>
              </div>
          </div>
          <div className="info-ctr">
              <div className="img-ctr">
                  <img src={ Phone } alt=""/>
              </div>
              <div className="text-ctr">
                  <a href="tel:949-800-3111">
                      (949) 800-3111
                  </a>
              </div>
          </div>
          <div className="info-ctr social-media">
              <div className="text-ctr">
                  Follow us
              </div>
              <div className="img-ctr">
                  <img src={ Facebook } alt=""/>
              </div>
              <div className="img-ctr">
                  <img src={ Twitter } alt=""/>
              </div>
          </div>
        </div>
        <div className="copyright">
          Copyright Mboutique. All rights reserved.
        </div>
    </div>
);


export default Footer;
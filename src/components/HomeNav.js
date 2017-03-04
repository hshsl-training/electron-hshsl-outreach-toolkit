import React, { Component } from 'react';

import '../css/basscss@7.1.1.min.css';
import '../css/hot.css';


class HomeNav extends Component {
  render() {
    return (
      <section className="vh100 col col-3 bg-purpleBrown flex flex-column justify-space-between">
        <div>
          <div className="clearfix mb3">
            <h1 className="px2 white">HS/HSL Outreach Toolkit</h1>
          </div>
          <nav>
            <div className="mb3">
              <div className="mx2 h3 lh1p25 fw200 grey">
                Preview Submission Content
              </div>
              <ul className="list-reset mt1">
                <li className="mr2 pl3 bg-lighten-2-hover pill-right">
                  <a href="elm.html" className="btn block h4 lh1p25 fw200 grey">The Elm</a>
                </li>
                <li className="mr2 pl3 bg-lighten-2-hover pill-right">
                  <a href="clw.html" className="btn block h4 lh1p25 fw200 grey">Campus Life Weekly</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mt2 mr2 bg-lighten-2-hover pill-right">
                <p href="signage.html" className="btn block h3 lh1p25 fw200 grey not-allowed">Digital Signage Resources</p>
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
  };
};

export default HomeNav;

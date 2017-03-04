import React from 'react';

import '../css/basscss@7.1.1.min.css';
import '../css/hot.css';
import twelveByNine from '../img/1200x900.png';


const ClwWorkspace = () => {
  return (
    <div className="col-9 ml-col-3 pt3 pl3 border-box bg-light-grey">
      <div className="vh100">
        <section className="border-box border-bottom pb3">
          <h1 className="mb3 h4 center">Campus Life Weekly Email Event Blurb (least descriptive text)</h1>
          <div className="container">
            <div className="flex justify-content-center">
              <div className="clw clw-short">
                <div className="bg-white">
                  <div>
                    <img src={ twelveByNine } className="img-insert"/>
                  </div>
                  <div className="p2">
                    <p className="bold m0">
                      <a href="mailto:" className="short-title">title</a>
                    </p>
                    <p className="m0">date &nbsp; &nbsp; time</p>
                    <p className="m0">location</p>
                    <p>
                      <a href="mailto:" className="short-contact">contactName</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-box clearfix mt3">
          <h1 className="mb3 h4 center">Campus Life Weekly Email Story or Event Blurb (most descriptive text) </h1>
          <div className="container">
            <div className="flex justify-content-center">
              <div className="clw-long-wrapper flex flex-center justify-content-center">
                <div className="clw clw-long">
                  <div className="flex flex-center h-100per bg-offwhite">
                    <div className="col-6 px2">
                      <img src={ twelveByNine } className="img-insert clw-long-image"/>
                    </div>
                    <div className="col-6 px2">
                      <p className="long-title bold m0">title</p>
                      <p className="long-date m0 bold">date &nbsp; &nbsp; time</p>
                      <p className="long-location bold">location</p>
                      <p>longDesc</p>
                      <a href="mailto:" className="short-contact">contactName</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ClwWorkspace;

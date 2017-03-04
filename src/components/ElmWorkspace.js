import React, { Component } from 'react';
import '../css/basscss@7.1.1.min.css'
import '../css/hot.css'


class ElmWorkspace extends Component {
  render() {
    return (
      <div className="col-9 ml-col-3 pt3 pl3 border-box bg-light-grey">
        <section className="vh100 border-box border-bottom">
          <h1 className="mb3 h4 center">Elm Home Page Feature</h1>
          <div className="container">
            <div className="flex justify-content-center">
              <div className="col-4 px2" style="max-width: 350px;">
                <div className="bg-white rounded">
                  <div>
                    <img src="images/1200x900.png" className="rounded-top img-insert" style="max-width: 100%;"/>
                  </div>
                  <div className="p2">
                    <p className="h3">{{ "{{ title "}} }}</p>
                    <p>{{ "{{ shortDesc "}} }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="vh100 border-box border-bottom pb3">
          <h1 className="mb3 h4 center">Elm Blog Post</h1>
          <div className="container">
            <div className="p3">
              <div className="bg-white rounded">
                <div>
                  <img src="images/1200x900.png" className="rounded-top img-insert"/>
                </div>
                <div className="p2">
                  <p className="h3">{{ "{{ title "}} }}</p>
                  <p>{{ "{{ longDesc "}} }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="vh100 border-box border-bottom pb3">
          <h1 className="mb3 h4 center">Elm Weekly Email</h1>
          <div className="container bg-white">
            <div className="p3 mx-auto" style="max-width: 700px;box-sizing: content-box;">
              <p className="h3 p1 fw200 white bg-silver-blue caps">Health Sciences &amp; Human Services Library</p>
              <div className="flex">
                <div className="col-6 pr1">
                  <p className="bold mb0">{{ "{{ title "}} }}</p>
                  <p className="bold mb0">{{ "{{ date "}} }}</p>
                  <p className="bold mb0">{{ "{{ time "}} }}</p>
                  <p className="bold">{{ "{{ location "}} }}</p>
                  <p>{{ "{{ shortDesc "}} }}</p>
                </div>
                <div className="col-6">
                  <img src="images/1200x900.png" style="max-width: 100%;" alt="" className="img-insert"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="vh100 border-box">
          <h1 className="mb3 h4 center">Elm Calendar</h1>
          <div className="container">
            <div className="p3">
              <p className="h3 green caps">Health Sciences &amp; Human Services Library</p>
              <p className="h2 border-bottom">{{ "{{ title "}} }}</p>
              <p className="bold mb0">{{ "{{ date "}} }}</p>
              <p className="bold mb0">{{ "{{ time "}} }}</p>
              <p className="bold mb0">{{ "{{ location "}} }}</p>
              <div className="flex">
                <div className="col-5 mt2">
                  <img src="images/1200x900.png" alt="" className="img-insert" style="max-width: 375px;"/>
                </div>
                <div className="col-7 p2">
                  <p>{{ "{{ longDesc "}} }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ElmWorkspace;

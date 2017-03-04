import React, { Component } from 'react';
import '../css/basscss@7.1.1.min.css'
import '../css/hot.css'


class ElmNav extends Component {
  render() {
    return (
      <section className="fixed top-0 bottom-0 left-0 overflow-auto col-3 p2 bg-purpleBrown">
        <div className="clearfix white">
          <a href="index.html" className="white text-decoration-none">⬅ Back</a>
          <h1 className="h3">Elm Preview Mode</h1>
          <p className="grey">Enter your content below to preview what it will look like throughout the Elm.</p>
        </div>
        <div className="clearfix grey">
          <form action="">
            <label for="title">Title</label>
            <input v-model="title" name="title" className="block col-12 mb1 field" type="text"/>
            <label for="shortDesc">Short Description</label>
            <input v-model="shortDesc" name="shortDesc" className="block col-12 mb1 field" type="text"/>
            <label for="longDesc">Long Description</label>
            <textarea v-model="longDesc" ea name="longDesc" className="block col-12 mb1 field" rows="3" cols="80"></textarea>
            <label for="date">Date</label>
            <input v-model="date" name="date" className="block col-12 mb1 field" type="text"/>
            <label for="time">Time</label>
            <input v-model="time" name="time" className="block col-12 mb1 field" type="text"/>
            <label for="location">Location</label>
            <input v-model="location" name="location" className="block col-12 mb1 field" type="text"/>
            <label for="url">URL</label>
            <input v-model="url" name="url" className="block col-12 mb1 field" type="url"/>
            <label for="image">Select an Image</label>
            <div className="border py1 pl-third bg-white overflow-scroll">
              <input className="italic quoted" type="file" accept="image/*" name="image" onchange="previewFile()"/>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ElmNav;

import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Ifeoma Idoko Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <p className="address">
                  
                     <a href="#contact" className="button"><i className="fa fa-envelope"></i> Contact me</a>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i> My Resume</a>
                  
					   </p>
               </div>
               
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;

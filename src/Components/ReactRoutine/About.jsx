

import React from 'react';
import './About.css'

let  About = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">About Our Zoo</h1>
      <p>
        Welcome to <strong>Wild Haven Zoo</strong>, a sanctuary where nature thrives, and every visit becomes an unforgettable journey into the animal kingdom. 
        Established in <strong>1975</strong>, our zoo has been dedicated to the preservation, education, and celebration of wildlife. 
        Situated in the heart of the city, Wild Haven Zoo spans over <strong>100 acres</strong> of lush greenery and carefully designed habitats that mimic the natural environments of our beloved animal residents.
      </p>

      <h2 className="about-subheader">Our Mission</h2>
      <p>
        At Wild Haven Zoo, our mission is to inspire a deeper connection between people and wildlife. We strive to:
        <ul>
          <li>Promote conservation efforts for endangered species.</li>
          <li>Provide educational programs to raise awareness about biodiversity.</li>
          <li>Offer a safe haven for animals that need rescue and care.</li>
        </ul>
      </p>

      <h2 className="about-subheader">What Makes Us Unique</h2>
      <p>
        Our zoo is more than just a place to see animals. It is a hub of innovation and commitment:
        <ul>
          <li><strong>Immersive Habitats:</strong> Carefully designed spaces replicate the natural homes of our animals.</li>
          <li><strong>Rare Species:</strong> We house several rare and endangered animals, including snow leopards and red pandas.</li>
          <li><strong>Interactive Experiences:</strong> Enjoy our behind-the-scenes tours, feeding sessions, and animal encounters.</li>
          <li><strong>Green Initiatives:</strong> Committed to sustainability, our zoo uses eco-friendly practices, from solar power to waste recycling.</li>
        </ul>
      </p>

      <h2 className="about-subheader">A Legacy of Conservation</h2>
      <p>
        Over the years, Wild Haven Zoo has partnered with global conservation organizations to protect wildlife and their habitats. 
        Our breeding programs for endangered species have seen tremendous success, helping animals like the Bengal tiger and African elephant thrive.
      </p>

      <h2 className="about-subheader">Plan Your Visit</h2>
      <p>
        Whether you're a family, a group of friends, or a solo explorer, Wild Haven Zoo offers something for everyone:
        <ul>
          <li>Open daily from 9 AM to 6 PM.</li>
          <li>Special events and workshops throughout the year.</li>
          <li>A variety of dining options, including cafes and picnic spots.</li>
          <li>Gift shops with souvenirs that support our conservation programs.</li>
        </ul>
        Come join us for an adventure that’s wild, educational, and fun!
      </p>
    </div>
  );
};

export default About;

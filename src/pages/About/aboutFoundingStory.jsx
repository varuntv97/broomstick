import { StaticImage } from "gatsby-plugin-image";
import React from "react";
export default function AboutFoundingStory() {
  return (
    <div className="about_founding_story_section">
      <div className="about_founding_story_container">
        <h3>Our Founding Story</h3>
        <div className="about_founding_story_item">
          <h4 className="about_founding_story_item__title">
            The Revelation Moment
          </h4>
          <p className="about_founding_story_item__text">
            During their brainstorming session for their final year project, the
            founders were interrupted by Mehul’s sister. She had an interesting
            story to share about her recent conversation with the maid. The maid
            had requested some time off and had expressed how physically
            demanding her job was, yet she had no choice but to continue working
            to support herself and her children. This account made the founders
            realize that the cleaning sector lacked essential technological
            advancements and ergonomic solutions to better support cleaning and
            the cleaner population.
          </p>
          <div className="about_founding_story_item__image">
            <StaticImage
              src="../../images/about/image-42.png"
              alt=""
            ></StaticImage>
          </div>
        </div>
        <div className="about_founding_story_item">
          <h4 className="about_founding_story_item__title">
            The Development Phase
          </h4>
          <p className="about_founding_story_item__text">
            Motivated by this revelation, our co-founders Mehul and Yogindra KG
            set out to revolutionize the industry. They developed 'broomstick',
            as their final-year engineering project, aiming to improve the lives
            of cleaners. However, COVID-19 Wave 2 hit, adding unforeseen
            challenges to their journey. Undeterred, they participated in the
            TiEPitchFest, impressing mentors and investors with their passion
            and innovation. Recognized among 48 start-ups, we secured a place in
            an incubation centre in Mysuru for seven months, supported by
            TiEPitchFest and Ktech.
          </p>
          <div className="about_founding_story_item__image">
            <StaticImage
              src="../../images/about/image-43.png"
              alt=""
            ></StaticImage>
          </div>
        </div>
        <div className="about_founding_story_item">
          <h4 className="about_founding_story_item__title">
            The Balancing Act
          </h4>
          <p className="about_founding_story_item__text">
            To sustain our product development expenses, Mehul took up a job at
            The Math Company while Yogindra shouldered additional
            responsibilities for product development. Simultaneously, we
            prepared ourselves for the Elevate program, knowing that funding was
            crucial for us to pursue our vision full-time. Despite the demanding
            schedule, they emerged victorious and secured funding through the
            Elevate program.
          </p>
          <div className="about_founding_story_item__image">
            <StaticImage
              src="../../images/about/image-44.png"
              alt=""
            ></StaticImage>
          </div>
        </div>
        <div className="about_founding_story_item">
          <h4 className="about_founding_story_item__title">broomstick Today</h4>
          <p className="about_founding_story_item__text">
            Today, broomstick finds itself incubated at NIE, occupying the
            office space we once aspired to have. However, our journey is far
            from over. With a commitment to transforming the technology
            available in the home cleaning space, we envision to merge sweeping
            and mopping into a singular seamless task, eliminating the
            distinction between the two
          </p>
          <div className="about_founding_story_item__image">
            <StaticImage
              src="../../images/about/image-45.png"
              alt=""
            ></StaticImage>
          </div>
        </div>
      </div>
    </div>
  );
}

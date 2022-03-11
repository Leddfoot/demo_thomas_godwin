import React from "react";
// import StartupModal from "./UI/Modals/StartupModal";
import TempNav from "./TempNav";
import Toolkit from "./Toolkit";
import PortfolioSection from "./PortfolioSection";


import "./MainEntry.css";

function MainEntry({ modalIsVisible }) {
  return (
    <>
      <div className="main-entry__wrapper">
        <TempNav />
        <div className="intro-section">
          <h1 className="intro-header">Hi. I'm Thomas Godwin.</h1>
          <h2 className="intro-subheader">Aspiring Junior Frontend Developer</h2>
          <p>While working on a Universal Design of IT Masters Degree at what is now OlsoMet, I created a working prototype web application to test and support my research. I'm not gonna lie, it was terrible, but usable for the research. I was instantly attracted to Frontend developing, because it dovetailed nicely with what I had learned. To keep it succint we can just call it an incredibly deep dive into gathering user requirements. But not for just any users, specifically users that had accessibility challenges.</p>
          <p>Armed with my new skills and terrible demo code I headed out hoping to find a job where I could use my accessibility expertise and my noob level frontend skills. I learned a lot, like that the marketplace didn't really support job positions where one could leverage solely their accessibility skills. And I got a lot of feedback about my frontend skills, but to summarize, what I learned was that I would have to "up my skills" if ever wanted to develop frontend applications. And I failed at the job search. Not the first time I had failed at something in my life, and probably not the last either.</p>
          <p>A few years before, I had  given up my 49.5% ownership in small consulting company in the United States and relocated to Norway, where my wife was from. I severely underestimated how super difficult assimilation into society would be. Years of living in one of the most expensive countries in the world with no income had depleted all my savings. I got really lucky and found a restaurant and the a warehouse job, when I literally had enough money to survive one more month. I worked on building my frontend skills while working these jobs, but honestly it was going slow practicing programming while working full time at a super stressful warehouse.</p>
          <p>Because of the extremely demanding work conditions at the warehouse, one day i suddenly destroyed my elbow. I have had 3 surgeries since where they have tried to repair it. It has been a long, painful process. The silver lining though is that I got to begin focusing learning frontend developing full time. Check out my portfolio and skills self assessment below. </p>
          
        </div>

        <div className="temp-fake-section2"></div>
        <div className="temp-fake-section"></div>
        <PortfolioSection />
        <Toolkit />
      </div>
    </>
  );
}

export default MainEntry;

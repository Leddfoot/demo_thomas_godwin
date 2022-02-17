import React from "react";
import Footer from "../components/UI/Footer/Footer"

import "./Survey.css";

function Survey() {
  return (
    <>
      <header id="header" className="survey__header">
        <div className="img-container"></div>
      </header>
      <div className="survey__wrapper">
        <div className="main-content__wrapper">
          <div className="form-header-section">
            <h1 id="title">Beer Preference Survey</h1>
            <h2>Your opinions matter</h2>
            <p id="description">
              This is a quick and painless poll about your beer drinking
              preferences. Just register your name and email below, and we will
              contact you, but only if you wish.
            </p>
          </div>

          <form id="survey-form" onSubmit={() => console.log("dummy")}>
            <div className="personal-info">
              <div className="form-section">
                <label id="name-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="text-input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-section">
                <label id="email-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="text-input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-section">
                <label id="number-label" htmlFor="age">
                  Age
                </label>
                <input
                  className="text-input"
                  type="number"
                  name="age"
                  id="number"
                  placeholder="Age"
                  increment="1"
                  min="1"
                  max="120"
                  required
                />
              </div>
            </div>

            <div className="flavor-preferences">
              <h2>Enter your preferences below:</h2>
              <div className="block-container">
                <input
                  type="radio"
                  name="pilsner-or-lager"
                  defaultValue="pilsner"
                />
                <label htmlFor="pilsner-or-lager">Pilsner</label>
              </div>
              <div className="block-container--pilsner-preference">
                <input
                  type="radio"
                  name="pilsner-or-lager"
                  defaultValue="lager"
                />
                <label htmlFor="pilsner-or-lager">Lager</label>
              </div>

              <div className="block-container--hops-preference">
                <div className="block-container">
                  <input
                    type="radio"
                    name="hops-preference"
                    defaultValue="prefer-strong-hops"
                  />
                  <label htmlFor="hops-preference">
                    I like a lot of hops flavor.
                  </label>
                </div>
                <div className="block-container">
                  <input
                    type="radio"
                    name="hops-preference"
                    defaultValue="lager"
                  />
                  <label htmlFor="hops-preference">
                    I like a little hops flavor.
                  </label>
                </div>
                <div className="block-container">
                  <input
                    type="radio"
                    name="hops-preference"
                    defaultValue="lager"
                  />
                  <label htmlFor="hops-preference">
                    I want the least possible amount of hops.
                  </label>
                </div>
              </div>

              <div className="block-container--flavor-preference">
                <div className="block-container">
                  <input
                    type="radio"
                    name="flavor-preference"
                    defaultValue="lager"
                  />
                  <label htmlFor="flavor-preference">
                    I like as little overall flavor in my beer as possible. I
                    like it to go down smooth so I can drink a few.
                  </label>
                </div>
                <div className="block-container">
                  <input
                    type="radio"
                    name="flavor-preference"
                    defaultValue="lager"
                  />
                  <label htmlFor="flavor-preference">
                    I like my beer thick and full of flavor. Guinness Stout is
                    the best thing ever made!
                  </label>
                </div>
              </div>
            </div>

            <div className="block-container--frequency-preference" id="dropdown-section">
              <label id="dropdown-text">
                How often do you like to enjoy a cold beer?
              </label>
              <select id="dropdown">
                <option disabled="">Choose one</option>
                <option defaultValue="1-2">1 or 2 beers per week</option>
                <option defaultValue="3-4">3 or 4 beers per week</option>
                <option defaultValue="5-10">5-10 beers per week</option>
                <option defaultValue="too-much">
                  I have a platinum membership at Alcoholics Anonymous
                </option>
              </select>
            </div>

            <div className="form-section__consent">
              <div className="block-container">
                <input type="checkbox" defaultValue="spam-me" />
                <label htmlFor="spam-me">
                  Please fill my inbox with junkmail and pictures of puppies
                  running around your brewery.
                </label>
              </div>
              <div className="block-container">
                <input type="checkbox" defaultValue="contact-me" />
                <label htmlFor="contact-me">
                  I want a brewmaster to contact me about making a custom beer
                  for me.
                </label>
              </div>
              <div className="block-container">
                <input type="checkbox" defaultValue="wants-tour" />
                <label htmlFor="wants-tour">
                  I want free tickets to tour your brewery.
                </label>
              </div>
            </div>

            <div className="our-questions">
              <p>
                Is there anything you would like to tell us?</p><p> Have your tried our
                beer and think that it's the greatest thing since sliced bread?</p><p>
                Did you have a bad experience with our beer (like: drank too
                many because they went down so smoothly)?</p><p> Do you have any
                suggestions or anything that you would like us to know?
              </p>
            </div>
            <div className="form-section">
              <textarea></textarea>
            </div>
            <div className="submit__button--wrapper">
              <button id="submit">Fire Away</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Survey;

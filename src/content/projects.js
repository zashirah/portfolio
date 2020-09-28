import React from "react"

import image from "../images/gatsby-astronaut.png"
import CityScore from "../images/CityScoreScreenshot.png"
import clone2048 from "../images/2048-clone.png"
import eplSurvivor from "../images/premier-league-survivor.png"
import barcShelter from "../images/barc-shelter.png"
import portfolio from "../images/portfolio.png"

export const ProjectInfo = [
  {
    title: `Premier League Survivor`,
    image: eplSurvivor,
    description: (
      <>
        <p>
          Premier League Survivor is a full stack Ruby on Rails with React front
          end project and is styled using Styled Components.
        </p>
        {/* <p>
          A user can create an account then join and/or create leagues. Once
          within a league, users compete with other members by picking a club to
          win each week. You can only pick each team twice in a single season.
          There are 20 teams. And 38 matchweeks. So only 2 of the possible 40
          selections won't be made in a single season.If the pick wins their
          match, the user gets 3 points; 1 point with a draw and 0 with a loss.
        </p> */}
      </>
    ),
    skills: ["reactjs", "ruby", "rails", "postgresql"],
    link: "https://barc-shelter.netlify.app/",
    githubLink: "https://github.com/zashirah/Barc-Shelter",
  },
  {
    title: `2048 (clone)`,
    image: clone2048,
    description: (
      <>
        <p>
          2048 clone is a clone of a classic iPhone game called 2048 built using
          create-react-app and tailwindCSS for styliing
        </p>
        {/* <p>
          2048 allows a user to play 2048 and save there score to the
          leaderboard with a username. If the score breaks the top 10, it will
          appear on the leaderboard.
        </p>
        <p>
          You play the game by combining the numbered squares together by moving
          all the tiles up, down, left, or right. If you swipe up, all squares
          will go up. If two numbers are the same and make contact in the swipe
          direction, those numbers combine. (More details in the app)
        </p> */}
      </>
    ),
    skills: ["reactjs"],
    link: "https://2048-clone-zs.netlify.app/",
    githubLink: "https://github.com/zashirah/2048-clone",
  },
  {
    title: `CityScore`,
    image: CityScore,
    description: (
      <>
        <p>
          City Score is a single page web app built with vanilla javascript,
          css, and html.
        </p>
        {/* <p>
          The user can select a continent then a city from that continent to
          display information related to the cityies quality of life scores
          (provided by the Teleport api). On mobile, a user can only look at one
          city at a time, but on desktop and tablet, they can look at 2 cities
          side by side.
        </p> */}
      </>
    ),
    skills: ["javascript", "html", "css"],
    link: "https://pages.git.generalassemb.ly/zshirah/CityScore/",
    githubLink: "https://git.generalassemb.ly/zshirah/CityScore",
  },
  {
    title: `BARC Shelter`,
    image: barcShelter,
    description: (
      <>
        <p>
          BARC Shelter is a full stack express, node, react, and mongoDB team
          project. Our team is made up of 4 Software Engineers and 3 UX
          designers. We worked together virtually over Zoom, using Github to
          centralize our work, and completed the project over a week. (This has
          not been designed for mobile)
        </p>
        {/* <p>
          The UX teams designs were intended to make the user experience better
          when search for pets to adopt and applying for pets. We followed there
          designs and added a form to allow users to apply online instead of
          having to print off and form and call to make an appointment. (This has not been designed for mobile)
        </p> */}
      </>
    ),
    skills: ["mongodb", "express", "reactjs", "nodejs"],
    link: "https://barc-shelter.netlify.app/",
    githubLink: "https://github.com/zashirah/Barc-Shelter",
  },
  {
    title: `Portfolio`,
    image: portfolio,
    description: (
      <>
        <p>
          This portfolio is a front end app built using Gatsby and styled with Styled Components.
        </p>
      </>
    ),
    skills: ["gatsbyjs", "reactjs"],
    link: "https://barc-shelter.netlify.app/",
    githubLink: "https://github.com/zashirah/Barc-Shelter",
  },
]

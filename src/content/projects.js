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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.Odit voluptatum
        magni delectus maxime eveniet dolorum voluptatem odio illo error.Dolorum
        suscipit beatae, nostrum doloribus quaerat consectetur ut facere sint
        doloremque.
      </>
    ),
    skills: ["reactjs", "ruby", "rails"],
    link: "https://barc-shelter.netlify.app/",
    githubLink: "https://github.com/zashirah/Barc-Shelter",
  },
  {
    title: `2048 (clone)`,
    image: clone2048,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.Odit voluptatum
        magni delectus maxime eveniet dolorum voluptatem odio illo error.Dolorum
        suscipit beatae, nostrum doloribus quaerat consectetur ut facere sint
        doloremque.
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
        City Score is a single page web app built with vanilla javascript, css,
        and html. The user can select a continent then a city from that
        continent to display information related to the cityies quality of life
        scores (provided by the Teleport api). On mobile, a user can only look
        at one city at a time, but on desktop and tablet, they can look at 2
        cities side by side.
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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.Odit voluptatum
        magni delectus maxime eveniet dolorum voluptatem odio illo error.Dolorum
        suscipit beatae, nostrum doloribus quaerat consectetur ut facere sint
        doloremque.
      </>
    ),
    skills: ["reactjs", "mongodb"],
    link: "https://barc-shelter.netlify.app/",
    githubLink: "https://github.com/zashirah/Barc-Shelter",
  },
  {
    title: `Portfolio`,
    image: portfolio,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.Odit voluptatum
        magni delectus maxime eveniet dolorum voluptatem odio illo error.Dolorum
        suscipit beatae, nostrum doloribus quaerat consectetur ut facere sint
        doloremque.
      </>
    ),
    skills: ["gatsbyjs", "reactjs"],
    link: "https://barc-shelter.netlify.app/",
    githubLink: "https://github.com/zashirah/Barc-Shelter",
  },
]
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hi 👋, <br /> I'm Ayush Rawal.
        </BigTitle>
        <Subtitle>Software Developer | Community Organizer | Entrepreneur</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects & Achievements</Title>
        <Subtitle>Find all my projects and Certifications on <a href="https://github.com/Ayush-Rawal">GitHub</a> and <a href="https://linkedin.com/in/Ayush-Rawal">LinkedIn</a></Subtitle>
        <ProjectsWrapper>
          <ProjectCard
            title="Reactor"
            // link="https://www.github.com/Ayush"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            A drag-and-drop cross-platform (Android and iOS) mobile app builder. Allows clients to quickly build mobile apps by dragging modules. Built using React.js, Node.js and React-Native.
          </ProjectCard>
          <ProjectCard
            title="IIITK Web"
            // link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            A highly secure website built for IIIT Kota's official website building competition, built on Angular 5 and Node.js. It scored a very high security rating - 105/135 (A+) on Mozilla Observatory.
          </ProjectCard>
          <ProjectCard
            title="Blitzschlag"
            // link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Website for Blitzschlag - the annual cultural fest of NIT Jaipur and a data analytics portal for the same. Reduced costs by 77.8% by using cloud infrastructure and services.
          </ProjectCard>
          <ProjectCard
            title="Global Azure Bootcamp"
            // link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Organized Global Azure Bootcamp under JaipurJS, got sponsorhips and speakers, managed logistics, marketing, and budget.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Ayush Rawal" />
          <AboutSub>
          I build Awesome Web and Mobile Apps and Organize JaipurJS - Jaipur's JavaScript Community
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I build applications with JavaScript - progressive web apps, single page web applications, e-commerce web sites, APIs, android and iOS apps, and experiment with shiny new things like Blockchain and AI. I am very passionate about JavaScript so I started <a href="bit.ly/JaipurJS" >JaipurJS - Jaipur's JavaScript community</a>, we organize regular meetups, workshops and bootcamps. <br/><br/> I also like to do UX, UI, and interaction design and organize events as part of my role as JaipurJS organizer and a AngelHack Ambassador. I'm also an ACM member.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
          Say Hi on  <a href="mailto:ayushrawal@acm.org">Email</a>, connect with me on {' '}
            <a href="https://linkedin.com/in/Ayush-Rawal">LinkedIn</a> or follow me on {' '}
            <a href="https://twitter.com/AyushAco/">Twitter</a>
          </ContactText>
        </Inner>
        <Footer>
          Made with Love by Ayush Rawal.
          {/* <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. Made by{' '} */}
          {/* <a href="https://www.lekoarts.de">LekoArts</a>. */}
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index

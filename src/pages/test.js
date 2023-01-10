import * as React from "react"

import "../styles/style.sass"

// import Carousel from '@brainhubeu/react-carousel'
// import '@brainhubeu/react-carousel/lib/style.css'

import Layout from '../components/layout.js'
import Project from '../components/prooject.js'
import Logo from "../images/svgs/tl-logo.inline.svg"

// import rising1 from '../images/work/rising/rising-logo.png'
// import rising2 from '../images/work/rising/rising-desktop.png'
// import rising3 from '../images/work/rising/rising-iphone.png'

// import ud1 from '../images/work/ud/ud-monitor.png'
// import ud2 from '../images/work/ud/ud-phone.png'

// import dad1 from '../images/work/dad/bigDad_transparent.png'
// import dad2 from '../images/work/dad/bigDad_bi_transparent.png'
// import dad3 from '../images/work/dad/sis-09-2022.png'

// import odd1 from '../images/work/odd/oddDuck_logo.png'
// import odd3 from '../images/work/odd/odd.png'
// import odd4 from '../images/work/odd/odd_dice1.mp4'

// import bkw1 from '../images/work/bkw/zrivera.png'
// import bkw2 from '../images/work/bkw/mklaw.png'
// import bkw3 from '../images/work/bkw/bkw_bestLawyers_insta_2023.png'

const TestPage = () => {

  return (
    <Layout pageName="home">
      <section id="hero">
        <div className="bg"></div>
        <div className="lightning flashit"></div>
        <div className="filter">
          <h1>Tower & Lightning</h1>
          <p>Less stress - more solutions.</p>
        </div>
      </section>

      <section class="section" id="projects">
        <h2>projects</h2>

        <div className="section-content">
          <Project title="Branding, Copywriting, & Website" client="Rising Spirit Fitness" year="2023">
            <h4>Experience the site <a href="https://risingspirit.fit/" target="blank" rel="noreferrer">here.</a></h4>
             {/*<Carousel plugins={['arrows', 'infinite']}>
              <div className="slide">
                <img src={rising1} alt="rising spirit logo" />
              </div>
              <div className="slide">
                <img src={rising2} alt="The rising spirit website home on desktop." />
              </div>
              <div className="slide">
                <img className="phone" src={rising3} alt="iThe rising spirit website home on mobile." />
              </div>
            </Carousel>*/}
          </Project>

          <Project title="Website & UX" client="The Digital Underground" year="2022">
             <h4>Experience the site <a href="https://theunderground.digital/" target="blank" rel="noreferrer">here.</a></h4>
             {/*<Carousel plugins={['arrows', 'infinite']}>
              <div className="slide">
                <img src={ud1} alt="The Underground Digital website home on desktop." />
              </div>
              <div className="slide">
                <img className="phone" src={ud2} alt="iThe Underground Digital website home on mobile." />
              </div>
            </Carousel>*/}
          </Project>

          <Project title="Email Signatures, Print Ads, & Social Media" client="BKW Family" year="2022">
            {/*<h4></h4>*/}
            {/*<Carousel plugins={['arrows', 'infinite']}>
              <div className="slide">
                <img src={bkw1} alt="email signature" />
              </div>
              <div className="slide">
                <img src={bkw2} alt="email signature variant" />
              </div>
              <div className="slide">
                <img src={bkw3} alt="instagram post sample" />
              </div>
            </Carousel>*/}
          </Project>

          <Project title="Logo Design & Branding" client="Odd Duck Dice" year="2021">
            <h4>May the odds be ever in your favor.</h4>
            {/*<Carousel plugins={['arrows', 'infinite']}>
              <div className="slide">
                <img src={odd1} alt="odd duck logo" />
              </div>
              <div className="slide">
                <img src={odd3} alt="odd duck dice" />
              </div>
              <div className="slide">
                <video muted autoPlay loop>
                  <source src={odd4} type="video/mp4" />
                </video>
              </div>
            </Carousel>*/}
          </Project>

          <Project title="Logo Design" client="Big Dad Industries" year="2020">
            <h4>This Twitch streamer needed an iconic logo for his growing presence.</h4>
            {/*<Carousel plugins={['arrows', 'infinite']}>
              <div className="slide">
                <img src={dad1} alt="big dad logo" />
              </div>
              <div className="slide">
                <img src={dad2} alt="big dad pride logo" />
                <p>Pride Logo Variant</p>
              </div>
              <div className="slide">
                <img src={dad3} className="sis" alt="steeped in segal cover" />
                <p>Cover art for a Big Dad podcast production.</p>
              </div>
            </Carousel>*/}
          </Project>
        </div>
      </section>

      <section class="section" id="about">
        <h2>howdy</h2>
        <div className="about-content">
          <h3>I'm Zeno - the lightning to the tower.
            <br /><br />
            <span>I'm a multidisciplinary dude who loves shaking things up and getting stuff done. I am fascinated by mysteries and the unknown. When I'm not developing, you can most likely find me nose-deep in a great book, forging peace between my cats and dogs, or whipping up a delicious meal. </span>
            </h3>
          <Logo id="logo" />
        </div> 
      </section>

      <section class="section" id="contact">
        <h2>contact</h2>
        <div className="section-content">
          <h4>Want to hire this free lance? Send an <a target="_blank" rel="noreferrer" href="mailto:zzzeenyo@gmail.com">electronic mail.</a></h4>
        </div>
      </section>
    </Layout>
  )
}

export default TestPage

export const Head = () => <title>Tower & Lightning | Less stress - more solutions.</title>

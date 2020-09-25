import React from 'react'
import Banner from "../components/Banner"
import spa1 from "../images/spa-1.jpeg"
import spa2 from "../images/spa-2.jpeg";
import spa3 from "../images/spa-3.jpeg";
import spa4 from "../images/spa-4.jpg"


export default function Spa() {
    return (
        <>
         <div className="spa-banner">
            <Banner title="spa & wellnes" > </Banner>
          </div>

          {/* ----------------- */}

            {/* Section One */}
            <section className="holder">
               <div className="imgBx">
                 <img src={spa1} />
               </div>

              <div className="content">
                  <h3> Spa & Wellnes</h3>
                  <p> Spa & Wellness at Premium Beach offers a unique feel. A stress -free oasis for rest and relaxation that invites you to step into the world where time honoured traditions and spa rituals bring you an authentic experience of total well being. </p>
                  <br />
                  <p> Inspired by the fusion of international spa concepts, Premium Spa & Wellness offers a wide range of exotic, holistic healing treatments and modern therapies where east meets west. The intention is geared towards maintaining and regaining emotional, physical, mental and spiritual balance.</p>
              </div>
            </section>

           {/* Section Two */}
          <section className="holder">
              <div className="content">
                    <h3> Explore...</h3>
                    <p> Take the time to explore our SPA.</p>
                    <p>Our treatments, programs and packages are carefully selected for your health and well being. Indulge in a PREMIUM experience for your PRIME senses.</p>
                    <p>You deserve it!</p>
              </div>

              <div className="imgBx">
                <img src={spa2} />
              </div>
          </section>

         {/* Section Three */}
          <section className="holder">
              <div className="imgBx">
                <img src={spa3} />
              </div>

              <div className="content">
                  <h3> Skincare</h3>
                  <p> Spa & Wellness at Premium Beach offers a unique feel. A stress -free oasis for rest and relaxation that invites you to step into the world where time honoured traditions and spa rituals bring you an authentic experience of total well being. </p>
                  <br />
                  <p> Inspired by the fusion of international spa concepts, Premium Spa & Wellness offers a wide range of exotic, holistic healing treatments and modern therapies where east meets west. The intention is geared towards maintaining and regaining emotional, physical, mental and spiritual balance.</p>
              </div>
          </section>

         {/* Section Four */}
          <section className="holder">
              <div className="content">
                  <h3> Selected Products</h3>
                    <p> Take the time to explore our SPA.</p>
                    <p>Our treatments, programs and packages are carefully selected for your health and well being. Indulge in a PREMIUM experience for your PRIME senses.</p>
                    <p>You deserve it!</p>
              </div>

              <div className="imgBx">
                <img src={spa4} />
              </div>
          </section>
        
        </>
    )
}

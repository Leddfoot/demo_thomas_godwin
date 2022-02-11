import React from 'react'

function AboutUs() {
  return (
    <section id="who-we-are">
    <h1>Who we are</h1>
    <p>Viking Pirate Brewing is a small outfit with very few employees, located on the outskirts of Oslo. We
        currently have a relatively small brewing capacity of 50 liters brewed per day. But we don't brew that
        much because our fermenting capability is much less, approximately 50 liters per 14 days. The batches
        also require another 14 days of conditioning. Our fermenting capability is limited because we ferment
        using an old refrigerator, which holds 2 large 25 liter fermenters. </p>
    <p>So each batch requires around a month before completion, but the taste is well worth the wait. We can
        ferment much more when we produce ales, around 300 liters per 17 days, but we rarely produce ales.</p>
    <p>Our staff consists of 3 employees, and 4 external consultants. All consultants work on a voluntary basis,
        because they get to constantly try out the product.</p>
    <h2>Our Employees</h2>
    <section id="picture-container">
        <section className="picture-box">
            <img className="profile" id="me" src="https://leddfoot.github.io/imageServer/me.jpg"
                alt="just an ugly guy with a terrible shirt" />
            <p className="name">Thomas</p>
            <p className="name">"Daddy"</p>
            <p className="name">Godwin</p>
            <p className="job-title">CEO, CIO, CFO, and Head Brewmaster</p>

        </section>
        <section className="picture-box">
            <img className="profile" id="skywalker" src="https://leddfoot.github.io/imageServer/skywalker.jpg"
                alt="my oldest son joking around. He grabbed my beer when I was taking a p i cture, just to be funny" />
            <p className="name">Lucas</p>
            <p className="name">"Skywalker"</p>
            <p className="name">Godwin</p>
            <p className="job-title">Bottling Manager</p>
            <p className="tiny">NOTE: My son does not drink alcohol, nor is he encouraged to or allowed to. He just
                grabbed mine one time because he thought it would make a funny picture!</p>
        </section>
        <section className="picture-box">
            <img className="profile" id="bigE" src="https://leddfoot.github.io/imageServer/bigE.jpg"
                alt="my youngest son testing out a clown wig and some shades" />
            <p className="name">Ethan</p>
            <p className="name">"Big E"</p>
            <p className="name">Godwin</p>
            <p className="job-title">Capping Manager</p>
        </section>
    </section>

</section>
  )
}

export default AboutUs
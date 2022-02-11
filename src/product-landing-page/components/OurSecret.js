import React from 'react'

function OurSecret() {
  return (
    <section id="our-fermenting-secrets">
    <h1>Fermenting Secrets</h1>
    <p>We have only two secrets to fermenting good beer. The first is that we scientifically deduce the precise
        amount of yeast cells needed, for the fermenting and conditiong phases to produce the optimum smooth
        beer. Many microbrewers are so scared that their beer will not ferment, they use 2 to 3 times the amount
        of yeast they need, which leads to a potpourri of possible off-flavors. We don't, we can count cells.
    </p>

    <p>Our other secret, which is how to speed up the fermenting process for lagers is, well, not a secret, and
        it's not our secret either. It's all over the internet, and we didn't create it. But it saves us money
        on our website because we don't have to produce our own video. Here is one example of a good technique: </p>
    <div className="video-container">
        <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/YxpswhNvQIY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>

</section>
  )
}

export default OurSecret
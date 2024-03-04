import React from 'react'

const RecentEvents: React.FC = () => {

    return (
        <section className="page-section bg-light" id="steampunk" >
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Recent Events</h2>
            </div>

          
          <div className="row">
            <div className="col">
                <h3 className="text-center">Our First Nap Night! (Click below to read more)</h3>
                <a href="https://www.ketv.com/article/omaha-nonprofit-hosts-nap-night/46974075"><img src='./img/napnight.png'  width="100%" /></a>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col">
                <h3 className="text-center">Thank you for coming out and supporting us at our Juneteenth Steam Punk Tea Party!</h3>
                <iframe width="100%" height="700" src="https://www.youtube.com/embed/_dofkJ90mxc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
           
        </div>
    </section>
    )
}

export default RecentEvents

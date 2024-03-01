import React from 'react'

const Events: React.FC = () => {

    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Events</h2>
                </div>

                <div data-tockify-component="calendar" data-tockify-calendar="the.house.events"></div>
               
            </div>
        </section>
    )
}

export default Events

import React from 'react'

const Steampunk: React.FC = () => {

    return (
        <section className="page-section bg-light" id="steampunk">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Steampunk Teaparty</h2>
            </div>

            <div data-tockify-component="calendar" data-tockify-calendar="the.house.events"></div>
           
        </div>
    </section>
    )
}

export default Steampunk

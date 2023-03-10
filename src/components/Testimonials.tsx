import React from 'react'
import profile from '../images/profile.jpg'

const Testimonials: React.FC = () => {
    const title = 'Regional Vice President, National Sales and Account Management'

    return (
        <div id="testimonials" className="container">
            <div className="row ">
                <div className="col-sm-12">
                    <h2 className="promo-banner-title-prop text-center" style={{ marginTop: '40px' }}>
                        Testimonials
                    </h2>
                    <p className="text-center">Feedback from a recent conference</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group text-center">
                        <li className="list-group-item">&quot;I liked Courtney and Trish&apos;s positive and polished delivery.&quot;</li>
                        <li className="list-group-item">&quot;Very enlightening, engaging and informative!&quot;</li>
                        <li className="list-group-item">
                        &quot;Incredibly insightful and educational. I am working to pivot into D&I as a career, and this seminar just fanned the flames of my
                            passion even higher. I learned so many practical and innovative ways to be impactful in ways to not only widen leaderships&apos; lenses
                            regarding D&I, but also the positive effect it has on the business. Thank you so much for today. I feel recharged.&quot;
                        </li>
                        <li className="list-group-item">
                        &quot;I have chills. That was amazing and I could feel your pride for your company in setting the example. Thank you!&quot;
                        </li>
                        <li className="list-group-item">
                        &quot;One of my favorite parts of Courtney Johnson and Trish Payne&apos;s session was hearing how they felt about Prudential&apos;s response to its
                            historical role in denying Black clients the same financial growth and investment opportunities that were offered to white people.
                            They didn&apos;t sugar coat anything but also did a great job highlighting the work being done now.&quot;
                        </li>
                        <li className="list-group-item">&quot;Great speakers with relevant information regarding targeting underserved customers.&quot;</li>
                        <li className="list-group-item">&quot;Their content was informative as they explained how they network within marginalized communities.&quot;</li>
                        <li className="list-group-item">&quot;Phenomenal.&quot;</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Testimonials

import React from 'react'
import profile from '../images/profile.jpg'

const Speaking: React.FC = () => {
    const title = 'Regional Vice President, National Sales and Account Management'

    return (
        <div id="work">
            <div className="container content-lg">
                <h2 className="text-center">Latest Presentations</h2>
                <p className="text-center">Here are some of my most recent events</p>
                <div className="row margin-b-40">
                    <div className="col-sm-6"></div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="margin-b-20">
                            <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                                <img className="img-responsive" src="img/event.jpg" alt="Latest Products Image" />
                            </div>
                        </div>
                        <h4>
                            <a href="https://lnkd.in/efc-ufC">NAAIA Florida Online Business Networking - Mixer & Meeting</a>
                        </h4>
                        <p>
                            Join us on April 27, 2021 at 6pm for a fun Networking Mixer and Meeting! We have 2 wonderful speakers that will be with us along
                            with some prizes. Register below for this great event!
                            <p>
                                {' '}
                                <a href="https://lnkd.in/efc-ufC">
                                    <strong>https://lnkd.in/efc-ufC</strong>
                                </a>
                            </p>
                            <p>#networking #networkingevent #events #meetup #conference #insurance</p>
                        </p>
                    </div>
                    <div className="col-sm-6 sm-margin-b-50">
                        <div className="margin-b-20">
                            <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                                <img className="img-responsive" src="img/queensconvene.jpg" alt="Queens Convene" />
                            </div>
                        </div>
                        <h4>
                            <a href="http://www.eventcreate.com/e/queensconvene">Queens Convene</a>
                        </h4>
                        <p>
                            Courtney Johnson is currently the Regional Vice President, National Sales & Account Management at Prudential. She has over 20 years
                            of group insurance experience, but spends her free time volunteering in the Charleston community – including serving on the Greater
                            Charleston YWCA Board as their Executive Treasurer, board of the Teacher’s Supply Closet and a member of the Charleston Links, Inc.
                            She also spends her free time investing in the communities she has lived or visited as a former military dependent of her father.
                            She owns a Property Management & Investment Company – CoJo, LLC – with ventures in SC, NC and NE. She also co -owns another property
                            investment company, Coer, LLC with ventures in TX and NE. She has begun to grow her roots here in the Charleston area by silent
                            investing in local businesses.
                        </p>
                        <p>
                            Join us on July 29, 2022 - July 31, 2022 at 5pm at the Harbour Club WestEdge in Charleston, SC!
                            <p>
                                {' '}
                                <a href="https://checkout.eventcreate.com/queensconvene/select-buy">
                                    <strong>Reserve your ticket</strong>
                                </a>
                            </p>
                            <p>#networking #networkingevent #selfcare #business #conference</p>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 sm-margin-b-50">
                        <div className="margin-b-20">
                            <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                                <iframe
                                    width="350"
                                    height="360"
                                    src="https://www.youtube.com/embed/FX7ecbYlNwE"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <h4>
                            <a href="#">Breaking Barriers: Find Your Path and Empower Your Future in Financial Services</a>
                            <span className="text-uppercase margin-l-20">Management</span>
                        </h4>
                        <p>
                            Join Prudential and FGB for a conversation on understanding career journeys, balancing personal and work life, overcoming obstacles,
                            and how Prudential&apos;s culture fosters support, growth, and continued success. This webinar will highlight key woman leaders from
                            Prudential and help educate and inspire women to consider a career in Financial Services. You&apos;ll discover how these women got to
                            their current roles, and what the future holds for them, along with frank advice on handling bias, balancing career and life, and
                            how to step outside of your comfort zone.
                        </p>
                    </div>
                    <div className="col-sm-4 sm-margin-b-50">
                        <div className="margin-b-20">
                            <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                                <img className="img-responsive" src="img/hvb.jpeg" alt="Latest Products Image" />
                            </div>
                        </div>
                        <h4>
                            <a href="#">Health Vision Board Party</a>
                            <span className="text-uppercase margin-l-20">Outreach</span>
                        </h4>
                        <p>More information coming soon</p>
                    </div>
                    <div className="col-sm-4 sm-margin-b-50">
                        <div className="margin-b-20">
                            <div className="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                                <img className="img-responsive" src="img/51828.jpeg" alt="Latest Products Image" />
                            </div>
                        </div>
                        <h4>
                            <a href="#">Women&apos;s History Month</a>
                            <span className="text-uppercase margin-l-20">Representation</span>
                        </h4>
                        <p>
                            As we enter the first week of Women’s History month, I start by remembering to be proud of my history and of all my experiences that
                            have made me the woman I am today. I was honored to be on a panel to talk to high school students and the importance of school and
                            planning for the future. We talked about being women in our field (insurance, engineering and law) we talked about challenges we
                            face as being women (black women) in male dominated industries and what motivates us to do what we do. It was great to share, to
                            answer all of their thought provoking questions and hoping/praying that it motivated them for their futures. This experience truly
                            motivated me and sparked me to share more and be proud of my history.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speaking

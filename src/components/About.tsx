import React from 'react'
import profile from '../images/profile.jpg'

const About: React.FC = () => {
    const title = 'Regional Vice President, National Sales and Account Management'

    return (
        <div id="about">
            <div className="container content-lg">
                <div className="row">
                    <div className="col-sm-5 sm-margin-b-60">
                        <img className="full-width img-responsive" src="img/group.jpeg" alt="Image" />
                        <img className="full-width img-responsive" src="img/speaker.png" alt="Image" />
                        <img className="full-width img-responsive" src="img/onstage.JPG" alt="Image" />
                    </div>
                    <div className="col-sm-7">
                        <div className="section-seperator margin-b-50">
                            <div className="margin-b-50">
                                <div className="margin-b-30">
                                    <h2>About Me</h2>
                                    <p>
                                        Courtney is currently the Vice President of Sales and Service for National Accounts. She leads the Group Insurance
                                        National Accounts Sales and Service teams comprised of Directors, Account Managers, and Sales Assistants supporting
                                        revenue, sales, persistency targets in the 5,000 lives and national group insurance market segment. She ensures the
                                        teams deliver superior customer satisfaction and account management results to the largest and most complex group
                                        insurance customers in the U.S. A market segment consisting of over 300 customers and book of business of $3.2B.
                                        Courtney has been in the insurance industry for over 20 years.
                                    </p>
                                    <p>
                                        Courtney is also the National Co-Director for the Black Leadership Forum at Prudential, the company’s largest and oldest
                                        business resource group of over 2,000 members. In this role, she partners with senior leaders and key stakeholders
                                        across the company to drive impactful and community-based engagement to enable and empower Black employees to advance in
                                        their careers, cultivate allies in the work of inclusion, and contribute to market and community success.
                                    </p>
                                    <p>
                                        Within the group insurance realm, she has held other leadership positions such as Assistant Vice President, of National
                                        Accounts Services, in the South Customer Unit at MetLife. During her 6 years at MetLife, she also held other management
                                        positions within National Accounts, including as a Client Services Manager and Client Services Director. Prior to
                                        joining MetLife, Courtney worked for Mutual of Omaha Insurance and held various positions in the Claims and Contracts
                                        departments, including a Client Representative, Premium Auditor and Supervisor in Group Premium Services.
                                    </p>
                                    <p>
                                        Courtney serves on the YWCA Greater Charleston Chapter as the Executive Treasurer; she also serves on the non-profit
                                        Charleston Teacher’s Supply Closet board and is a member of the Greater Charleston Chapter of the Links Inc. She has a
                                        B.A. in psychology from the University of Nebraska at Omaha.
                                    </p>
                                </div>
                                <a href="#" className="btn-theme btn-theme-md btn-default-bg text-uppercase">
                                    Download my CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

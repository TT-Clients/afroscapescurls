import React from 'react'
import profile from '../images/profile.jpg';

const Hero: React.FC = () => {
    const title ='Regional Vice President, National Sales and Account Management';

    
    return (
        <div className="promo-block">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 sm-margin-b-60">
                        <div className="margin-b-30">
                            <h1 className="promo-block-title">
                                Courtney <br />
                                Johnson
                            </h1>
                            <p className="promo-block-text">{title}</p>
                        </div>
                        <ul className="list-inline">
                            <li>
                                <a href="https://instagram.com/cojo.dreamhomes?r=nametag" rel="noreferrer" target="_blank" className="social-icons">
                                    <i className="icon-social-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/courtney-johnson-8979b213/" rel="noreferrer" target="_blank" className="social-icons">
                                    <i className="icon-social-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <div className="promo-block-img-wrap">
                            <img className="promo-block-img img-responsive" style={{ width: '100%' }} src={profile} alt="Profile Photo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

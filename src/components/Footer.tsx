import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="footer py-4" id="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; The House of Afros, Capes and Curls 2021</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/_HOACC">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/afroscapescurls/">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/_hoacc/">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="https://discord.gg/EhWcvQWBu6">
                            <i className="fab fa-discord"></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.twitch.tv/thehouseofafroscapescurls">
                            <i className="fab fa-twitch"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">
                            Privacy Policy
                        </a>
                        <a className="link-dark text-decoration-none" href="#!">
                            Terms of Use
                        </a>
                    </div>
                </div>
                <div className="row">
                  <div className="col text-start">The House of Afros, Capes and Curls is a 501c3 Organization</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

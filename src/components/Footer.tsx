import React from 'react'

const Footer: React.FC = () => {
 
    return (
        <footer className="footer">
        <div className="content container">
          <div className="row">
            <div className="col-xs-6">
              <span className="logo-text">CoJo LLC</span>
            </div>
            <div className="col-xs-6 text-right sm-text-left">
              <p className="margin-b-0">
                <a className="fweight-700" href="http://keenthemes.com/preview/acecv/">Theme by Acecv</a>
                Site created by:
                <a className="fweight-700" href="http://www.Terrabledev.com/">Terrabledev.com</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
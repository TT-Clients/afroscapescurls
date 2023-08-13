import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Footer from '../components/Footer'
import TopNav from '../components/TopNav'
import GmaBanner from '../components/GmaBanner'

const Photos: React.FC = () => {
    return (
        <>
        <TopNav title="Meet the Team" />
        <div className="container-fluid w-100 h-auto mt-5 p-0">
            <img src="./img/communityheader.jpg" className="img-fluid w-100 p-0 m-0 top-image" alt="Patience" style={{height:'450px'}}/>
        </div>
        <section className="" style={{ padding: '0', margin: 0 }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="text-center" style={{ backgroundColor: 'var(--hoacc-teal)', color: 'black' }}>
                            <h1 className="text-uppercase py-3">Photos from our events</h1>
                        </div>
                    </div>
                </div>
            </div>

          
            <div className="container">
                <h1 className="text-center mt-5">Coming Soon!</h1>
                
            </div>
        </section>
        <div className="row">
                <div className="col">
                    <GmaBanner />
                </div>
            </div>
            
        <Footer />
    </>
       
    )
}

export default Photos

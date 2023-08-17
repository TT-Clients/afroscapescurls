
import React, { useEffect, useState } from 'react'

const GmaBanner: React.FC = () => {

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <a href="https://www.youtube.com/watch?v=0j4oFjX9Acs" target="_blank" rel="noreferrer"><img src="./img/gma.png" className="img-fluid" alt="" /></a>
        </div>
    )
}

export default GmaBanner

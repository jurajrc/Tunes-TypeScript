import React, { useState, useEffect } from 'react'
import logo from '../assects/logo.svg'

// style
// tu je style robený klasicky je len importovaný React sa o to už poatará
import './Home.css'


const Home: React.FC = () => {
    const [title, setTitle] = useState('React, whee!!')
    const [count, setCount] = useState(1)

    useEffect( () => {
        document.title = title
    })

    return (
        <div className="home">
            <img className='logo' src={logo} alt="react logo" />


            <h1 onClick={() => {
                setCount(count + 1)
                setTitle('React, whee!!' + '!'.repeat(count))
            }}>{title}</h1>


            <p>
                Hot singles in your area. <br />
                Hotter react in your&nbsp;
                <a href="https://react.org/docs"
                    target='blank'
                    rel="noopener norefrrer"
                    >
                        documentation
                    </a>
                </p>
        </div>
    )
}

export default Home

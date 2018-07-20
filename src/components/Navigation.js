import React from 'react'

import Main_Logo from '../images/main_logo.png'

// stylesheets
import '../styles/navigation.scss'

export default class Navigation extends React.Component{
    render(){
        return(
            <div className='nav'>
                <div>
                    <img className='nav_logo' src={Main_Logo} />
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>News</li>
                        <li>Events</li>
                        <li id='pokemon-nav' data-active='active'>
                            Pokemon
                            <ul className='gen-nav'>
                                <li>Gen 1</li>
                                <li>Gen 2</li>
                                <li>Gen 3</li>
                                <li>Gen 4</li>
                                <li>Gen 5</li>
                                <li>Gen 6</li>
                                <li>Gen 7</li>
                            </ul>
                        </li>
                            <div>
                                
                            </div>
                    </ul>
                </nav>
            </div>
        )
    }
}
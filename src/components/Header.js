import React from 'react'

// components
import Title from './Header/Title'

// stylesheets
import '../styles/header.scss'

export default class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <Title />
            </div>
        )
    }
}
import React from 'react'

// components
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'

// stylesheets
import '../styles/page.scss'

export default class Layout extends React.Component{
    constructor(){
        super()
        this.page = "My Page";
    }

    render(){
        return(
            <div className='wrapper'>
                <Navigation />
                <div className='page'>                
                    <Header />
                    <h1>It's {this.page}!</h1>
                    <Footer />
                </div>
            </div>
        )
    }
}
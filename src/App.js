import React from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import {Container} from "react-bootstrap"
import HomeScreen from './screens/HomeScreen'

const App = () => {
    return (
        <div>
            <Header />
            <div className="app_container border border-info">
                <Sidebar />
                <Container fluid className="app_main border border-warn">
                    <HomeScreen />
                </Container>
            </div>
        </div>
    )
}

export default App

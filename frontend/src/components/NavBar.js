import React from 'react'
import {AppBar, Button} from '@mui/material'

function NavBar () {
    return (
        <AppBar position="sticky">
            <div style={{display: 'flex', justifyContent: 'space-around', font: 'Roboto'}}>
                <div>
                    
                </div>
                <div style={{alignContent: 'center', flexGrow: 1, }}>
                <Button color="inherit" href="/" style={{textTransform: 'none'}}>Home</Button>
                <Button color="inherit" href="/request" style={{textTransform: 'none'}}>Browse Requests</Button>
                <Button color="inherit" href="/requests" style={{textTransform: 'none'}}>Request a Feature</Button>
                </div>
            </div>
        </AppBar>
    )
}

export default NavBar
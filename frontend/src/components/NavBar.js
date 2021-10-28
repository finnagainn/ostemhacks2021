import React from 'react'
import {AppBar, Button} from '@mui/material'

function NavBar () {
    return (
        <AppBar position="sticky">
            <div style={{display: 'flex', font: 'Roboto'}}>
                <div>
                    <Button color="inherit" href="/" style={{textTransform: 'none'}}><h2>&#60;/&#62; Dev Requests</h2></Button>
                </div>
                <div style={{display: 'flex', flexGrow: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <Button color="inherit" href="/" style={{textTransform: 'none', alignContent: 'center'}}>Home</Button>
                    <Button color="inherit" href="/request" style={{textTransform: 'none'}}>Browse Requests</Button>
                    <Button color="inherit" href="/requests" style={{textTransform: 'none'}}>Request a Feature</Button>
                </div>
            </div>
        </AppBar>
    )
}

export default NavBar
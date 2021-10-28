import React from 'react'
import {AppBar, Button} from '@mui/material'

function NavBar () {
    return (
        <AppBar position="sticky">
            <div style={{display: 'flex', font: 'Roboto'}}>
                <div>
                    <Button color="inherit" href="/" style={{textTransform: 'none'}}><h2>&#60;/&#62; DevQuests</h2></Button>
                </div>
                <div style={{display: 'flex', flexGrow: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <Button color="inherit" href="/" style={{textTransform: 'none', alignContent: 'center'}}><h3>Home</h3></Button>
                    <Button color="inherit" href="/request" style={{textTransform: 'none'}}><h3>Browse Requests</h3></Button>
                    <Button color="inherit" href="/requests" style={{textTransform: 'none'}}><h3>Request a Feature</h3></Button>
                </div>
            </div>
        </AppBar>
    )
}

export default NavBar
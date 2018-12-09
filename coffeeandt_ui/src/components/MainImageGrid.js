import React, { Component } from 'react';
import {Grid, Typography, Drawer} from '@material-ui/core';
import ImageMapper from 'react-image-mapper';

class MainImageGrid extends Component {

    constructor(props){
        super(props);
        this.state = {
            displayDrawer: false
        }
    }

    map = {
        name: 'Test Map',
        areas: [
            { name: 'test', shape: "circle", coords: [770, 480, 10] }
        ]
    }

    closeDrawer = () => {
        this.setState({displayDrawer: false})
    }

    render() {
        return(
        <div>
        <Grid container direction='column' justify='center' alignItems='center'>
            <Typography variant="h2">CoffeeAndT!</Typography>
            <Grid container direction="row" justify="space-evenly" alignItems="center">
                <Grid item xs={2} />
                <Grid item xs={10}>
                    <ImageMapper
                        src={require('../img/mbtamap-1.png')}
                        map={this.map}
                        width={1200}
                        onMouseEnter={area => console.log(area.name)}
                        onClick={area => this.setState({displayDrawer: true})} />
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </Grid>
        <Drawer anchor="right" open={this.state.displayDrawer} onClose={this.closeDrawer}></Drawer>
        </div>
        );
    }
}

export default MainImageGrid
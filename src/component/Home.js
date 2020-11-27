import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

class Home extends Component {
    render(){
        return (
            <div style={{backgroundColor: "black"}}>
                <Mui.AppBar position="fixed" class="#000000 black navbar-fixed" >
                    <Mui.Toolbar variant="dense">
                    <p style={{textAlign: "center", fontWeight: 100, color: "white"}}>
                    <center>
                        <AppleIcon />&nbsp;&nbsp;
                                Not Logged In&nbsp;&nbsp;
                                <a href="https://www.apple.com/mac/" style={{color: "white"}}>Mac </a>&nbsp;&nbsp;
                                <a href="https://www.apple.com/ipad/" style={{color: "white"}}>iPad </a>&nbsp;&nbsp;
                                <a href="https://www.apple.com/iphone/" style={{color: "white"}}>iPhone </a>&nbsp;&nbsp;
                                <a href="https://www.apple.com/watch/" style={{color: "white"}}>Watch </a>&nbsp;&nbsp;
                                <a href="https://www.apple.com/tv/" style={{color: "white"}}>TV </a>&nbsp;&nbsp;
                                <a href="https://www.apple.com/music/" style={{color: "white"}}>Music </a>&nbsp;&nbsp;
                                <a href="https://support.apple.com/" style={{color: "white"}}>Support </a>&nbsp;&nbsp;
                        <SearchOutlinedIcon style={{float: "center"}}/>&nbsp;&nbsp;
                        <LocalMallOutlinedIcon />
                        </center>
                    </p>
                    </Mui.Toolbar>
                </Mui.AppBar>
                <center>
                <img style={{textAlign: "center"}} src="https://m-cdn.phonearena.com/images/article/127849-two_1200/First-iPhone-12-vs-12-Pro-specs-benchmark-outs-memory-A14-speed-scores.jpg" alt="" ></img>
                </center>
                <Mui.Container fixed>
                <Mui.Grid container spacing={0}>
                    <Mui.Grid item xs={6}>
                    <Mui.Card>
                       <Mui.CardActionArea>
                       <Mui.CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="/images.jpeg"
                        title="Contemplative Reptile"
                        />
                    <Mui.CardContent>
                    <Mui.Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Mui.Typography>
                    <Mui.Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Mui.Typography>
                    </Mui.CardContent>
                </Mui.CardActionArea>
                <Mui.CardActions>
                    <Mui.Button size="small" color="primary">
                    Share
                    </Mui.Button>
                    <Mui.Button size="small" color="primary">
                    Learn More
                    </Mui.Button>
                </Mui.CardActions>
                </Mui.Card>
                                </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>
            </div>
        )
    }
}

export default Home;
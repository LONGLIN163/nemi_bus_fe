import React from 'react';
import {Grid} from '@material-ui/core';

import {Catalog,Preview} from '..'
import { withStyles } from '@material-ui/core/styles';


const styles=theme=>({
    paperStyle:{
        padding:20 , 
        overflow:'auto',
        [theme.breakpoints.up('sm')]:{
            marginTop:5,
            height:'calc(100%-10px)'
        },
        [theme.breakpoints.down('xs')]:{
            height:'100%'
        },
        borderReft:"1px solid white !important",
        backgroundColor: '#hexcodehere'
    },
    '@global':{
        'html, body, #root':{
            height: '100%'
        },
    },
    container:{
        [theme.breakpoints.up('sm')]:{
            height: 'calc(100% - 64px - 48px)',
            overflow:'auto',
        },
        [theme.breakpoints.down('xs')]:{
            height: 'calc(100% - 56px - 48px)'
        }
    },
    item:{
        [theme.breakpoints.down('xs')]:{
            height: '50%'
        }
    },
    item2:{
        background: '#525252',
    }
})

const ContentView = ({classes}) => {

    return(
        <>
            <Grid container className={classes.container}>
                <Grid item xs={12} sm={6} className={classes.item}>
                    <div className={classes.paperStyle}>
                        <Catalog />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}  className={classes.item2}>
                <div className={classes.paperStyle}>
                        <Preview />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default withStyles(styles)(ContentView) ;
    

 

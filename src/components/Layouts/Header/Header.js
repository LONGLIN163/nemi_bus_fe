import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {DialogPane} from '../../Programmes';

const styles={
    flex:{
        flex:1
    }
}

const Header = ({classes}) => {
    return ( 
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" color="inherit" className={classes.flex}> 
                    NemiBus
                </Typography>
                <DialogPane/>
            </Toolbar>
        </AppBar>
     );
}
 
export default withStyles(styles)(Header);
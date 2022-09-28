import React from 'react';
import {withWidth, AppBar,Tabs,Tab} from '@material-ui/core';
import { useVehicleContext } from '../../VehicleContextProvider';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    tabsCenter: {
        flexGrow: 0,
        marginLeft: "auto",
        marginRight: "auto"
    }
  };
  

const Footer = ({classes}) => {

    const {vehicleStatus,category,onCatSelect} = useVehicleContext()

    const onIndexSelect = (e,index) => {
        onCatSelect(index===0 ? '': vehicleStatus[index-1])
    }

    const getIndex=()=>{
        return category ? vehicleStatus.findIndex(item=>item===category)+1:0
    }


    return ( 
        <AppBar position='static'>
            <Tabs
                value={getIndex()}
                onChange={onIndexSelect}
                indicatorColor="secondary"
                textColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
                title="AppBar"
            >
                <Tab label="All" key={0} className={classes.tabsCenter} title="All"/>
                {
                    vehicleStatus && vehicleStatus.map((item, index) => {
                        return (
                            <Tab label={item} key={index+1} className={classes.tabsCenter} title={item}/>
                        )
                    })
                }
            </Tabs>
        </AppBar>  
    );
    
}
 
export default withStyles(styles)(Footer);withWidth()(Footer);
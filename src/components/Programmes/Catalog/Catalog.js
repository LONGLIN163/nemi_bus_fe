import React, { Fragment } from 'react';
import {List,ListItem ,ListItemText,Typography, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useVehicleContext } from '../../../store/VehicleContextProvider';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const Catalog = () => {

    const {
        vehiclesByStatus,
        category,
        onItemSelect,
        onDeleteItem,
        onEditItem,
        onAddItemToPlayList
    } = useVehicleContext()

    return ( 
        <>
            <Typography 
                variant={"h4" }
                style={{marginTop:20}}
                color="secondary"
                gutterBottom
                title="Media Resources"
            >
                All Buses
            </Typography>
           
            {
            vehiclesByStatus.map(([group,vehiclesByStatus]) => {
                return(
                    !category || category===group
                    ?<Fragment key={group}>
                        <Typography 
                          variant="h6" 
                          color="secondary"
                          style={{textTransform:'capitalize'}}
                          title={group}
                        >
                           {group}
                        </Typography>

                        <List component="nav" >
                            {
                                vehiclesByStatus.map( ({id,name}) => {
                                    return (
                                        <ListItem 
                                        button 
                                        key={id}
                                        title={name}
                                        onClick={ () => onItemSelect(id)}
                                    >
                                        <ListItemText 
                                            primary={name}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" title={name} aria-label="comments" onClick={()=>onEditItem(id)}>
                                                <EditIcon /> 
                                            </IconButton> 
                                            <IconButton edge="end" title={name+'del'} aria-label="comments" onClick={()=>onDeleteItem(id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton edge="end" title={name+'add'} aria-label="comments" onClick={()=>onAddItemToPlayList(id)}>
                                                <PlaylistAddIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                        
                                    </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Fragment>
                    :null  
                )
            })}
        </>
     )
}
 
export default Catalog;
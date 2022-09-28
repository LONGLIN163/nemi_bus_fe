import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {Form} from '..';
import { useVehicleContext } from '../../VehicleContextProvider';

const Preview = () => {
    const {
        editMode,
        vehicle,
        onEditForm
    } = useVehicleContext()

    const isEmpty= Object.keys(vehicle).length === 0

    return ( 
        <>
            <Typography 
                variant={"h4" }
                style={{marginTop:20}}
                color="secondary"
                gutterBottom
                title="middleView"
            >
                {
                    editMode
                    ? 'Edit View'
                    : 'Preview'
                }
            </Typography>

            {
                isEmpty
                ? <div>...</div>
                : <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="400"
                        image={vehicle.imageUrl}
                        />
                        <CardContent>
                            <Typography variant="h5" title={vehicle.name} component="h2">
                                {vehicle.name}
                            </Typography>

                            <Typography variant="subtitle1" component="h2">
                                Owner:{vehicle.client}
                            </Typography>

                            <Typography variant="subtitle1" component="h2">
                                Location:{vehicle.active}
                            </Typography>

                             <Typography variant="subtitle1" component="h2">
                                Status:{vehicle.active}
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>

            }


            {
                editMode
                ? <Form 
                    onSubmit={onEditForm}
                    vehicle={vehicle}
                />
                : <Typography variant={"subtitle2" }>
                    {isEmpty ? "please select an item!" : '' }
                </Typography>
            }
        </>
     );
}
 
export default Preview;
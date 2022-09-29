import React from 'react';
import {Dialog,DialogContent,DialogContentText,DialogTitle,Fab,} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {Form} from '..';
import { useVehicleContext } from '../../../store/VehicleContextProvider';

const DialogPane = () => {
    const {openDialog,setOpenDialog,onItemCreate} = useVehicleContext()

    const handleToggle=() => {
        setOpenDialog(!openDialog)
    }

    const handleFormSubmit= (programme) => {
        handleToggle()
        onItemCreate(programme)
    }

    return (
            <>
                <Fab 
                    color="secondary" 
                    aria-label="add" 
                    onClick={handleToggle}
                    size="small"
                    title="addProgramBtn"
                >
                    <AddIcon />
                </Fab>

                <Dialog 
                    aria-labelledby="form-dialog-title"
                    open={openDialog ? openDialog : false }
                    onClose={handleToggle}
                    fullWidth
                >

                    <DialogTitle>
                        Create an item
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText>
                            please fill out the form below......
                        </DialogContentText>
                        <Form 
                            onSubmit={handleFormSubmit}
                        />
                    </DialogContent>

                </Dialog>

            </>

        );
}
 
export default DialogPane;


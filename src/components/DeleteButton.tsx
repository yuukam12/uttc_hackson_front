import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { deleteItem } from '../apis/api';
import { IconButton } from '@mui/material';

type Props ={
    id: string
}
export const DeleteButton: React.FC<Props> = ({ id }) => {

    const onClick = async () =>{
        try{
            await deleteItem(id)
            console.log("Data fetched after deletion");
        } catch (error) {
          console.error("Error deleting or fetching data:", error);
        }
    }
    return (
        <Stack direction="row" alignItems="center">
            <IconButton aria-label="delete" onClick={onClick}>
                <DeleteIcon />
            </IconButton>
        </Stack>
    );
};
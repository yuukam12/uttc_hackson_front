import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import { AddModal } from './AddModal';

type Props = {
    reload: () => void
}
export const AddButton: React.FC<Props> = ({ reload }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Stack direction="row" alignItems="center">
             <Button onClick ={()=>setIsOpen(true)} variant="outlined" color = "inherit" endIcon={<AddIcon />}>
            追加
            </Button>

        <AddModal
        open={isOpen}
        reload={reload}
        />
        </Stack>
    );
};
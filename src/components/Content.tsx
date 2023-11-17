import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography
} from '@mui/material';
import { ContentType } from '../types/ContentType';
import { getContent } from '../apis/api';
import { DeleteButton } from './DeleteButton';


type Props = {
    id: string
    open: boolean
}

export const ContentDisplay: React.FC<Props> = ({ id, open }) => {
    const [item, setItem] = useState<ContentType | null>(null);
    const [isOpen, setIsOpen] = useState(open);

    useEffect(() => {
        // データを非同期に取得
        async function fetchData() {
            try {
                if (id) {
                    // 文字列型のIDをそのまま使用
                    const data = await getContent(id);
                    setItem(data);
                }
            } catch (error) {
                console.error('Error fetching item detail:', error);
            }
        }

        if (id) {
            fetchData();
        }
    }, [id]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <Dialog open={open} onClose={() => setIsOpen(false)}>
            <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <img src={URL.createObjectURL(item.image)} alt="item" />
            </div>
            <DeleteButton id={id}/>
        </Dialog>
    );
};

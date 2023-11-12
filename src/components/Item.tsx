import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getContent, deleteItem } from '../apis/api';
import {
    Dialog,
    DialogContent,
    DialogActions,
    Typography,
    Stack,
    Button,
  } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import BookIcon from '@mui/icons-material/Book';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { ContentDisplay } from './Content';
type Props = {
  id: string;
  title: string;
  media: string;
}

export const Item: React.FC<Props> = ({ id, title, media }) => {
  const [isOpen, setIsOpen] = useState(false)
  const renderIcon = (mediaType: string) => {
    switch (mediaType) {
      case 'website':
        return <WebIcon />;
      case 'book':
        return <BookIcon />;
      case 'video':
        return <OndemandVideoIcon />;
      default:
        return null;
    }
  };

  return (
      <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          border="1px solid #ccc"
          padding="8px"
          borderRadius="4px"
      >
        <div>{renderIcon(media)}</div>
        <Typography variant="h6" onClick={() => setIsOpen(true)}>{title}</Typography>
        <ContentDisplay id={id} open ={isOpen} />
      </Stack>
  );
};

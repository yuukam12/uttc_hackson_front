import React, { useState, useEffect } from 'react';
import { postItem } from '../apis/api';
import { Dialog, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
    open: boolean
}

export const AddModal: React.FC<Props> = ({ open }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [uploadedBy, setUploadedBy] = useState('');
  const [category, setCategory] = useState('');
  const [media, setMedia] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<Blob | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postItem(title, url, uploadedBy, category, media, description, image);
      // 成功した場合の処理を追加
    } catch (error) {
      // エラー処理を追加
      console.error('Error posting item:', error);
    }
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <form onSubmit={onSubmit}>
            <IconButton aria-label="close" onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </IconButton>
            <Typography>タイトル：</Typography>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Typography>URL：</Typography>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <Typography>アップロードユーザー：</Typography>
            <input type="text" value={uploadedBy} onChange={(e) => setUploadedBy(e.target.value)} />
            <Typography>カテゴリー：</Typography>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            <Typography>媒体：</Typography>
            <input type="text" value={media} onChange={(e) => setMedia(e.target.value)} />
            <Typography>説明：</Typography>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <Typography>画像：</Typography>
            <input type="file" onChange={(e) => e.target.files && setImage(e.target.files[0])} />
            <button type="submit">Submit</button>
          </form>
      </Dialog>
  );
};

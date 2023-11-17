import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getContent, deleteItem } from '../apis/api'
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Stack,
  Button,
  IconButton,
} from '@mui/material'
import WebIcon from '@mui/icons-material/Web'
import BookIcon from '@mui/icons-material/Book'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import { DeleteButton } from './DeleteButton'
import { updateContent } from '../apis/api'

type Props = {
  id: string
  title: string
  media: string
  description?: string
  image?: Blob
}

export const Item: React.FC<Props> = ({
  id,
  title,
  media,
  description,
  image,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isUpdateOpen, setIsUpdateOpen] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const renderIcon = (mediaType: string) => {
    switch (mediaType) {
      case 'website':
        return <WebIcon sx={{fontSize: 100}}/>
      case 'book':
        return <BookIcon sx={{fontSize: 100}}/>
      case 'video':
        return <OndemandVideoIcon sx={{fontSize: 100}}/>
      default:
        return null
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await updateContent(id, newTitle, newDescription)
      console.log('Content updated successfully')
      setIsUpdateOpen(false)
      setIsOpen(false)
    } catch (error) {
      console.error('Error updating content:', error)
      // Handle error if needed
    }
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      border="1px solid #ccc"
      width={700}
    >
      <div>{renderIcon(media)}</div>
      <Stack justifyContent="center">
      <Typography variant="h1">{title}</Typography>
      </Stack>
      <Button onClick={() => setIsOpen(true)}>詳細</Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{ style: { width: '300px', height: '300px' } }}
      >
        <Stack p={3}>
          <Stack direction="row" p={1} alignItems="flex-end">
            <Button onClick={()=>setIsOpen(false)}>閉じる</Button>
            <DeleteButton id={id} />
          </Stack>
          <h2>{title}</h2>
          <p>{description}</p>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="item" />
          ) : (
            <p>No image</p>
          )}
          <Button onClick={() => setIsUpdateOpen(true)}>update</Button>
        </Stack>
      </Dialog>
      <Dialog
        open={isUpdateOpen}
        onClose={() => setIsUpdateOpen(false)}
        PaperProps={{ style: { width: '200px', height: '200px' } }}
      >
        <form onSubmit={onSubmit}>
          <Button onClick={() => setIsUpdateOpen(false)}>閉じる</Button>
          <Typography>タイトル：</Typography>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Typography>説明：</Typography>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          {/* Add other form fields as needed */}
          <button type="submit">Update</button>
        </form>
      </Dialog>
    </Stack>
  )
}

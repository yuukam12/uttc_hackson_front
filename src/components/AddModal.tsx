import React, { useState, useEffect } from 'react'
import { postItem } from '../apis/api'
import { Dialog, Typography, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
  open: boolean
  reload: () => void
}

export const AddModal: React.FC<Props> = ({ open, reload }) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [uploadedBy, setUploadedBy] = useState('')
  const [category, setCategory] = useState('')
  const [media, setMedia] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<Blob | undefined>(undefined)
  const [isOpen, setIsOpen] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await postItem(
        title,
        url,
        uploadedBy,
        category,
        media,
        description,
        image,
      )
      // 成功した場合の処理を追加
    } catch (error) {
      // エラー処理を追加
      console.error('Error posting item:', error)
    }
  }

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const onClick = () => {
    setIsOpen(false)
    reload()
  }

  const onClose = () => {
    setIsOpen(false)
    reload()
  }

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit} style={{width:400}}>
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Typography>タイトル：</Typography>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Typography>URL：</Typography>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Typography>アップロードユーザー：</Typography>
        <input
          type="text"
          value={uploadedBy}
          onChange={(e) => setUploadedBy(e.target.value)}
        />
        <Typography>カテゴリー：</Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="category"
          onChange={handleChange}
          style={{width:200}}
        >
          <MenuItem value={"Web App Deep Dive"}>Web App Deep Dive</MenuItem>
          <MenuItem value={"The History of Web"}>The History of Web</MenuItem>
          <MenuItem value={"エディタ（IDE）"}>エディタ（IDE）</MenuItem>
          <MenuItem value={"OSコマンド（とシェル）"}>OSコマンド（とシェル）</MenuItem>
          <MenuItem value={"Git"}>Git</MenuItem>
          <MenuItem value={"GitHub"}>GitHub</MenuItem>
          <MenuItem value={"HTML&CSS"}>HTML&CSS</MenuItem>
          <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
          <MenuItem value={"React"}>React</MenuItem>
          <MenuItem value={"React×Typescript"}>React×Typescript</MenuItem>
          <MenuItem value={"SQL"}>SQL</MenuItem>
          <MenuItem value={"Docker"}>Docker</MenuItem>
          <MenuItem value={"Go"}>Go</MenuItem>
          <MenuItem value={"HTTP Server(Go)"}>HTTP Server(Go)</MenuItem>
          <MenuItem value={"RDBMS(MYSQL)への接続(Go)"}>RDBMS(MYSQL)への接続(Go)</MenuItem>
          <MenuItem value={"Unit Test(Go)"}>Unit Test(Go)</MenuItem>
          <MenuItem value={"フロントエンドとバックエンドの接続"}>フロントエンドとバックエンドの接続</MenuItem>
          <MenuItem value={"CI(Continuous Integration)"}>CI(Continuous Integration)</MenuItem>
          <MenuItem value={"CD(Continuous Delivery / Deployment)"}>CD(Continuous Delivery / Deployment)</MenuItem>
          <MenuItem value={"認証"}>認証</MenuItem>
          <MenuItem value={"ハッカソン準備"}>ハッカソン準備</MenuItem>
          <MenuItem value={"ハッカソンの概要"}>ハッカソンの概要</MenuItem>
          <MenuItem value={"インターン準備編について"}>インターン準備編について</MenuItem>
          <MenuItem value={"DB編"}>DB編</MenuItem>
          <MenuItem value={"method & interfaceを学ぶ(Go)"}>Go</MenuItem>
          <MenuItem value={"ソースコードの改善(Go)"}>ソースコードの改善(Go)</MenuItem>
          <MenuItem value={"フロントエンドにおける設計と状態管理"}>フロントエンドにおける設計と状態管理</MenuItem>
        </Select>
        <Typography>媒体：</Typography>
        <input
          type="text"
          value={media}
          onChange={(e) => setMedia(e.target.value)}
        />
        <Typography>説明：</Typography>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </Dialog>
  )
}

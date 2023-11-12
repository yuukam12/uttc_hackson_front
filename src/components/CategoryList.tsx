import React, { useState } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

type Props = {
    handleCategorySelect: (category: string) => void
}
export const CategoryList:  React.FC<Props> = ({ handleCategorySelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(1)

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    category: string,
  ) => {
    setSelectedIndex(index)
    handleCategorySelect(category)
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="introduction">
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="はじめに" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1, "Web App Deep Dive")}
                    >
                        <ListItemText primary="Web App Deep Dive" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2, "The History of Web")}
                    >
                        <ListItemText primary="The History of Web" />
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
        <Divider/>
        <nav aria-label="Hackathon">
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Hackathon" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4, "エディタ（IDE)")}
                    >
                        <ListItemText primary="エディタ（IDE)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5,"OSコマンド（とシェル）")}
                    >
                        <ListItemText primary="OSコマンド（とシェル）" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6, "Git")}
                    >
                        <ListItemText primary="Git" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 7}
                    onClick={(event) => handleListItemClick(event, 7, "GitHub")}
                    >
                        <ListItemText primary="GitHub" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 8}
                    onClick={(event) => handleListItemClick(event, 8, "HTML&CSS")}
                    >
                        <ListItemText primary="HTML&CSS" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 9}
                    onClick={(event) => handleListItemClick(event, 9, "JavaScript")}
                    >
                        <ListItemText primary="JavaScript" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 10}
                    onClick={(event) => handleListItemClick(event, 10, "React")}
                    >
                        <ListItemText primary="React" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 10}
                    onClick={(event) => handleListItemClick(event, 10, "React×Typescript")}
                    >
                        <ListItemText primary="React×Typescript" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 11}
                    onClick={(event) => handleListItemClick(event, 11, "SQL")}
                    >
                        <ListItemText primary="SQL" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 12}
                    onClick={(event) => handleListItemClick(event, 12, "Docker")}
                    >
                        <ListItemText primary="Docker" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 13}
                    onClick={(event) => handleListItemClick(event, 13, "Go")}
                    >
                        <ListItemText primary="Go" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 14}
                    onClick={(event) => handleListItemClick(event, 14, "HTTP Server(Go)")}
                    >
                        <ListItemText primary="HTTP Server(Go)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 15}
                    onClick={(event) => handleListItemClick(event, 15, "RDBMS(MYSQL)へ接続(Go)")}
                    >
                        <ListItemText primary="RDBMS(MYSQL)へ接続(Go)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 16}
                    onClick={(event) => handleListItemClick(event, 16, "Unit Test(Go)")}
                    >
                        <ListItemText primary="Unit Test(Go)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 17}
                    onClick={(event) => handleListItemClick(event, 17, "フロントエンドとバックエンドの接続")}
                    >
                        <ListItemText primary="フロントエンドとバックエンドの接続" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 18}
                    onClick={(event) => handleListItemClick(event, 18, "CI(Continuous Integration)")}
                    >
                        <ListItemText primary="CI(Continuous Integration)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 19}
                    onClick={(event) => handleListItemClick(event, 19, "CD(Continuous Delivery / Deployment)")}
                    >
                        <ListItemText primary="CI(Continuous Integration / Deployment)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 20}
                    onClick={(event) => handleListItemClick(event, 20, "認証")}
                    >
                        <ListItemText primary="認証" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 21}
                    onClick={(event) => handleListItemClick(event, 21, "ハッカソン準備")}
                    >
                        <ListItemText primary="ハッカソン準備" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 22}
                    onClick={(event) => handleListItemClick(event, 22, "ハッカソンの概要")}
                    >
                        <ListItemText primary="ハッカソンの概要" />
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Hackson" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 24}
                    onClick={(event) => handleListItemClick(event, 24, "インターン準備編について")}
                    >
                        <ListItemText primary="インターン準備編について" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 25}
                    onClick={(event) => handleListItemClick(event, 25, "DB編")}
                    >
                        <ListItemText primary="DB編" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 26}
                    onClick={(event) => handleListItemClick(event, 26, "method & interfaceを学ぶ(Go)")}
                    >
                        <ListItemText primary="method & interfaceを学ぶ(Go)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 27}
                    onClick={(event) => handleListItemClick(event, 27, "ソースコードの改善(Go)")}
                    >
                        <ListItemText primary="ソースコードの改善(Go)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 28}
                    onClick={(event) => handleListItemClick(event, 28, "フロントエンドにおける設計と状態管理")}
                    >
                        <ListItemText primary="フロントエンドにおける設計と状態管理" />
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    </Box>
  )
}

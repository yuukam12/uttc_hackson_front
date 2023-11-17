import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

type Props = {
    categorySelect: (category: string) => void
    fetchData: () => Promise<void>
}
export const CategoryList:  React.FC<Props> = ({ categorySelect, fetchData }) => {
  const [selectedIndex, setSelectedIndex] = useState(1)

//   const handleListItemClick = async(
//     index: number,
//     category: string,
//   ) => {
//     setSelectedIndex(index)
//     categorySelect(category)
//     await fetchData()
//   }
const handleListItemClick = async(index:number, category: string) => {
    setSelectedIndex(index); // Update selectedIndex (if necessary)
    categorySelect(category);
    await fetchData();
  };


  useEffect(() => {
    // Call fetchData when the component mounts or selectedIndex changes
    if (selectedIndex !== null) {
      fetchData();
    }
  }, [selectedIndex]);

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
                    onClick={() => handleListItemClick(1, "Web App Deep Dive")}
                    >
                        <ListItemText primary="Web App Deep Dive" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={() => handleListItemClick( 2, "The History of Web")}
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
                    onClick={() => handleListItemClick(4, "エディタ（IDE)")}
                    >
                        <ListItemText primary="エディタ（IDE)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 5}
                    onClick={() => handleListItemClick(5,"OSコマンド（とシェル）")}
                    >
                        <ListItemText primary="OSコマンド（とシェル）" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 6}
                    onClick={() => handleListItemClick(6, "Git")}
                    >
                        <ListItemText primary="Git" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 7}
                    onClick={() => handleListItemClick(7, "GitHub")}
                    >
                        <ListItemText primary="GitHub" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 8}
                    onClick={() => handleListItemClick(8, "HTML&CSS")}
                    >
                        <ListItemText primary="HTML&CSS" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 9}
                    onClick={() => handleListItemClick(9, "JavaScript")}
                    >
                        <ListItemText primary="JavaScript" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 10}
                    onClick={() => handleListItemClick(10, "React")}
                    >
                        <ListItemText primary="React" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 10}
                    onClick={() => handleListItemClick(10, "React×Typescript")}
                    >
                        <ListItemText primary="React×Typescript" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 11}
                    onClick={() => handleListItemClick(11, "SQL")}
                    >
                        <ListItemText primary="SQL" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 12}
                    onClick={() => handleListItemClick(12, "Docker")}
                    >
                        <ListItemText primary="Docker" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 13}
                    onClick={() => handleListItemClick(13, "Go")}
                    >
                        <ListItemText primary="Go" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 14}
                    onClick={() => handleListItemClick(14, "HTTP Server(Go)")}
                    >
                        <ListItemText primary="HTTP Server(Go)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 15}
                    onClick={() => handleListItemClick(15, "RDBMS(MYSQL)へ接続(Go)")}
                    >
                        <ListItemText primary="RDBMS(MYSQL)へ接続(Go)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 16}
                    onClick={() => handleListItemClick(16, "Unit Test(Go)")}
                    >
                        <ListItemText primary="Unit Test(Go)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 17}
                    onClick={() => handleListItemClick(17, "フロントエンドとバックエンドの接続")}
                    >
                        <ListItemText primary="フロントエンドとバックエンドの接続" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 18}
                    onClick={() => handleListItemClick(18, "CI(Continuous Integration)")}
                    >
                        <ListItemText primary="CI(Continuous Integration)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 19}
                    onClick={() => handleListItemClick(19, "CD(Continuous Delivery / Deployment)")}
                    >
                        <ListItemText primary="CI(Continuous Integration / Deployment)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 20}
                    onClick={() => handleListItemClick(20, "認証")}
                    >
                        <ListItemText primary="認証" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 21}
                    onClick={() => handleListItemClick(21, "ハッカソン準備")}
                    >
                        <ListItemText primary="ハッカソン準備" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 22}
                    onClick={() => handleListItemClick(22, "ハッカソンの概要")}
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
                    onClick={() => handleListItemClick(24, "インターン準備編について")}
                    >
                        <ListItemText primary="インターン準備編について" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 25}
                    onClick={() => handleListItemClick(25, "DB編")}
                    >
                        <ListItemText primary="DB編" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 26}
                    onClick={() => handleListItemClick(26, "method & interfaceを学ぶ(Go)")}
                    >
                        <ListItemText primary="method & interfaceを学ぶ(Go)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 27}
                    onClick={() => handleListItemClick(27, "ソースコードの改善(Go)")}
                    >
                        <ListItemText primary="ソースコードの改善(Go)" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                    selected={selectedIndex === 28}
                    onClick={() => handleListItemClick(28, "フロントエンドにおける設計と状態管理")}
                    >
                        <ListItemText primary="フロントエンドにおける設計と状態管理" />
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    </Box>
  )
}

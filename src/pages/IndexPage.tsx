import React, { useState, useEffect } from "react";
import { Stack, Typography, Button } from "@mui/material";
import { CategoryList } from "../components/CategoryList";
import { Item } from "../components/Item";
import { ContentType } from "../types/ContentType";
import { getItems } from "../apis/api";
import { AddButton } from "../components/AddButton";
import { SignOutButton } from "../components/SignOutButton";

export const IndexPage: React.FC = ()=> {
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState("Web App Deep Dive")
    const [items, setItems] = useState<ContentType[]>([]);
    const [id, setId] = useState("")
    const [sortedItems, setSortedItems] = useState<ContentType[]>([]);
    const [selectedMedia, setSelectedMedia] = useState<string | null>(null);


    const sortByCreatedAt = () => {
      const sorted = [...sortedItems].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
      setSortedItems(sorted);
    };

    const fetchData = async () => {
      try {
        const data = await getItems(category);
        console.log(category);
        setSortedItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    const filterByMedia = (mediaType: string | null) => {
      setSelectedMedia(mediaType);
    };

    const resetMediaFilter = () => {
      setSelectedMedia(null); // Reset selected media type to null
    };

    useEffect(() => {
      fetchData();
    }, [category]);

    const renderItems = () => {
      // If a media type is selected, filter the items; otherwise, display all items
      const itemsToDisplay = selectedMedia
        ? sortedItems.filter((item) => item.media === selectedMedia)
        : sortedItems;

      return itemsToDisplay.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          media={item.media}
          description={item.description}
          image={item.image}
        />
      ));
    };

    return (
      <Stack direction="row" spacing={2}>
        <CategoryList categorySelect={setCategory} fetchData={fetchData}/>
        <Stack direction="column" p={2}>
          <Stack direction="row" p={2}>
          <SignOutButton/>
          <AddButton fetchData={fetchData}/>
          <Button onClick={sortByCreatedAt}>作成日順に並べる</Button>
          <Button onClick={() => filterByMedia('website')}>Website</Button>
          <Button onClick={() => filterByMedia('video')}>Video</Button>
          <Button onClick={() => filterByMedia('book')}>Book</Button>
          <Button onClick={resetMediaFilter}>All</Button>
          </Stack>
        <Stack direction="column" spacing={2} onClick={()=>setIsOpen(true)}>
        {renderItems()}
        </Stack>
        </Stack>
      </Stack>
        )
}
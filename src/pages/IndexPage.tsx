import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { CategoryList } from "../components/CategoryList";
import { Item } from "../components/Item";
import { ContentType } from "../types/ContentType";
import { getItems } from "../apis/api";
import { AddButton } from "../components/AddButton";

export const IndexPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState("Web App Deep Dive")
    const [items, setItems] = useState<ContentType[]>([]);

    const fetchData = async () => {
      try {
        const data = await getItems(category);
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Stack>
            <AddButton/>
            <CategoryList handleCategorySelect={setCategory}/>
            <Stack direction="column" spacing={2}>
            {items.map((item) => (
                <Item key = {item.id} title={item.title} media ={item.media} />
            ))}
            </Stack>
        </Stack>
        )
}
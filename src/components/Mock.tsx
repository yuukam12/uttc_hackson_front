import React, { useState, useEffect } from "react";
import { Stack, Alert } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from 'react-router-dom';

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Title", headerName: "タイトル", width: 130 },
    { field: "Description", headerName: "説明", width: 130 },
    {
        field: "CreateDate",
        headerName: "作成日",
        type: "number",
        width: 180,},
    { field: "Category", headerName: "カテゴリー", width: 70 },
    { field: "Media", headerName: "メディア", width: 70 },

];
type Props = {
    Id: string;
    title: string;
    description: string;
    media: string;
  }

const rows2 = [
    { id: 1, Title: "エラー解消", Description: "エラーを解消する", CreateDate: "2002/07/27", Category: "Web App Deep Dive", Media: "website" },
];

export const Mock: React.FC<Props> = ({Id, title, description, media})=> {
    const rows1 = [
        { id: Id, Title: title, Description: description, Media: media },
    ]
    return (
        <Stack>
            <DataGrid
            rows={rows1}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            />
        </Stack>
    );
};

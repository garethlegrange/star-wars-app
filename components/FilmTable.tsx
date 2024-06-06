import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Films, Film } from "@/types";

const columns: GridColDef<Film>[] = [
  { field: "episode_id", headerName: "ID" },
  {
    field: "title",
    headerName: "Title",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
  },
];

export default function FilmTable({ films }: { films: Films }) {
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={films.results}
        getRowId={(row) => row.episode_id}
        rowCount={films.count}
        // loading={films}
        columns={columns} 
        hideFooter
      />
    </Box>
  );
}


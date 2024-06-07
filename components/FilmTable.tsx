import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Films, Film } from "@/types";
import { Container } from "@mui/material";

const columns: GridColDef<Film>[] = [
  { field: "episode_id", headerName: "Episode ID" },
  {
    field: "title",
    headerName: "Title",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    renderCell: (params) => {
      const urlParts = params.row.url.split("/").filter(Boolean);
      const id = urlParts[urlParts.length - 1];
      return <Link href={`/movie/${id}`}>{params.row.title}</Link>;
    },
  },
  {
    field: "release_date",
    headerName: "Release date",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
  },
  {
    field: "director",
    headerName: "Director",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
  },
];

export default function FilmTable({ films }: { films: Films }) {
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={films.results}
          getRowId={(row) => row.episode_id}
          loading={!films.results.length}
          columns={columns}
          hideFooter
        />
      </Box>
    </Container>
  );
}

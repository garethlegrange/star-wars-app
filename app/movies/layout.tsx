import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";

export default function MoviesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: 4,
      pb: 4,
    }}>
      <AppBar position="sticky">
        myMovies
      </AppBar>
      <main>{children}</main>
    </Box>
  );
}

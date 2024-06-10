import Box from "@mui/material/Box";
import Navbar from "@/components/Navbar";

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
      <Navbar />
      <main>{children}</main>
    </Box>
  );
}

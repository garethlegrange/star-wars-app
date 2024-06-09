import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="min-h-screen flex flex-col items-center justify-center" sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2rem",
      minHeight: "100vh",
    }}>
      <Box>
        <Typography variant="h1">Gareth le Grange</Typography>
        <Typography>Assessment for the lead front-end developer.</Typography>
        <ul>
          <li>
            <Link href="/movies/">Task 1</Link>
          </li>
          <li>
            <Link href="/gallery">Task 2</Link>
          </li>
        </ul>
      </Box>
    </Container>
  );
}

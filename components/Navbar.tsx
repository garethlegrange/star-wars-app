import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: 0,
        backgroundImage: "none",
        bgcolor: "transparent",
      }}
    >
      <Container>
        <Toolbar
          variant="regular"
          sx={{
            bgcolor: "rgba(0, 0, 0, .4)",
            backdropFilter: "blur(10px)",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <Avatar
            alt="Gareth le Grange"
            sx={{ width: 56, height: 56, bgcolor: "transparent" }}
          >
            <Image
              src="https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717765955/wi7hh3e7u9tkzuxngw1q.png"
              alt="Gareth le Grange"
              width={56}
              height={56}
            />
          </Avatar>
          <Typography
            variant="h1"
            sx={{
              fontSize: "1rem",
              fontWeight: 700,
            }}
          >
            Gareth le Grange
          </Typography>
          <Box
            sx={{
              ml: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 1,
              fontSize: "0.875rem",
            }}
          >
            <Link href="/">Task one</Link>
            <Link href="/gallery">Task two</Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

"use client";

import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";

export default function MoviesLoader() {
  return (
    <>
      <Container>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={600}
          sx={{ borderRadius: "32px" }}
        />
      </Container>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          height: "100vh",
          bgcolor: "white",
          borderRadius: "32px",
          padding: "12px 8px",
          position: "relative",
          mt: "-128px",
          gap: 4,
        }}
      >
        <Skeleton variant="text" width="80%" height={36} />
        <Skeleton variant="text" width="100%" height={18} />
        <Skeleton variant="text" width="70%" height={18} />
        <Skeleton variant="text" width="70%" height={18} />
      </Container>
    </>
  );
};

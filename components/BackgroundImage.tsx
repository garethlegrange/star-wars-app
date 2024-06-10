import Container from "@mui/material/Container";
import Image from "next/image";

const imgArray = [
  "https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717764111/bkhoa3qwy3dgyoagmgxs.png",
  "https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717764103/ctj5echt1bfrctzbxa7l.png",
  "https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717764103/twvaf1i56egzjkx89vne.png",
  "https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717764098/dp45b3hyiicb3adi6avj.png",
  "https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717764108/g97p6gvyztm4nm2xpyou.png",
  "https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717764110/ekl46wg97idmyhvmgszh.png",
];

export default function BackgroundImage(data: {
  episode_id: string;
  title: string;
}) {
  const { episode_id, title } = data;

  return (
    <Container>
      <Image
        src={imgArray[Number(episode_id) - 1]}
        placeholder="blur"
        blurDataURL="https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717764098/dp45b3hyiicb3adi6avj.png"
        alt={title}
        width="800"
        height="600"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "30px",
        }}
      />
    </Container>
  );
}

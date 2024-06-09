import Image from "next/image";

const imgArray = [
  "https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717764098/dp45b3hyiicb3adi6avj.png",
  "https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717764098/dp45b3hyiicb3adi6avj.png",
  "https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717764098/dp45b3hyiicb3adi6avj.png",
  "https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717764098/dp45b3hyiicb3adi6avj.png",
];

export default function BackgroundImage(data: { episode_id: string; title: string }) {
  const { episode_id, title } = data;

  return (
    <div className="bg-gradient-to-b from-transparent to-black min-h-dvh -z-10 absolut top-0">
      <Image
        src={imgArray[Number(episode_id)]}
        alt={title}
        placeholder="blur"
        blurDataURL="https://res.cloudinary.com/dqzbjbmr5/image/upload/v1717764098/dp45b3hyiicb3adi6avj.png"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </div>
  );
}

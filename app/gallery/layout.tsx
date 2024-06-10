import Link from "next/link";

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex flex-col gap-8">
      <nav className="px-4 py-2 backdrop-blur-md bg-white/30 flex items-center justify-between">
        <h1 className="m-0 text-base text-white">myPhoto</h1>
        <Link href="/" className="text-white no-underline hover:text-indigo-700 text-sm">Home</Link>
      </nav>
      <div className="container mx-auto grow flex mb-8 px-4 md:px-0">{children}</div>
    </main>
  );
}

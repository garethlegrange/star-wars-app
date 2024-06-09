export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex flex-col gap-8">
      <nav className="px-4 py-2 backdrop-blur-md bg-white/30">
        <h1 className="m-0 text-base text-white">myPhoto</h1>
      </nav>
      <div className="container mx-auto">{children}</div>
    </main>
  );
}

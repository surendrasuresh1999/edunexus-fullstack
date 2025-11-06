import Asidebar from "@/common/Asidebar";

export default function SharedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-slate-100">
      <Asidebar />
      <main className="flex-1 overflow-auto flex flex-col">
        <div className="sticky top-0 bg-white border-b p-4 z-20">Top Navbar</div>
        <div className="p-4 flex-1">{children}</div>
      </main>
    </div>
  );
}

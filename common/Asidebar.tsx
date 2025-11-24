import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import sidebarItems, { SidebarItem } from "@/static/sibar";
import Link from "next/link";

const Asidebar = () => {
  return (
    <SidebarProvider>
      <Sidebar className="bg-white">
        <SidebarHeader className="py-4 border-b">
          <p>Brand logo</p>
        </SidebarHeader>
        <SidebarContent className="p-2">
          {sidebarItems.map((item: SidebarItem, index: number) => (
            <Link
              href={item.path}
              key={index}
              className={`flex items-center text-sm gap-1 text-white bg-sidebar-primary py-1 px-2 rounded-sm`}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          ))}
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};

export default Asidebar;

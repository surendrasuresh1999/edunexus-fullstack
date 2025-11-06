"use client";

import AvatarInfo from "@/common/AvatarInfo";
import DataTable from "@/common/DataTable";
import EmptyView from "@/common/EmptyView";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { teacherData } from "@/static/sibar";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const StudentPage = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const columns = [
    {
      accessorKey: "info",
      header: "Info",
      cell: ({ row }: any) => {
        const { name, email } = row.original;
        return <AvatarInfo name={name} email={email} />;
      },
    },
    {
      accessorKey: "classes",
      header: "Classes",
    },
    {
      accessorKey: "subjects",
      header: "Subjects",
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "address",
      header: "Address",
    },
    {
      header: "Actions",
      cell: ({ row }: any) => (
        <div className="flex gap-2 justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => console.log("Edit:", row.original.id)}
          >
            <Edit className="h-4 w-4 text-blue-600" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => console.log("Delete:", row.original.id)}
          >
            <Trash2 className="h-4 w-4 text-red-600" />
          </Button>
        </div>
      ),
    },
  ];
  const handleEdit = (id: number) => {
    console.log("Edit clicked for:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete clicked for:", id);
  };

  const handleAddStudent = () => {
    setOpenDialog(true);
    console.log("Add Student clicked");
    toast.success("Add Student clicked");
  };

  const renderContentView = () => {
    return (
      <div>
        <h1 className="text-xl font-semibold mb-4">Users</h1>
        <div className="bg-white rounded-md">
          <DataTable columns={columns} data={teacherData} />
        </div>
      </div>
    );
  };
  return (
    <>
      {teacherData.length ? (
        <EmptyView title="Students" handler={handleAddStudent} />
      ) : (
        renderContentView()
      )}
    </>
  );
};

export default StudentPage;

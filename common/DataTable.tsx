"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReactNode } from "react";

interface Column {
  accessorKey?: string;
  header: string;
  className?: string;
  cell?: (props: { row: { original: Record<string, any> } }) => ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, any>[];
  emptyText?: string;
}

const DataTable = ({
  columns,
  data,
  emptyText = "No data available",
}: DataTableProps) => {
  return (
    <div className="w-full overflow-x-auto rounded-md border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col, i) => (
              <TableHead key={col.accessorKey ?? i} className={col.className}>
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.length > 0 ? (
            data.map((row, i) => (
              <TableRow key={i}>
                {columns.map((col, j) => (
                  <TableCell key={col.accessorKey ?? j}>
                    {col.cell
                      ? col.cell({ row: { original: row } })
                      : col.accessorKey
                      ? row[col.accessorKey]
                      : null}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="text-center py-6 text-gray-500"
              >
                {emptyText}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;

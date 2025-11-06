// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { studentSchema, } from "@/schemas/StudentSchema";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Field,
//   FieldGroup,
//   FieldLabel,
//   FieldDescription,
//   FieldLegend,
//   FieldSet,
//   FieldSeparator,
// } from "@/components/ui/field";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// export default function AddStudentForm({
//   onSubmit,
// }: {
//   onSubmit: (data: StudentFormData) => void;
// }) {
//   const form = useForm<StudentFormData>({
//     resolver: zodResolver(studentSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       address: "",
//       class: "",
//       fatherName: "",
//       fatherPhone: "",
//       motherName: "",
//       motherPhone: "",
//     },
//   });

//   return (
//     <Dialog>
//       <DialogTrigger>Open</DialogTrigger>
//       <DialogContent className="overflow-auto">
//         <DialogHeader>
//           <DialogTitle>Are you absolutely sure?</DialogTitle>
//           <DialogDescription></DialogDescription>
//         </DialogHeader>
//         <form
//           onSubmit={form.handleSubmit((data) => {
//             onSubmit(data);
//             form.reset();
//           })}
//           className="space-y-3"
//         >
//           <FieldSet>
//             <FieldLegend>Student Details</FieldLegend>
//             <FieldGroup>
//               <Field orientation={"vertical"}>
//                 <FieldLabel>Name</FieldLabel>
//                 <Input {...form.register("name")} placeholder="Student name" />
//                 {form.formState.errors.name && (
//                   <FieldDescription className="text-red-500">
//                     {form.formState.errors.name.message}
//                   </FieldDescription>
//                 )}
//               </Field>
//               <Field>
//                 <FieldLabel>Email</FieldLabel>
//                 <Input
//                   {...form.register("email")}
//                   placeholder="Email address"
//                 />
//                 {form.formState.errors.email && (
//                   <FieldDescription className="text-red-500">
//                     {form.formState.errors.email.message}
//                   </FieldDescription>
//                 )}
//               </Field>
//               <Field>
//                 <FieldLabel>Phone</FieldLabel>
//                 <Input {...form.register("phone")} placeholder="Phone number" />
//               </Field>
//               <Field>
//                 <FieldLabel>Address</FieldLabel>
//                 <Input {...form.register("address")} placeholder="Address" />
//               </Field>
//               <Field>
//                 <FieldLabel>Class</FieldLabel>
//                 <Input {...form.register("class")} placeholder="Class" />
//               </Field>
//             </FieldGroup>
//           </FieldSet>

//           <FieldSeparator />

//           <FieldSet>
//             <FieldLegend>Parents Information</FieldLegend>
//             <FieldGroup>
//               <Field>
//                 <FieldLabel>Father Name</FieldLabel>
//                 <Input {...form.register("fatherName")} />
//               </Field>
//               <Field>
//                 <FieldLabel>Father Phone</FieldLabel>
//                 <Input {...form.register("fatherPhone")} />
//               </Field>
//               <Field>
//                 <FieldLabel>Mother Name</FieldLabel>
//                 <Input {...form.register("motherName")} />
//               </Field>
//               <Field>
//                 <FieldLabel>Mother Phone</FieldLabel>
//                 <Input {...form.register("motherPhone")} />
//               </Field>
//             </FieldGroup>
//           </FieldSet>

//           <Field orientation="horizontal">
//             <Button type="submit">Submit</Button>
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => form.reset()}
//             >
//               Reset
//             </Button>
//           </Field>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

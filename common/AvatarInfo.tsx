import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarInfoProps {
  name: string;
  email: string;
}
const AvatarInfo = ({  name, email }: AvatarInfoProps) => {
  return (
    <div className="flex items-center gap-3 min-w-[220px]">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="font-semibold leading-tight">{name}</p>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
    </div>
  );
};

export default AvatarInfo;

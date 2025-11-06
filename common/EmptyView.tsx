import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface EmptyViewProps {
    title: string;
    handler: () => void;
}

const EmptyView:React.FC<EmptyViewProps> = ({ title, handler }) => {
  const pathname = usePathname()
  return (
    <div className="h-full flex flex-col justify-center items-center">
        <Image
          src="/no-data.svg"
          alt="not-data-img"
          width={400}
          height={200}
          className="object-cover"
          priority
        />
        <h1 className="text-slate-700 font-medium text-lg 2xl:text-2xl italic text-center">
          No {title} found. Please add {title} to see them listed here.
        </h1>
        <Link href={`${pathname}/new`} className='flex mt-4 items-center gap-1 bg-primary p-2 rounded-md text-white'>
          <PlusIcon size={14}/> Add New {title.slice(0,-1)}
        </Link>
      </div>
  )
}

export default EmptyView
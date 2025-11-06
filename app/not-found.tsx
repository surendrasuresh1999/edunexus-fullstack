import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
          src="/404.svg"
          alt="not-found-img"
          width={300}
          height={200}
          className="object-cover"
          priority
        />
      <div className="flex gap-2 items-center flex-col">
        <h2 className="text-2xl font-medium m-0">Page not found</h2>
        <p className="text-gray-500 max-w-[480px]">
          The page you are looking for doesn't exist.
        </p>
        <Link
            href="/dashboard/students"
            className="bg-primary/80 text-white text-md px-4 py-1 rounded-md transition"
          >
            Go Home
          </Link>
      </div>
    </div>
  );
};

export default NotFound;

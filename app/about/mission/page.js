import Button from "@/components/button";
import thumb from "@/public/thumb.jpg";
import Image from "next/image";

export function generateMetadata() {
  return {
    title: "About - Mission",
    openGraph: {
      images: ["../../../public/thumb.jpg"],
    },
  };
}

export default function Mission() {
  return (
    <main className="mt-10">
      <div>Mission Page</div>
      <div className="w-96">
        <Image src={thumb} alt="thumb" placeholder="blur" />
      </div>
      <Button />
    </main>
  );
}

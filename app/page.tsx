import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">CARZ</h1>

      <div className="mt-6 flex gap-4">
        <Link href="/cars">
          <Button>Browse Cars</Button>
        </Link>

        <Link href="/sell">
          <Button variant="outline">Sell Car</Button>
        </Link>
      </div>
    </main>
  );
}
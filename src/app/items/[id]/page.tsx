import Image from "next/image";
import { notFound } from "next/navigation";
import { getItem } from "@/lib/data";
import { AddToCart } from "./add-to-cart";

export const dynamic = "force-dynamic";

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getItem(id);
  if (!item) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-10 space-y-6">
      <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xl bg-neutral-200">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          priority
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{item.name}</h1>
        <p className="text-neutral-700">{item.description}</p>
        <div className="text-xl font-semibold">¥{item.price.toLocaleString()}</div>
      </div>
      <AddToCart itemId={item.id} />
    </div>
  );
}

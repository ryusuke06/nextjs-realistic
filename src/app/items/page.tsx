import Image from "next/image";
import Link from "next/link";
import { listItems } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function ItemsPage() {
  const items = await listItems();
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 space-y-6">
      <h1 className="text-2xl font-bold">商品一覧</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <li key={item.id} className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
            <Link href={`/items/${item.id}`} className="block">
              <div className="relative aspect-[3/2] bg-neutral-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <div className="p-4 space-y-1">
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-xs text-neutral-500 line-clamp-2">{item.description}</div>
                <div className="text-sm font-semibold">¥{item.price.toLocaleString()}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

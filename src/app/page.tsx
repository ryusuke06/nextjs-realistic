import Image from "next/image";
import Link from "next/link";
import { listItems } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const items = await listItems();
  const featured = items.slice(0, 3);
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">のうないストア（サンプル）</h1>
        <p className="text-neutral-700">
          このページは Next.js App Router の SSR ページです。リクエストごとに
          サーバ側でレンダリングされます。
        </p>
        <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xl bg-neutral-200">
          <Image
            src="/hero.jpg"
            alt="hero"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">注目の商品</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featured.map((item) => (
            <li key={item.id} className="space-y-2">
              <Link href={`/items/${item.id}`} className="block">
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-neutral-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <div className="mt-2 text-sm font-medium">{item.name}</div>
                <div className="text-xs text-neutral-500">¥{item.price.toLocaleString()}</div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

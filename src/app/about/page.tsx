export const dynamic = "force-dynamic";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 space-y-4">
      <h1 className="text-2xl font-bold">About</h1>
      <p className="text-neutral-700">
        このサンプルアプリは Next.js (App Router) のリソース消費を計測するためのものです。
        SSR ページ、API Route、middleware、next/image を含む現実的な構成にしています。
      </p>
      <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
        <li>App Router (RSC + Client Component)</li>
        <li>next/image (sharp による画像最適化)</li>
        <li>middleware (リクエストヘッダ付与)</li>
        <li>API Routes (/api/health, /api/cart)</li>
      </ul>
    </div>
  );
}

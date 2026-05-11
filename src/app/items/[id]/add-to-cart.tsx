"use client";

import { useState, useTransition } from "react";

export function AddToCart({ itemId }: { itemId: string }) {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const submit = () => {
    setMessage(null);
    startTransition(async () => {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ itemId, count }),
      });
      const json = await res.json();
      setMessage(json.ok ? `カートに追加しました (合計 ${json.total} 点)` : `エラー: ${json.error}`);
    });
  };

  return (
    <div className="flex items-center gap-3">
      <input
        type="number"
        min={1}
        max={10}
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        className="w-20 rounded border border-neutral-300 px-2 py-1"
      />
      <button
        onClick={submit}
        disabled={isPending}
        className="rounded bg-neutral-900 text-white px-4 py-2 text-sm disabled:opacity-50"
      >
        カートに追加
      </button>
      {message && <span className="text-sm text-neutral-600">{message}</span>}
    </div>
  );
}

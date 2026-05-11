export type Item = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const items: Item[] = [
  { id: "001", name: "白いマグカップ", description: "シンプルな日常使いのマグカップ。電子レンジ・食洗機OK。", price: 1200, image: "/card1.jpg" },
  { id: "002", name: "革製ノートカバー", description: "A5 サイズ対応。使い込むほど色が深まる本革。", price: 4800, image: "/card2.jpg" },
  { id: "003", name: "アロマキャンドル", description: "ベルガモットとシダーウッドの落ち着く香り。燃焼時間約30時間。", price: 2400, image: "/card3.jpg" },
  { id: "004", name: "リネンエプロン", description: "首掛けタイプ。ナチュラルな風合いのリネン100%。", price: 3600, image: "/card1.jpg" },
  { id: "005", name: "コーヒードリッパー", description: "陶器製の円錐ドリッパー。1〜2杯抽出に最適。", price: 2800, image: "/card2.jpg" },
  { id: "006", name: "木製まな板", description: "イチョウ材の柔らかいまな板。包丁の刃あたりが良い。", price: 5400, image: "/card3.jpg" },
];

export async function listItems(): Promise<Item[]> {
  await new Promise((r) => setTimeout(r, 5));
  return items;
}

export async function getItem(id: string): Promise<Item | null> {
  await new Promise((r) => setTimeout(r, 5));
  return items.find((i) => i.id === id) ?? null;
}

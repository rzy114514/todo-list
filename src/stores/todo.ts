import { create } from "zustand";

type Item = {
  context: string;
  done: boolean;
  id: number;
};

type Action = {
  create: (context: string) => void;
  remove: (id: number) => void;
  toggle: (id: number) => void;
  setContext: (id: number, context: string) => void;
};

export default create<{ items: Item[] } & Action>((set, get) => ({
  items: [] as Item[],
  create: (context) => {
    // 去除两端空格
    const trimC = context.trim();
    // 获得 items
    const items = get().items;
    if (
      items.find((item) => item.context === trimC) !== undefined ||
      trimC === ""
    )
      return; // 如果 相同 context 存在 或者 trimC 为空 直接返回

    set({ items: [...items, { id: Date.now(), context: trimC, done: false }] }); // 创建
  },
  remove: (id) => set({ items: get().items.filter((item) => item.id !== id) }), // 保留 id 和目标 id 不同的 item
  toggle: (id) =>
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      ),
    }), // 切换 done 取反
  setContext: (id, context) =>
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, context } : item
      ), // 修改目标项目的 context
    }),
}));

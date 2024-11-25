import { Store } from "@tauri-apps/plugin-store";

const store = await Store.load("keychain.json");

export default {
  async get(key: string): Promise<Record<string, any>> {
    const value = await store.get<any>(key);
    let data: any;
    if (value) {
      data = JSON.parse(value);
    } else {
      throw new Error("Value not available.");
    }
    return data;
  },
  async set(
    key: string,
    value: Record<string, any>
  ): Promise<Record<string, any>> {
    await store.set(key, JSON.stringify(value));
    return value;
  },
  async remove(key: string): Promise<boolean> {
    await store.delete(key);
    return true;
  },
  async clear(): Promise<boolean> {
    await store.clear();
    return true;
  },
};

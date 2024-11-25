import { Preferences } from "@capacitor/preferences";

/**
 * Keychain adapter
 */
export default {
  async get(key: string): Promise<Record<string, any>> {
    const { value } = await Preferences.get({ key });
    let data: any;
    if (value) {
      data = JSON.parse(value);
    }
    return data;
  },
  async set(
    key: string,
    value: Record<string, any>
  ): Promise<Record<string, any>> {
    await Preferences.set({ key, value: JSON.stringify(value) });
    return value;
  },
  async remove(key: string): Promise<boolean> {
    await Preferences.remove({ key });
    return true;
  },
  async clear(): Promise<boolean> {
    await Preferences.clear();
    return true;
  },
};

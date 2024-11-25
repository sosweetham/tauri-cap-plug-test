import { Store } from "@tauri-apps/plugin-store";

const store = await Store.load("profiles.json");

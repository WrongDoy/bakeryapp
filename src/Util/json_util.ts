import { readFileSync } from "fs";
import { Item } from "./types_util";

export const readItemJson = (): Item[] => {
    const json = readFileSync("./Others/items.json", "utf8");
    const items: Item[] = JSON.parse(json);

    return items;
}
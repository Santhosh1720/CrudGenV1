import { StartFunc as GetEndPoints } from "./GetEndPoints/EntryFile.js";

let StartFunc = ({ inTablesCollection, inTo }) => {
    GetEndPoints({ inTablesCollection, inTo });
};

export { StartFunc };
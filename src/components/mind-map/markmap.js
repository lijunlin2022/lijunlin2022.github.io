import { loadCSS, loadJS } from "markmap-common";
import { Transformer } from "markmap-lib";
import * as markmap from "markmap-view";

export const transformer = new Transformer();
const { scripts, styles } = transformer.getAssets();

const isClient = typeof window !== "undefined";

if (isClient) {
  loadCSS(styles);
  loadJS(scripts, { getMarkmap: () => markmap });
}

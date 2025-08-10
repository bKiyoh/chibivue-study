import { RendererOptions } from "../runtime-core/renderer";

export const nodeOps: RendererOptions<Node> = {
  // 追加
  createElement: (tagName) => {
    return document.createElement(tagName);
  },

  // 追加
  createText: (text: string) => {
    return document.createTextNode(text);
  },

  setElementText(node, text) {
    node.textContent = text;
  },

  // 追加
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
};

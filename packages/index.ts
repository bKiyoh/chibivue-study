/**
 * @typedef {Object} Options
 * @property {() => string} render - HTML文字列を返す描画関数
 */
export type Options = {
  render: () => string;
};

/**
 * @typedef {Object} App
 * @property {(selector: string) => void} mount - 指定したDOMセレクタに描画する関数
 */
export type App = {
  mount: (selector: string) => void;
};

/**
 * アプリケーションを作成する関数。
 * @param {Options} options - 描画内容を返す `render` 関数を含むオプション
 * @returns {App} `mount` 関数を持つアプリケーションインスタンス
 */
export const createApp = (options: Options): App => {
  return {
    mount: (selector) => {
      const root = document.querySelector(selector);
      if (root) {
        root.innerHTML = options.render();
      }
    },
  };
};

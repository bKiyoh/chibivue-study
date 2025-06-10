import { createApp } from "chibivue";

/**
 * アプリケーションインスタンスを作成する。
 * @type {App}
 * @description
 * `render` 関数を指定して `createApp` を呼び出すことで、
 * HTML描画処理を行うアプリケーションを作成する。
 */
const app = createApp({
  render() {
    return "Hello world.";
  },
});

/**
 * 作成したアプリケーションを指定のDOM要素にマウントする。
 *
 * @function
 * @param {string} selector - DOMセレクタ（例: "#app"）
 * @description
 * 指定したセレクタに対応するDOM要素が存在すれば、
 * その中に `render` 関数の返すHTML文字列を描画する。
 */
app.mount("#app");

# クリック時に画像を読み込むJSライブラリ（要jQuery3）  
## 何ができるのか
画像を非同期で読み込む関数。  
あらかじめ全部の画像を読み込むのではなく、必要なタイミングで動的に読み込むようにする。  
画像を読み込んだ後にコールバック関数を呼び出すことも可能。（省略可）  
URL遷移のないSPAでの使用を想定。  
## 最初の読み込みを短時間で終わらせたい、画像が多いときなどに有用
関数の実行毎に中の変数は書き換わり、参照不可となった段階でガベージコレクタが前のデータを捨てメモリを解放する、はず。そのため画像の点数が多いギャラリーのようなサイトだと省メモリですむ、はず。  
(JSのガベージコレクションは自動で実行され、コントロールはできないとのこと)  
<https://ja.javascript.info/garbage-collection>  

モバイルや通信環境がナローな場合にも有用かも。
## 使い方
画像のパスを対象のタグ内のカスタムデータ属性に記述しておき、clickをトリガーにして画像を読み込む。読み込んだ画像は任意のidを持つimgタグのsrc属性に追加することによって表示される。　　
* jQuery3必須
* `<img id="ayn id"></img>`読み込んだ画像を表示するimgタグに任意のidを記述
* `data-image_url='image path'`クリックする対象のタグにカスタムデータで画像へのパスを記述
* `<script type="text/javascript" src="./any/dynamicImageLoader.js"></script>`上記DOM要素を記述した後にライブラリを読み込む
* コールバック関数が必要なら`dynamicImageLoader();`の実行より先に定義しておく
* `dynamicImageLoader(id,func);`を実行（第一引数に表示用imgタグのid、第二引数にコールバック関数（省略可）

## 注意点
* クリックをトリガーにしているのでスクロールなどには非対応  
* 訳あってレガシーな環境で使用する必要があったため、モダンなFetch APIは使わず$ajaxで実装。jQuery必須。。  
* ちなみにjQuery1系だとajaxにおいてテキストしか扱えずバイナリを読み込めない。
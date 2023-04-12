module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"], //더블 쿼터 사용
    "@typescript-eslint/quotes": ["error", "double"], //더블 쿼터 사용
    "no-unused-vars": "off", //사용하지 않는 변수 경고 중복
    "spaced-comment": "off", //주석 뒤에 쓰지말라는 경고
    "@typescript-eslint/no-unused-vars": "warn", //사용하지 않는 변수 경고
    "jsx-ally/control-has-associated-label": "off", //상호작용하는 엘리먼트에 label 삽입
    "react/no-array-index-key": "off", //key값으로 index를 사용
    "comma-dangle": "off", //마지막에 ,을 넣어주지 않는다
    "arrow-body-style": "off", //화살표 함수 안에 return을 사용할 수 있다
    "react/no-unescaped-entities": "off", //문자열 내에서 " ' > } 허용
    "react/prop-types": "off", //prototypes를 사용하지 않는다
    "object-curly-newline": "off", //{ 다음 줄바꿈을 강제로 사용하지 않는다
    "react/jsx-one-expression-per-line": "off", //한 라인에 여러 개의 JSX를 사용할 수 있다
    "implicit-arrow-linebreak": "off", //화살표 함수 다음에 줄 바꿈을 사용할 수 있다
    "no-shadow": "off", //같은 이름의 변수를 선언할 수 있다
    "operator-linebreak": "off", //연산자 다음에 줄 바꿈을 사용할 수 있다
    "react/react-in-jsx-scope": "off", //jsx를 사용할 때 React를 꼭 import 하지 않아도 된다
    "react/jsx-props-no-spreading": "off", //props를 펼칠 수 있다
    "jsx-ally/anchor-is-valid": "off", //a tag에 href 없이 사용할 수 있다
    "global-require": "off", //require를 사용할 수 있다
    "no-use-before-define": "off", //선언 전에 사용하지 말라
    "import/prefer-default-export": "off", //export default 권장
    "no-param-reassign": "off", //파라미터 재할당 x
    "jsx-ally/label-has-associated-control": "off",
    "no-invalid-css": "off",
    "no-confusing-arrow": "off",
    "react/jsx-curly-newline": "off",
    indent: "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};

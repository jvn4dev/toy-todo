# 📃 TodoList - toy project

리액트 클론 프로젝트를 진행하면서 상태관리 툴을 사용하지 않을 때의 불편함을 좀 많이 느꼈다.
혼자 가볍게 토이프로젝트를 진행하면서 `Redux` 로 상태관리를 하는 법을 연습해보려고 한다. 이후에 팀프로젝트에서 쓸 `Redux-toolkit`까지 변환해보는 연습을 해볼 예정이다.

## 🛫 계획

### 스타일링 - `PostCSS` -> `tailwind CSS`

- `PostCSS`의 자동모듈화를 통해 css 파일간에 간섭을 신경쓰지 않고 `className`을 지정할 수 있다는게 아주 편하다.
- 다만 vscode에 너무 많은 창들을 띄워놓고 컴포넌트들을 이리저리 돌아다니면서 스타일링 하려다보니 너무 복잡하다는 생각이 든다.
- 위와 같은 문제때문에 component내에서 스타일링까지 관리하는 `styled-components`와 `tailwind`등을 고민하다가 이번 팀프로젝트에서 가능하다면 `tailwind`를 활용해보기로 하여 적용해볼 예정이다.
- 디자인 참고는 apple의 미리알림 어플을 참고하여 스타일링을 해볼 예정이다. ~~내가 앱등이기 때문이다.🍎~~

<br />

### 상태관리 - `Redux` -> `Redux-toolkit`

- 애초에 이 프로젝트를 하게 된 계기도 상태관리를 `Redux`로 관리하는 것을 연습하기 위한 프로젝트이기에 `Redux`를 먼저 적용해본 뒤에 `Redux-toolkit`으로 변환하는 작업까지 해볼 예정이다.

<br />

### Data - `Firebase Realtime DB`

- 클론코딩에서 배운 `firebase`를 활용해서 더미데이터말고 실제 데이터를 CRUD하는 쪽으로 만들어볼 생각이다. 배운 놈들을 적극적으로 활용해보자!🔥
- 욕심이 난다면 로그인 기능까지 `firebase`의 provider를 활용하여 구글 OAuth 로그인도 구현해볼 예정이다.
  <br />

## 📝 history

<details>
  <summary>v0.0.1: 더미데이터를 활용하여 할일 목록에 할일들을 추가할 수 있다. 완료를 선택하면 체크가 된다. 기본적인 스타일링까지는 적용해뒀다.</summary>
  [클릭하여 확인](https://user-images.githubusercontent.com/77430059/134646417-6ea1fbf4-3132-48f8-96fb-9530db71035a.gif)

</details>

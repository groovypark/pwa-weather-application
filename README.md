# pwa-weather-application

## DEMO
[http://pwa-weather-application.firebaseapp.com/](http://pwa-weather-application.firebaseapp.com/)
크롬 창의 경우, 상단에 있는 Load Unsafe Scripts를 클릭하셔야 데이터를 받아올 수 있습니다.

## configuration
You have to config the `config/config.json` file before run this application.

config.json example
```json
{
  "token" : "token string of your 서울시 공공 API",
  "clientId" : "clientId of your naver API application"
}
```
서울시 공공 API: http://data.seoul.go.kr/dataList/datasetView.do?infId=OA-2219&srvType=S&serviceKind=1&currentPageNo=1


> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

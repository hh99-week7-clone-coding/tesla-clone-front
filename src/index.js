import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App'
// Provider를 사용하기 위한 import
import { Provider } from 'react-redux';
// store를 곧 생성할 예정
import store from './redux/configStore'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 내가 사용하고싶은 전역상태관리의 범위만큼 Provider로 감싸고
    // 전역상태의 데이터가 들어있는 store를 넘겨준다
    <Provider store={store}>
        <App/>
    </Provider>
);

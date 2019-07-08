import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react'
import { LocaleProvider } from 'antd';
import { HashRouter } from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';


import GlobalModel from './GlobalModel';
import App from './App';

const globalModel = new GlobalModel();

ReactDom.render(
    <Provider globalModel={ globalModel }>
        <LocaleProvider locale={zh_CN}>
            <HashRouter>
                <App />
            </HashRouter>
        </LocaleProvider>
    </Provider>,
    document.querySelector('#root')
);
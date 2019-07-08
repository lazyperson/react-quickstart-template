import React from 'react';
import { Button } from 'antd';

export default ({history}) => {

    const toSettingPage = () => {
        history.push('/settings');
    }

    const toDisplayPage = () => {
        history.push('/display');
    }

    return  (
        <div>
            <h2>当前是 Home 页面</h2>
            <Button style={{ marginLeft: 50 }} onClick={ toSettingPage }>Seeting 界面</Button>
            <Button style={{ marginLeft: 30 }} type="primary" onClick={ toDisplayPage }>Display 界面</Button>
        </div>
    )
}


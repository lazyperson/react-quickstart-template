import React from 'react'
import { Button } from "antd";

export default ({ history }) => {
    return (
        <div>
            <h2>404</h2>
            <Button type="primary" onClick={ () => history.replace('/') }>返回首页</Button>
        </div>
    )
}
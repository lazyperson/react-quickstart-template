import { observable, action } from 'mobx';

export default class GlobalModel {

    @observable username = '张三丰';

    @action
    changeUserName = (name) => {
        this.username = name;
    }

}

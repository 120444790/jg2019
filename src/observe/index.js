import { isObject } from '../util/index';
class Observer {
    constructor(value) {
        this.walk(value);
    }
    walk(data) {
        let keys = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = data[key];
            defineReactive(data, key, value);
        }
    }
}
function defineReactive(data, key, value) {
    observe(value)
    Object.defineProperty(data, key, {
        get() {
            return value;
        },
        set(newValue) {
            if (newValue === value) return;
            observe(newValue);
            console.log("值发生了改变");
            value = newValue;
        }
    })
}
export function observe(data) {
    const isObj = isObject(data);

    if (!isObj) {
        return
    }
    return new Observer(data);
}
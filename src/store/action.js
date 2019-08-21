import {AGE_UP,AGE_DOWN} from './constants';

export function increaseAge(data) {
    console.log("sagfdsd",data);
    return {
        type:AGE_UP,
        data
    };
}
export function decreaseAge(data) {
    return {
        type:AGE_DOWN,
        data
    };
}
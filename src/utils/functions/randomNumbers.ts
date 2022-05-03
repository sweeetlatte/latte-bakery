import { IBlog } from "../../types";

export function randomNumber(array: IBlog[], quantity: number) {
    var indexArray: number[] = [];
    let pointer: number = -1;

    for (let i = 0; i < quantity; i++) {
        pointer = Math.floor(Math.random() * array.length);
        if (!indexArray.includes(pointer)) {
            indexArray.push(pointer);
        } else i--;
    }

    return array.filter(function (arrayItem, index) {
        return indexArray.includes(index) && arrayItem;
    });
}

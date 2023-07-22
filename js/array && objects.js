"use strict";

const students = ["Peter", "Andrew", "Ann", "Mark", "Josh", "Sandra", "Cris", "Bernard", "Takesi", "ffff", "sssss"];

function sortStudentsByGroups(arr) {
    arr.sort();    
    let arr_one = [];
    let arr_two = [];
    let arr_three = [];
    let arr_four = [];
    let arr_all = [];
    let sentence = "";
    let flag = true;
    while (flag == true) {
        if (arr_one.length < 3) {
            for (let i = 1; i <= 3; i++) {
                arr_one.push(arr[i-1]);
            }
        } else if (arr_two.length < 3) {
            for (let i = 4; i <= 6; i++) {
                arr_two.push(arr[i-1]);
            }
        } else if (arr_three.length < 3) {
            for (let i = 7; i <= 9; i++) {
                arr_three.push(arr[i-1]);
            }
        } else if (arr_one.length == 3 && arr_two.length == 3 && arr_three.length == 3) {
            flag = false;
        }
    }

    if (flag == false) {  
        
        for (let i = 9; i < arr.length; i++) {
            arr_four.push(arr[i]);
        }
        if (arr.length == 9) {
            sentence += "Оставшиеся студенты: -";
        } else {
            sentence += `Оставшиеся студенты: ${arr_four.join(", ")}`;
        }
    }
    arr_all = [[...arr_one], [...arr_two], [...arr_three], sentence];
    return arr_all;
}

sortStudentsByGroups(students);
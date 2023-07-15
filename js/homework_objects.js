"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ["ru", "eng"],
        programmingLangs: {
            js: "20%",
            php: "10%"
        },
        exp: "1 month"
    }
};


function showProgrammingLangs(plan) {
    while (Object.keys(personalPlanPeter["skills"]["programmingLangs"]) == []) {
        console.log("");
    }
    for (let key in plan) {
        while (typeof (plan[key]) === "object") {
            for (let i in plan[key]) {
                while (typeof (plan[key][i]) === "object") {
                    for (let j in plan[key][i]) {
                        console.log(`Язык ${j} изучен на ${plan[key][i][j]} Язык ${j} изучен на ${plan[key][i][j]}`);
                    }
                }
            }
        }
    }
}

showProgrammingLangs(personalPlanPeter);
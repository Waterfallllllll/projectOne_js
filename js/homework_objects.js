"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ["ru", "eng"],
        programmingLangs: {

        },
        exp: "1 month"
    },
    showAgeAndLangs: function (sss) {
        const { languages } = sss["skills"];
        let sentence = "";
        for (let value of languages) {
            sentence += `${value} `;
        }

        return `Мне ${sss["age"]} и я владею языками: ${sentence.toUpperCase()}`;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);





function showProgrammingLangs(plan) {

    const { programmingLangs } = plan["skills"];
    let sentence = "";
    for (let key in programmingLangs) {
        sentence += `Язык ${key} изучен на ${programmingLangs[key]} `;
    }
    console.log(sentence);
}

showProgrammingLangs(personalPlanPeter);


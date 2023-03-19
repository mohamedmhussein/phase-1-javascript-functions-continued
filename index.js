// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office"){
                return `This Monday, I will ${activity}.`
}

function wrapAdjective(visual="*"){
    function innerFunction(input = "special"){
        return `You are ${visual}${input}${visual}!`
    }
    return innerFunction
}
console.log(wrapAdjective("%")("a dedicated programmer"))
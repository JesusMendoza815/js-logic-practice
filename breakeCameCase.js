function solution(str) {
    
    str = str.split("");
    str.forEach((e, i) => {
        if(e.match(/[A-Z]/)) {
            str.splice(i, 1," " + e);
        }
    });
}

solution("CamelCase");
//使用职责链

function ruleLength(password: string, score: number): number {
    if (password.length >= 6 && password.length <= 8) {
        score = score + 10
    } else if (password.length >= 9&&password.length<=18) {
        score = score + 25
    }
    else {
        score = score - 100
    }
    return score
}
function ruleLetter(password: string, score: number): number {

    if (/.*[A-Za-z]+.*/.test(password)) {
        if (/.*[A-Z]+.*/.test(password)&&/.*[a-z]+.*/.test(password)) {
            score += 20
        } else {
            score += 10
        }
    }
    return score
}

function ruleNumber(password: string, score: number): number {
    let num = password.replace(/\D/g, '').length
    if (num >= 1 && num < 3) {
        score += 10
    } else if (num >= 3) {
        score += 20
    }

    return score
}


function ruleSymbol(password: string, score: number): number {
    let num = password.replace(/[0-9]/g, '').replace(/[A-Za-z]/g,'').length
    if (num == 1 ) {
        score += 10
    } else if (num > 1) {
        score += 25
    }

    return score
}

function ruleAward(password: string, score: number): number {
       let hasNum=password.replace(/\D/g, '').length>0
       let hasLetter=/.*[A-Za-z]+.*/.test(password)
       let hasSymbol=password.replace(/[0-9]/g, '').replace(/[A-Za-z]/g,'').length
       let hasCase=/.*[A-Z]+.*/.test(password)&&/.*[a-z]+.*/.test(password)
       if(hasNum&&hasLetter&&hasSymbol&&hasCase){
           score+=5
       }else if(hasNum&&hasLetter&&hasSymbol){
        score+=3
       } else if(hasNum&&hasLetter){
        score+=2
       } 
    // if (/^[0-9a-zA-Z]*$/.test(password)) {
    //     score += 2
    // } 

    return score
}
function rulePunishment(password: string, score: number): number {
    //如果相同 就-50


    //数字连续
    var name:any=password; //需要验证的字符串
    var lcontinuity=0; //用于连续个数的统计
    var isSame=0
    for(var i=1;i<name.length;i++){
        if(((name[i].charCodeAt())-(name[i-1].charCodeAt())==1)||((name[i].charCodeAt())-(name[i-1].charCodeAt())==-1)){ //1正序连贯；-1倒序连贯
            lcontinuity+=1; //存在连贯：计数+1
            }; 
            if(((name[i].charCodeAt())-(name[i-1].charCodeAt())==0)){ //1正序连贯；-1倒序连贯
                isSame+=1; //存在连贯：计数+1
                }; 
        }
     
       
        if(lcontinuity>(name.length-2)){ 
            score=score-50
        }else if(isSame===(name.length-1)){
            score=score-50
        }


    //如果有连续就-50
    return score
}

enum Level { error, weak, normal, high }
interface res {
    score: number,
    level: string
}

function vail(password: string): res {
    let score = 0, level = ""//
    score = ruleLength(password, score)
    score = ruleLetter(password, score)
    score= ruleNumber(password, score)
    score = ruleSymbol(password, score)
    score = ruleAward(password, score)
     score = rulePunishment(password, score)
    //职责链
    if (score <= 0) {
        level = Level[Level.error]
    } else if (score < 60) {
        level = Level[Level.weak]
    } else if (score < 80) {
        level = Level[Level.normal]
    } else {
        level = Level[Level.high]
    }

    //数值判断
    return { score, level }
}

export default vail


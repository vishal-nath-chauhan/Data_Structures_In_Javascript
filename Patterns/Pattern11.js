function Pattern(num){
    let count=1
    for(let row=1;row<=num;row++){
        let temp=''
        for(let col=1;col<=row;col++){
            temp+=`${count} `
            count++
        }
        console.log(temp);
    }
}
Pattern(4)
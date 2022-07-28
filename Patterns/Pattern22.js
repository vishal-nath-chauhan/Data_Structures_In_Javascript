function Pattern(num){
    let mid = parseInt(num/2);
    let stars = num;
    let spaces =0
    for(let row=1;row<=num;row++){
        let temp=''
        for(let col=1;col<=num;col++){
            if(row===1 || row===num){
                temp+='*    '
            }
            else if(row<mid){
                
            }
            else {
                temp+='     '
            }
        }
        console.log(temp);
    }
}
Pattern(7)
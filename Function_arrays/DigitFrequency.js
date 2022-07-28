function findCount(num,digit){
    let count =0;

    while(num>0){
        let remainder = num%10;
        if(remainder===digit)count++;
        num=parseInt(num/10);
    }
    console.log(count);

}


findCount(994543234,4)
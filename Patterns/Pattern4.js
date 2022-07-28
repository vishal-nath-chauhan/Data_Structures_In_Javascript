function Pattern(num){
    let stars = num;
    let spaces =0;
    for(let i =1;i<=num;i++){
        let temp=''
        while(spaces>0){
            temp+='     '
            spaces--
        }
        while(stars>0){
            temp+='*    '
            stars--
        }
        spaces=i;
        stars=num-i;
        console.log(temp);
    }
    
}
Pattern(7)

// pattern
// *	*	*	*	*	
// 	    *	*	*	*	
// 		    *	*	*	
// 			    *	*	
// 				    *
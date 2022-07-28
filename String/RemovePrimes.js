function isPrime(num) {
	if (num <= 1) {
		return false;
	}
	for (let i = 2; i * i <= num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

function RemovePrimes(arr){
    let final=[]
    for(let num=0;num<arr;num++){
        if(!isPrime(arr[num])){
            final.push(arr[num])
        }
    }
    console.log(final);
}
RemovePrimes([3 ,12 ,13 ,15])

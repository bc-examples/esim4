const myMath={
    calcSum(a,b){
        return a+b;
    },
    factorial(n){
        let result=1;
        for(let x=1; x<=n; x++){
            //result=result*x;
            //tai
            result*=x;
        }
        return result;
    },
    binom(n,k){
        if(n<=k){
            return false;
        }
        let result=(this.factorial(n))/(this.factorial(n-k)*this.factorial(k));
        return result;
    }
};

// let a=myMath.calcSum(5,6);
// console.log(a);
module.exports = myMath;
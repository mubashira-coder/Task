
let arr=[[1,1,0],
        [1,0,1],
        [0,0,0]]
for(let key of arr) {
    let newarr=key.reverse().map((num)=>{
        if(num===0){
return 1;
        }else{
            return 0;
        }
        
    })
    console.log(newarr)
} 




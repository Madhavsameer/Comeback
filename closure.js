function outer(){
    let num=1;
    function inner(){
        num++;
        console.log(num);
    }
    inner();
    inner();
    inner();
    inner();
    inner();
}

outer();
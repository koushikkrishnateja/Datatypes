for(let i = 1; i<=5;i++){
    for(let j =1; j<=i;j++){
        if(i==j|| i+j==6){
            document.writeln("*")
        }else{
            document.write("&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}
const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    return res.send("hello");
})

app.post("/", (req, res) =>{
    const palavra = req.body;
    var json2string=JSON.stringify(palavra)
    const obj = JSON.parse(json2string)
    var result = obj.frase.split('0')
    console.log(result)
    var contagem =[]
    var frase =[]
    for(i=0;i<result.length;i++){
    contagem.push(result[i].length)
    for(j=i;j<contagem.length;j++){
      if(result[i].startsWith(2)||result[i].startsWith('#2')){
        if(result[i].length===1){
          frase.push('a')
        }else if(result[i].length===2){
          frase.push('b')
        }else if(result[i].length===3){
          frase.push('c')}
      }else if(result[i].startsWith(3)){
        if(result[i].length===1){
          frase.push('d')
        }else if(result[i].length===2){
          frase.push('e')
        }else if(result[i].length===3){
          frase.push('f')}
      }else if(result[i].startsWith(4)){
        if(result[i].length===1){
          frase.push('g')
        }else if(result[i].length===2){
          frase.push('h')
        }else if(result[i].length===3){
          frase.push('i')
        }
      }else if(result[i].startsWith(5)){
        if(result[i].length===1){
          frase.push('j')
        }else if(result[i].length===2){
          frase.push('k')
        }else if(result[i].length===3){
          frase.push('l')
        }
      }else if(result[i].startsWith(6)){
        if(result[i].length===1){
          frase.push('m')
        }else if(result[i].length===2){
          frase.push('n')
        }else if(result[i].length===3){
          frase.push('o')
        }
      }else if(result[i].startsWith(7)){
        if(result[i].length===1){
          frase.push('p')
        }else if(result[i].length===2){
          frase.push('q')
        }else if(result[i].length===3){
          frase.push('r')
        }else if(result[i].length===4){
          frase.push('s')
        }
      }else if(result[i].startsWith(8)){
        if(result[i].length===1){
          frase.push('t')
        }else if(result[i].length===2){
          frase.push('u')
        }else if(result[i].length===3){
          frase.push('v')
        }
      }else if(result[i].startsWith(9)){
        if(result[i].length===1){
          frase.push('w')
        }else if(result[i].length===2){
          frase.push('x')
        }else if(result[i].length===3){
          frase.push('y')
        }else if(result[i].length===3){
          frase.push('z')
        }
      }
    }
}
//
frase = frase.join('')
console.log({ myMessage: contagem,result,frase })
return res.json(frase)
})


app.listen(3333, ()=>{
    console.log('server running...');
})
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
  if(result[i].startsWith(1)||result[i].startsWith('#1')){
    frase=['Opção inválida!']
    break
  }
  for(j=i;j<contagem.length;j++){
    if(result[i].startsWith(2)||result[i].startsWith('#2')){
      if(contagem[i]===1 || contagem[i]-1===1 && result[i].startsWith('#2')){
        if(contagem[i]===1){
          frase.push('a')
        }else{
          frase.push('A')
        }
      }else if(contagem[i]===2 || contagem[i]-1===2 && result[i].startsWith('#2')){
        if(contagem[i]===2){
          frase.push('b')
        }else if(contagem[i]-1===2){
          frase.push('B')
        }
      }else if(contagem[i]===3 || contagem[i]-1===3 && result[i].startsWith('#2')){
        if(contagem[i]===3){
          frase.push('c')
        }else{
          frase.push('C')
        }
      }
    }else if(result[i].startsWith(3)||result[i].startsWith('#3')){
      if(contagem[i]===1 || contagem[i]-1===1 && result[i].startsWith('#3')){
        if(contagem[i]===1){
          frase.push('d')
        }else{
          frase.push('D')
        }
      }else if(contagem[i]===2 || contagem[i]-1===2 && result[i].startsWith('#3')){
        if(contagem[i]===2){
          frase.push('e')
        }else if(contagem[i]-1===2){
          frase.push('E')
        }
      }else if(contagem[i]===3 || contagem[i]-1===3 && result[i].startsWith('#3')){
        if(contagem[i]===3){
          frase.push('f')
        }else{
          frase.push('F')
        }
      }
    }else if(result[i].startsWith(4||result[i].startsWith('#4'))){
      if(contagem[i]===1 || contagem[i]-1===1 && result[i].startsWith('#4')){
        if(contagem[i]===1){
          frase.push('g')
        }else{
          frase.push('G')
        }
      }else if(contagem[i]===2 || contagem[i]-1===2 && result[i].startsWith('#4')){
        if(contagem[i]===2){
          frase.push('h')
        }else if(contagem[i]-1===2){
          frase.push('H')
        }
      }else if(contagem[i]===3 || contagem[i]-1===3 && result[i].startsWith('#4')){
        if(contagem[i]===3){
          frase.push('i')
        }else{
          frase.push('I')
        }
      }
    }else if(result[i].startsWith(5||result[i].startsWith('#5'))){
      if(contagem[i]===1 || contagem[i]-1===1 && result[i].startsWith('#5')){
        if(contagem[i]===1){
          frase.push('j')
        }else{
          frase.push('J')
        }
      }else if(contagem[i]===2 || contagem[i]-1===2 && result[i].startsWith('#5')){
        if(contagem[i]===2){
          frase.push('k')
        }else if(contagem[i]-1===2){
          frase.push('K')
        }
      }else if(contagem[i]===3 || contagem[i]-1===3 && result[i].startsWith('#5')){
        if(contagem[i]===3){
          frase.push('l')
        }else{
          frase.push('L')
        }
      }
    }else if(result[i].startsWith(6)||result[i].startsWith('#6')){
      if(contagem[i]===1 || contagem[i]-1===1 && result[i].startsWith('#6')){
        if(contagem[i]===1){
          frase.push('m')
        }else{
          frase.push('M')
        }
      }else if(contagem[i]===2 || contagem[i]-1===2 && result[i].startsWith('#6')){
        if(contagem[i]===2){
          frase.push('n')
        }else if(contagem[i]-1===2){
          frase.push('N')
        }
      }else if(contagem[i]===3 || contagem[i]-1===3 && result[i].startsWith('#6')){
        if(contagem[i]===3){
          frase.push('o')
        }else{
          frase.push('O')
        }
      }
    }else if(result[i].startsWith(7)||result[i].startsWith('#7')){
      if(contagem[i]===1 || contagem[i]-1===1 && result[i].startsWith('#7')){
        if(contagem[i]===1){
          frase.push('p')
        }else{
          frase.push('P')
        }
      }else if(contagem[i]===2 || contagem[i]-1===2 && result[i].startsWith('#7')){
        if(contagem[i]===2){
          frase.push('q')
        }else if(contagem[i]-1===2){
          frase.push('Q')
        }
      }else if(contagem[i]===3 || contagem[i]-1===3 && result[i].startsWith('#7')){
        if(contagem[i]===3){
          frase.push('r')
        }else{
          frase.push('R')
        }
      }else if(contagem[i]===4 || contagem[i]-1===4 && result[i].startsWith('#7')){
        if(contagem[i]===4){
          frase.push('s')
        }else{
          frase.push('S')
        }
      }
    }else if(result[i].startsWith(8)||result[i].startsWith('#8')){
      if(contagem[i]===1 || contagem[i]-1===1 && result[i].startsWith('#8')){
        if(contagem[i]===1){
          frase.push('t')
        }else{
          frase.push('T')
        }
      }else if(contagem[i]===2 || contagem[i]-1===2 && result[i].startsWith('#8')){
        if(contagem[i]===2){
          frase.push('u')
        }else if(contagem[i]-1===2){
          frase.push('U')
        }
      }else if(contagem[i]===3 || contagem[i]-1===3 && result[i].startsWith('#8')){
        if(contagem[i]===3){
          frase.push('v')
        }else{
          frase.push('V')
        }
      }
    }else if(result[i].startsWith(9)||result[i].startsWith('#9')){
      if(contagem[i]===1 || contagem[i]-1===1 && result[i].startsWith('#9')){
        if(contagem[i]===1){
          frase.push('w')
        }else{
          frase.push('W')
        }
      }else if(contagem[i]===2 || contagem[i]-1===2 && result[i].startsWith('#9')){
        if(contagem[i]===2){
          frase.push('x')
        }else if(contagem[i]-1===2){
          frase.push('X')
        }
      }else if(contagem[i]===3 || contagem[i]-1===3 && result[i].startsWith('#9')){
        if(contagem[i]===3){
          frase.push('y')
        }else{
          frase.push('Y')
        }
      }else if(contagem[i]===4 || contagem[i]-1===4 && result[i].startsWith('#9')){
        if(contagem[i]===3){
          frase.push('z')
        }else{
          frase.push('Z')
        }
      }
    }else if(result[i].startsWith('*')||result[i].startsWith('#*')){
      frase.push('.')
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

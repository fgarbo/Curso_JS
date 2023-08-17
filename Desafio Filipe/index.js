// Converta o array "wrongDataFormat" para o objeto do comentário abaixo.

const wrongDataFormat = [
    'preto-PP', //0
    'preto-M',  //1
    'preto-G',  
    'preto-GG',
    'preto-GG',
    'branco-PP',
    'branco-G',
    'vermelho-M',
    'azul-XG',
    'azul-XG',
    'azul-XG',
    'azul-P'
  ]
const correctDataFormact = Object.assign({
    preto: {
      PP: 1,
      M: 1,
      G: 1,
      GG: 2
    },
    branco: {
      PP: 1,
      G: 1
    },
    vermelho: {
      M: 1
    },
    azul: {
      XG: 3,
      P: 1
    }
  });

wrongDataFormat.map((item)=>{return item.split('-')}).map((item1)=>{console.log(item1)});


 
 
  
  
  /*
    {
      preto: {
        PP: 1,
        M: 1,
        G: 1,
        GG: 2
      },
      branco: {
        PP: 1,
        G: 1
      },
      vermelho: {
        M: 1
      },
      azul: {
        XG: 3,
        P: 1
      }
    }
  */
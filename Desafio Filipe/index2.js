const wrongDataFormat = [  'preto-PP',  'preto-M',  'preto-G',  'preto-GG',  'preto-GG',  'branco-PP',  'branco-G',  'vermelho-M',  'azul-XG',  'azul-XG',  'azul-XG',  'azul-P'];

const correctDataFormat = { preto: {
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
  };

for (const item of wrongDataFormat) {
  const [cor, tamanho] = item.split('-');
  correctDataFormat[cor] = correctDataFormat[cor] || {};
  correctDataFormat[cor][tamanho] = (correctDataFormat[cor][tamanho]++);
}

console.log(correctDataFormat);
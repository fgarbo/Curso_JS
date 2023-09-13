// Dados

const data = {
    labels: ['Antes do Consórcio', 'Depois do Consórcio'],
    datasets: [
        {
            label: 'Fatura da Distribuidora (R$)',
            positon, label: 'bottom',
            backgroundColor: '#78808E',
            data: [120, 70]
                               
        },
        {
            label: 'Fatura do Consórcio (R$)',
            backgroundColor: '#151c44',
            data: [0, 20] 
        },
        {
            label: 'Economia Mensal (R$)',
            backgroundColor: '#28ff52',
            data: [0, 30] 
        }
       
    ]
};

// Configurações

const config = {
    type: 'bar',
    data: data,
    options: {
        
        scales: {
            x: {
                stacked: true,   //  eixo X
                
            },
            y: {
                stacked: true, //eixo Y
                beginAtZero: true,
                
            }
        },
      
    }

    
};


// Inicialização

const ctx = document.getElementById('barChart').getContext('2d');
const myChart = new Chart(ctx, config);
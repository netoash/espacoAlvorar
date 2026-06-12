console.log(
"Dashboard carregado"
);

const ctx =
document.getElementById('graficoPacientes');

new Chart(ctx,{

    type:'bar',

    data:{

        labels:[
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai'
        ],

        datasets:[{

            label:'Pacientes',

            data:[
                10,
                15,
                18,
                22,
                30
            ]

        }]
    }

});
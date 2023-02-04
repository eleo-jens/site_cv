Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '50%'
    },
    title: {
        text: '',
        align: 'left'
    },
    tooltip: {
        // useHTML: true,
        // pointFormat: '<b>{point.name}:</b> {point.value} %'
    },
    plotOptions: {
        packedbubble: {
            minSize: '30%',
            maxSize: '200%',
            zMin: 0,
            zMax: 600,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 20
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    colors: ['#ff0066', '#f7a35c', '#90ee7e', '#7cb5ec', '#7798BF', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],    series: [{
        name: 'Back End',
        data: [{
            name: 'PHP',
            value: 140
        }, {
            name: 'C#',
            value: 160
        },
        {
            name: 'ASP.Net MVC',
            value: 140
        },
        {
            name: 'ASP.Net API',
            value: 160
        },
        {
            name: 'Python',
            value: 40
        }]
    }, {
        name: 'Front End',
        data: [{
            name: 'JavaScript',
            value: 80
        },
        {
            name: 'Angular',
            value: 40
        },
        {
            name: 'CSS3',
            value: 60
        },
        {
            name: 'HTML5',
            value: 80
        },
        {
            name: 'jQuery',
            value: 50
        },
        {
            name: 'AJAX',
            value: 70
        },
        {
            name: 'XML',
            value: 50
        }]
    }, {
        name: 'Databases',
        data: [{
            name: 'Modelisation UML',
            value: 60
        },
        {
            name: 'SQL',
            value: 55
        },
        {
            name: 'Microsoft SQL Server',
            value: 55
        },
        {
            name: 'MySQL',
            value: 55
        },
        {
            name: 'phpMyAdmin',
            value: 55
        }]
    }, {
        name: 'Version Control',
        data: [{
            name: 'Git',
            value: 60
        },
        {
            name: 'Github',
            value: 55
        }]
    }, {
        name: 'Project Managment',
        data: [{
            name: 'RAD',
            value: 60
        },
        {
            name: 'SCRUM',
            value: 60
        },
        {
            name: 'Jira',
            value: 70
        }]
    }], 
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                    className: 'small-chart', 
                    height: '100%'
                }
            }
        }]
    }
});


// {
//     name: 'Symfony',
//     value: 0
// },
// {
//     name: 'Node JS',
//     value: 0
// }
// ,
// {
//     name: 'Ionic',
//     value: 0
// }
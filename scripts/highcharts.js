// regarder ceci: https://www.highcharts.com/docs/chart-design-and-style/themes

const theme_switch = document.querySelector(".theme i");

theme_switch.addEventListener("click", function () {

    if(theme_switch.classList.contains("fa-sun")){
        genchart('#141517', '#FFF'); 
    }
    else if(theme_switch.classList.contains("fa-moon")) {
        genchart('#FFF', "#000000"); 
    }
});

const genchart = function (bckColor, color){
    Highcharts.theme = {
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
                 '#FF9655', '#FFF263', '#6AF9C4'],
        chart: {
            backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 255)']
                ]
            },
        },
        title: {
            style: {
                color: '#000',
                font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        subtitle: {
            style: {
                color: '#666666',
                font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        legend: {
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif',
                color: 'black'
            },
            itemHoverStyle:{
                color: 'gray'
            }
        }
    };

    Highcharts.chart('container', {
        chart: {
            type: 'packedbubble',
            height: '50%',
            backgroundColor: bckColor
        },
        title: {
            text: '',
            align: 'left'
        },
        caption : {
            style:{"color": "#ffffff"}
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
        colors: ['#e300d3', '#fa8845', '#4f01db', '#fcc08e', '#fde6d8', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],    
        series: [{
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
            },
            {
                name: 'Symfony',
                value: 100
            },
            {
                name: 'Node JS',
                value: 40
            },
            {
                name: 'Ionic',
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
        },
        legend: {
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif',
                color: color,
            },
            itemHoverStyle:{
                color: 'grey'
            }
        }
    });
    Highcharts.setOptions(Highcharts.theme);
}

genchart('#141517', '#FFF');
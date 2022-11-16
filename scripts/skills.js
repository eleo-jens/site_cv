// import Chart from '../node_modules/chart.js/auto';

const graph = document.getElementById('myGraph');

const data = {
  labels: [
    'C#',
    'PHP',
    'JavaScript',
    'CSS/Html',
    'SQL',
    'Angular', 
    'ASP.Net',
    'Symfony'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [14, 15, 12, 10, 13, 5, 0, 0],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)',
      'rgb(54, 0, 235)',
      'rgb(1, 162, 1)',
      'rgb(54, 0, 1)'
    ]
  }]
};

new Chart(graph, 
  {
  type: 'polarArea',
  data: data,
  options: {}
}); 

/*BUBBLE GRAPH BUG**/

// const data = {
//   datasets: [{
//     label: 'First Dataset',
//     data: [{
//       x: 20,
//       y: 30,
//       r: 15
//     }, {
//       x: 40,
//       y: 10,
//       r: 10
//     }],
//     backgroundColor: 'rgb(255, 99, 132)'
//   }]
// };

// new Chart(graph,
//   {
//     type: 'bubble',
//     data: data,
//     options: {}
//   }
// );

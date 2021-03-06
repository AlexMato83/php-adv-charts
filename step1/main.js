function init() {
  // console.log("ciao");
  getData();
}
$(document).ready(init);


function getData() {

  $.ajax({
    url : "server.php",
    method : "GET",
    success : function(data){

      console.log(data);

      var ctx = $("#line");
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: data.labels,
              datasets: [{
                  label: '# of Votes',
                  data: data.data,
                  backgroundColor: [
                    'rgba(150, 33, 146, 1)',
                    'rgba(82, 40, 204, 1)',
                    'rgba(4, 51, 255, 1)',
                    'rgba(0, 146, 146, 1)',
                    'rgba(0, 249, 0, 1)',
                    'rgba(202, 250, 0, 1)',
                    'rgba(255, 251, 0, 1)',
                    'rgba(255, 199, 0, 1)',
                    'rgba(255, 147, 0, 1)',
                    'rgba(255, 80, 0, 1)',
                    'rgba(255, 38, 0, 1)',
                    'rgba(216, 34, 83, 1)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
    }, error : function(err){
      console.log(err);

    }
  });

}

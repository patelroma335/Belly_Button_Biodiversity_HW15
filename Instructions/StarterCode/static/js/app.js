 const url = "/data/samples.json";

function getPlot(id) {
    
   d3.json(url).then(function(response) {
  
      console.log(response);
   });
}   

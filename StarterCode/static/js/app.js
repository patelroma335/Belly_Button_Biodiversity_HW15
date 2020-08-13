//const url = "https://api.spacexdata.co";
//function getPlot(id) {
    // getting data from the json file
   // d3.json("Data/samples.json").then((data)=> {
       // console.log(data);
      // d3.json("/data/samples.json", function(data) {
       // console.log(data);
   // });

   
       

// Promise Pending
//const dataPromise = d3.json("data/samples.json");
//console.log("Data Promise: ", dataPromise);

  
d3.json("./data/samples.json").then((data)=> {
    console.log(data);
});  

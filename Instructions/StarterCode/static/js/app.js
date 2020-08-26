 
      //console.log("Hello World!");

    function getInfo(id) {
          // Fetch the JSON data and console log it              
          d3.json("samples.json").then((data)=> {
                  var metadata = data.metadata;
                    console.log(metadata)
          
                  // filter meta data info 
                  var result = metadata.filter(meta => meta.id.toString() === id)[0];
          
                  // use d3 to select demographic panel 
                  var Info = d3.select("#sample-metadata");
                  
                  Info.html("");
          
                  // append the info to the panel
                  Object.entries(result).forEach((key) => {   
                          Info.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
                  });
              });
          }
            
            
            
         function getPlots(id) {

            // Fetch the JSON data and console log it
              d3.json("samples.json").then ((sampledata) =>{
                  console.log(sampledata)

                  var samples = sampledata.samples;

                  var resultArray = samples.filter(sampleObj => sampleObj.id == id);
                  console.log(resultArray);

                  var data = resultArray[0];

                  var otu_ids = data.otu_ids;

                  var otu_labels = data.otu_labels;

                  var sample_values = data.sample_values;
                  
                SampleValues = sample_values.slice(0, 10).reverse();  
                console.log(SampleValues);
                console.log(otu_ids.slice(0, 10).reverse());
                console.log(otu_labels.slice(0, 10).reverse());

                var OTU_id = otu_ids.map(d => "OTU " + d);
                console.log(`OTU_IDS: ${otu_ids}`);

                var labels =  sampledata.samples[0].otu_labels.slice(0,10);
                console.log(`OTU_labels: ${otu_labels}`);

                var trace1 = {
                  x: SampleValues,
                  y: OTU_id,
                  text: labels,
                  marker: {
                    color: 'rgb(23, 190, 207)'},
                  type:"bar",
                  orientation: "h",
              };

            // create data variable
           var data = [trace1];
  
           // create layout variable to set plots layout
           var layout1 = {
              title: "The Top10 OTUs",
              yaxis:{
                 tickmode:"linear",
           },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
        };
  
        // create the bar plot
        Plotly.newPlot("bar", data, layout1);
  
        
        var trace2 = {
          x: otu_ids,
          y: sample_values,
          mode: "markers",
          marker: {
              size: sample_values,
              color: otu_ids
          },
          text: otu_labels

      };

      // set the layout for the bubble plot
      var layout2 = {
          xaxis:{title: "OTU ID"},
          height: 600,
          width: 1000
      };

      var data1 = [trace2];

      Plotly.newPlot("bubble", data1, layout2); 

    });

  }
  
  getPlots();


  function optionChanged(id) {
    getPlot(id);
    getInfo(id);
  }

  function init() {
    // create DropDownList 
    var DropDownList = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {
      var sampleNames = data.names;
  
      sampleNames.forEach((sample) => {
        DropDownList
          .append("option").text(sample).property("value", sample);
      });
  
    
    getPlots(data.names[0]);
    getInfo(data.names[0]);
  });
  
}
 
  init();


  
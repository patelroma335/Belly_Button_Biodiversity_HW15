
        //console.log("hello World!");
            
         
         function getPlots(id) {

             // fetch json file 
              d3.json("samples.json").then ((sampledata) =>{
                  console.log(sampledata)

                  var samples = sampledata.samples;

                  var resultArray = samples.filter(sampleObj => sampleObj.id == id);
                  console.log(resultArray);

                  var result = resultArray[0];

                  var otu_ids = result.otu_ids;

                  var otu_labels = result.otu_labels;

                  var sample_values = result.sample_values;
                  
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
           var layout = {
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
        Plotly.newPlot("bar", data, layout);
  

      




        });
        }


        getPlots(940);

    
       function buildCharts(sample) {
        // Use D3 fetch to read the JSON file
        d3.json("data/samples.json").then((data)=> {
            console.log(data);
            
          
          var samples = data.samples.filter(s => s.id.toString() === id)[0];
        
          console.log(samples);

         // Top10 otu_labels for hovertext 
          var OTU_labels = samples.otu_labels.slice(0, 10);

          // Top 10 Sample_Values
          var samplevalues = samples.sample_values.slice(0, 10);
    
          // Top 10 otu ids
          var top10_OTUs = (samples.otu_ids.slice(0, 10));
          
          var OTU_id = top10_OTUs.map(d => "OTU" + d);
          
        
          var trace = {
            x: samplevalues,
            y: OTU_id,
            text: OTU_labels,
            marker: {
              color: 'rgba(222,45,38,0.8)'},
            type:"bar",
            orientation: "h",
        };
  
        
        var data = [trace];
 

                var layout = {
                    title: 'The Top10 OTUs',
                    font:{
                      family: 'Raleway, sans-serif'
                    },
                    showlegend: false,
                    xaxis: {
                      tickangle: -45
                    },
                    yaxis: {
                      zeroline: false,
                      gridwidth: 2
                    },
                    bargap :0.05
                  };
                  
        Plotly.newPlot("bar", data, layout);


    });
}    



  
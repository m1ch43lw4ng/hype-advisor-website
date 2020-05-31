var myData = "date,Hype Fund,S&P 500,Dow Jones\n20191031,100.0,100.0,100.0\n20191101,97.5317,100.163,99.9030\n20191104,97.7890,100.573,100.507\n20191105,98.0616,101.140,100.958\n20191106,98.2478,101.110,100.980\n20191107,95.8688,101.420,101.304\n20191108,96.8184,101.150,100.835\n20191111,97.3593,102.087,101.901\n20191112,98.5929,102.497,102.352\n20191113,97.2096,102.384,102.449\n20191114,100.289,102.407,102.445\n20191115,101.138,102.767,103.284\n20191118,96.3358,103.021,103.291\n20191119,100.052,102.824,103.325\n20191120,105.109,103.041,103.373\n20191121,99.6402,103.074,103.657\n20191122,97.5300,103.224,103.724\n20191125,97.9405,103.971,104.361\n20191126,96.9903,104.048,104.484\n20191127,99.5419,104.018,104.134\n20191128,103.260,103.631,103.713\n20191129,102.572,103.464,103.534\n20191202,101.713,103.694,103.959\n20191203,97.5627,104.498,104.682\n20191204,97.4505,104.735,104.891\n20191205,98.3888,105.202,105.096\n20191206,100.315,104.811,104.738\n20191209,100.913,103.921,103.713\n20191210,106.668,103.224,102.710\n20191211,105.817,103.861,103.284\n20191212,111.191,104.048,103.399\n20191213,105.566,104.998,104.645\n20191216,103.298,104.668,104.294\n20191217,106.476,104.551,104.182\n20191218,104.100,104.848,104.279\n20191219,106.776,105.752,105.111\n20191220,104.372,105.815,105.170\n20191223,99.4169,106.542,105.528\n20191224,103.519,106.565,105.651\n20191225,104.930,106.572,105.580\n20191226,104.783,107.009,106.046\n20191227,104.006,106.952,106.046\n20191230,103.508,107.116,106.371\n20191231,104.052,107.119,106.251\n20200101,103.730,107.689,106.643\n20200102,103.240,107.663,106.743\n20200103,103.881,107.069,106.072\n20200106,104.747,107.329,106.285\n20200107,104.953,108.333,107.597\n20200108,104.311,107.513,106.740\n20200109,107.278,107.923,106.986\n20200110,102.664,107.619,106.524\n20200113,106.486,108.193,107.142\n20200114,105.626,108.926,107.948\n20200115,106.229,108.613,107.456\n20200116,104.006,109.360,107.746\n20200117,104.543,109.193,107.821\n20200120,105.852,109.440,108.242\n20200121,106.643,110.350,109.204\n20200122,108.454,110.694,109.331\n20200123,108.955,110.477,108.794\n20200124,109.568,110.490,108.786\n20200127,113.825,110.617,108.686\n20200128,112.384,109.633,108.037\n20200129,106.442,107.876,106.382\n20200130,104.460,109.006,107.101\n20200131,104.488,108.916,107.101\n20200203,105.231,109.270,107.567\n20200204,104.735,107.286,105.286\n20200205,102.150,108.083,105.867\n20200206,102.387,109.730,107.381\n20200207,104.244,110.997,109.178\n20200210,103.259,111.371,109.506\n20200211,105.762,110.777,108.555\n20200212,106.899,111.604,109.211\n20200213,103.263,111.798,109.208\n20200214,102.932,112.518,110.244\n20200217,106.970,112.398,109.909\n20200218,107.774,112.578,109.804\n20200219,106.643,112.288,109.211\n20200220,106.471,112.825,109.640\n20200221,108.269,112.361,109.148\n20200224,107.502,111.204,108.015\n20200225,106.163,107.516,104.220\n20200226,108.565,104.258,100.917\n20200227,107.594,103.874,100.559\n20200228,108.187,99.2096,95.9961\n20200302,108.785,98.7928,94.9000\n20200303,108.428,103.071,99.5489\n20200304,107.617,100.120,96.6671\n20200305,106.543,104.328,100.987\n20200306,105.931,100.860,97.4724\n20200309,106.797,99.1930,96.4994\n20200310,102.006,91.4465,88.9949\n20200311,99.5339,96.1784,93.3753\n20200312,108.263,91.4899,87.9212\n20200313,103.623,82.7364,79.0747\n20200316,100.190,89.8092,86.5307\n20200317,100.592,79.9819,75.4883\n20200318,99.4519,84.3003,79.5817\n20200319,95.9241,80.0320,74.3326\n20200320,97.1321,80.2020,75.0484\n20200323,98.4272,76.2971,71.5404\n20200324,99.0874,74.3464,69.3893\n20200325,99.6214,81.0824,77.0354\n20200326,102.872,82.2962,79.0560\n20200327,102.178,87.1015,83.9062\n20200330,100.440,84.5071,80.6553\n20200331,101.410,87.2515,83.1717\n20200401,103.703,85.9510,81.7290\n20200402,100.202,82.0828,78.0569\n20200403,106.155,83.9769,79.7643\n20200406,103.444,82.7631,78.5117\n20200407,113.262,88.3219,84.4504\n20200408,110.631,88.4120,84.4765\n20200409,106.636,91.3798,87.3583\n20200410,107.163,92.7704,88.4059\n20200413,107.639,91.9234,87.2204\n20200414,109.746,94.6345,89.3528\n20200415,112.653,92.6237,87.6379\n20200416,108.968,93.0705,87.7348\n20200417,110.313,95.5849,90.3780";
var selection = d3.select("#chart"); 
var default_width = 1200;
var default_height = 520;
var default_ratio = default_width / default_height;

var margin = {
        top: 60,
        right: 80,
        bottom: 30,
        left: 40
    },
    width = default_width - margin.left - margin.right,
    height = default_height - margin.top - margin.bottom;

function scale() {
  current_width = Math.min(default_width, d3.select("#chart")[0][0].clientWidth);
  current_height = default_height;

  current_ratio = current_width / current_height;

  if ( current_ratio > default_ratio ){
    h = current_height;
    w = h * default_ratio;
  } else {
    w = current_width;
    h = w / default_ratio;
  }

  width = w - margin.left - margin.right;
  height = h - margin.top - margin.bottom;

};

scale();

var parseDate = d3.time.format("%Y%m%d").parse;

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.ordinal().range(['#d13b3c', '#ffffff', '#ffffff']);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d) {
        return x(d.date);
    })
    .y(function(d) {
        return y(d.price);
    });

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("fill", "white")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var data = d3.csv.parse(myData)

color.domain(d3.keys(data[0]).filter(function(key) {

    return key !== "date";
}));

data.forEach(function(d) {
    d.date = parseDate(d.date);
});

var indices = color.domain().map(function(name) {
    return {
        name: name,
        values: data.map(function(d) {
            return {
                date: d.date,
                price: +d[name]
            };
        })
    };
});

x.domain(d3.extent(data, function(d) {
    return d.date;
}));

y.domain([
    d3.min(indices, function(c) {
        return d3.min(c.values, function(v) {
            return v.price;
        });
    }),
    d3.max(indices, function(c) {
        return d3.max(c.values, function(v) {
            return v.price;
        });
    })
]);

// Title
svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", width / 30) 
        .text("Hype Fund vs. Stock Market Indices");

// X axis and label
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .style("fill", "white")
    .call(xAxis);

svg.append("text")
      .attr("transform", "translate(" + (width/2) + " ," + (height + margin.bottom) + ")")
      .style("text-anchor", "middle")
      .text("Time (Oct. 2019 - April 2020)");

// Y axis and label
svg.append("g")
    .attr("class", "y axis")
    .style("stroke-width", "1px")
    .call(yAxis);

svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("% of Starting Value");

// graphes and mouse over lines
var index = svg.selectAll(".index")
    .data(indices)
    .enter().append("g")
    .attr("class", "index");

index.append("path")
    .attr("class", "line")
    .attr("d", function(d) {
        return line(d.values);
    })
    .style("stroke", function(d) {
        return color(d.name);
    });

index.append("text")
    .datum(function(d) {
        return {
            name: d.name,
            value: d.values[d.values.length - 1]
        };
    }).attr('fill', 'white')
    .attr("transform", function(d) {
        console.log(d.value.date)
        return "translate(" + x(d.value.date) + "," + y(d.value.price) + ")";
    })
    .attr("x", 3)
    .attr("dy", ".35em").attr('fill', 'white')
    .text(function(d) {
        return d.name;
    }).attr('fill', 'white');

var mouseG = svg.append("g")
    .attr("class", "mouse-over-effects");

// vertical line to follow mouse
mouseG.append("path") 
    .attr("class", "mouse-line")
    .style("stroke", "white")
    .style("stroke-width", "1px")
    .style("opacity", "0");

var lines = document.getElementsByClassName('line');

var mousePerLine = mouseG.selectAll('.mouse-per-line')
    .data(indices)
    .enter()
    .append("g")
    .attr("class", "mouse-per-line");

mousePerLine.append("circle")
    .attr("r", 5)
    .style("stroke", function(d) {
        return color(d.name);
    })
    .style("fill", "none")
    .style("stroke-width", "1px")
    .style("opacity", "0");

mousePerLine.append("text")
    .attr("transform", "translate(10,3)")
    .attr('fill', 'white');

mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
    .attr('width', width) // can't catch mouse events on a g element
    .attr('height', height)
    .attr('fill', 'none')
    .attr('pointer-events', 'all')
    .on('mouseout', function() { // on mouse out hide line, circles and text
        d3.select(".mouse-line")
            .style("opacity", "0");
        d3.selectAll(".mouse-per-line circle")
            .style("opacity", "0");
        d3.selectAll(".mouse-per-line text")
            .style("opacity", "0");

    })
    .on('mouseover', function() { // on mouse in show line, circles and text
        d3.select(".mouse-line")
            .style("opacity", "1");
        d3.selectAll(".mouse-per-line circle")
            .style("opacity", "1");
        d3.selectAll(".mouse-per-line text")
            .style("opacity", "1");
    })
    .on('mousemove', function() { // mouse moving over canvas
        var mouse = d3.mouse(this);
        d3.select(".mouse-line")
            .attr("d", function() {
                var d = "M" + mouse[0] + "," + height;
                d += " " + mouse[0] + "," + 0;
                return d;
            });

        d3.selectAll(".mouse-per-line")
            .attr("transform", function(d, i) {
                console.log(width / mouse[0])
                var xDate = x.invert(mouse[0]),
                    bisect = d3.bisector(function(d) {
                        return d.date;
                    }).right;
                idx = bisect(d.values, xDate);

                var beginning = 0,
                    end = lines[i].getTotalLength(),
                    target = null;

                while (true) {
                    target = Math.floor((beginning + end) / 2);
                    pos = lines[i].getPointAtLength(target);
                    if ((target === end || target === beginning) && pos.x !== mouse[0]) {
                        break;
                    }
                    if (pos.x > mouse[0]) end = target;
                    else if (pos.x < mouse[0]) beginning = target;
                    else break; //position found
                }

                d3.select(this).select('text')
                    .text(y.invert(pos.y).toFixed(2));


                return "translate(" + mouse[0] + "," + pos.y + ")";
            });
    });

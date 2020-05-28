var myData = "date,Hype Fund,S&P 500,Dow Jones\n20191031,100.0,100.641,100.224\n20191101,97.5317,100.805,100.127\n20191104,97.7890,101.218,100.732\n20191105,98.0616,101.788,101.184\n20191106,98.2478,101.758,101.206\n20191107,95.8688,102.070,101.531\n20191108,96.8184,101.798,101.061\n20191111,97.3593,102.741,102.129\n20191112,98.5929,103.154,102.581\n20191113,97.2096,103.040,102.678\n20191114,100.289,103.064,102.675\n20191115,101.138,103.426,103.515\n20191118,96.3358,103.681,103.523\n20191119,100.052,103.483,103.557\n20191120,105.109,103.701,103.605\n20191121,99.6402,103.735,103.889\n20191122,97.5300,103.886,103.956\n20191125,97.9405,104.638,104.595\n20191126,96.9903,104.715,104.719\n20191127,99.5419,104.685,104.367\n20191128,103.260,104.295,103.945\n20191129,102.572,104.127,103.766\n20191202,101.713,104.359,104.192\n20191203,97.5627,105.168,104.917\n20191204,97.4505,105.406,105.126\n20191205,98.3888,105.876,105.331\n20191206,100.315,105.483,104.973\n20191209,100.913,104.587,103.945\n20191210,106.668,103.886,102.940\n20191211,105.817,104.527,103.515\n20191212,111.191,104.715,103.631\n20191213,105.566,105.671,104.879\n20191216,103.298,105.339,104.528\n20191217,106.476,105.222,104.416\n20191218,104.100,105.520,104.513\n20191219,106.776,106.430,105.346\n20191220,104.372,106.493,105.406\n20191223,99.4169,107.225,105.765\n20191224,103.519,107.249,105.888\n20191225,104.930,107.255,105.817\n20191226,104.783,107.695,106.284\n20191227,104.006,107.638,106.284\n20191230,103.508,107.802,106.609\n20191231,104.052,107.806,106.490\n20200101,103.730,108.380,106.882\n20200102,103.240,108.353,106.983\n20200103,103.881,107.755,106.310\n20200106,104.747,108.017,106.523\n20200107,104.953,109.027,107.838\n20200108,104.311,108.202,106.979\n20200109,107.278,108.614,107.226\n20200110,102.664,108.309,106.762\n20200113,106.486,108.886,107.383\n20200114,105.626,109.625,108.190\n20200115,106.229,109.309,107.696\n20200116,104.006,110.061,107.988\n20200117,104.543,109.893,108.063\n20200120,105.852,110.141,108.485\n20200121,106.643,111.058,109.449\n20200122,108.454,111.403,109.576\n20200123,108.955,111.185,109.038\n20200124,109.568,111.199,109.030\n20200127,113.825,111.326,108.929\n20200128,112.384,110.336,108.279\n20200129,106.442,108.567,106.620\n20200130,104.460,109.705,107.341\n20200131,104.488,109.615,107.341\n20200203,105.231,109.970,107.808\n20200204,104.735,107.973,105.522\n20200205,102.150,108.776,106.105\n20200206,102.387,110.433,107.622\n20200207,104.244,111.709,109.423\n20200210,103.259,112.085,109.751\n20200211,105.762,111.487,108.799\n20200212,106.899,112.320,109.456\n20200213,103.263,112.514,109.452\n20200214,102.932,113.239,110.491\n20200217,106.970,113.118,110.155\n20200218,107.774,113.299,110.050\n20200219,106.643,113.008,109.456\n20200220,106.471,113.548,109.886\n20200221,108.269,113.081,109.393\n20200224,107.502,111.917,108.257\n20200225,106.163,108.205,104.453\n20200226,108.565,104.926,101.143\n20200227,107.594,104.540,100.784\n20200228,108.187,99.8456,96.2113\n20200302,108.785,99.4261,95.1128\n20200303,108.428,103.731,99.7720\n20200304,107.617,100.761,96.8838\n20200305,106.543,104.997,101.214\n20200306,105.931,101.506,97.6909\n20200309,106.797,99.8288,96.7157\n20200310,102.006,92.0327,89.1944\n20200311,99.5339,96.7949,93.5846\n20200312,108.263,92.0763,88.1183\n20200313,103.623,83.2667,79.2519\n20200316,100.190,90.3849,86.7247\n20200317,100.592,80.4946,75.6575\n20200318,99.4519,84.8407,79.7601\n20200319,95.9241,80.5450,74.4993\n20200320,97.1321,80.7161,75.2167\n20200323,98.4272,76.7862,71.7007\n20200324,99.0874,74.8229,69.5449\n20200325,99.6214,81.6021,77.2081\n20200326,102.872,82.8237,79.2332\n20200327,102.178,87.6598,84.0943\n20200330,100.440,85.0488,80.8361\n20200331,101.410,87.8108,83.3582\n20200401,103.703,86.5019,81.9122\n20200402,100.202,82.6089,78.2319\n20200403,106.155,84.5152,79.9432\n20200406,103.444,83.2936,78.6877\n20200407,113.262,88.8881,84.6398\n20200408,110.631,88.9787,84.6659\n20200409,106.636,91.9656,87.5541\n20200410,107.163,93.3651,88.6040\n20200413,107.639,92.5126,87.4159\n20200414,109.746,95.2411,89.5531\n20200415,112.653,93.2174,87.8344\n20200416,108.968,93.6671,87.9315\n20200417,110.313,96.1976,90.5806";
var default_width = 600;
var default_height = 260;
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
  current_width = Math.min(600, window.innerWidth * 0.9);
  current_height = 260;

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
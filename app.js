const svg = d3.select('svg');

const width = parseFloat(svg.attr('width')); 
const height = +svg.attr('height'); 

const g = svg.append('g')  
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

const circle = g.append('circle') 
    .attr('r', height / 2)    
    .attr('fill', 'yellow')
    .attr('stroke', 'black')

const leftEye = g.append('circle')
    .attr('r', 15)    
    .attr('cx', -50)     
    .attr('cy', -40)
    .attr('fill', 'black')

const rightEye = g.append('circle')
    .attr('r', 15)    
    .attr('cx', 50)     
    .attr('cy', -40)
    .attr('fill', 'black')

const mouth = g.append('path')
    .attr('d', d3.arc()({     
        innerRadius: 70,
        outerRadius: 80, 
        startAngle: Math.PI / 2, 
        endAngle: Math.PI * 3/2
    }))
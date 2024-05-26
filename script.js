// alert("hello world!!!!!!");
// new swiper(".swiper-container", {
//     loop:true,
//     slidesPerView:4,
//     spaceBetween:25,
//     pagination: {
//         el: ".swiper-pagination",
//     }
// })


// const swiper = new Swiper('.swiper-container', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    speed: 600,

    autoplay: {
        delay: 4000,
    },

    slidesPerView: 1,
    spaceBetween: 25,

    breakpoints: {
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


// highcharts.com
Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Historic World Population by Region',
        align: 'left'
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
            'target="_blank">Wikipedia.org</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 1990',
        data: [631, 727, 3202, 721]
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 726]
    }, {
        name: 'Year 2018',
        data: [1276, 1007, 4561, 746]
    }]
});



// D3


// تعریف متغیرها و توابع برای نقشه
document.addEventListener('DOMContentLoaded', function() {
    const width = 960;
    const height = 600;

    const projection = d3.geoMercator()
        .center([53, 32]) // مختصات مرکزی ایران
        .scale(1000)
        .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    const svg = d3.select('#map-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // بارگذاری داده‌های GeoJSON و رسم نقشه
    d3.json('custom.geo.json').then(function(iran) {
        svg.selectAll('path')
            .data(iran.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', 'lightgray')
            .attr('stroke', 'white');
    });
});
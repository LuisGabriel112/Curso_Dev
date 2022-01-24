/* document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});

let chart; // globally available
    document.addEventListener('DOMContentLoaded', function() {
        chart = Highcharts.chart('container', {
            rangeSelector: {
                selected: 1
            },
            series: [{
                name: 'USD to EUR',
                data: usdtoeur // predefined JavaScript array
           }]
       });
    }); */

let urlApi = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=10&page=1'

fetch(urlApi)
    .then(response => response.json())
    .then(data => {
        

        const mappedResults = 
            Object.keys(data).map(key => {
                const value = data[key]
                //console.log(key, '=>',value);
            //console.log(key, data[key]);
            let container = document.getElementById('seccion');
            let element = document.createElement('div');
            element.className = 'cards'
            
            element.innerHTML = `
                    <img src="${value.image}">
                    <div class="letter-cards">
                    <h2>${value.name}</h2>
                    <h2>${value.current_price}$</h2>
                    </div>
                    `;
    
                    container.appendChild(element);  
            //console.log(key, data[key]);
        })

        //let data2 = console.log(typeof data, 'llo');
  /*       let index = 0 */
        /*             for (index in data.results) {
                        let container = document.getElementsByTagName('main')[0];
                        let element = document.createElement('div');
                        element.innerHTML = `
                        <div class="cards">
                        <img src="${data.results[index].image}">
                        <div class="letter-cards">
                        <h2>${data.results[index].name}</h2>
                        <h2>${data.results[index].current_price}</h2>
                        </div>
                        </div>
                        `;
                        container.appendChild(element);
                    } */
    })

console.log("hola");
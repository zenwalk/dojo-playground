require(['app/main', 'echarts', 'vue'], function(main, echarts, Vue) {
	console.log(echarts.version);
	console.log(Vue.version);

	var chart = echarts.init(document.getElementById('box'));

	var option = {
		title: {
			text: 'ECharts 入门示例'
		},
		tooltip: {},
		legend: {
			data: ['销量']
        },
		xAxis: {
			data: []
		},
		yAxis: {},
		series: [
			{
				name: '销量',
				type: 'line',
			}
		]
    };
    
    var option2 = {
        // xAxis: {
        //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        // },
        series: [
			{
				data: [5, 20, 36, 10, 10, 20]
			}
		]
    }
    chart.setOption(option);

    chart.showLoading({
        text: '加载中...'
    });
    setTimeout(function() {
        chart.setOption(option2);
        chart.hideLoading();
    }, 4000);
	
});

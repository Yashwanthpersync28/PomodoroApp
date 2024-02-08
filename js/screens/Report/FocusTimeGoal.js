import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

export const FocusTimeGoal = () => {
  const data = [
    { name: 'Direct', population: 18, color: '#297AB1' },
    { name: 'Organic Search', population: 49, color: '#67B7DC' },
    { name: 'Paid Search', population: 9, color: '#32CD32' },
    { name: 'Referral', population: 5, color: '#FFA500' },
    { name: 'Social', population: 19, color: '#FF5733' },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PieChart
        data={data}
        width={300}
        height={300}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};


// import React, { Component } from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';
// //var CanvasJSReact = require('@canvasjs/react-charts');
 
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// export class FocusTimeGoal extends Component {
// 	render() {
// 		const options = {
// 			exportEnabled: true,
// 			animationEnabled: true,
// 			title: {
// 				text: "Website Traffic Sources"
// 			},
// 			data: [{
// 				type: "pie",
// 				startAngle: 75,
// 				toolTipContent: "<b>{label}</b>: {y}%",
// 				showInLegend: "true",
// 				legendText: "{label}",
// 				indexLabelFontSize: 16,
// 				indexLabel: "{label} - {y}%",
// 				dataPoints: [
// 					{ y: 18, label: "Direct" },
// 					{ y: 49, label: "Organic Search" },
// 					{ y: 9, label: "Paid Search" },
// 					{ y: 5, label: "Referral" },
// 					{ y: 19, label: "Social" }
// 				]
// 			}]
// 		}
// 		return (
// 		<div>
// 			<CanvasJSChart options = {options}
// 				/* onRef={ref => this.chart = ref} */
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
// 		);
// 	}
// }
  
import{u as e}from"./useApexCharts.39e6fc20.js";import{k as t,r as s,I as o,o as a,n as l}from"./vendor.56d2c57f.js";import"./index.574e7466.js";var r=t({setup(){const t=s(null),{setOptions:a}=e();return o((()=>{a({series:[{name:"Income",type:"column",data:[1.4,2,2.5,1.5,2.5,2.8,3.8,4.6]},{name:"Cashflow",type:"column",data:[1.1,3,3.1,4,4.1,4.9,6.5,8.5]},{name:"Revenue",type:"line",data:[20,29,37,36,44,45,50,58]}],chart:{height:350,type:"line",stacked:!1},dataLabels:{enabled:!1},stroke:{width:[1,1,4]},title:{text:"XYZ - Stock Analysis (2009 - 2016)",align:"left",offsetX:110},xaxis:{categories:[2009,2010,2011,2012,2013,2014,2015,2016]},yaxis:[{axisTicks:{show:!0},axisBorder:{show:!0,color:"#008FFB"},labels:{style:{colors:"#008FFB"}},title:{text:"Income (thousand crores)",style:{color:"#008FFB"}},tooltip:{enabled:!0}},{seriesName:"Income",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#00E396"},labels:{style:{colors:"#00E396"}},title:{text:"Operating Cashflow (thousand crores)",style:{color:"#00E396"}}},{seriesName:"Revenue",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#FEB019"},labels:{style:{colors:"#FEB019"}},title:{text:"Revenue (thousand crores)",style:{color:"#FEB019"}}}],tooltip:{fixed:{enabled:!0,position:"topLeft",offsetY:30,offsetX:60}},legend:{horizontalAlign:"left",offsetX:40}})})),{chartRef:t}}});const i={ref:"chartRef",style:{width:"100%"}};r.render=function(e,t,s,o,r,n){return a(),l("div",i,null,512)};export default r;

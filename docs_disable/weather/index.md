---
title: 天气
---
# 天气预报
<script client>
    
    import axios from "axios"
    document.onload = function () {
        
        console.log(`Test test`)
        const content = document.getElementById("content");

    axios({
        method: "post",
        url: "https://h5ctywhr.api.moji.com/fc40",
        data: '{"cityId":"1093","cityType":0}'
    }).then((resp) => {
        console.log(resp.data);
        resp.data.forecastDays.forecastDay.forEach((val, idx, arr) => {
            const newrow = document.createElement("tr");
            var d
            d = document.createElement("td")
            d.innerText = new Date(val.predictDate * 1000).toLocaleString().split(" ")[0]
            if (val.festival)
                d.innerText += "[" + val.festival + "]"
            newrow.appendChild(d)
            d = document.createElement("td")
            if (val.weatherDay == val.weatherNight)
                d.innerText = val.weatherDay
            else
                d.innerText = val.weatherDay + "转" + val.weatherNight
            newrow.appendChild(d)
            d = document.createElement("td")
            d.innerText = val.tempHigh + "℃"
            newrow.appendChild(d)
            d = document.createElement("td")
            d.innerText = val.tempLow + "℃"
            newrow.appendChild(d)
            d = document.createElement("td")
            if (val.aqiValue && val.aqiLevel && val.aqiDesc)
                d.innerText = `${val.aqiValue},${val.aqiLevel}级[${val.aqiDesc}]`
            newrow.appendChild(d)
            d = document.createElement("td")
            d.innerText = new Date(val.sunRise * 1000).toLocaleString().split(" ")[1]
            newrow.appendChild(d)
            d = document.createElement("td")
            d.innerText = new Date(val.sunDown * 1000).toLocaleString().split(" ")[1]
            newrow.appendChild(d)
            console.log(val)
            content.appendChild(newrow)
        })
    })
    }
    
</script>
<table>
    <thead>
        <tr>
            <td>日期</td>
            <td>天气</td>
            <td>最高温度</td>
            <td>最低温度</td>
            <td>空气质量</td>
            <td>日出</td>
            <td>日落</td>
        </tr>
    </thead>
    <tbody id="content"></tbody>
</table>

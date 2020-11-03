//因为默认的testng生成的报告有一个google脚本获取不到，这里通过node删除强求，这里记录一下
const fs = require('fs');
const cheerio = require('cheerio')

// fs.readFile('index.html',function(error,data){
// 	if(error) throw error
// 	// console.log(data.toString())
// 	// 加载HTML字符串
// 	const $ = cheerio.load(data.toString())
// 	 // 设置Text
// 	$('script').each(function(){
// 		if ($(this).attr('src') =='https://www.google.com/jsapi'){
// 			$(this).remove()
// 		}
// 	})
// 	console.log($.html());
// 	fs.writeFile('index.html',$.html(),'utf8',function(){
// 		if(error) throw error
// 		console.log('修改完成')
// 	})

// })



var readFile = require('fs-readfile-promise');
var writeFile = require('fs-writefile-promise');
// readFile('index.html').then(function(data){
// 	console.log(data.toString())
// 	return data.toString()
// }).then(function(data){
// 	writeFile('index.html',data,'utf8').then(function(){
// 		console.log('修改完成')
// 	})
// })

async function rw(path){
	let r = await readFile('index.html')//r就是rw().next(data)进来的data
	let w = await writeFile('index.html',r.toString(),'utf8')
	return w
}
rw().then(function(){
		console.log('修改完成')
	});
String.prototype.replaceAll = function(s1,s2) { 
    return this.replace(new RegExp(s1,"gm"),s2); 
}


// 用于格式化日期
Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, // month
		"d+" : this.getDate(), // day
		"h+" : this.getHours(), // hour
		"m+" : this.getMinutes(), // minute
		"s+" : this.getSeconds(), // second
		"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
		"S" : this.getMilliseconds()
		// millisecond
	}

	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4
						- RegExp.$1.length));
	}

	for (var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1
							? o[k]
							: ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
}
// -------------------------------------------
// 去左空格;
function ltrim(s) {
	return s.replace(/^(\s*|　*)/, "");
}
// 去右空格;
function rtrim(s) {
	return s.replace(/(\s*|　*)$/, "");
}
// 去左右空格;
function trim(s) {
	return ltrim(rtrim(s));
}
/**
 * 判断变量是否空值 undefined, null, '', false, 0, [], {} 均返回true，否则返回false
 */
function empty(v) {
	switch (typeof v) {
		case 'undefined' :
			return true;
		case 'string' :
			if (trim(v).length == 0)
				return true;
			break;
		case 'boolean' :
			if (!v)
				return true;
			break;
		case 'number' :
			if (0 === v)
				return true;
			break;
		case 'object' :
			if (null === v)
				return true;
			if (undefined !== v.length && v.length == 0)
				return true;
			for (var k in v) {
				return false;
			}
			return true;
			break;
	}
	return false;
}



function postOpenWindow(url, params, paramsMultivalue) {
	post(url, params, paramsMultivalue, true);
}

function post(url, params, paramsMultivalue, isOpenWindow) {
	var temp = document.createElement("form");
	temp.action = url;
	if (isOpenWindow == true) {
		temp.target = "_blank";
	}
	temp.method = "post";
	temp.style.display = "none";
	try {
		if (!empty(params)) {
			for (var x in params) {
				var opt = document.createElement("textarea");
				opt.name = x;
				opt.value = params[x];
				// alert(opt.name)
				temp.appendChild(opt);
			}
		}
	} catch (e) {
	}
	try {
		if (!empty(paramsMultivalue)) {
			for (var x in paramsMultivalue) {
				for (var y in paramsMultivalue[x]) {
					var opt = document.createElement("textarea");
					opt.name = x;
					opt.value = paramsMultivalue[x][y];
					// alert(opt.name)
					temp.appendChild(opt);
				}
			}
		}
	} catch (e) {
	}
	document.body.appendChild(temp);
	temp.submit();
	return temp;
}

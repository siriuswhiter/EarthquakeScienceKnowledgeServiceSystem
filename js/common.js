// 判断IP输入是否正确
var reg = /^((0[0-9]|1[0-9]\d{1,2})|(2[0-5][0-5])|(2[0-4][0-9])|(\d{1,2}))\.((0[0-9]|1[0-9]\d{1,2})|(2[0-5][0-5])|(2[0-4][0-9])|(\d{1,2}))\.((0[0-9]|1[0-9]\d{1,2})|(2[0-4][0-9])|(2[0-5][0-5])|(\d{1,2}))\.((0[0-9]|1[0-9]\d{1,2})|(2[0-4][0-9])|(2[0-5][0-5])|(\d{1,2}))$/;
var shengID = new Array();
$(document).ready(function() {
			shengID.push('110000,北京');
			shengID.push('310000,上海');
			shengID.push('120000,天津');
			shengID.push('500000,重庆');
			shengID.push('210000,辽宁');
			shengID.push('220000,吉林');
			shengID.push('230000,黑龙江');
			shengID.push('320000,江苏');
			shengID.push('330000,浙江');
			shengID.push('340000,安徽');
			shengID.push('350000,福建');
			shengID.push('360000,江西');
			shengID.push('370000,山东');
			shengID.push('410000,河南');
			shengID.push('420000,湖北');
			shengID.push('430000,湖南');
			shengID.push('440000,广东');
			shengID.push('460000,海南');
			shengID.push('510000,四川');
			shengID.push('520000,贵州');
			shengID.push('530000,云南');
			shengID.push('610000,陕西');
			shengID.push('620000,甘肃');
			shengID.push('630000,青海');
			shengID.push('130000,河北');
			shengID.push('140000,山西');
			shengID.push('710000,台湾');
			shengID.push('150000,内蒙古');
			shengID.push('640000,宁夏');
			shengID.push('650000,新疆');
			shengID.push('450000,广西');
			shengID.push('540000,西藏');
			shengID.push('810000,香港');
			shengID.push('820000,澳门');
		});
function myParseInt(value) {
	try {
		if (isNaN(parseInt(value,10))) {
			return 0;
		}
		return parseInt(value,10);
	} catch (e) {
		return 0;
	}
}

function getShengName(code) {
	if ((code + '').length == 6) {
		$(shengID).each(function(i) {
					if (shengID[i].indexOf(code + ",") > -1) {
						code = shengID[i].split(",")[1];
						return;
					}
				});
		return code;
	}
	return "";
}

function userForward(userType) {
	if (userType == -1) {
		window.location.href = '' + ContextPath + "";
	} else if (userType == 0) {
		window.location.href = '' + ContextPath
				+ "/modules/system_manager/body.jsp";
	} else if (userType == 1) {
		window.location.href = '' + ContextPath
				+ "/modules/common_user/body.jsp";
	} else if (userType == 2) {
		window.location.href = '' + ContextPath + "/modules/unit/body.jsp";
	}
}

function operateTypeFormat(operateType) {
	if (operateType == 'BROWSE') {
		return "浏览";
	} else if (operateType == 'SEARCH') {
		return "查询";
	} else if (operateType == 'LOGIN') {
		return "登录";
	}
	return operateType;
}

function flagFormat(flag) {
	if (flag == -1) {
		return "删除";
	} else if (flag == 0) {
		return "停用";
	} else if (flag == 1) {
		return "启用";
	} else if (flag == 10) {
		return "新注册";
	}
	return flag;
}

function checkUsername(textId) {
	try {
		$('#' + textId + '_message').remove();
	} catch (e) {

	}
	if ($('#' + textId).validatebox('validate')) {
		$.ajax({
					url : ContextPath + '/users!checkUsername.action',
					data : {
						'username' : $('#' + textId).val()
					},
					type : 'post',
					dataType : 'json',
					success : function(data) {
						if (!empty(data)) {
							$('#' + textId).after('<span id="' + textId
									+ '_message" style="color:red;">&#x3000;'
									+ data.message + '</span>');
						}
					},
					error : function() {
					}
				});
	}
}

function checkEmail(textId, email_old) {
	try {
		$('#' + textId + '_message').remove();
	} catch (e) {

	}
	if ($('#' + textId).validatebox('validate')) {
		$.ajax({
					url : ContextPath + '/users!checkEmail.action',
					data : {
						'email_old' : email_old,
						'email_new' : $('#' + textId).val()
					},
					type : 'post',
					dataType : 'json',
					success : function(data) {
						if (!empty(data)) {
							$('#' + textId).after('<span id="' + textId
									+ '_message" style="color:red;">&#x3000;'
									+ data.message + '</span>');
						}
					},
					error : function() {
					}
				});
	}
}

function getJsonValue(data, key) {
	try {
		var value;
		$.each(data, function(k, v) {
					if (k == key) {
						value = v;
						return;
					}
				});
		if (empty(value)) {
			return "";
		}
		return value;
	} catch (e) {
		return "";
	}
}

function getJsonItemCount(data, key){
	try {
		var value;
		$.each(data, function(k, v) {
					if (k == key) {
						value = v.length;
						return;
					}
				});
		if (empty(value)) {
			return 0;
		}
		return value;
	} catch (e) {
		return 0;
	}
}

function gotodetail(pagename,id,type){
	//var form=$("<form action='"+ContextPath+"/"+pagename+"' method='post' target='_blank'></form>");
	$("#detailForm").html("");
	$("#detailForm").attr("action",ContextPath+"/"+pagename);
	var btn=$("<input type='hidden' name='id' value='"+id+"'/>");
	if(type!=null&&type!=""){
		var type=$("<input type='hidden' name='type' value='"+type+"'/>");
		$("#detailForm").append(type);
	}
	//form.append(id);
   // var btn=$("<input id='subLogin'  name ='subLogin' type='submit' value='提交' />");
	$("#detailForm").append(btn);
	$("#detailForm").submit();
    //form.append(btn);
   // btn.click();
	return false;
}

function gotodetail_other(pagename,name,value){
	$("#detailForm").html("");
	$("#detailForm").attr("action",ContextPath+"/"+pagename);
	var item=$("<input type='hidden' name='"+name+"' value='"+value+"'/>");
	// var btn=$("<input id='subLogin'  name ='subLogin' type='submit' value='提交' />");
	$("#detailForm").append(item);
	$("#detailForm").submit();
	return false;
	
} 
function gotoList(pagename,searchString){
	$("#listForm").html("");
	$("#listForm").attr("action",ContextPath+"/"+pagename);
	var btn=$("<input type='hidden' name='searchString' value='"+searchString+"'/>");
	$("#listForm").append(btn);
	$("#listForm").submit();
    //form.append(btn);
   // btn.click();
	return false;
}


//转换关键词中的标识
function replaceFlag(txt){
    // var  txt="气藏,油气勘探20^a页岩,研究现状,分布30^a页岩气";
	  if(txt==""||txt==null){
		  return "";
	  }
      var reg=new RegExp(/[1-3][0-2]\^a/g);
      var patt=null;
      var str1="";
      var str2="";
      var strs;
      var temp="";
      do
       {
         patt=reg.exec(txt);
         if(patt!=null){
           strs=(""+patt).split("");
           //第一位标识转换
            if(strs[0]=="1"){
              str1="主标题词";
            }else if(strs[0]=="2"){
              str1="一般叙词";
            }else if(strs[0]=="3"){
              str1="自由词";
           }
           //第二位标识转换
           if(strs[1]=="0"){
              str2="非地名";
            }else if(strs[1]=="1"){
              str2="中国地名";
            }else if(strs[1]=="2"){
              str2="国外地名";
           }
           //拼接替换文本
           temp="("+str1+","+str2+")";
           txt=(""+txt).replace(patt, "")+temp;
           txt = addBlockFlag(txt);
         }
       } while (patt!=null)
       return txt;
    }

function addBlockFlag( content ) {
	if(null != content && "" != content) {
		if (content.indexOf("(") != -1) content = "<font color='#2670CC'> [ </font>" + content + "<font color='#2670CC'> ] </font>";
		return content;
	}
}

function removeBlockFlag( content ) {
	if(null != content && "" != content) { 
		if (content.indexOf("<font color='#2670CC'> [ </font>") != -1) content = content.replace("<font color='#2670CC'> [ </font>", "");
		if (content.indexOf("<font color='#2670CC'> ] </font>") != -1) content = content.replace("<font color='#2670CC'> ] </font>", "");
	    return content;
	}
}

function splitKeyWords(txt){
	if(txt==""||txt==null){
		  return "";
	  }
	
	 var reg=new RegExp(/[1-3][0-2]\^a/g);
     var patt="";
     var pattArray=new Array();
     var i=0;
     do
      {
        patt=reg.exec(txt);
        if(patt!=null){
        pattArray[i++]=patt+"";
        }
        
      } while (patt!=null)
    	 
      pattCount=pattArray.length;
      if(pattCount<=0){
    		return new Array(txt);  
    	}
      var strs=(txt+"").split(reg);
      var result=new Array();
      if(strs.length==pattCount+1){
      for(i=0;i<pattArray.length;i++){
    	  strs[i+1]=pattArray[i]+strs[i+1];
    	 
      }
      return strs;
       }
    	  
      return txt;
	
}

//转换关键词中的标识
function getWordAndFlag(txt){
    // var  txt="气藏,油气勘探20^a页岩,研究现状,分布30^a页岩气";
	  if(txt==""||txt==null){
		  return new Array("","");
	  }
      var reg=new RegExp(/[1-3][0-2]\^a/g);
      var patt=null;
      var str1="";
      var str2="";
      var strs;
      var temp="";
      do
       {
         patt=reg.exec(txt);
         if(patt!=null){
           strs=(""+patt).split("");
           //第一位标识转换
            if(strs[0]=="1"){
              str1="主标题词";
            }else if(strs[0]=="2"){
              str1="一般叙词";
            }else if(strs[0]=="3"){
              str1="自由词";
           }
           //第二位标识转换
           if(strs[1]=="0"){
              str2="非地名";
            }else if(strs[1]=="1"){
              str2="中国地名";
            }else if(strs[1]=="2"){
              str2="国外地名";
           }
           //拼接替换文本
           temp=str1+","+str2;
           txt=(""+txt).replace(patt, "");
          // txt = addBlockFlag(txt);
         }
       } while (patt!=null)
    	  var result=new Array();
      result[0]=txt;
      result[1]=temp;
       return result;
    }

function removeTermFlag(content) {
	if (null != content && "" != content) {
		if (content.indexOf("(") != -1) {
			content = content.substring(0, content.indexOf("("));
		}
		return content;
	}
} 

//将选中的术语填充到页面隐藏域中
function wordInfo(){
	var text="";
    $("#cnNameUL").find(":checkbox:checked").each(function(i){
	text+=" "+$(this).val();
    });
    $("#cnName").val(text.trim());
	var text="";
    $("#enNameUL").find(":checkbox:checked").each(function(i){
	text+=" "+$(this).val();
    });
    $("#enName").val(text.trim());
	text="";
	$("#belongUL").find(":checkbox:checked").each(function(i){
		text+=" "+$(this).val();
	});
	$("#belong").val(text.trim());
	text="";
	$("#seeUL").find(":checkbox:checked").each(function(i){		
		text+=" "+$(this).val();
	});
	$("#see").val(text.trim());	
	text="";
	$("#containUL").find(":checkbox:checked").each(function(i){
		text+=" "+$(this).val();
	});
	$("#contain").val(text.trim());
}

function showWordHtml(data){
	if(data.isSearchStringChange=="true"){
		var html="";
		var btnDisplay=false;
         //alert(data.enNameAll);
		if(!empty(data.enNameAll)){
			btnDisplay=true;
			var shuck="";
			var belongck="";			
			if(data.isBelong){
				belongck="checked='checked'";
			}else{
				shuck="checked='checked'";
			}
			if(data.enNameAll==$("#searchString").val()){//显示中文名称
				$("#cnNameDiV").css("display","block");
				$("#enNameDiV").css("display","none");
				html='<li><input type="checkbox" value="'+data.cnNameAll+'"  '+shuck+'/>'
			       +data.cnNameAll+'</li>'	
			       $("#cnNameUL").html(html);
			}else{//显示英文名称
				$("#enNameDiV").css("display","block");
				$("#cnNameDiV").css("display","none");
				html='<li><input type="checkbox" value="'+data.enNameAll+'" '+shuck+'/>'
			       +data.enNameAll+'</li>'	
			       $("#enNameUL").html(html);
			}
			
		      
		}else{
			$("#cnNameDiV").css("display","none");
			$("#enNameDiV").css("display","none");	
		}
		html="";
		var arr=new Array();
		if(!empty(data.belongAll)){
			btnDisplay=true;
			arr=data.belongAll.split(" ");
			var len=arr.length;
			for(var i=0;i<len;i++){
				html+='<li><input type="checkbox" value="'+arr[i]+'" '+belongck+'/>'
				    +arr[i]+'</li>'	;
			}
			$("#belongDIV").css("display","block");
		       $("#belongUL").html(html);
		}else{
			$("#belongDIV").css("display","none");	
		}
		html="";
		if(!empty(data.containAll)){
			btnDisplay=true;
			arr=data.containAll.split(" ");
			var len=arr.length;
			for(var i=0;i<len;i++){
				html+='<li><input type="checkbox" value="'+arr[i]+'" '+shuck+'/>'
				    +arr[i]+'</li>'	;
			}
			$("#containDIV").css("display","block");	
		       $("#containUL").html(html);
		}else{
			$("#containDIV").css("display","none");	
		}
		html="";
		if(!empty(data.seeAll)){
			btnDisplay=true;
			arr=data.seeAll.split(" ");
			var len=arr.length;
			for(var i=0;i<len;i++){
				html+='<li><input type="checkbox" value="'+arr[i]+'" '+belongck+'/>'
				     +arr[i]+'</li>'	
			}
			$("#seeDIV").css("display","block");	
		       $("#seeUL").html(html);
		}else{
			$("#seeDIV").css("display","none");	
		}
		if(btnDisplay){
			$("#btnOk").css("display","block");
		}
	}
}
//术语搜索
function wordSearch(){
	$("#isSearchStringChange").val("false");
	wordInfo();
	search();
}

//所有页面的自动提示  
function searchSuggestOthers() {
	var options = {
			script : function() {
				return ContextPath + "/second!searchSuggestOthers.action?searchString=" + $("#searchString").val();
			},
			varname : "variableName",
			json : true,
			timeout : 3000,
			shownoresults : false,
			maxresults : 35
		};
		var as = new bsn.AutoSuggest('searchString', options);
}

/**
 * 高亮命中 
 */
function setHighLightText(txt,currentTargetText){
	if(empty(txt)){
		return '';
	}
	var newTxt=txt;
	if(currentTargetText.length!=0)
	{
		$(currentTargetText).each(function(i){
			var reg=new RegExp(currentTargetText[i],"g");
			newTxt=(""+newTxt).replace(reg,"<em>"+currentTargetText[i]+"</em>");
		});
	}
	return newTxt;
}

function logout(obj){
	$.ajax({
		url : ContextPath+'/regist!loginout.action',
		type : 'post',
		dataType : 'text',
		success : function(data) {
			if(data=='success'){
				if(obj){
					window.location.href="https://sso.ckcest.cn/logout?service=http://geol.ckcest.cn/";
				}
				else{
					window.location.href=ContextPath+"/index.jsp";
				}				
			}else{
				alert("退出失败!");
			}
		},
		error : function() {}
	});
}

//年代统计
function getAgeStatistics(methodName) {
	var ageStatistics = '';
	actionParam = $('#searchForm').formSerialize();
	$("#ageStatistics").html('<img src="images/loading.gif" align="middle" />载入中，请稍后...');
	$.ajaxq("queue", {
		url : ContextPath + '/'+methodName+'!getAgeStatistics.action?' + actionParam,
		type : 'post',
		dataType : 'json',
		success : function(data) {
			if (!empty(data)) {                                                                                                                         //achievementTheme_n
				$(data).each(function(i){
					if (i<10) {
						ageStatistics += '<li ><a href="#"  onclick="selectAgeDateCondition(\''+data[i].title+'\')">'+data[i].title+'</a><strong>'+'('+data[i].count+')</strong></li>';
					}else{
						ageStatistics += '<li  class="hideLi" style="display:none;"><a href="#"  onclick="selectAgeDateCondition(\''+data[i].title+'\')">'+data[i].title+'</a><strong>'+'('+data[i].count+')</strong></li>';
					}
				
				})
				if(data.length>10){
					ageStatistics+='<li id="moreLi"><a href="javascript:void(0)" onclick="more();">更多...</a></li>';
				}
				$("#ageStatistics").html(ageStatistics);
			} else {
				ageStatistics = '<li>对不起，当前系统中没有相关信息！</li>';
				$("#ageStatistics").html(ageStatistics);
			}
		},
		error : function() {
			ageStatistics = '<li>对不起，当前系统中没有相关信息！</li>';
			$("#ageStatistics").html(ageStatistics);
		}
	});
}

function selectAgeDateCondition(value){
	var date=$("#publishDate_selectDateA").val();
	if (date==value) {
		$("#publishDate_selectDateA").val('');
	}else {
		$("#publishDate_selectDateA").val(value);
	}
	 $('#ageStatistics li').css('backgroundColor', '');
	 checkDateStatus("ageStatistics","publishDate_selectDateA");
	 search();
}

function more(){
	$(".hideLi").show();	
	$("#moreLi").html('<a href="javascript:void(0)" onclick="shouqi();">收起...</a>');
}
function shouqi(){
	$(".hideLi").hide();	
	$("#moreLi").html('<a href="javascript:void(0)" onclick="more();">更多...</a>');
}

function checkDateStatus(uiId,dateId) {
	$('#'+uiId).find('a').each(function() {
		$(this).attr('style', ' color: ;');
		if ($(this).text() == $('#'+dateId).val()) {
			$(this).attr('style', ' color:red;');
		}
	});
}


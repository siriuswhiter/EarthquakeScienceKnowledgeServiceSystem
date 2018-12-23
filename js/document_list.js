var actionParam = "";
var actionSign = 0;
var page_dispaly_count = 10;

var currentPageQueryPara;
var currentPageData;

var pg;

var CLCTreeNOs = new Array();

$(document).ready(function() {
	var stype=$("#type").val();
	if(stype=="thesis"){
		$('#source').val('期刊论文');
		$('.xIn').attr('placeholder','请输入期刊论文关键字');
		$("#titleName").text("期刊论文");
		$("#one1").text("论文列表");
		$("#dList").text("期刊论文");
		$("#dList").attr("onclick","selectDT('document_list.jsp','thesis')");
//		$("#listtitle").text("期刊论文列表");
	}else if(stype=="book"){
		$('#source').val('会议论文');
		$('.xIn').attr('placeholder','请输入会议论文关键字');
		$("#titleName").text("会议论文");
		$("#one1").text("论文列表");
		$("#dList").text("会议论文");
		$("#dList").attr("onclick","selectDT('document_list.jsp','book')");
//		$("#listtitle").text("地质图书列表");
	}
	
	search();
//	searchSuggestOthers();
//	getAgeStatistics("document");
//	知识地图
//	searchString=$("#searchString").val();
//	if (searchString) {
//		$("#knowledgeMap").css("display", "block");
//		getRelNetworkData(searchString);
//	} else {
//		$("#knowledgeMap").css("display", "none");
//		search();
//	}
});
$(document).keyup(function(event) {
	if (event.keyCode == 13) {
		search();
	}
});
//------------------------------------------------------------------------------------------------------
function getTopAchievementSubject() {
	var achievementSubjectContent = '';
	actionParam = $('#searchForm').formSerialize();
	$("#achievementSubjectCondition").html('<img src="images/loading.gif" align="middle" />载入中，请稍后...');
	$.ajaxq("queue", {
		url : ContextPath + '/document!getTopAchievementSubject.action?' + actionParam,
		type : 'post',
		dataType : 'json',
		success : function(data) {
			if (!empty(data)) {                                                                                                                         //achievementTheme_n
				$(data).each(function(i){
					var temptitle=removeBlockFlag(replaceFlag(data[i].title));
					achievementSubjectContent += '<li><a href="javascript:;" title="'+temptitle+'" value="'+data[i].title+'" onclick="selectCondition(\'keywords_n\', \''+data[i].title+'\', this);">'+temptitle+'('+data[i].count+')</a></li>';
					//achievementSubjectContent += '<a href="javascript:void(0);" title="生成报告" onclick="getQueryParzt(\''+data[i].title+'\');">&nbsp;<img src="js/eclipse-icons/save_edit(4).png" style="vertical-align: middle;" width="16px" height="16px" /></a></li>';
				})
				$("#achievementSubjectCondition").html(achievementSubjectContent);
			} else {
				achievementSubjectContent += '<li>对不起，当前系统中没有相关信息！</li>';
				$("#achievementSubjectCondition").html(achievementSubjectContent);
			}
		},
		error : function() {
			achievementSubjectContent += '<li>对不起，当前系统中没有相关信息！</li>';
			$("#achievementSubjectCondition").html(achievementSubjectContent);
		}
	});
}

//改动开始-------------------------------------------------------------------------------------------------
/*function getTopAchievementSubjects() {
	var achievementSubjectContent = '';
	actionParam = $('#searchForm').formSerialize();
	$("#achievementSubjectCondition1").html('<img src="images/loading.gif" align="middle" />载入中，请稍后...');
	$.ajaxq("queue", {
		url : ContextPath + '/document!getTopAchievementSubjects.action?' + actionParam,
		type : 'post',
		dataType : 'json',
		success : function(data) {
			if (!empty(data)) {                                                                                                                         //achievementTheme_n
				$(data).each(function(i){
					var temptitle=removeBlockFlag(replaceFlag(data[i].title));
					achievementSubjectContent += '<li><a href="javascript:;" title="'+temptitle+'" value="'+data[i].title+'" onclick="selectCondition(\'sourcetype1\', \''+data[i].title+'\', this);">'+temptitle+'('+data[i].count+')</a></li>';
					//achievementSubjectContent += '<a href="javascript:void(0);" title="生成报告" onclick="getQueryParzt(\''+data[i].title+'\');">&nbsp;<img src="js/eclipse-icons/save_edit(4).png" style="vertical-align: middle;" width="16px" height="16px" /></a></li>';
				})
				$("#achievementSubjectCondition1").html(achievementSubjectContent);
			} else {
				achievementSubjectContent += '<li>对不起，当前系统中没有相关信息！</li>';
				$("#achievementSubjectCondition1").html(achievementSubjectContent);
			}
		},
		error : function() {
			achievementSubjectContent += '<li>对不起，当前系统中没有相关信息！</li>';
			$("#achievementSubjectCondition1").html(achievementSubjectContent);
		}
	});
}*/
function getTopAchievementSubject2() {
	var achievementSubjectContent = '';
	actionParam = $('#searchForm').formSerialize();
	$("#achievementSubjectCondition2").html('<img src="images/loading.gif" align="middle" />载入中，请稍后...');
	$.ajaxq("queue", {
		url : ContextPath + '/document!getTopAchievementSubject2.action?' + actionParam,
		type : 'post',
		dataType : 'json',
		success : function(data) {
			if (!empty(data)) {                                                                                                                         //achievementTheme_n
				$(data).each(function(i){
					if (data[i]!=null) {
						var title2=data[i].title2;
						title2=title2.substring(1,title2.length-1);
						var title2s= new Array(); 
						title2s=title2.split(",");
						var title1=data[i].title1;
						var title1s= new Array(); 
						title1s=title1.split(":");
						title1=title1s[0];
						var num1=title1s[1];
						var temptitle=removeBlockFlag(replaceFlag(title1));
	//					achievementSubjectContent += '<li><a href="javascript:;" title="'+temptitle+'" value="'+data[i].title+'" onclick="selectCondition(\'sourcetype1\', \''+data[i].title+'\', this);">'+temptitle+"<strong>"+ '('+data[i].count+')</strong></a></li>';
							achievementSubjectContent += '<li><div style="width:100%; padding: 5px; float:left; background-color: #E5ECF4;"><a  style=" color:#613910; padding: 3px; font-weight: bold; font-size:13px;"  id="sourcetype1"  href="javascript:void(0);" onclick="sourcetypeCondition(\'sourcetype1\', \''+title1+'\');">'+temptitle
							+'</a>('+num1+')</div><div style="float:left" class="list2"><ul style=" padding: 3px; float:left">';
						if(!empty(title2s)){
								for (i=0;i<title2s.length ;i++ )
								{
									var title2sn= new Array(); 
									var title2ss= new Array(); 
									title2sn=title2s[i].split(":");
									var num2=title2sn[1];
									title2ss=title2sn[0].split("/");
									if(!empty(title2ss[1])){
										achievementSubjectContent += '<li style="float:left; margin-right: 4px; margin-left: 4px"><a id="sourcetype2" style="float:left;padding: 4px; color:black;  font-size:12px;" onclick="sourcetypeCondition(\'sourcetype2\', \''+title2sn[0]+'\');" href="javascript:void(0);">'+title2ss[1]
										+'</a><span style="float:left;padding:4px; margin-right: 4px"">('+num2+')</span></li>';
								} 
							}
						}
						achievementSubjectContent += '</ul></div></li>';
					}
				})
				$("#achievementSubjectCondition2").html(achievementSubjectContent);
			} else {
				achievementSubjectContent += '<li>对不起，当前系统中没有相关信息！</li>';
				$("#achievementSubjectCondition2").html(achievementSubjectContent);
			}
		},
		error : function() {
			achievementSubjectContent += '<li>对不起，当前系统中没有相关信息！</li>';
			$("#achievementSubjectCondition2").html(achievementSubjectContent);
		}
	});
}
function sourcetypeCondition(name, value) {
	$('#achievementSubjectCondition2').find('a').each(function() {
		if ($(this).attr("id") == 'sourcetype1') {
			$(this).attr('style', ' color:#613910; padding: 3px; font-weight: bold; font-size:13px;');
		}else if ($(this).attr("id") == 'sourcetype2') {
			$(this).attr('style', ' float:left;padding: 4px; color:black;  font-size:12px;');
		}
		
	});
		if ($('#' + name).val().trim() == value.trim()) {
			$('#' + name).val('');
		} else {
			$('#sourcetype1').val('');
			$('#sourcetype2').val('');
			$('#'+ name).val(value);
		}
		
	search();
}
//改动结束-------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------
function getTopSpaceSubject() {
	var spaceSubjectContent = '';
	actionParam = $('#searchForm').formSerialize();
	$("#spaceSubjectCondition").html('<img src="images/loading.gif" align="middle" />载入中，请稍后...');
	$.ajaxq("queue", {
		url : ContextPath + '/document!getTopSpaceSubject.action?' + actionParam,
		type : 'post',
		dataType : 'json',
		success : function(data) {
			if (!empty(data)) {
				$(data).each(function(i){
					spaceSubjectContent += '<li><a href="javascript:;" title="'+data[i].title+'" value="'+data[i].title+'" onclick="selectCondition(\'spaceSubject_n\', \''+data[i].title+'\', this);">'+data[i].title+'('+data[i].count+')</a></li>';
				})
				$("#spaceSubjectCondition").html(spaceSubjectContent);
			} else {
				spaceSubjectContent += '<li>对不起，当前系统中没有相关信息！</li>';
				$("#spaceSubjectCondition").html(spaceSubjectContent);
			}
		},
		error : function() {
			spaceSubjectContent += '<li>对不起，当前系统中没有相关信息！</li>';
			$("#spaceSubjectCondition").html(spaceSubjectContent);
		}
	});
}
//------------------------------------------------------------------------------------------------------
function getTopStudySubject() {
	var studySubjectContent = '';
	actionParam = $('#searchForm').formSerialize();
	$("#studySubjectCondition").html('<img src="images/loading.gif" align="middle" />载入中，请稍后...');
	$.ajaxq("queue", {
		url : ContextPath + '/document!getTopStudySubject.action?' + actionParam,
		type : 'post',
		dataType : 'json',
		success : function(data) {
			if (!empty(data)) {
				$(data).each(function(i){
					studySubjectContent += '<li><a href="javascript:;" title="'+data[i].title+'" value="'+data[i].title+'" onclick="selectCondition(\'subject\', \''+data[i].title+'\', this);">'+data[i].title+'</a></li>';
				})
				$("#studySubjectCondition").html(studySubjectContent);
			} else {
				studySubjectContent += '对不起，当前系统中没有相关信息！';
				$("#studySubjectCondition").html(studySubjectContent);
			}
		},
		error : function() {
			studySubjectContent += '对不起，当前系统中没有相关信息！';
			$("#studySubjectCondition").html(studySubjectContent);
		}
	});
}
//------------------------------------------------------------------------------------------------------
function getTopPublishJournal() {
	var publishJournalContent = '';
	actionParam = $('#searchForm').formSerialize();
	$("#publishedJournalCondition").html('<img src="images/loading.gif" align="middle" />载入中，请稍后...');
	$.ajaxq("queue", {
		url : ContextPath + '/document!getTopJournal.action?' + actionParam,
		type : 'post',
		dataType : 'json',
		success : function(data) {
			if (!empty(data)) {
				$(data).each(function(i){
					publishJournalContent += '<li><a href="javascript:;" title="'+data[i].title+'" value="'+data[i].title+'" onclick="selectCondition(\'journalMeta\', \''+data[i].title+'\', this);">'+data[i].title+'</a></li>';
				})
				$("#publishedJournalCondition").html(publishJournalContent);
			} else {
				publishJournalContent += '对不起，当前系统中没有相关信息！'
				$("#publishedJournalCondition").html(publishJournalContent);
			}
		},
		error : function() {
			publishJournalContent += '对不起，当前系统中没有相关信息！';
			$("#publishedJournalCondition").html(publishJournalContent);
		}
	});
}
//------------------------------------------------------------------------------------------------------
function getArticleDbCondition() {
	var articleDbContent = '<li class="select_sx"><a href="javascript:;" value="" onclick="selectConditionMultiple(\'indexdb\', this);">不限</a></li>';
	actionParam = $('#searchForm').formSerialize();
	$.ajaxq("queue", {
		url : ContextPath + '/document!getTopArticleDb.action?' + actionParam,
		type : 'post',
		dataType : 'json',
		success : function(data) {
			if (!empty(data)) {
				$(data).each(function(i){
					articleDbContent += '<li><a href="javascript:;" value="'+data[i].title+'" onclick="selectConditionMultiple(\'indexdb\', this);">'+data[i].title+'</a></li>';
				})
				$("#articleDbCondition").html(articleDbContent);
			} else {
				$("#articleDbCondition").html(articleDbContent);
			}
		},
		error : function() {
		}
	});
}
//------------------------------------------------------------------------------------------------------
function getArticleTypeCondition() {
	var articleTypeContent = '<li class="select_sx"><a href="javascript:;" value="" onclick="selectConditionMultiple(\'docType\', this);">不限</a></li>';
	actionParam = $('#searchForm').formSerialize();
	$.ajaxq("queue", {
		url : ContextPath + '/document!getTopArticleType.action?' + actionParam,
		type : 'post',
		dataType : 'json',
		success : function(data) {
			if (!empty(data)) {
				$(data).each(function(i){
					articleTypeContent += '<li><a href="javascript:;" value="'+data[i].title+'" onclick="selectConditionMultiple(\'docType\', this);">'+data[i].title+'</a></li>';
				})
				$("#articleTypeCodition").html(articleTypeContent);
			} else {
				$("#articleTypeCodition").html(articleTypeContent);
			}
		},
		error : function() {
		}
	});
}
//------------------------------------------------------------------------------------------------------
function getArticleClassCondition() {
	var articleClassContent = '<li class="select_sx"><a href="javascript:;" value="" onclick="selectConditionMultiple(\'className\', this);">不限</a></li>';
	actionParam = $('#searchForm').formSerialize();
	$.ajaxq("queue", {
		url : ContextPath + '/document!getTopArticleClass.action?' + actionParam,
		type : 'post',
		dataType : 'json',
		success : function(data) {
			if (!empty(data)) {
				$(data).each(function(i){
					articleClassContent += '<li><a href="javascript:;" value="'+data[i].title+'" onclick="selectConditionMultiple(\'className\', this);">'+data[i].title+'</a></li>';
				})
				$("#articleClassCondition").html(articleClassContent);
			} else {
				$("#articleClassCondition").html(articleClassContent);
			}
		},
		error : function() {
		}
	});
}
//------------------------------------------------------------------------------------------------------
function getJournalMetaCondition() {
	var journalMetaContent = '<li class="select_sx"><a href="javascript:;"onclick="selectCondition(\'journalMeta\', \'\', this);">不限</a></li>';
	actionParam = $('#searchForm').formSerialize();
	$.ajaxq("queue", {
		url : ContextPath + '/document!getTopJournal.action?' + actionParam,
		type : 'post',
		dataType : 'json',
		success : function(data) {
			if (!empty(data)) {
				$(data).each(function(i){
					journalMetaContent += '<li><a href="javascript:;" onclick="selectCondition(\'journalMeta\', \''+data[i].title+'\', this);">'+data[i].title+'</a></li>';
				})
				$("#journalMetaCondition").html(journalMetaContent);
			} else {
				$("#journalMetaCondition").html(journalMetaContent);
			}
		},
		error : function() {
		}
	});
}
//------------------------------------------------------------------------------------------------------
function selectConditionMultiple(name, item) {
	
	if (!empty(item)) {
		if ($(item).val()) {
			var condition = "";
			if ($(item).parent().hasClass("select_sx")) 
				$(item).parent().removeClass("select_sx");
			else 
				$(item).parent().addClass("select_sx");
			$(item).parent().parent().children().each(function(i){
				if ($(this).hasClass("select_sx")) {
					if ($(this).find("a").val()) 
						condition += $.trim($(this).find("a").val()) + ";";
				}
			});
			if (condition=="") 
				$(item).parent().parent().children().first().addClass("select_sx");
			else 
				$(item).parent().parent().children().first().removeClass("select_sx");
			$('#' + name).val(condition);
		} else {
			$(item).parent().parent().children().removeClass("select_sx");
			$(item).parent().addClass("select_sx");
			$('#' + name).val("");
		}
		
	}
	
	search();
}
//------------------------------------------------------------------------------------------------------
function pageInit() {
//	pg = $(".pagination");
//	$('[id="pgSelect"]').click(function() {
//				try {
//					$('[id="pgSelectNO"]').attr('value', this.value);
//					pg.trigger('setPage', [$('[id="pgSelectNO"]').val() - 1]);
//				} catch (e) {
//				}
//			});

	$("#searchForm").submit(function() {
				post("document_list.jsp?", {
							'searchString' : $("#searchString").val()
						});
				return false;
			});

}

function changeFieldCondition(selID, inpID) {
	$("#"+ selID +" option").each(function(){
		if ($(this).val() && 
				$(this).val() == $("#"+selID).val()) {
			$("#"+$(this).val()).val($("#"+inpID).val());
		} else {
			if ($(this).val()) {
				$("#"+$(this).val()).val("");
			}
		}
	});
}

function paginationJump(htmlItem) {
	pg = $(".pagination");
	var pgNo = $(htmlItem).parent().find(':text').val();
	try {
		pg.trigger('setPage', [pgNo - 1]);
		$('[id="pgSelectNO"]').attr('value', pgNo);
	} catch (e) {
	}
}

function search() {
//	checkLetterStatus();
	checkSourceTypeStatus();
//	keeySearchString();
//	changeFieldCondition('fieldCondition','searchString');
	actionParam = $('#searchForm').formSerialize();
//	getTopAchievementSubject();
	getTopAchievementSubject2();
	getListCount(); // load data 
//	$(".tubiao_div").hide();
	showNavigation();
//	getAgeStatistics("document");
}

function checkLetterStatus() {
	$('#abc_UL').find('a').each(function() {
//		alert($(this).text());
		if($(this).text() == $('#letter').val()) {
			$(this).attr('style', 'color: red');
		}
	});
}

function checkSourceTypeStatus() {
	$('#achievementSubjectCondition2').find('a').each(function() {
		
		if($(this).attr('id')=='sourcetype1' && $(this).text() == $('#sourcetype1').val()) {
			$(this).attr('style', ' color:red; padding: 3px; font-weight: bold; font-size:13px;');
		}else if (!empty($('#sourcetype2').val()) && $(this).attr('id')=='sourcetype2') {
			var sourcetype1=$(this).parent().parent().parent().parent().children().children("#sourcetype1").html().trim();
//			alert('sourcetype1'+sourcetype1);
			if (!empty(sourcetype1)) {
				var sourcetype2=sourcetype1+"/"+$(this).text().trim();
//				alert('sourcetype1'+sourcetype1+'sourcetype2'+sourcetype2);
				if (sourcetype2==$('#sourcetype2').val().trim()) {
					$(this).attr('style', ' float:left; padding: 4px; color:red;  font-size:12px;');
				}
			}
		}
	});
}

function keeySearchString() {
	$('#hiddenSearchString').val($('#searchString').val());
}

// ------------------------------------------------------------------------------------------------------

function showBeiYinTop(topYear) {
	if ($('#beiyin' + topYear + 'Top_img').attr('src').indexOf('images/+.png') > -1) {
		$('#beiyin' + topYear + 'Top_ul')
				.html('<li><img src="images/loading.gif" align="middle" />载入中，请稍后...</li>');
		$('#beiyin' + topYear + 'Top_img').attr('src', 'images/-.png');
		$.ajaxq("queue", {
			url : ContextPath + '/document!getBeiYinTop.action?' + actionParam,
			data : $.param({
				"topYearI" : topYear,
				"CLCTreeNOs":CLCTreeNOs
			}, true),
			type : 'post',
			dataType : 'json',
			success : function(data) {
				if (!empty(data)) {
					var resultContent = '';
					$(data).each(function(i) {
						resultContent += '<li><a title="'
								+ getJsonValue(data[i],
										"http://nglc.cn/kos/ontology/core/datatProperty/name")
								+ '" href="document.jsp?id='
								+ getJsonValue(data[i],
										"http://www.w3.org/1999/02/22-rdf-syntax-ns#url")
								+ '" target="_blank">'
								+ getJsonValue(data[i],
										"http://nglc.cn/kos/ontology/core/datatProperty/name")
								+ '</a></li>';
					});
					$('#beiyin' + topYear + 'Top_ul').html(resultContent);
				} else {
					$('#beiyin' + topYear + 'Top_ul').html("<li>暂无数据！</li>");
				}
			},
			error : function() {
			}
		});
	}
}

function selectCondition(name, value, item) {
	if($('#hiddenSearchString').val() != $('#searchString').val()) $('#searchString').val('');
	if (name == 'letter') { //如果是字母
		$(item).parent().parent().children().children().removeAttr("style");
		if ($('#' + name).val() == value) {
			$('#' + name).val('');
		} else {
			$(item).attr('style', 'color:red');
			$('#' + name).val(value);
		}
	} else if(name == 'keywords_n'){
		if ($('#' + name).val() == value) {
			$('#' + name).val('');
		} else {
			$('#' + name).val(value);
		}
	}else{
//		alert($(item));
		$(item).parent().parent().children().removeClass();//去除所有的<li>标签的class
		$(item).parent().addClass('select_sx');//选中的<li>标签加上class
		if(name=="keywords"){
			var values=$('#' + name).val();
			var arr=values.split(" ");
			var len=arr.length;
			var flag=false;
			for(var i=0;i<len;i++){
				if(arr[i]==value){
					flag=true;
					break;
				}
			}
			if(!flag){
				$('#' + name).val(values+" "+value);
			}
		}else{
		$('#' + name).val(value);
		}
	}
	
//	if (name == 'letter') {
//		$(item).parent().children().removeAttr("style");
//		if ($('#' + name).val() == value) {
//			$('#' + name).val('');
//		} else {
//			$(item).attr('style', 'color:red');
//			$('#' + name).val(value);
//		}
//	} else {
//		if (!empty(item)) {
//			$(item).parent().parent().children().children().removeAttr("style");
//			if ($('#' + name).val() == value) {
//				$('#' + name).val('');
//			} else {
//				$(item).parent().children().attr('style', 'color:red');
//				$('#' + name).val(value);
//			}
//		}
//	}
	search();
}

function selectDateCondition(type, name, value, item) {
	if (!empty(item)) {
		$(item).parent().parent().children().removeClass();
		$(item).parent().addClass('select_sx');
	}
	if ('text' == type || 'select' == type) {
		$("[id$='_selectDateA']").val('');
		$('#' + name + "_selectDateText").val(value);
	} else if ('a' == type) {
		if (!empty(item)) {
			$(item).parent().parent().find('input').val('');
		}
		$("[id$='_selectDateText']").val('');
		$('#' + name + "_selectDateA").val(value);
	}
	search();
}

function selectClassifyCondition(id) {
	$('#CLCTreeNO').val(id);
	search();
}

function checkedClassifyCondition() {
	CLCTreeNOs = new Array();
	var nodes = $('#tt').tree('getChecked');
	for ( var i = 0; i < nodes.length; i++) {
		CLCTreeNOs.push(nodes[i].id);
	}
	search();
}

function searchAffiliationJournal(affiliationJournal) {
	$('#affiliationJournal').val(affiliationJournal);
	search();
}

function searchKeywords(keywords) {
	$('#subject').val(subject);
	search();
}

function searchAuthorAffiliation(authorAffiliation) {
	$('#authorAffiliation').val(authorAffiliation);
	search();
}

function searchAffiliationFoundation(affiliationFoundation) {
	$('#affiliationFoundation').val(affiliationFoundation);
	search();
}

function searchAuthor(author) {
	$('#author').val(author);
	search();
}

function searchPublishDate(publishDate) {
	$('#publishDate_selectDateA').val(publishDate);
	search();
}
// ------------------------------------------------------------------------------------------------------

function selectPageAllDocuments() {
	if ($("#all_pageList_checkbox").attr("checked")) {
		$("[id$='d_pageList_checkbox']").attr("checked", "checked");
	} else {
		$("[id$='d_pageList_checkbox']").removeAttr("checked");
	}
}

// ------------------------------------------------------------------------------------------------------

function sortBeiYinTop(topYear) {
	if (!empty(sorts.get('citationCount'))) {
		sorts.remove('citationCount');
	}
	sorts.put('citationCount', 'citationCount|desc');
	$('#topYearS').val(topYear);
	// alert($('#topYearS').val());
	$('#publishDate_selectDateA').val('');
	$('#publishDate_start_selectDateText').val('');
	$('#publishDate_end_selectDateText').val('');
	search();
}

// function sortField(field, htmlItem) {
// if (field == 'default') {
// $('#field_tr').find("img").remove();
// sorts = new Map();
// } else {
// var sortFieldValue = sorts.get(field);
// if (!empty(sortFieldValue)) {
// sorts.remove(field);
//
// $(htmlItem).parent().find("img").remove();
// if (sortFieldValue.indexOf('desc') > -1) {
// sorts.put(field, field + '|asc');
// $(htmlItem).after('<img style="vertical-align: middle;" src="'
// + ContextPath + '/images/ico_up.png"/>');
// } else if (sortFieldValue.indexOf('asc') > -1) {
// sorts.put(field, field + '|desc');
// $(htmlItem).after('<img style="vertical-align: middle;" src="'
// + ContextPath + '/images/ico_down.png"/>');
// }
// } else {
// sorts.put(field, field + '|desc');
// $(htmlItem).after('<img style="vertical-align: middle;" src="'
// + ContextPath + '/images/ico_down.png"/>');
// }
// }
// actionParam = $('#searchForm').formSerialize();
// getListCount();
// }
var sorts = new Map();
// sorts.put("publishDate", "publishDate" + '|' + "desc");

function sortField(htmlItem, sortType) {
	sorts = sortFieldCommon(htmlItem, sortType, sorts);
	actionParam = $('#searchForm').formSerialize();
	getListCount();
}

function sortFieldSingle(htmlItem, sortType, clickFunction) {
	sorts = sortFieldSingleCommon(htmlItem, sortType, sorts, clickFunction);
	actionParam = $('#searchForm').formSerialize();
	getListCount();
}

// ------------------------------------------------------------------------------------------------------

function changePageCount(htmlItem) {
	page_dispaly_count = htmlItem.value;
	search();
}

// ------------------------------------------------------------------------------------------------------
var isDownload;
var isShow;
function getListCount() {
	$("#allcount").html("总计 " + 0 + " 条记录");
	$("[id$='Top_img']").attr('src', 'images/+.png');
	$("[id$='Top_ul']").html();

	$("#resultContent")
			.html('<tr><td row="6"><img src="images/loading.gif" align="middle" />载入中，请稍后...</td></tr>');
	$(".paginationControl").hide();
	$.ajaxq("queue", {
		url : ContextPath + '/document!getListCount.action?' + actionParam,
		data : $.param({
					searchSubjectItems : searchSubjectItems,
					searchAuthorItems : searchAuthorItems,
					searchConditionItems : searchConditionItems,
					"CLCTreeNOs":CLCTreeNOs
				}, true),
		type : 'post',
		dataType : 'json',
		success : function(data) {
			if (!empty(data)) {
				if(!empty(data.isBelongList)){	            	
	            	$("#isBelongList").val(data.isBelongList);
	            }
				extractResult(data.count,data.pvCount);
				//显示术语
//				showWordHtml(data);
//				$("#searchCondition").text(data.searchCondition);
//				$("#searchConditionTextarea").val(data.searchCondition);
//				isDownload=data.isDownload;
//				isShow=data.isShow;
			}
		},
		error : function() {
			$("#resultContent")
					.html('<tr><td rowspan="6"><p style="padding:15px;">对不起，当前系统中没有相关信息！</p></td></tr>');
		}
	});
}

function extractResult(count,pvcount) {
	try {
		showPageList(count,pvcount);
	} catch (e) {
		$("#resultContent")
				.html('<tr><td rowspan="6"><p style="padding:15px;">对不起，当前系统中没有相关信息！</p></td></tr>');
	}
}

// 显示分页
var showcount=0;
function showPageList(count,pvcount) {
	if(pvcount>=count){
		$("#allcount").html("总计 " + count + " 条记录");	
	}else{
		$("#allcount").html("总计 " + count + " 条记录");	
/*		$("#allcount").html("总计 " + count + " 条记录,权限内显示"+pvcount+"条记录");
		count=pvcount;*/
		count=count;
	}
	showcount=count;
	if (count > 0) {
		if (count <= 2000) {
			$('#dataAnalysisModule').attr("href", "javascript:dataAnalysis();");
		} else {
			$('#dataAnalysisModule').attr("href", "javascript:alert('统计记录不能超过2000条！');");
		}
		$(".pagination").pagination(count, {
					num_edge_entries : 1, // 边缘页数
					num_display_entries : 6, // 主体页数
					prev_text : "上一页",
					next_text : "下一页",
					selectPageBefore : selectPageBefore,
					callback : showPageListCallback,
					items_per_page : page_dispaly_count
				});
		//$("#allcount").html("总计 " + count + " 条记录");
	} else {
		$("#resultContent").html('<tr><td rowspan="6"><p style="padding:15px;">对不起，当前系统中没有相关信息！</p></td></tr>');
		$(".paginationControl").hide();
	}
}

function selectPageBefore() {
	$("#resultContent")
			.html('<tr><td rowspan="6"><img src="images/loading.gif" align="middle" />载入中，请稍后...</td></tr>');
	$(".paginationControl").hide();
}
var index=0;
function showPageListCallback(page_index, jq) {
	index= 1 + (page_index) * page_dispaly_count;
	currentPageQueryPara = actionParam + "&" + $.param({
				'page' : page_index,
				'rows' : page_dispaly_count,
				'sorts' : sorts.values(),
				'showcount':showcount,
				searchSubjectItems : searchSubjectItems,
				searchAuthorItems : searchAuthorItems,
				searchConditionItems : searchConditionItems,
				"CLCTreeNOs":CLCTreeNOs
			}, true);

	$.ajaxq("queue", {
		url : ContextPath + '/document!getList.action?' + actionParam,
		data : $.param({
					'page' : page_index,
					'rows' : page_dispaly_count,
					'sorts' : sorts.values(),
					'showcount':showcount,
					searchSubjectItems : searchSubjectItems,
					searchAuthorItems : searchAuthorItems,
					searchConditionItems : searchConditionItems,
					"CLCTreeNOs":CLCTreeNOs,
					'isBelongList':$("#isBelongList").val()
				}, true),
		type : 'post',
		dataType : 'json',
		context : actionSign,
		success : function(data) {
			showPageListContent(data, this.context);
		},
		error : function() {
			$("#resultContent")
					.html('<tr><td rowspan="6"><p style="padding:15px;">对不起，当前系统中没有相关信息！</p></td></tr>');
		}
	});
}

// 显示检索结果
function showPageListContent(data, currentActionSign) {
	if (actionSign == currentActionSign) {
		var resultContent = "";
		if (!empty(data)) {
			currentPageData = data;
			$(data).each(function(i) {
			//	resultContent += '<tr>';
				/*resultContent += '<td bgcolor="#FFFFFF" style="text-align: center;"><input type="checkbox" id="d_pageList_checkbox" value="'
						+ getJsonValue(data[i],
								"http://www.w3.org/1999/02/22-rdf-syntax-ns#url")
						+ '" /></td>';*/
				var title_h = getJsonValue(data[i], "title_h");
				if (empty(title_h)) {
					title_h = getJsonValue(data[i],
							"http://nglc.cn/kos/ontology/core/datatProperty/title");
				}
				var id=getJsonValue(data[i],"http://www.w3.org/1999/02/22-rdf-syntax-ns#url")
				var category=getJsonValue(data[i],"http://nglc.cn/kos/ontology/core/datatProperty/category");
				var puName="会议地点";
				var puDate="出版时间";
				var authortitle="作者";
				var ktitle="会议召开时间";
				if(category=="thesis"){
					puName="刊名";
					puDate="出版年"
				    authortitle="作者";
					ktitle="关键词";
				}
				resultContent+='<div class="list">'
				    +'<h6><div class="text_overflow">'+(index+i)+' .<a style="color:#2670c9"  href="'+ContextPath+'/document.jsp?id='+id+'&type='+category
				    //+'<h6><div class="text_overflow">'+(index+i)+' .<a style="color:#2670c9"  href="'
					+'" title="'+title_h+'">【文献名称】'
					+title_h
					+' </a></div></h6>';
				//作者
				//var author="";
				var tempau=getJsonValue(data[i],"http://nglc.cn/kos/ontology/core/datatProperty/authors_ns");
				var auArr=new Array();
				if(!empty(tempau)){
					tempau=tempau+"";
					auArr=tempau.split("；");
				}
				var allau='';
				for(var j=0;j<auArr.length;j++){
					 var auth=auArr[j]+'';
					 if (!(auth.indexOf('^a')>=0||auth.indexOf('^c')>=0||auth.indexOf('^d')>=0||auth.indexOf('^e')>=0||auth.indexOf('^f')>=0)) {
						 allau +=  auArr[j]+';'
						
					 }
				}
				
				/*if(!empty(tempau)){
					$(tempau).each(function(i){
						if(tempau[i]!=null)
						 author+=","+tempau[i];
					});
					author=author.substring(1);
				}*/	
				resultContent+='<div class="summary"><strong>'+authortitle+'：</strong>'
					         +allau
					         +'</div>';
				
				
				if(category=="book"){
					resultContent+='<div class="summary"><strong>会议名称：</strong>'
								+getJsonValue(data[i],"http://nglc.cn/kos/ontology/core/datatProperty/collectionTitle")
								+'</div>';
				}
				resultContent+='<div class="summary"><strong>'+ktitle+'：</strong>';
				
				if(category=="thesis"){
					var keywords = getJsonValue(data[i], "http://nglc.cn/kos/ontology/core/datatProperty/keywords");
					var kw = "";
					if (!empty(keywords)) {
						$(keywords).each(function(i) {
							kw += "," + replaceFlag(keywords[i]);
						});
					}
					resultContent += kw.substring(1);
				}else {
					var org = getJsonValue(data[i], "http://nglc.cn/kos/ontology/core/datatProperty/exchangeDate");
					if (!empty(org)) {
						org=org+'';
						org=org.substring(0,10); 
					}
					resultContent +=org;
				}
				if(category=="thesis"){
				resultContent+='</div>'
					         +'<div class="summary"><strong>'+puName+'：</strong>'
					         +getJsonValue(data[i],"http://nglc.cn/kos/ontology/core/datatProperty/periodicalName")
					         +'</div>';
				}else{
					resultContent+='</div>'
				         +'<div class="summary"><strong>'+puName+'：</strong>'
				         +getJsonValue(data[i],"http://nglc.cn/kos/ontology/core/datatProperty/publishing")
				         +'</div>';	
				}
				resultContent +='<div class="summary"><strong>'+puDate+'：</strong>'
					         +getJsonValue(data[i],"http://nglc.cn/kos/ontology/core/datatProperty/publicationDate")
					         +'</div>';
			    
				resultContent+='</div>';
					/*<strong><b>'
					+getJsonValue(data[i],
					"http://nglc.cn/kos/ontology/core/datatProperty/endDate")
					+' </b>年发表</strong></li>';
				/*resultContent += '<td bgcolor="#FFFFFF"><div style="width:210px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"><a title="'
						+ getJsonValue(data[i],
								"http://nglc.cn/kos/ontology/core/datatProperty/title")
						+ '" href="document.jsp?id='
						+ getJsonValue(data[i],
								"http://www.w3.org/1999/02/22-rdf-syntax-ns#url")
						+ '" target="_blank">' + title_h + '</a></div></td>';
				
				var authors = getJsonValue(data[i],
						"http://nglc.cn/kos/ontology/core/datatProperty/authors");
				
				resultContent += '<td bgcolor="#FFFFFF" style="text-align: center;">'
				$(authors).each(function(i) {
					if (i<3) {
						resultContent += ''+authors[i]+';';
					}
				});
				resultContent += '&nbsp;</td>';
				

				resultContent += '<td bgcolor="#FFFFFF" style="text-align: center;">'
					+ getJsonValue(data[i],
							"http://nglc.cn/kos/ontology/core/datatProperty/achievementType")
					+ '</td>';

				resultContent += '<td bgcolor="#FFFFFF" style="text-align: center;">'
					+ getJsonValue(data[i],
							"http://nglc.cn/kos/ontology/core/datatProperty/endDate")
					+ '</td>';
//				resultContent += '<td bgcolor="#FFFFFF" style="text-align: center;">'
//					+ getJsonValue(data[i],
//							"http://nglc.cn/kos/ontology/core/datatProperty/endDate")
//					+ '</td>';
				resultContent += '</tr>';*/
			});
		}
		$("#resultContent").html(resultContent);
		$(".paginationControl").show();
	}
}

function getFacetOrganisationType() {
	$.ajaxq("queue", {
		url : ContextPath + '/document!getFacetOrganisationType.action?'
				+ actionParam,
		data : $.param({
			"CLCTreeNOs":CLCTreeNOs
		}, true),
		type : 'post',
		dataType : 'json',
		success : function(data) {
			var resultContent = "";
			if (!empty(data)) {
				$(data).each(function(i) {
					var name = getJsonValue(data[i], "name");
					var value = "";
					var count = getJsonValue(data[i], "count");
					if (name == "http://nglc.cn/kos/ontology/core/class/Hospital") {
						name = "医院";
					} else if (name == "http://nglc.cn/kos/ontology/core/class/College") {
						name = "学院";
					} else if (name == "http://nglc.cn/kos/ontology/core/class/Institute") {
						name = "研究所";
					} else if (name == "http://nglc.cn/kos/ontology/core/class/OrganizationAlternative") {
						name = "其他机构";
					}

					resultContent += '<li>' + name + '（' + count + '）</li>';
				});
			}
			$('#FacetOrganisationType').html(resultContent);
		},
		error : function() {
		}
	});
}

function getBeiYinTop(topYear) {
	$.ajaxq("queue", {
		url : ContextPath + '/document!getBeiYinTop.action?' + actionParam,
		data : $.param({
					"topYearI" : topYear,
					searchSubjectItems : searchSubjectItems,
					searchAuthorItems : searchAuthorItems,
					searchConditionItems : searchConditionItems,
					"CLCTreeNOs":CLCTreeNOs
				}, true),
		type : 'post',
		dataType : 'json',
		success : function(data) {
			if (!empty(data)) {
				var resultContent = '';
				$(data).each(function(i) {
					resultContent += '<li><a title="'
							+ getJsonValue(data[i],
									"http://nglc.cn/kos/ontology/core/datatProperty/name")
							+ '" href="document.jsp?id='
							+ getJsonValue(data[i],
									"http://www.w3.org/1999/02/22-rdf-syntax-ns#url")
							+ '" target="_blank">'
							+ getJsonValue(data[i],
									"http://nglc.cn/kos/ontology/core/datatProperty/name")
							+ '</a></li>';
				});
				$('#beiyin' + topYear + 'Top_ul').html(resultContent);
			} else {
				$('#beiyin' + topYear + 'Top_ul').html("<li>暂无数据！</li>");
			}
		},
		error : function() {
		}
	});
}

// -----------------------------------------------------------------------------------------------------------------

function showFacetByField(field, facetTitle) {
/*	if(isShow!="true"){
		alert("您没有权限查看");
		return;
	}*/
	var html='<div class="rightbox"><div class="title"><h3><div>'
		+ facetTitle;
/*	if(isDownload=="true"){
		html+='<span style="float: right; font-weight:normal;"><a href="javascript:;" onClick="downloadFacet(\'' + field + '\',\'' + facetTitle + '\')">更多数据下载</a></span>';
	}*/
	html+='<span style="float: right; font-weight:normal;"><a href="javascript:;" onClick="downloadFacet(\'' + field + '\',\'' + facetTitle + '\')">更多数据下载</a></span>';
	html+= '</div></h3>&#x3000;</div></div><div class=""><div id="' 
		+ field
		+ '_TuBiao_div" style="width: 100%;"><img src="images/loading.gif" align="middle" />载入中，请稍后...</div></div>';
//	$("#tubiao_div").show();
	$('.tubiao_div')
			.html(html);
	facet(field);
}

function facet(field) {
	$.ajaxq("facet", {
		url : ContextPath + '/document!facet.action?' + actionParam,
		data : $.param({
					facetField : field,
					searchSubjectItems : searchSubjectItems,
					searchAuthorItems : searchAuthorItems,
					searchConditionItems : searchConditionItems,
					"CLCTreeNOs":CLCTreeNOs
				}, true),
		type : 'post',
		dataType : 'json',
		success : function(data) {
			if (!empty(data)) {
				$.each(data, function(key, value) {
					field = key;
					$(value).each(function(i){
						value[i].title=removeBlockFlag(replaceFlag(value[i].title));
					});
					try {
						$("#" + key + "_TuBiao_div").css("height", "450px");
						if (key == 'publishDate' || key == 'authorAffiliation' ||
								key == 'authors' || key == 'achivimentOrganization') {
							chartColumn(key + "_TuBiao_div", value);
						} else {
							chartPie(key + "_TuBiao_div", value);
						}
					} catch (e) {

					}
				});
			} else {
				$("#" + field + "_TuBiao_div").html("<br/><br/>暂无数据！");
			}
		},
		error : function() {
			
		}
	});
}
function downloadFacet(field, actionTitle) {
	window.open(ContextPath + '/document!facet.action?' + actionParam
			+ "&facetField=" + field + "&actionType=download&actionTitle="
			+ actionTitle);
}

// ------------------------------------------------------------------------------------------------------------------
function showNianDaiTongJi(facetTitle) {
	$("#tubiao_div").show();
	$('#tubiao_div')
			.html('<div class="rightbox"><div class="title"><h3><div>'
					+ facetTitle
					+ '<span style="float: right; font-weight:normal;"<a href="javascript:;" onClick="downloadNianDaiTongJi(\''
						+ facetTitle
						+ '\')">更多数据下载</a></apan>'
					+ '</div></h3>&#x3000;</div></div><div class=""><div id="nianDaiTongJi_div" style="width: 100%;"><img src="images/loading.gif" align="middle" />载入中，请稍后...</div></div>');
	getNianDaiTongJi();
}

function getNianDaiTongJi() {
	$.ajaxq("facet", {
				url : ContextPath + '/document!getNianDaiTongJi.action?'
						+ actionParam,
				data : $.param({
					"CLCTreeNOs":CLCTreeNOs
				}, true),
				type : 'post',
				dataType : 'json',
				success : function(data) {
					if (!empty(data)) {
						$("#nianDaiTongJi_div").css("height", "500px");
						chartLineXY("nianDaiTongJi_div", data);
					} else {
						$("#nianDaiTongJi_div").html("<br/><br/>暂无数据！");
					}
				},
				error : function() {
					$("#nianDaiTongJi_div").html("<br/><br/>暂无数据！");
				}
			});
}

function downloadNianDaiTongJi(actionTitle) {
	window.open(ContextPath + '/document!getNianDaiTongJi.action?'
			+ actionParam + "&actionType=download&actionTitle=" + actionTitle);
}

function showNianDaiKeywordsTongJi(field, facetTitle) {
/*	if(isShow!="true"){
		alert("您没有权限查看");
		return;
	}*/
	var html='<div class="rightbox"><div class="title"><h3><div>'
		+ facetTitle;
/*	if(isDownload=="true"){
	  html+='<span style="float: right; font-weight:normal;"><a href="javascript:;" onClick="downloadNianDaiKeywordsTongJi(\''+field+'\',\''
		+ facetTitle
		+ '\')">更多数据下载</a></span>';	
	}*/
	html+='<span style="float: right; font-weight:normal;"><a href="javascript:;" onClick="downloadNianDaiKeywordsTongJi(\''+field+'\',\''
	+ facetTitle
	+ '\')">更多数据下载</a></span>';	
	
	html+='</div></h3>&#x3000;</div></div><div class=""><div id="nianDaiKeywordsTongJi_div" style="width: 100%;"><img src="images/loading.gif" align="middle" />载入中，请稍后...</div></div>';
//	$("#tubiao_div").show();
	$('.tubiao_div')
			.html(html);
	getNianDaiKeywordsTongJi(field);
}

function getNianDaiKeywordsTongJi(field) {
	$.ajaxq("facet", {
				url : ContextPath
						+ '/document!getNianDaiKeywordsTongJi.action?'
						+ actionParam,
				data : $.param({
					facetField : field,
					"CLCTreeNOs":CLCTreeNOs
				}, true),
				type : 'post',
				dataType : 'json',
				success : function(data) {
					if (!empty(data)) {
						$("#nianDaiKeywordsTongJi_div").css("height", "500px");
						/*$(data).each(function(){
						 alert(data[i].title)	
						});*/
						chartLineXY("nianDaiKeywordsTongJi_div", data);
					} else {
						$("#nianDaiKeywordsTongJi_div").html("<br/><br/>暂无数据！");
					}
				},
				error : function() {
					$("#nianDaiKeywordsTongJi_div").html("<br/><br/>暂无数据！");
				}
			});
}

function downloadNianDaiKeywordsTongJi(field, actionTitle) {
	window.open(ContextPath + '/document!getNianDaiKeywordsTongJi.action?'
			+ actionParam + "&facetField=" + field + "&actionType=download&actionTitle=" + actionTitle);
}
// -----------------------------------------------------------------------------------------------------------------
function dataAnalysis() {

	$('#dataAnalysisForm')[0].submit();

	// window.open(ContextPath + '/data_analysis.jsp?searchCondition='
	// + encodeURI($('#searchCondition').text(), "utf-8"));

}
function saveResult() {

	var idsValue = "";
	$("[id='d_pageList_checkbox'][checked]").each(function() {
				idsValue += 'ids=' + $(this).val() + "&";
			});

	var w = window.open(ContextPath
			+ '/document-export!export.action?export_operate=save&' + idsValue
			+ $('#exportForm').formSerialize() + "&" + currentPageQueryPara);
}

function printResult() {

	var idsValue = "";
	$("[id='d_pageList_checkbox'][checked]").each(function() {
				idsValue += 'ids=' + $(this).val() + "&";
			});

	var w = window.open(ContextPath
			+ '/document-export!export.action?export_operate=print&' + idsValue
			+ $('#exportForm').formSerialize() + "&" + currentPageQueryPara);

	w.print();
}

function saveYZResutl() {
	var idsValue = "";
	$("[id='d_pageList_checkbox'][checked]").each(function() {
				idsValue += 'ids=' + $(this).val() + "&";
			});

	var w = window.open(ContextPath + '/document-export!exportYZ.action?'
			+ idsValue + $('#exportForm').formSerialize() + "&"
			+ currentPageQueryPara);
}

function printResultOld() {
	var resultContent = '';
	if (!empty(currentPageData)) {
		$(currentPageData).each(function(j) {
			var data = currentPageData[j];
			resultContent += '【标题】'
					+ getJsonValue(data,
							"http://nglc.cn/kos/ontology/core/datatProperty/name")
					+ '</br>';

			resultContent += '【英文名称】'
					+ getJsonValue(data,
							"http://nglc.cn/kos/ontology/core/datatProperty/etitle")
					+ '</br>';

			var organisation = getJsonValue(data,
					"http://nglc.cn/kos/ontology/core/objectProperty/authorAffiliation");
			resultContent += '【单位】';
			$(organisation).each(function(i) {
				resultContent += getJsonValue(organisation[i],
						"http://nglc.cn/kos/ontology/core/datatProperty/name")
						+ '&nbsp;';
			});
			resultContent += '</br>';

			resultContent += '【第一作者】';
			resultContent += getJsonValue(data,
					"http://nglc.cn/kos/ontology/core/datatProperty/firstAuthorMeta");
			resultContent += '</br>';

			var author = getJsonValue(data,
					"http://nglc.cn/kos/ontology/core/objectProperty/author");
			resultContent += '【作者】';
			$(author).each(function(i) {
				resultContent += getJsonValue(author[i],
						"http://nglc.cn/kos/ontology/core/datatProperty/name")
						+ '&nbsp;';
			});
			resultContent += '</br>';

			// var foundation = getJsonValue(data,
			// "http://nglc.cn/kos/ontology/core/objectProperty/affiliationFoundation");
			// resultContent += '【基金】';
			// $(foundation).each(function(i) {
			// resultContent += '<a href="foundation.jsp?id='
			// + getJsonValue(foundation[i],
			// "http://www.w3.org/1999/02/22-rdf-syntax-ns#url")
			// + '">'
			// + getJsonValue(foundation[i],
			// "http://nglc.cn/kos/ontology/core/datatProperty/name")
			// + '</a>&nbsp;';
			// });
			// resultContent += '</br>';

			var journal = getJsonValue(data,
					"http://nglc.cn/kos/ontology/core/objectProperty/affiliationJournal");
			resultContent += '【所属期刊】';
			$(journal).each(function(i) {
				resultContent += getJsonValue(journal[i],
						"http://nglc.cn/kos/ontology/core/datatProperty/name")
						+ '&nbsp;';
			});
			resultContent += '</br>';

			resultContent += '【页】'
					+ getJsonValue(data,
							"http://nglc.cn/kos/ontology/core/datatProperty/page")
					+ '</br>';

			var citingArticle = getJsonValue(data,
					"http://nglc.cn/kos/ontology/core/datatProperty/citingArticle");
			resultContent += '【引用文章】';
			$(citingArticle).each(function(i) {
				resultContent += getJsonValue(citingArticle[i],
						"http://nglc.cn/kos/ontology/core/datatProperty/name")
						+ '&nbsp;';
			});
			resultContent += '</br>';

			resultContent += '【地址】'
					+ getJsonValue(data,
							"http://nglc.cn/kos/ontology/core/datatProperty/address")
					+ '</br>';

			resultContent += '【发文时间】'
					+ getJsonValue(data,
							"http://nglc.cn/kos/ontology/core/datatProperty/date")
					+ '</br>';

			resultContent += '【发表时间】'
					+ getJsonValue(data,
							"http://nglc.cn/kos/ontology/core/datatProperty/publishDate")
					+ '</br>';

			var keywords = getJsonValue(data,
					"http://nglc.cn/kos/ontology/core/datatProperty/keywords");
			resultContent += '【关键词】';
			if (!empty(keywords)) {
				$(keywords).each(function(i) {
							resultContent += keywords[i] + '&nbsp;';
						});
			}
			resultContent += '</br>';

			var subject = getJsonValue(data,
					"http://nglc.cn/kos/ontology/core/datatProperty/subject");
			resultContent += '【主题词】';
			if (!empty(subject)) {
				$(subject).each(function(i) {
							resultContent += subject[i] + '&nbsp;';
						});
			}

			resultContent += '</br>';

			resultContent += '【被引】'
					+ myParseInt(getJsonValue(data,
							"http://nglc.cn/kos/ontology/core/datatProperty/citationCount"))
					+ '</br>';
			resultContent += '【简介】'
					+ getJsonValue(data,
							"http://nglc.cn/kos/ontology/core/datatProperty/abstract")
					+ '</br>';
			resultContent += '</br>';
			resultContent += '</br>';

		});
	}
	var w = window.open();
	w.document.write(resultContent);
}

function getQueryParzt(ztword){
	
	changeFieldCondition('fieldCondition','searchString');
	actionParam = $('#searchForm').formSerialize();
	
	$.ajaxq("getQueryparReport", {
		url : ContextPath
				+ '/project!getQueryparReportzt.action?'+actionParam,
		type : 'post',
		dataType : 'Text',
		success : function(data) {
			if (!empty(data)) {
				
				if (ztword.indexOf(" ") > -1) {
					ztword = ztword.replace(" ", "\\\\ ");
				}
				if (ztword.indexOf(":") > -1) {
					ztword = ztword.replace(":", "\\\\:");
				}
				
				$("#queryReportId").val(data+" AND (subject:("+ztword+"))");
				$("#reportForm")[0].action='themeReport.jsp';
				$("#reportForm")[0].submit();
			}else{
				$("#queryReportId").val('');
			}
		},
		error : function() {
		}
	});
}
function selectFB(tag){
	
	if(tag=='1'){
		document.getElementById("con_one_2").style.display="none";
		setTab('one',1,8);
	}else if(tag=='2'){
		showFacetByField('keywords', '关键词分析');
		setTab('one',2,8);
	}else if(tag=='3'){
		showNianDaiKeywordsTongJi('keywords,endDate','关键词年代分布');
		setTab('one',3,8);
	}else if(tag=='4'){
		showNianDaiKeywordsTongJi('achievementType,endDate','年代发文统计');
		setTab('one',4,8);
	}else if(tag=='5'){
		showFacetByField('spaceSubject','空间信息主题分析');
		setTab('one',5,8);
	}else if(tag=='6'){
		showFacetByField('authors','作者分布');
		setTab('one',6,8);
	}else if(tag=='7'){
		showFacetByField('organization','机构分布');
		setTab('one',7,8);
	}
	
}



function setTab(name,cursel,n){
	 for(i=1;i<n;i++){
		 var menu=document.getElementById(name+i);
	  if (i==1) {
		  var con=document.getElementById("con_"+name+"_"+i);
	  }else{
		  var con=document.getElementById("con_"+name+"_"+2);
	  }
	  menu.className=i==cursel?"hover":"";
	  if (i<=cursel) {
		  con.style.display=i==cursel?"block":"none";
	  }
	 }
}
// ----------------------------------------------------------------------------
//导航栏
function showNavigation(){
	var listType='';
	var sourcetype1=$('#sourcetype1').val().trim(); 
	var sourcetype2=$('#sourcetype2').val().trim(); 
	var keywords_n=$('#keywords_n').val().trim(); 
	var publishDate=$('#publishDate_selectDateA').val().trim(); 
	var letter=$('#letter').val().trim(); 
	if (!empty(sourcetype1)) {
		listType=sourcetype1+';   ';
	}
	if (!empty(sourcetype2)) {
		listType +=sourcetype2+';   ';
	}
	if (!empty(keywords_n)) {
		var temptitle=removeBlockFlag(replaceFlag(keywords_n));
		listType+=temptitle+';   ';
	}
	if (!empty(publishDate)) {
		listType+=publishDate+';   ';
	}
	if (!empty(letter)) {
		listType+=letter+';   ';
	}
	if (!empty(listType)) {
		listType=listType.substring(0,listType.length-4); 
		listType='('+listType+')';
		$("#listType").html('>'+listType);
	}else {
		$("#listType").html('');
	}
	
}

<?php
/**
 * Created by Gw.
 * User: GETBIN
 * Date: 2018/11/28
 * Time: 13:59
 */
include "config.php";
?>


<!doctype html>
<html lang="zh-CH">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <title>地震科学专业知识服务系统</title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link rel="stylesheet" type="text/css" href="css/style.css"  >
    <link rel="stylesheet" type="text/css" href="css/css_new.css">
    <link rel="stylesheet" type="text/css" href="css/project_list.css">
    <link rel="stylesheet" type="text/css" href="css/pagination.css">
    <link rel="stylesheet" type="text/css" href="css/publish_new.css">
    <link rel="stylesheet" type="text/css" href="css/styleTop.css">
    <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
    <link href="https://cdn.bootcss.com/lightgallery/1.6.11/css/lg-fb-comment-box.min.css" rel="stylesheet">
</head>

<body>


<div class="topnav headTop">
    <div class="container">
        <div class="pdleft">
            <a class="left">
                您好，欢迎来到地震科学专业知识服务系统！
            </a>
            <div class="right">
                <a href="">知识中心首页</a>
                <a id="login" href="">登录</a>
                <a id="register" href="" style="padding-right:15px;">注册</a>
                <a id="login_center" href="">知识中心登录/注册</a>
                <a id="loginout" href="" style="display:none;">退出登陆</a>
                <a id="userinfo" href="" style="display:none;">我的信息</a>
            </div>
        </div>
    </div>
</div>
<div class="seached">
    <div class="seachedIn">
        <div class="left seachedImg">
            <a href="index.php"><img class="logo" id="logo" alt="Brand" width="300" height="" src="images/logo.png"></a>
        </div>
        <div class="seachedInput right">
            <input id="source" name="source" type="hidden" value="期刊论文">
            <input class="xIn" type="text" placeholder="请输入期刊论文关键字">
            <button class="xBtn">搜索</button>
        </div>
    </div>
</div>
<header class="am-topbar">
    <div class="container">
        <div class="top-mid">
            <div class=" pc-menu">
                <div class="">
                    <ul class="topNav">
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                            <a style="color:white;" href="index.php">首页</a>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                            <a style="color:white;" href="javascript:;">文献资料</a>
                            <ul class="sub-menu">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <i class="left"></i>
                                    <a href="javascript:void(0)">期刊论文</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <i class="left"></i>
                                    <a href="">学位论文</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <i class="left"></i>
                                    <a href="javascript:void(0)">会议论文</a>
                                </li>

                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <i class="left"></i>
                                    <a href="">专利</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <i class="left"></i>
                                    <a href="">科技资料</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                            <a style="color:white;" href="javascript:;">科学数据</a>
                            <ul class="sub-menu">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <i class="left"></i>
                                    <a href="">地震目录库</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <i class="left"></i>
                                    <a href="">地震产品库</a>
                                </li>

                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                            <a style="color:white;" href="">术语资源</a>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                            <a style="color:white;" href="javascript:;">科研要素</a>
                            <ul class="sub-menu">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <i class="left"></i>
                                    <a href="">专家</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <i class="left"></i>
                                    <a href="">机构</a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                            <a style="color:white;" href="javascript:;">特色资源</a>
                            <ul class="sub-menu">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <i class="left"></i>
                                    <a href="">国外应急管理动态</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <i class="left"></i>
                                    <a href="">地震科普库</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <i class="left"></i>
                                    <a href="">地震标准库</a>
                                </li>
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <i class="left"></i>
                                    <a href="">地震灾情库</a>
                                </li>

                            </ul>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children" style="padding-right: 0;">
                            <a style="color:white;" href="">专题应用</a>
                            <ul class="sub-menu">
                                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                                    <i class="left"></i>
                                    <a href="">知识图谱</a>
                                </li>

                            </ul>
                        </li>
                    </ul>
                    <!--#endeditable-->
                </div>
            </div>
        </div>
    </div>
</header>
<div style="height:30px;background-color:#f5f5f5;"></div>
<div id="MainContainer">

    <div id="wrapper">
        <div class="w_left">

            <div class="left_box">
                <div class="title">
                    <h3>文献学科</h3>
                </div>
                <div class="content">
                    <ul class="list_info1" id="achievementSubjectCondition2">
                        <li>
                            <div style="width:100%; padding: 5px; float:left; background-color: #E5ECF4;">
                                <a style=" color:#613910; padding: 3px; font-weight: bold; font-size:13px;" id="sourcetype1" href="javascript:void(0);">工业科学</a>(125787)</div>
                            <div style="float:left" class="list2">
                                <ul style=" padding: 3px; float:left">
                                    <li style="float:left; margin-right: 4px; margin-left: 4px">
                                        <a id="sourcetype2" style="float:left;padding: 4px; color:black;  font-size:12px;" href="javascript:void(0);">框架</a><span style="float:left;padding:4px; margin-right: 4px" "=" ">(1503)</span></li><li style="float:left; margin-right: 4px; margin-left: 4px "><a id="sourcetype2 " style="float:left;padding: 4px; color:black; font-size:12px; " onclick="sourcetypeCondition(&#39;sourcetype2&#39;, &#39; 工业科学/其它&#39;); " href="javascript:void(0); ">其它</a><span style="float:left;padding:4px; margin-right: 4px " "="">(21893)</span>
                                    </li>
                                    <li style="float:left; margin-right: 4px; margin-left: 4px">
                                        <a id="sourcetype2" style="float:left;padding: 4px; color:black;  font-size:12px;" href="javascript:void(0);">钢结构</a><span style="float:left;padding:4px; margin-right: 4px" "=" ">(1536)</span></li><li style="float:left; margin-right: 4px; margin-left: 4px "><a id="sourcetype2 " style="float:left;padding: 4px; color:black; font-size:12px; " onclick="sourcetypeCondition(&#39;sourcetype2&#39;, &#39; 工业科学/安全保密&#39;); " href="javascript:void(0); ">安全保密</a><span style="float:left;padding:4px; margin-right: 4px " "="">(33525)</span>
                                    </li>
                                    <li style="float:left; margin-right: 4px; margin-left: 4px">
                                        <a id="sourcetype2" style="float:left;padding: 4px; color:black;  font-size:12px;" href="javascript:void(0);">结构动力学</a><span style="float:left;padding:4px; margin-right: 4px" "=" ">(4051)</span></li><li style="float:left; margin-right: 4px; margin-left: 4px "><a id="sourcetype2 " style="float:left;padding: 4px; color:black; font-size:12px; " onclick="sourcetypeCondition(&#39;sourcetype2&#39;, &#39; 工业科学/加密与解密&#39;); " href="javascript:void(0); ">加密与解密</a><span style="float:left;padding:4px; margin-right: 4px " "="">(12474)</span>
                                    </li>
                                    <li style="float:left; margin-right: 4px; margin-left: 4px">
                                        <a id="sourcetype2" style="float:left;padding: 4px; color:black;  font-size:12px;" href="javascript:void(0);">数据备份与恢复</a><span style="float:left;padding:4px; margin-right: 4px" "=" ">(4212)</span></li><li style="float:left; margin-right: 4px; margin-left: 4px "><a id="sourcetype2 " style="float:left;padding: 4px; color:black; font-size:12px; " onclick="sourcetypeCondition(&#39;sourcetype2&#39;, &#39; 工业科学/计算机病毒与防治&#39;); " href="javascript:void(0); ">计算机病毒与防治</a><span style="float:left;padding:4px; margin-right: 4px " "="">(7853)</span>
                                    </li>
                                    <li style="float:left; margin-right: 4px; margin-left: 4px">
                                        <a id="sourcetype2" style="float:left;padding: 4px; color:black;  font-size:12px;" href="javascript:void(0);">土动力学与振动地基</a><span style="float:left;padding:4px; margin-right: 4px" "=" ">(1884)</span></li><li style="float:left; margin-right: 4px; margin-left: 4px "><a id="sourcetype2 " style="float:left;padding: 4px; color:black; font-size:12px; " onclick="sourcetypeCondition(&#39;sourcetype2&#39;, &#39; 工业科学/耐震、隔震、防爆结构&#39;); " href="javascript:void(0); ">耐震、隔震、防爆结构</a><span style="float:left;padding:4px; margin-right: 4px " "="">(2010)</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div style="width:100%; padding: 5px; float:left; background-color: #E5ECF4;">
                                <a style=" color:#613910; padding: 3px; font-weight: bold; font-size:13px;" id="sourcetype1" href="javascript:void(0);">环境科学</a>(9024)</div>
                            <div style="float:left" class="list2">
                                <ul style=" padding: 3px; float:left">
                                    <li style="float:left; margin-right: 4px; margin-left: 4px">
                                        <a id="sourcetype2" style="float:left;padding: 4px; color:black;  font-size:12px;" href="javascript:void(0);">其它</a><span style="float:left;padding:4px; margin-right: 4px" "=" ">(522)</span></li><li style="float:left; margin-right: 4px; margin-left: 4px "><a id="sourcetype2 " style="float:left;padding: 4px; color:black; font-size:12px; " onclick="sourcetypeCondition(&#39;sourcetype2&#39;, &#39; 环境科学/灾害及其防治&#39;); " href="javascript:void(0); ">灾害及其防治</a><span style="float:left;padding:4px; margin-right: 4px " "="">(958)</span>
                                    </li>
                                    <li style="float:left; margin-right: 4px; margin-left: 4px">
                                        <a id="sourcetype2" style="float:left;padding: 4px; color:black;  font-size:12px;" href="javascript:void(0);">火灾与爆炸事故</a><span style="float:left;padding:4px; margin-right: 4px" "=" ">(116)</span></li><li style="float:left; margin-right: 4px; margin-left: 4px "><a id="sourcetype2 " style="float:left;padding: 4px; color:black; font-size:12px; " onclick="sourcetypeCondition(&#39;sourcetype2&#39;, &#39; 环境科学/区域环境规划与管理&#39;); " href="javascript:void(0); ">区域环境规划与管理</a><span style="float:left;padding:4px; margin-right: 4px " "="">(191)</span>
                                    </li>
                                    <li style="float:left; margin-right: 4px; margin-left: 4px">
                                        <a id="sourcetype2" style="float:left;padding: 4px; color:black;  font-size:12px;" href="javascript:void(0);">自然灾害及其防治</a><span style="float:left;padding:4px; margin-right: 4px" "=" ">(4793)</span></li><li style="float:left; margin-right: 4px; margin-left: 4px "><a id="sourcetype2 " style="float:left;padding: 4px; color:black; font-size:12px; " onclick="sourcetypeCondition(&#39;sourcetype2&#39;, &#39; 环境科学/生态系统与污染生态学&#39;); " href="javascript:void(0); ">生态系统与污染生态学</a><span style="float:left;padding:4px; margin-right: 4px " "="">(133)</span>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="w_right">
            <div class="location" style="margin-bottom: 20px;margin-top: 20px; font-size:14px;">
                您所在的位置：
                <a style="font-size:13px;" href=index.php>首页</a> &gt;
                <a id="dList" style="font-size:13px;" href="index.php">地震知识数据库 </a>&gt;
                <a id="dList" style="font-size:13px;" href="list.php">地震亚区分布 </a>
                <a style="font-size:13px;" id="listType" href=""></a>
            </div>
            <div class="lib_Menubox lib_tabborder">
                <ul>
                    <li style="width:90px;" id="one1" class="hover"><?php echo $Option ;?></li>
                </ul>
            </div>



            <div class="w8_rightbox" id="con_one_1" title = "地震区">
                <div>
                    <div style="margin-top: 10px;padding: 5px;background: #fff;">
                    <?php 
                    $coords1 = $coords2 = $coords3 =  "";
                    $title1 = $title2 = $title3 = "";
                    switch($NameGet){
                        case 'xj':$title1 = "天山地震亚区"; $coords1 = "125,329,209,345,342,283,542,457,728,516,738,518,567,516,312,580,268,580,189,496,129,491";$title2 = "阿尔泰贝加尔地震亚区";$coords2 = "342,283,436,246,575,221,658,234,687,213,839,203,735,347,728,516,542,457"; break;
                        case 'qzgy': $title1 = "唐古拉喜马拉雅地震亚区";  $coords1 = "262,206,264,307,334,404,516,532,559,653,771,654,768,560,685,480,669,433,620,367,425,261,334,243";$title2 = "昆仑山地震亚区";$coords2 = "273,137,314,148,380,211,432,220,655,165,807,168,785,198,788,240,804,266,812,325,778,443,768,560,685,480,669,433,620,367,425,261,334,243,262,206"; break;
                        case 'db': $title1 = "大兴安岭地震亚区"; $coords1 = "311,180,442,175,423,310,374,419,224,439,223,301";$title2 = "松花江地震亚区";$coords2 ="442,175,638,176,516,342,526,402,496,382,380,419,423,310"; break;
                        case 'hb': $title1 = "鄂尔多斯地震亚区"; $coords1 = "185,202,333,188,356,178,260,372,236,380,183,379,177,317,155,277,158,229";$title2 = "朝鲜半岛地震亚区";$coords2 = "356,181,501,135,535,156,557,235,586,289,547,366,395,224,260,372"; $title3 = "冀鲁豫地震亚区";$coords3 = "260,372,395,224,547,366,486,449,365,464,233,380,260,372"; break;
                        case 'hn': $title1 = "大别山地震亚区"; $coords1 = "238,154,272,158,391,228,495,215,578,83,594,106,545,253,483,292,411,248,286,359,200,288,200,256";$title2 = "东南沿海地震亚区";$coords2 = "200,288,286,359,411,248,483,292,470,335,302,453,197,460"; break;
                        default;
                    }
                    $getname = substr($_SERVER['REQUEST_URI'], 21);  //得到当前页面尾缀
                    if(!$getname){
                        $getname = 'all';
                    }

                    if(isset($UrlBlankTemp1[$getname][0])){
                        $URL0 = $UrlBlankTemp1[$getname][0];
                    }else{
                        $URL0="";
                    }
                    if(isset($UrlBlankTemp1[$getname][1])){
                        $URL1 = $UrlBlankTemp1[$getname][1];
                    }else{
                        $URL1="";
                    }
                    if(isset($UrlBlankTemp1[$getname][2])){
                        $URL2 = $UrlBlankTemp1[$getname][2];
                    }else{
                        $URL2="";
                    }
    
                    echo  "<img src=\"$NamegetImg\" alt=\"\" usemap =\"#yaqu\" style=\"width: 646px\">";
                    echo  "<map name=\"yaqu\">";
                    echo  "<area shape=\"rect\" coords=\"0,70,140,160\" href=\"/ESKSS/index.php\" alt=\"dizhenqu\" />";
                    echo  "<area shape=\"poly\" title = $title1 coords=$coords1 href=\"/ESKSS/details.php?Name=$URL0\" alt=\"dizhenqu1\" />";
                    echo  "<area shape=\"poly\" title = $title2 coords=$coords2 href=\"/ESKSS/details.php?Name=$URL1\" alt=\"dizhenqu2\" />";
                    echo  "<area shape=\"poly\" title = $title3 coords=$coords3 href=\"/ESKSS/details.php?Name=$URL2\" alt=\"dizhenqu3\" />";
                    echo  "</map>";
                    ?>
                    </div>
                    <?php
                    if(!$ListNum){
                        echo "<p style=\"color: crimson;font-size:large \">该区域无亚区</p>";
                    }
                    ?>
                </div>
                <?php

                if ($ListPage){
                    echo "<div>";
                    echo "<img src=\"images/2.png\" style=\"width: 746px\" usemap = \"#planetmap\">";
                    echo "<map name=\"planetmap\">";
                    echo "<area shape=\"poly\" coords=\"56, 90, 57, 174, 63,168, 90,176,130,215,157,220,297,186,387,186,387,98,443,26,359,30,346,40,,298,33,223,49,100,98\" href=\"list.php?Name=xj\" alt=\"1\"  name=\"ASD\" />";
                    echo "<area shape=\"poly\" coords=\"57, 173, 58, 272, 100, 331, 147, 369, 209, 409, 237, 487, 360, 484, 368, 353, 389, 286, 383, 246, 373, 229, 373, 207, 386, 192, 386, 186, 296,186, 158,219,131,215,90,175, 64, 170, \" href=\"list.php?Name=qzgy\" alt=\"2\" />";
                    echo "<area shape=\"poly\" coords=\"443, 25, 387, 97, 386, 187, 466, 182, 565, 151, 587, 162, 580, 125, ,659, 28,,660, 15, \" href=\"list.php?Name=db\" alt=\"3\" />";
                    echo "<area shape=\"poly\" coords=\"387,186, 386,192, 372,206, 373,228, 383,246, 387,286, 417,288, 492,335, 560,325, 615,239, 598,205, 587,162, 565,150, 465,181\" href=\"list.php?Name=hb\" alt=\"4\" />";
                    echo "<area shape=\"poly\" coords=\"389,286, 367,353, 361,482, 434,479, 542,405, 553,376, 592,351, 625,255, 615,240, 560,324, 491,334, 415,288\" href=\"list.php?Name=hn\" alt=\"5\" />";
                    echo "<area shape=\"poly\" coords=\"434,479, 544,474, 546,457, 546,426, 541,406\" href=\"list.php?Name=nh\" alt=\"6\" />";
                    echo "<area shape=\"poly\" coords=\"659,28, 579,124, 599,205, 625,255, 592,351, 553,376, 542,405, 546,427, 546,453, 543,474, 694,465, \" href=\"list.php?Name=tw\" alt=\"7\" />";
                }

                ?>
      
            </div>
            
                <div class="NameRow">
                    <?php

                    if (!$ListNum3){      
                                      
                    $Num2 = count($ListS2[$ListNum2]);
                    $getname = substr($_SERVER['REQUEST_URI'], 21);  //得到当前页面尾缀
                    if(!$getname){
                        $getname = 'all';
                    }
                    for($i=0;$i<$Num2 ;$i++){
                        $j = 0;

                        echo "<ul>";
                        echo "<span><a href=\"". $UrlY. $UrlBlankTemp1[$getname][$i]. "\"" . " " . $RowBlank. ">". $ListS2[$ListNum2][$i]. "</a><b class='Bt'>+</b></span>";
                        
                        echo "<li>" . $NameRow[0] . $NameRow4[$getname][$i][$j] . "</li>" . "<li>" . "<a href=\"". $ViewConf. $WWWURl2. $ListS2[$ListNum2][$i]. "/".$NameRow2[0]. "_". $ListS2[$ListNum2][$i]. $Type[0]. "\"" . " " . $UrlBlank . ">";
                        if (!is_file(__DIR__.$WWWURl22.$ListS2[$ListNum2][$i]. "/".$NameRow2[0]. "_". $ListS2[$ListNum2][$i]. $Type[0])){
                            echo '<a style="text-decoration:none"> 暂无文件</a>';
                        }else{
                            echo "在线查看";
                        };
                        echo "</a> | <a href=\"". $WWWURl2. $ListS2[$ListNum2][$i]. "/".$NameRow2[0]. "_". $ListS2[$ListNum2][$i]. $Type[0]. "\"" . " " . $UrlBlank2 . ">";
                        if (!is_file(__DIR__.$WWWURl22.$ListS2[$ListNum2][$i]. "/".$NameRow2[0]. "_". $ListS2[$ListNum2][$i]. $Type[0])){
                            echo '<a style="text-decoration:none"> 暂无文件</a>';
                        }else{
                            echo "本地下载";
                        };
                        echo "</a></li>";

                        echo "<li>" . $NameRow[1] . $NameRow4[$getname][$i][$j+1] . "</li>" . "<li>" .  "<a href=\"". "files/".$NameRow2[1]. "_". $ListS2[$ListNum2][$i]. $Type[3]. "\"" . " " . $UrlBlank . ">";
                        if (!is_file(__DIR__. $WWWURl22.$ListS2[$ListNum2][$i]. "/".$NameRow2[1]. "_". $ListS2[$ListNum2][$i]. $Type[1])){
                            echo '<a style="text-decoration:none"> 暂无文件</a>';
                        }else{
                            echo "在线查看";
                        };
                        echo "</a> | <a href=\"". $WWWURl2. $ListS2[$ListNum2][$i]. "/".$NameRow2[1]. "_". $ListS2[$ListNum2][$i]. $Type[1]. "\"" . " " . $UrlBlank2 . ">";
                        if (!is_file(__DIR__. $WWWURl22.$ListS2[$ListNum2][$i]. "/".$NameRow2[1]. "_". $ListS2[$ListNum2][$i]. $Type[1])){
                            echo '<a style="text-decoration:none"> 暂无文件</a>';
                        }else{
                            echo "本地下载";
                        };
                        echo "</a></li>";

                        echo "<li>" . $NameRow[2] . $NameRow4[$getname][$i][$j+2] . "</li>" . "<li>" .  "<a href=\"". $ViewConf. $WWWURl2. $ListS2[$ListNum2][$i]. "/".$NameRow2[2]. "_". $ListS2[$ListNum2][$i]. $Type[2]. "\"" . " " . $UrlBlank . ">";
                        if (!is_file(__DIR__. $WWWURl22.$ListS2[$ListNum2][$i]. "/".$NameRow2[2]. "_". $ListS2[$ListNum2][$i]. $Type[2])){
                            echo '<a style="text-decoration:none"> 暂无文件</a>';
                        }else{
                            echo "在线查看";
                        };
                        echo "</a> | <a href=\"". $WWWURl2. $ListS2[$ListNum2][$i]. "/".$NameRow2[2]. "_". $ListS2[$ListNum2][$i]. $Type[2]. "\"" . " " . $UrlBlank2 . ">";
                        if (!is_file(__DIR__. $WWWURl22.$ListS2[$ListNum2][$i]. "/".$NameRow2[2]. "_". $ListS2[$ListNum2][$i]. $Type[2])){
                            echo '<a style="text-decoration:none"> 暂无文件</a>';
                        }else{
                            echo "本地下载";
                        };
                        echo "</a></li>";

                        echo "</ul>";
                    };
                    }
                    ?>


                    <script>
                        $(function(){
                            $('span').click(function(){
                                if($(this).siblings('li').hasClass('on')){
                                    $(this).siblings('li').slideUp(500).removeClass('on');
                                    $(this).children('b').text('+');
                                }else{
                                    $(this).siblings('li').slideDown(500).addClass('on');
                                    $(this).children('b').text('-');
                                }
                            });
                        });
                    </script>

                </div>
            </div>

        </div>
    </div>
</div>




<footer style="margin-top:30px;">
    <div class="container am-g">
        <div class="content">
            <div class="am-g clear">
                <div class="am-u-md-4 left f-menu menuList1">
                    <h3>联系我们</h3>
                    <ul>
                        <li>
                            <a href="javascript:;">联系电话:010-59959423/59959496</a>
                        </li>
                        <li>
                            <a href="javascript:;">邮编：100045</a>
                        </li>
                        <li>
                            <a href="javascript:;">服务邮箱：eskss@seis.ac.cn</a>
                        </li>
                        <li>
                            <a href="javascript:;">地址：北京市西城区三里河南横街5号</a>
                        </li>
                    </ul>
                </div>
                <div class="am-u-md-8 left f-link menuList2">
                    <h3>相关链接</h3>
                    <ul class="am-u-sm-6 left menuListIn">
                        <li>
                            <a href="http://www.ckcest.cn/index" target="_blank">中国工程科技知识中心</a>
                        </li>
                        <li>
                            <a href="http://www.eq-tsg.cn/" target="_blank">中国地震局数字图书馆</a>
                        </li>
                        <li>
                            <a href="http://cenc.eq-j.cn/ch/index.aspx" target="_blank">中国地震台网中心科技期刊电子平台</a>
                        </li>
                        <li>
                            <a href="http://www.cea.gov.cn/" target="_blank">中国地震局</a>
                        </li>
                    </ul>
                    <ul class="am-u-sm-6 left menuListIn">
                        <li>
                            <a href="http://data.earthquake.cn/" target="_blank">国家地震科学数据共享中心</a>
                        </li>
                        <li>
                            <a href="http://www.geodata.cn/" target="_blank">国家地球系统科学数据共享服务平台</a>
                        </li>
                        <li>
                            <a href="http://data.cma.cn/site/index.html" target="_blank">国家气象科学数据共享服务平台</a>
                        </li>
                        <li>
                            <a href="https://www.nstl.gov.cn/" target="_blank">国家科技图书文献中心</a>
                        </li>
                    </ul>
                </div>
                <div class="am-u-md-4 f-link">
                </div>
            </div>
        </div>
        <div class="side-bar">
            <img src="images/2017footer.png" width="100" height="100">
            <p style="padding-left: 25px;padding-right: 25px;padding-bottom:5px;">微信二维码</p>
        </div>
    </div>

    <div style="background:#1d2c3f;margin-top:22px;height:50px;">
        <div class="container">
            <p style="text-align:left ; margin: 0px; color: #fff; font-size: 12px; padding:0 1.5rem; line-height:50px;">
                中国地震台网中心© 2017中国工程科技知识中心ICP备案号：京ICP备14021735号-2
            </p>
        </div>
    </div>
</footer>

</body>

</html>
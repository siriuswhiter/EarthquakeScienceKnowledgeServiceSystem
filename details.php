<?php
/**
 * Created by Gw.
 * User: GETBIN
 * Date: 2018/11/28
 * Time: 14:41
 */
include "config.php";
?>

<!doctype html>
<html lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>地震科学专业知识服务系统</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" type="text/css" href="css/autosuggest_inquisitor.css" >
    <link rel="stylesheet" type="text/css" href="css/style.css"  >
    <link rel="stylesheet" type="text/css" href="css/pagination.css" >
    <link rel="stylesheet" type="text/css" href="css/pagination.css" >
    <link rel="stylesheet" type="text/css" href="css/css_new.css"  >
    <link rel="stylesheet" type="text/css" href="css/publish_new.css"  >
    <link rel="stylesheet" type="text/css" href="css/styleTop.css" >
    <link rel="stylesheet" type="text/css" href="css/easydialog.css" >
    <link rel="stylesheet" href="css/footer.css" />
    <link rel="stylesheet" href="css/details.css" />
    <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
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
</div>
<div id="ContentContainer" style="padding-left:0px;padding-top: 0px;">
    <div style="margin-top: 20px; font-size:14px;border-bottom: #e1e1e1 1px solid;width: 998px;margin: 0 auto;line-height: 30px;overflow: hidden;margin-bottom: 8px;
        您所在的位置：
        <span style="font-size:13px;"">首页</span> &gt;
        <a id="dList" style="font-size:13px;" href="index.php">地震知识数据库 </a>&gt;
        <a id="dList" style="font-size:13px;" href="list.php">地震亚区分布 </a>&gt;
        <a id="dList" style="font-size:13px;" href="javascript:void(1)">地震带分布 </a>
        <a style="font-size:13px;" id="listType" href=""></a>
    </div>
    <div class="lib_Menubox lib_tabborder">
        <ul>
            <li style="width:90px;" id="one1" class="hover"><?php echo $Option ;?></li> 
        </ul>
    </div>



            <div class="w8_rightbox" id="con_one_1" >
                <!-- <h3 style="margin-bottom:0" id="listtitle">文献列表</h3> -->
                <div>
                    <div style="margin-top: 10px;padding: 5px;background: #fff;">
                                <img src="<?php echo $ListGetImg; ?>" alt="" usemap ="#dizhendai" style="width: 646px">
                                <!-- $Name = "<%=request.getParameter("Name")%>" -->
                                <map name="dizhendai">
                                    <area shape="rect" coords="40,30,190,120" href="/ESKSS/list.php?Name=<?php echo $Belong?>" alt="dizhenyaqu" />
                                </map>
                            </div>
                        <?php
                        if(!$DetailNum){
                            echo "<p style=\"color: crimson;font-size:large \">该区域无地震带</p>";
                        }
                        ?>
                    </a>
                </div>
                <?php

                if ($DetailPage){
                    echo "<div>";
                    echo "<img src=\"images/3.png\" style=\"width: 746px\" >";
                }
                ?>
            </div>


            <div class="NameRow" style="max-height: 5300px">
            <?php
                $getname = substr($_SERVER['REQUEST_URI'], 24);

                if(!$getname){
                    $getname = 'all';
                }
                $prename = 'all';
                    $Num = count($DataArry2[$DetailNum2]);
                    for($i=0;$i<$Num ;$i++){
                        $j = 0;
                        echo "<ul>";
                        echo "<span style='color: #333333'>" . $DataArry2[$DetailNum2][$i] . "<b class='Bt'>+</b></span>";
                        echo "<li>" . $NameRow[0] .$NameRow5[$prename][$getname][$i][$j] . "</li>" . "<li>" . "<a href=\"". $ViewConf. $WWWURl3. $DataArry2[$DetailNum2][$i]. "/".$NameRow2[0]. "_". $DataArry2[$DetailNum2][$i]. $Type[0]. "\"" . " " . $UrlBlank . ">";
                        if (!is_file(__DIR__. $WWWURl33. $DataArry2[$DetailNum2][$i]. "/".$NameRow2[0]. "_". $DataArry2[$DetailNum2][$i]. $Type[0])){
                            echo "暂无文件";
                        }else{
                            echo "在线查看";
                        };
                        echo "</a> | <a href=\"". $WWWURl3. $DataArry2[$DetailNum2][$i]. "/".$NameRow2[0]. "_". $DataArry2[$DetailNum2][$i]. $Type[0]. "\"" . " " . $UrlBlank2 . ">";
                        if (!is_file(__DIR__. $WWWURl33. $DataArry2[$DetailNum2][$i]. "/".$NameRow2[0]. "_". $DataArry2[$DetailNum2][$i]. $Type[0])){
                            echo "暂无文件";
                        }else{
                            echo "本地下载";
                        };
                        echo "</a></li>";

                        echo "<li>" . $NameRow[1] .$NameRow5[$prename][$getname][$i][$j+1]. "</li>" . "<li>" . "<a href=\"". "files/".$NameRow2[1]. "_". $DataArry2[$DetailNum2][$i]. $Type[3]. "\"" . " " . $UrlBlank . ">";
                        if (!is_file(__DIR__. $WWWURl33. $DataArry2[$DetailNum2][$i]. "/".$NameRow2[1]. "_". $DataArry2[$DetailNum2][$i]. $Type[1])){
                            echo "暂无文件";
                        }else{
                            echo "在线查看";
                        };
                        echo "</a> | <a href=\"". $WWWURl3. $DataArry2[$DetailNum2][$i]. "/".$NameRow2[1]. "_". $DataArry2[$DetailNum2][$i]. $Type[1]. "\"" . " " . $UrlBlank2 . ">";
                        if (!is_file(__DIR__. $WWWURl33. $DataArry2[$DetailNum2][$i]. "/".$NameRow2[1]. "_". $DataArry2[$DetailNum2][$i]. $Type[1])){
                            echo "暂无文件";
                        }else{
                            echo "本地下载";
                        };
                        echo "</a></li>";

                        echo "<li>" . $NameRow[2] .$NameRow5[$prename][$getname][$i][$j+2] . "</li>" . "<li>" . "<a href=\"". $ViewConf. $WWWURl3. $DataArry2[$DetailNum2][$i]. "/".$NameRow2[2]. "_". $DataArry2[$DetailNum2][$i]. $Type[2]. "\"" . " " . $UrlBlank . ">";
                        if (!is_file(__DIR__. $WWWURl33. $DataArry2[$DetailNum2][$i]. "/".$NameRow2[2]. "_". $DataArry2[$DetailNum2][$i]. $Type[2])){
                            echo "暂无文件";
                        }else{
                            echo "在线查看";
                        };
                        echo "</a> | <a href=\"". $WWWURl3. $DataArry2[$DetailNum2][$i]. "/".$NameRow2[2]. "_". $DataArry2[$DetailNum2][$i]. $Type[2]. "\"" . " " . $UrlBlank2 . ">";
                        if (!is_file(__DIR__. $WWWURl33. $DataArry2[$DetailNum2][$i]. "/".$NameRow2[2]. "_". $DataArry2[$DetailNum2][$i]. $Type[2])){
                            echo "暂无文件";
                        }else{
                            echo "本地下载";
                        };

                        echo "</a></li>";
                        echo "</ul>";
                    };
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
        <div class="rightbox">
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
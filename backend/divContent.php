<?php
include 'db.php';
class divContent
	{		
		public $dateWrite;
		public $path;
		public $title;
		public $content;
		public $cathegory;
		public $author;
		
		
		public static function getNews($obj,$rand)
			{	
				$sql='SELECT * from content 
				where id='.$rand;//	formation sql-query
				$inp=DB::query($sql);
				$inp=DB::getFeedBack($inp);
				$obj->dateWrite=$inp[sDate];
				$obj->path=$inp[sPathToFile];
				$obj->title=$inp[sTitle];
				$obj->content=$inp[sContent];
				$obj->cathegory=$inp[sCathegory];
				$obj->author=$inp[sAuthor];
			}
		public static function newPost($obj,$sPathToFile,$sCathegory,$sTitle,$sContent,$sAuthor,$sDate)	
			{
				$obj->dateWrite=$sDate;
				$obj->path=$sPathToFile;
				$obj->title=$sTitle;
				$obj->content=$sContent;
				$obj->cathegory=$sCathegory;
				$obj->author=$sAuthor;
				$sql='INSERT INTO `content` (`sDate`, `sTitle`, `sPathToFile`,`sContent`,`sAuthor`,`sCathegory`) VALUES 
				("'.mysql_escape_string($sDate).'","'.mysql_escape_string($sTitle).'","'.mysql_escape_string($sPathToFile).'","'.mysql_escape_string($sContent).'","'.mysql_escape_string($sAuthor).'","'.mysql_escape_string($sCathegory).'")';//formation sql-query
				$inp=DB::query($sql);//input data to database
			}
	};
?>
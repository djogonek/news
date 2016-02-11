<?php
include 'divContent.php';
	$dbStatus=DB::dbConnect();
	if ($_POST['action']=='get')
	{
		for ($i=1;$i<=$_POST['numbPost'];$i++)
		{
			$rand=rand(1,4);
			$post=new divContent();
			$filling=divContent::getNews($post,$rand);
			$mass[$i]=$post;
		};	
	}	
	else if ($_POST['action']=='add')
		{
			$post=new divContent();
			$writing=divContent::newPost($post,$_POST['path'],$_POST['cath'],$_POST['title'],$_POST['content'],$_POST['auth'],$_POST['dateWrite']);
			if ($writing)
				$mass[0]='zbs';
		};
	mysql_close();
	echo json_encode($mass);
	
	
    
?>
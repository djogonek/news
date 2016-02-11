
 $(function()
	{	data={};
		var count=0;
		function postDiv($pict,cath,title,cont,auth,date)//creating new post
			{ 
				count+=1;
				var divPost=document.createElement('div');
				var cathLabel=document.createElement('label');
				var titleLabel=document.createElement('label');
				var contLabel=document.createElement('label');
				var authLabel=document.createElement('label');
				var dateLabel=document.createElement('label');
				var pict=document.createElement('IMG');
				
				pict.src=$pict;
				divPost.className='item';			
				cathLabel.className='cathLabel';
				titleLabel.className='titleLabel';
				contLabel.className='contLabel';
				authLabel.className='authLabel';
				dateLabel.className='authLabel';
				dateLabel.style.left="7%";
				
				divPost.id='divPost'+count;
				cathLabel.id='cathLabel'+count;
				titleLabel.id='titleLabel'+count;
				contLabel.id='contLabel'+count;
				authLabel.id='authLabel'+count;
				dateLabel.id='dateLabel'+count;
				
				if (count%2==0)
					{
						var padCenterDiv=document.createElement('div');
						padCenterDiv.id='padCenterDiv'+count;
						padCenterDiv.className='item';
						padCenterDiv.style.paddingLeft="20px";
						padCenterDiv.style.paddingRight="20px";
						divPost.style.width="100%";
						document.getElementById('container').appendChild(padCenterDiv);
						document.getElementById('padCenterDiv'+count).appendChild(divPost);
						
					}
				else
					{document.getElementById('container').appendChild(divPost);};
				pict.style.width='100%';
				
				
				document.getElementById('divPost'+count).appendChild(pict);
				document.getElementById('divPost'+count).appendChild(cathLabel);
				document.getElementById('divPost'+count).appendChild(titleLabel);
				document.getElementById('divPost'+count).appendChild(contLabel);
				document.getElementById('divPost'+count).appendChild(authLabel);
				document.getElementById('divPost'+count).appendChild(dateLabel);
				
				document.getElementById('cathLabel'+count).innerHTML+=cath;
				document.getElementById('titleLabel'+count).innerHTML+=title;
				document.getElementById('contLabel'+count).innerHTML+=cont;
				document.getElementById('authLabel'+count).innerHTML+='<br>';
				document.getElementById('authLabel'+count).innerHTML+=auth;
				document.getElementById('dateLabel'+count).innerHTML+=date;
				
			}
			function getNews(numbPost)//requesting data from server
				{
					$.ajax
						({
							url: 'backend/srv.php',
							method:'POST',
							data:{'numbPost':numbPost,'action':'get'},
							success: function($data)
								{
									alert ($data['action']);
									$data = $.parseJSON($data);
									for (i=1;i<=numbPost;i++)
										{
											postDiv($data[i]['path'],$data[i]['cathegory'],$data[i]['title'],$data[i]['content'],$data[i]['author'],$data[i]['dateWrite']);
										}
								},
							error:function()
								{
									alert('PZDC');
								}
						});
							};
			
			function prepPar()
						{
							data={};
							data['action']='add';
							data['path']=$('#picPath')[0].value;
							data['cath']=$('#cath')[0].value;
							data['title']=$('#title')[0].value;
							data['content']=$('#content')[0].value;
							data['auth']=$('#auth')[0].value;
							data['dateWrite']=$('#dateWrite')[0].value;
						}				
			function addNews(numbPost)//requesting data from server
				{
					prepPar();
					$.ajax
						({
							url: 'backend/srv.php',
							method:'POST',
							data:data,
							success: function($data)
								{
									alert('ZBS')
								},
							error:function()
								{
									alert('PZDC');
								}
						});
				};
			
			
			$(document).ready(function()
				{
					$('#container).masonry({
					  itemSelector: '.item',
					  singleMode: false,
					  isResizable: true,
					  isAnimated: true,
					  animationOptions: 
						{ 
						  queue: false, 
						  duration: 500
						}
					});
				});	
				
			
			 $(window).scroll(function()
				{
					if  (document.body.scrollTop == document.body.scrollHeight - document.body.clientHeight)
						{
							
							getNews(3);
						}
				
				});	
			
			getNews(6);		
			
		
	});	
	
		
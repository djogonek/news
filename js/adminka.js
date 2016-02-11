function prepPar()
	{
		data={};
		data['action']='add';
		data['path']=$('#picPath')[0].value;
		data['cath']=$('#cath')[0].value;
		data['title']=$('#title')[0].value;
		data['content']=$('#content')[0].value;
		data['auth']=$('#author')[0].value;
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
						alert('ZBS');
					},
				error:function()
					{
						alert('PZDC');
					}
			});
	};
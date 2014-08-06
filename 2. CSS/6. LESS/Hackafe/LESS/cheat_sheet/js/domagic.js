// <iframe width="560" height="315" src="//www.youtube.com/embed/p6j8fuvQICI?rel=0" frameborder="0" allowfullscreen></iframe>

var movies = 
	{
		items: [
			{item: "http://www.youtube.com/embed/HeyKvbt_CiM"},
			{item: "http://www.youtube.com/embed/XS9nL3UVlaw"},
			{item: "http://www.youtube.com/embed/kKesvXjT6bw"}  
		]
	};

var chicks = 
	{
		items: [
			{item: "http://artisreligion.com/wp-content/uploads/2012/09/kicks-and-chicks-4.jpeg"},
			{item: "http://i1.trekearth.com/photos/32632/chicks.jpg"},
			{item: "http://i.imgur.com/e6VTBTZ.jpg"}  
		]
	};

var cats = 
	{
		items: [
			{item: "http://fakeplus.com/pictures/jpg/-meme-madness-business-cat_20120322124256.jpg"},
			{item: "http://global3.memecdn.com/first-step-study-second-step-conquer-the-world_o_1773153.jpg"},
			{item: "img/image.jpeg"}  
		]
	};

function changeStyle(obj, content){
	$('img').remove();
	$('iframe').remove();
	$('.videoContainer').remove();
	$('.mainSection a').each(function(index){
		var element;
		var videoContainer;
		if (content)
			{
				element = $("<iframe width='560' height='315' src='' frameborder='0' allowfullscreen></iframe>");
				videoContainer = $("<span class='videoContainer'></span>")
				element.attr('src', obj.items[index].item);
				$(this).append(videoContainer);
				$(videoContainer).append(element);
			}
		else
			{
				element = $("<img src=''>");
				element.attr('src', obj.items[index].item);
				$(this).append(element);
			} 
	});
};

$(function(){
	$(".callYoutube").on("click", function(){
		changeStyle(movies, 'iframe');	
	})
	$(".callChicks").on("click", function(){
		changeStyle(chicks);	
	})
	$(".callCats").on("click", function(){
		changeStyle(cats);	
	})
})
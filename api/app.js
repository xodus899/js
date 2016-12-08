
$('ul#buttons').lazyJSON({
  loadOnInit: true,
  pagination: {
    active: true,
    pages: 1,
    count: 3,
    lazyLoad: true
  },
  api: {
    uri: 'http://www.stellarbiotechnologies.com/media/press-releases/json'
  }
});

$(document).ready(function() {


  console.log("ready!");
});

function getOutput() {
  $.ajax({
    url: 'http://www.stellarbiotechnologies.com/media/press-releases/json',
    success: function(response) {
      console.log(response);
      var theNews = response.news;
      var theName = theNews.name;
      theNews.forEach(function(data) {
        var addToList = `
		<li><br> 
			${data.title}<br><br>
      ${data.published}

		</li>
		`;
    		$(".lazyload").append(`<ul id= "buttons">`);
        $(".lazyload").append(addToList);
    		$(".lazyload").append(`</ul>`);
        
      })
    },
    error: function() {
      $('.lazyload').html('Bummer: there was an error!');
    },
  });
  return false;
}
// Lazy Load
console.log("DID IT MAKE IT HERE?!!?!?")



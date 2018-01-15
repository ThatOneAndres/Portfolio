$(document).ready(function(){
	// Smooth Scroll
	$(".smooth-scroll").click(function() {
	  if ( location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname  ) {
	    var target = $(this.hash);
	    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
	    if (target.length) {
	      var pos = target.offset();
	          pos = pos.top -50;
	      $("html,body").animate( { scrollTop: pos },  800 ); return false;
	    }
	  }
	});
	// For mobile on clicking navigation link it collapses menu
	$(".nav-link").click(function(){
		console.log("H")
		$(".navbar-collapse").removeClass("show")
	});
});
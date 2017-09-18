$(document).ready(function(){
	$(".port-links").bind("mouseenter", function(e){
		$(this).removeClass("slideInLeft slideInUp slideInRight").addClass("bounce");
	});
	$(".port-links").bind("mouseleave", function(e){
		$(this).removeClass("bounce");
	});
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
});
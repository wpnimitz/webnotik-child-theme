jQuery(document).ready(function( $ ) {
	$('.panel-nav .icon').on('click', function(e){
		e.preventDefault();
		if ( $(this).parent().hasClass('responsive') ) {
	        $('.panel-nav').removeClass('responsive')
	    } else {
	        $('.panel-nav').addClass('responsive')
	    }
	})
	$('.form-field p').on('click', function(){
		var $this = $(this)
		$this.addClass('copied');
		var $temp = $("<input>");;
		$("body").append($temp);
		$temp.val($(this).html()).select();
		document.execCommand("copy");
		$temp.remove();

		setTimeout(function() {
		  $this.removeClass('copied');
		}, 6000);

	});
});
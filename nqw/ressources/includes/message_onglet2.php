<div class="zoneMsg">
	<?php if (isset($messages)) { ?>

	<div class="boxMsg<?php echo $messages->getTypeMessage() ?>" id="message2"><p><?php echo $messages->getMessages(); ?> </p></div>
	
	<script type="text/javascript">
		setTimeout(function() {
			$('#message2').animate({
			opacity: 0.0
		  }, 20000, function() {
			// Animation complete.
			$('#message2').hide(); // pour IE7 et IE8, apr�s le fadeout du texte, on �teint la boite
		  });
			
		}, 21000);
	</script> 
			
	<?php } ?>
</div>
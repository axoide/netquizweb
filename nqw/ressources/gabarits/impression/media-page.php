<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title><?php echo TXT_NETQUIZ_WEB ?> - <?php echo TXT_MEDIAS ?></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel='stylesheet' type='text/css' href='../css/netquiz.css' />
    <link rel='stylesheet' type='text/css'  href='../css/netquiz-print.css' media="print" />
</head>

<body id="bImprime" onload="//window.print();window.close()">
	<div id="bodyContenu">
		<?php include '../ressources/includes/entete-print.php' ?>
		
		<div id="corps">
		
			<?php echo $media->get("contenu")?>
		
		</div> <!-- /corps -->
	
	</div> <!-- /bodyContenu -->
</body>
</html>

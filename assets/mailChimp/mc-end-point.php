<?php

	// load in mailchimp library
	include('./MailChimp.php');

	// namespace defined in MailChimp.php
	use \DrewM\MailChimp\MailChimp;

	// connect to mailchimp
	$MailChimp = new MailChimp('fa2b1c05478aa529fe8e97ae276a9480-us4'); // put your API key here
	$list = 'ead7be69c8'; // put your list ID here
	$email = $_GET['EMAIL']; // Get email address from form
	$id = md5(strtolower($email)); // Encrypt the email address
	// setup th merge fields
	$mergeFields = array
  'FNAME'=>$_GET['FNAME']
  'MSG'=>$_GET['MSG']
		// *** YOUR FIELDS GO HERE ***
		);

	// remove empty merge fields
	$mergeFields = array_filter($mergeFields);

	$result = $MailChimp->put("lists/$list/members/$id", array(
									'email_address'     => $email,
									'merge_fields'      => $mergeFields,
									'update_existing'   => true, // YES, update old subscribers!
							));
	echo json_encode($result);

<?php
echo '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'
. '<meta name="description" content="">'
.  '<meta name="author" content="">'
.  '<link rel="icon" href="img/favicon.png">'
.  '<title>davidmsalisbury</title>'
.  '<link href="stylesheets/bootstrap.min.css" rel="stylesheet">'
.  '<link href="stylesheets/styles1.css" rel="stylesheet">'
.  '</head><body>';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "info@davidmsalisbury.com";
$subject = "Contact Form - davidmsalisbury.com";
$mailheader = "From: $email \r\n";

if(isset($_POST['g-recaptcha-response'])){
    $captcha=$_POST['g-recaptcha-response'];
  }
  if(!$captcha){
    echo '<h5>Please click the back arrow and check the captcha form.</h5>';
    exit;
  }
  $secretKey = "6Lf-GzcUAAAAAKt4_x1Tvh9I1hp91uFPRfYgIQWX";
  $ip = $_SERVER['REMOTE_ADDR'];

  $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
  $responseKeys = json_decode($response,true);
  if(intval($responseKeys["success"]) !== 1) {
    echo '<h2>Sorry, you have failed the reCaptcha verification.';
  }
  
  else {

mail($recipient, $subject, $formcontent, $mailheader) or die("Sorry, an error has occurred. Please use the back arrows to return to the form and try again.");

echo '<h5>Thank you. Your email has been sent. You will be redirected back to the site in a few seconds.</h5>'
.    '<script src="js/jquery-3.2.1.min.js"></script>'
.    '<script>     window.setTimeout(function(){'
.    'window.location.href="index.html";'
.    '}, 5000);</script>';}
echo '</body> </html>';
?>
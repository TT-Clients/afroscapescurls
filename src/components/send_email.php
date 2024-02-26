<?php
$to = "terra.taylor@gmail.com";
$subject = "Test email";
$message = "This is a test email sent from PHP.";
$headers = "From: terra.taylor@gmail.com\r\n" .
           "Reply-To: terra.taylor@gmail.com\r\n" .
           "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $message, $headers)) {
  echo "Email sent successfully.";
} else {
  echo "Email failed to send.";
}
?>

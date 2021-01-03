<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$headers = "From: ".$email;
$txt = "You have received an email from".$name."\n\n".$message;

mail("totallyturing@gmail.com", $subject, $txt, $headers);

?>
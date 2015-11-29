<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://kalladi.au-syd.mybluemix.net/email",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"email\":\"amrv1990@gmail.com,pradeep.kuntalaka1991@gmail.com\", \"subject\":\"maga\", \"message\":\"hello paypal hackathon\"}",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "content-type: application/json",
    "postman-token: 8be77fc5-eb23-be30-1950-f4b31de05992"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;header("Location:http://www.kallidaitrust.com");
  exit();
} else {
   
  header("Location:http://www.kallidaitrust.com");
  exit();
}

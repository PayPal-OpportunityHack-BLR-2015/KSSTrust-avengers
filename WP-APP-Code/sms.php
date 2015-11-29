<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://kalladi.au-syd.mybluemix.net/sms",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{ \"to\":\"+919845317669\", \"subject\":\"pradeep from twilio\"  }",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "content-type: application/json",
    "postman-token: d816ed87-3574-f131-17c2-83b7a92b96b6"
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

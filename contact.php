<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "vovantolkach@gmail.com"; 
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $headers = "From: $from" . "\r\n" .
        "Reply-To: $from" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(array('status' => 'success', 'message' => 'Повідомлення надіслано.'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Виникла помилка. Повідомлення не надіслано.'));
    } 

}
?>

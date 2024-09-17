<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    $mail = new PHPMailer(true);

    try {
        $to = 'recipient@example.com';
        $subject = 'New Contact Form Submission';
        $body = "Name: $name\nEmail: $email\nMessage: $message";
        $headers = "From: your_email@example.com\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        if (mail($to, $subject, $body, $headers)) {
            http_response_code(200);
            echo json_encode(['message' => 'Message has been sent']);
        } else {
            throw new Exception('Mail function failed');
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['message' => "Message could not be sent. Error: {$e->getMessage()}"]);
    }

} else {
    http_response_code(405);
    echo json_encode(['message' => 'Method Not Allowed']);
}
?>
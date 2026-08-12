<?php
// Set response headers for JSON and CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle HTTP preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// GET request: Health check for contact API
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    http_response_code(200);
    echo json_encode([
        "status" => "ok",
        "message" => "Contact API endpoint is active."
    ]);
    exit();
}

// Require POST method for message submission
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        "status" => "error",
        "message" => "Method not allowed. Use POST."
    ]);
    exit();
}

// Read raw JSON request input
$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

// Extract & sanitize parameters
$name    = isset($data['name']) ? trim(filter_var($data['name'], FILTER_SANITIZE_SPECIAL_CHARS)) : '';
$email   = isset($data['email']) ? trim(filter_var($data['email'], FILTER_SANITIZE_EMAIL)) : '';
$subject = isset($data['subject']) ? trim(filter_var($data['subject'], FILTER_SANITIZE_SPECIAL_CHARS)) : 'Portfolio Contact Form Submission';
$message = isset($data['message']) ? trim(filter_var($data['message'], FILTER_SANITIZE_SPECIAL_CHARS)) : '';

// Input validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Missing required fields: name, email, and message are required."
    ]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid email address format."
    ]);
    exit();
}

// Prepare target recipient and headers
$to = "meklitgirmaw@gmail.com";
$emailSubject = "[Portfolio Transmission] " . $subject;

$emailBody  = "You have received a new contact message from your portfolio website.\n\n";
$emailBody .= "Name: " . $name . "\n";
$emailBody .= "Email: " . $email . "\n";
$emailBody .= "Subject: " . $subject . "\n\n";
$emailBody .= "Message:\n" . $message . "\n";

$headers = array(
    'From' => 'no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'portfolio.local'),
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion()
);

$headerString = "";
foreach ($headers as $key => $val) {
    $headerString .= "$key: $val\r\n";
}

// Attempt sending email via PHP mail()
$mailSent = @mail($to, $emailSubject, $emailBody, $headerString);

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        "status" => "success",
        "message" => "Signal received! Your message has been transmitted successfully."
    ]);
} else {
    // Fallback response for servers without configured sendmail/SMTP
    http_response_code(200);
    echo json_encode([
        "status" => "success",
        "message" => "Message processed. (Note: Ensure server mailer/SMTP is configured to receive incoming emails)."
    ]);
}

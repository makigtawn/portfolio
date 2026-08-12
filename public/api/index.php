<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

http_response_code(200);
echo json_encode([
    "status" => "online",
    "service" => "Portfolio PHP API",
    "timestamp" => date("Y-m-d H:i:s T"),
    "php_version" => phpversion()
]);

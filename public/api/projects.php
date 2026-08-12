<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Static fallback — mirrors the live MongoDB data from:
// https://portfolio-backend-2366.onrender.com/api/projects
// Order matches the backend's sort: { order: 1, createdAt: -1 }
// This file is only served when the real backend (Express + MongoDB on Render)
// is unavailable. Keep in sync with the database whenever projects change.
$projects = [
  [
    "_id"         => "6a64730db99e53cbd6b589b2",
    "title"       => "DevBrain",
    "description" => "AI-powered \"second brain\" for developers - save code snippets, errors, and notes, then find them later with natural-language semantic search instead of grepping through old projects.",
    "image"       => "",
    "images"      => [],
    "tags"        => ["Next.js", "tRPC", "Prisma", "Supabase", "Gemini", "chrome extension"],
    "techStack"   => [],
    "category"    => "",
    "link"        => "",
    "github"      => "https://github.com/makigtawn/devbrain",
    "featured"    => false,
    "order"       => 0,
    "createdAt"   => "2026-07-25T08:25:49.065Z",
    "updatedAt"   => "2026-07-25T08:26:35.955Z"
  ],
  [
    "_id"         => "6a5e1f1b23c53d3fa1b303fa",
    "title"       => "Clinic patient queue management system",
    "description" => "a project which was given for data structure and algorithm assignment in my software engineering department instructor .",
    "image"       => "",
    "images"      => [],
    "tags"        => ["html", "css", "javascript", "c++", "Cmake", "C"],
    "techStack"   => [],
    "category"    => "",
    "link"        => "",
    "github"      => "https://github.com/makigtawn/clinic-patient-queue-management-system",
    "featured"    => false,
    "order"       => 0,
    "createdAt"   => "2026-07-20T13:14:03.585Z",
    "updatedAt"   => "2026-07-25T10:00:05.290Z"
  ],
  [
    "_id"         => "6a5e1f1b23c53d3fa1b303f8",
    "title"       => "Bahirdar university",
    "description" => "Simple and Interactive version of my university website, which the main is scattered and hard to communicate with.",
    "image"       => "/projects/project3.png",
    "images"      => [],
    "tags"        => ["HTML5", "CSS", "Javascript"],
    "techStack"   => ["HTML5", "CSS", "Javascript"],
    "category"    => "",
    "link"        => "https://bahirdaruniversity.vercel.app",
    "github"      => "https://github.com/makigtawn/bahirdaruniversity",
    "featured"    => false,
    "order"       => 0,
    "createdAt"   => "2026-07-20T13:14:03.585Z",
    "updatedAt"   => "2026-07-23T19:29:24.613Z"
  ],
  [
    "_id"         => "6a5e1f1b23c53d3fa1b303f9",
    "title"       => "Qandil",
    "description" => "AI-based personalized learning platform",
    "image"       => "",
    "images"      => [],
    "tags"        => ["React", "Typescript", "NodeJS", "Mongodb"],
    "techStack"   => [],
    "category"    => "",
    "link"        => "https://qandil-ai.vercel.app/",
    "github"      => "https://github.com/makigtawn/Qandil-ai",
    "featured"    => true,
    "order"       => 0,
    "createdAt"   => "2026-07-20T13:14:03.585Z",
    "updatedAt"   => "2026-07-25T10:00:18.478Z"
  ],
  [
    "_id"         => "6a5e1f1b23c53d3fa1b303f7",
    "title"       => "Strata",
    "description" => "strata is AI powered fast candidate screening platform for employers",
    "image"       => "",
    "images"      => [],
    "tags"        => ["React", "Javascript", "postgres", "supabase", "JWT", "Tailwindcss"],
    "techStack"   => [],
    "category"    => "",
    "link"        => "https://strata-hire.vercel.app",
    "github"      => "https://github.com/makigtawn/strata",
    "featured"    => true,
    "order"       => 0,
    "createdAt"   => "2026-07-20T13:14:03.584Z",
    "updatedAt"   => "2026-07-25T09:59:35.573Z"
  ]
];

http_response_code(200);
echo json_encode(["projects" => $projects]);

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/Button";
import { apiGet } from "@/lib/api";

export const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    apiGet(`/api/projects/${id}`)
      .then((data) => setProject(data.project))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <section className="py-25 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <FontAwesomeIcon icon={faArrowLeft} className="h-3 w-3" />
          Back to projects
        </Link>

        {loading && <p className="text-muted-foreground">Loading...</p>}
        {!loading && error && <p className="text-red-500">{error}</p>}

        {!loading && project && (
          <div className="glass rounded-2xl overflow-hidden">
            {project.image && (
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="p-8 space-y-6">
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>

              {project.images?.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full rounded-lg object-cover"
                    />
                  ))}
                </div>
              )}

              {(project.tags?.length > 0 || project.techStack?.length > 0) && (
                <div className="flex flex-wrap gap-2">
                  {[...project.tags, ...project.techStack].map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                {project.link && (
                  <Button href={project.link} target="_blank" rel="noopener noreferrer" size="sm">
                    Live demo
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4 ml-2" />
                  </Button>
                )}
                {project.github && (
                  <Button href={project.github} target="_blank" rel="noopener noreferrer" size="sm" variant="ghost">
                    <FaGithub className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

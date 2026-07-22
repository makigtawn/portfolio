import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/Button";
import { FaGithub } from "react-icons/fa";
import { apiGet } from "@/lib/api";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet("/api/projects")
      .then((data) => setProjects(data.projects))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-primary">
            Projects
          </h2>

        </div>

        {loading && (
          <p className="text-center text-muted-foreground">Loading projects...</p>
        )}

        {!loading && projects.length === 0 && (
          <p className="text-center text-muted-foreground">No projects yet.</p>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl overflow-hidden">
              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-surface">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                    No image
                  </div>
                )}
                <div
                  className="absolute inset-0
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links seen when hovered*/}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    aria-label={`View ${project.title}`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="h-5 w-5"
                    />
                  </a>
                  <a
                    href={project.github}
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <Link to={`/projects/${project._id}`}>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span className="max-w-3xl mb-16"
                      //
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="p-3 border border-"
            href="https://github.com/makigtawn?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all projects on GitHub">
            View All Projects
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-5 w-5 mx-2"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

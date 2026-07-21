import { Button } from "@/components/Button";

export const ProjectTable = ({ projects, onEdit, onDelete }) => {
  if (projects.length === 0) {
    return <p className="text-muted-foreground">No projects yet.</p>;
  }

  return (
    <div className="glass overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-border text-muted-foreground">
            <th className="p-4">Title</th>
            <th className="p-4">Category</th>
            <th className="p-4">Featured</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id} className="border-b border-border/50 last:border-0">
              <td className="p-4 font-medium">{project.title}</td>
              <td className="p-4 text-muted-foreground">{project.category || "-"}</td>
              <td className="p-4 text-muted-foreground">{project.featured ? "Yes" : "No"}</td>
              <td className="p-4">
                <div className="flex justify-end gap-2">
                  <Button size="sm" variant="ghost" onClick={() => onEdit(project)}>
                    Edit
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => onDelete(project)}>
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

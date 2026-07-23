import { Button } from "@/components/Button";

export const ProjectTable = ({ projects, onEdit, onDelete }) => {
  if (projects.length === 0) {
    return <p className="font-mono text-xs text-muted-foreground">No projects yet.</p>;
  }

  return (
    <div className="bg-card border border-border rounded-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-border">
            <th className="p-4 font-mono text-xs uppercase tracking-[.15em] text-muted-foreground">
              Title
            </th>
            <th className="p-4 font-mono text-xs uppercase tracking-[.15em] text-muted-foreground">
              Category
            </th>
            <th className="p-4 font-mono text-xs uppercase tracking-[.15em] text-muted-foreground">
              Featured
            </th>
            <th className="p-4 text-right font-mono text-xs uppercase tracking-[.15em] text-muted-foreground">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id} className="border-b border-border last:border-0">
              <td className="p-4 font-serif text-foreground">{project.title}</td>
              <td className="p-4 font-mono text-xs text-muted-foreground">
                {project.category || "-"}
              </td>
              <td className="p-4 font-mono text-xs text-muted-foreground">
                {project.featured ? "Yes" : "No"}
              </td>
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

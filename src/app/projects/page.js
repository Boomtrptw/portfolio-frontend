import { getProjects } from "@/lib/api"

export default async function Page() {
  const projects = await getProjects()

  return (
    <div>
      <h1>Projects</h1>

      {projects.map(p => (
        <div key={p.id}>
          {p.name} - {p.tech}
        </div>
      ))}
    </div>
  )
}
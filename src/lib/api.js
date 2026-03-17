export async function getProjects() {
  const res = await fetch("http://localhost:5000/projects")
  return res.json()
}
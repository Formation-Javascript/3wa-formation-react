import Welcome from '../components/Welcome'
import ListTopics from '../components/ListTopics'

export default function HomePage() {
  return (
    <main className="container mx-auto px-36 flex-center h-screen flex-col md:flex-row md:justify-between gap-10">
      <Welcome />
      <ListTopics />
    </main>
  )
}

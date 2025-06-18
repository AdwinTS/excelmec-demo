import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function EventsPage() {
  const events = [
    {
      title: "Code Combat",
      category: "Programming",
      date: "March 15, 2024",
      time: "10:00 AM",
      venue: "Lab A",
      participants: "2-3 members",
      prize: "₹50,000",
      description: "Ultimate coding competition testing algorithmic skills and problem-solving abilities.",
    },
    {
      title: "RoboWars",
      category: "Robotics",
      date: "March 16, 2024",
      time: "2:00 PM",
      venue: "Arena B",
      participants: "4-5 members",
      prize: "₹75,000",
      description: "Build and battle with your custom robots in this thrilling combat competition.",
    },
    {
      title: "Tech Quiz",
      category: "Quiz",
      date: "March 17, 2024",
      time: "11:00 AM",
      venue: "Auditorium",
      participants: "2 members",
      prize: "₹25,000",
      description: "Test your technical knowledge across various domains of technology.",
    },
    {
      title: "Web Design",
      category: "Design",
      date: "March 15, 2024",
      time: "3:00 PM",
      venue: "Lab C",
      participants: "1-2 members",
      prize: "₹40,000",
      description: "Create stunning and functional websites within the given time frame.",
    },
    {
      title: "AI Challenge",
      category: "AI/ML",
      date: "March 16, 2024",
      time: "9:00 AM",
      venue: "Lab D",
      participants: "3-4 members",
      prize: "₹60,000",
      description: "Develop innovative AI solutions for real-world problems.",
    },
    {
      title: "Hackathon",
      category: "Development",
      date: "March 17, 2024",
      time: "6:00 PM",
      venue: "Main Hall",
      participants: "4-6 members",
      prize: "₹1,00,000",
      description: "24-hour coding marathon to build innovative solutions.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-900">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-pink-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-pink-300 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Corner Decorations */}
      <div className="fixed top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-pink-500/30 pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-pink-500/30 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-pink-500/30 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-pink-500/30 pointer-events-none"></div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-pink-400">
            EXCEL<span className="text-white">MEC 2025</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-pink-400 transition-colors">
              HOME
            </Link>
            <Link href="/events" className="text-pink-400 font-semibold border-b-2 border-pink-400 pb-1">
              EVENTS
            </Link>
            <Link href="/about" className="text-white hover:text-pink-400 transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-white hover:text-pink-400 transition-colors">
              CONTACT
            </Link>
          </div>

          {/* Desktop Register Button */}
          <Button
            variant="outline"
            className="hidden md:block border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-black"
          >
            REGISTER
          </Button>

          {/* Mobile Navigation */}
          <MobileNav currentPath="/events" />
        </div>
      </nav>

      {/* Events Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            EXCEL<span className="text-pink-400">MEC 2025</span> EVENTS
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Compete in cutting-edge technical competitions and showcase your skills
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="bg-black/50 border-pink-500/30 hover:border-pink-500 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-white">{event.title}</CardTitle>
                  <Badge className="bg-pink-500 text-black">{event.category}</Badge>
                </div>
                <p className="text-gray-400 text-sm">{event.description}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-300 text-sm">
                  <Calendar className="h-4 w-4 text-pink-400 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Clock className="h-4 w-4 text-pink-400 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <MapPin className="h-4 w-4 text-pink-400 mr-2" />
                  {event.venue}
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Users className="h-4 w-4 text-pink-400 mr-2" />
                  {event.participants}
                </div>
                <div className="pt-2 border-t border-pink-500/20">
                  <div className="flex justify-between items-center">
                    <span className="text-pink-400 font-semibold">Prize: {event.prize}</span>
                    <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-black">
                      Register
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

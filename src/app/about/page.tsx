import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Users, Zap } from "lucide-react"

export default function AboutPage() {
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
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-pink-400 transition-colors">
              HOME
            </Link>
            <Link href="/events" className="text-white hover:text-pink-400 transition-colors">
              EVENTS
            </Link>
            <Link href="/about" className="text-pink-400 font-semibold border-b-2 border-pink-400 pb-1">
              ABOUT
            </Link>
            <Link href="/contact" className="text-white hover:text-pink-400 transition-colors">
              CONTACT
            </Link>
          </div>
          <Button variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-black">
            REGISTER
          </Button>
        </div>
      </nav>

      {/* About Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ABOUT <span className="text-pink-400">EXCELMEC 2025</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            ExcelMEC 2025 is the premier technical symposium that brings together the brightest minds in technology. Our
            mission is to foster innovation, creativity, and technical excellence among students and professionals.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="bg-black/50 border-pink-500/30">
            <CardContent className="p-8">
              <Target className="h-12 w-12 text-pink-400 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To create a platform where innovation meets opportunity, fostering the next generation of tech leaders
                through challenging competitions, workshops, and collaborative experiences.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-pink-500/30">
            <CardContent className="p-8">
              <Zap className="h-12 w-12 text-pink-400 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the most prestigious technical symposium that inspires breakthrough innovations and shapes the
                future of technology through excellence in education and competition.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">15+</div>
            <div className="text-gray-300">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">50K+</div>
            <div className="text-gray-300">Participants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">200+</div>
            <div className="text-gray-300">Colleges</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">₹50L+</div>
            <div className="text-gray-300">Total Prizes</div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border-pink-500/30 hover:border-pink-500 transition-colors">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Competitions</h3>
                <p className="text-gray-400">
                  Challenging technical competitions across various domains including programming, robotics, and AI.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-pink-500/30 hover:border-pink-500 transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Workshops</h3>
                <p className="text-gray-400">
                  Hands-on workshops conducted by industry experts and renowned professionals.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-pink-500/30 hover:border-pink-500 transition-colors">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Networking</h3>
                <p className="text-gray-400">
                  Connect with like-minded individuals, industry professionals, and potential collaborators.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join the Innovation</h2>
          <p className="text-xl text-gray-300 mb-8">Be part of the most exciting technical symposium</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-black font-semibold"
          >
            REGISTER NOW
          </Button>
        </div>
      </main>
    </div>
  )
}

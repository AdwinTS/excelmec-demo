import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Users, Trophy, Zap, Menu, X, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-900">
      {/* Background Effects with Shooting Stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Static Stars with CSS classes */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-pink-400 rounded-full star-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-pink-300 rounded-full star-pulse-delay-1"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-500 rounded-full star-pulse-delay-2"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-pink-400 rounded-full star-pulse-delay-3"></div>
        <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-pink-300 rounded-full star-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-pink-200 rounded-full star-pulse-delay-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full star-pulse-delay-2"></div>

        {/* Shooting Stars with Direct CSS Classes */}
        <div className="absolute top-16 -right-20 w-1 h-1 bg-pink-400 rounded-full shooting-star-1">
          <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-l from-pink-400 to-transparent"></div>
        </div>
        <div className="absolute top-32 -right-20 w-1.5 h-1.5 bg-pink-300 rounded-full shooting-star-2">
          <div className="absolute top-0.5 left-0 w-16 h-px bg-gradient-to-l from-pink-300 to-transparent"></div>
        </div>
        <div className="absolute top-48 -right-20 w-1 h-1 bg-pink-500 rounded-full shooting-star-3">
          <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-l from-pink-500 to-transparent"></div>
        </div>
        <div className="absolute top-64 -right-20 w-0.5 h-0.5 bg-pink-200 rounded-full shooting-star-4">
          <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-l from-pink-200 to-transparent"></div>
        </div>
        <div className="absolute top-80 -right-20 w-1.5 h-1.5 bg-pink-400 rounded-full shooting-star-5">
          <div className="absolute top-0.5 left-0 w-18 h-px bg-gradient-to-l from-pink-400 to-transparent"></div>
        </div>
        <div className="absolute top-96 -right-20 w-1 h-1 bg-pink-300 rounded-full shooting-star-6">
          <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-l from-pink-300 to-transparent"></div>
        </div>
        <div className="absolute bottom-32 -right-20 w-1 h-1 bg-pink-500 rounded-full shooting-star-7">
          <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-l from-pink-500 to-transparent"></div>
        </div>
        <div className="absolute bottom-48 -right-20 w-0.5 h-0.5 bg-pink-400 rounded-full shooting-star-8">
          <div className="absolute top-0 left-0 w-14 h-px bg-gradient-to-l from-pink-400 to-transparent"></div>
        </div>
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
            Excel<span className="text-white">MEC 2025</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-pink-400 font-semibold border-b-2 border-pink-400 pb-1">
              HOME
            </Link>
            <Link href="/events" className="text-white hover:text-pink-400 transition-colors">
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

          {/* Mobile Navigation - Simplified Dropdown */}
          <div className="md:hidden relative">
            <details className="group">
              <summary className="list-none cursor-pointer p-2 text-white hover:text-pink-400 transition-colors">
                <Menu size={24} className="group-open:hidden" />
                <X size={24} className="hidden group-open:block" />
              </summary>
              <div className="absolute right-0 top-full mt-2 w-48 bg-gradient-to-b from-black via-gray-900 to-pink-900 border border-pink-500/30 rounded-lg shadow-2xl z-50">
                <div className="p-4 space-y-3">
                  <Link
                    href="/"
                    className="block text-pink-400 font-semibold py-2 px-3 rounded hover:bg-pink-500/10 transition-colors"
                  >
                    HOME
                  </Link>
                  <Link
                    href="/events"
                    className="block text-white hover:text-pink-400 py-2 px-3 rounded hover:bg-pink-500/10 transition-colors"
                  >
                    EVENTS
                  </Link>
                  <Link
                    href="/about"
                    className="block text-white hover:text-pink-400 py-2 px-3 rounded hover:bg-pink-500/10 transition-colors"
                  >
                    ABOUT
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-white hover:text-pink-400 py-2 px-3 rounded hover:bg-pink-500/10 transition-colors"
                  >
                    CONTACT
                  </Link>
                  <div className="pt-2 border-t border-pink-500/30">
                    <Button className="w-full bg-pink-500 hover:bg-pink-600 text-black font-semibold">REGISTER</Button>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6">
            Excel<span className="text-pink-400">MEC 2025</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The Ultimate Technical Symposium - Where Innovation Meets Excellence
          </p>
          {/* Globe with CSS Effects */}
          <div className="flex justify-center mb-12">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              {/* Orbital Rings around the globe */}
              <div
                className="absolute inset-0 rounded-full border border-pink-500/40 animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>
              <div
                className="absolute inset-2 rounded-full border border-pink-400/30 animate-spin"
                style={{ animationDuration: "15s", animationDirection: "reverse" }}
              ></div>
              <div
                className="absolute inset-6 rounded-full border border-pink-300/20 animate-spin"
                style={{ animationDuration: "25s" }}
              ></div>

              {/* Main Globe - CSS Based */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-pink-500/50 shadow-2xl shadow-pink-500/30 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
                {/* Globe surface with grid pattern */}
                <div className="w-full h-full rounded-full relative overflow-hidden">
                  {/* Gradient overlay for globe effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-pink-700/30 rounded-full"></div>

                  {/* Grid lines to simulate globe */}
                  <div className="absolute inset-0 rounded-full">
                    {/* Horizontal lines */}
                    <div className="absolute top-1/4 left-0 right-0 h-px bg-pink-400/30"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-pink-400/40"></div>
                    <div className="absolute top-3/4 left-0 right-0 h-px bg-pink-400/30"></div>

                    {/* Vertical lines */}
                    <div className="absolute top-0 bottom-0 left-1/4 w-px bg-pink-400/30"></div>
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-pink-400/40"></div>
                    <div className="absolute top-0 bottom-0 left-3/4 w-px bg-pink-400/30"></div>
                  </div>

                  {/* Continents simulation with shapes */}
                  <div className="absolute top-6 left-8 w-8 h-6 bg-pink-400/20 rounded-full"></div>
                  <div className="absolute top-12 right-6 w-6 h-8 bg-pink-300/15 rounded-full"></div>
                  <div className="absolute bottom-8 left-6 w-10 h-4 bg-pink-500/20 rounded-full"></div>

                  {/* Glowing center */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50"></div>
                </div>
              </div>

              {/* Floating Particles around globe */}
              <div
                className="absolute top-8 left-12 w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="absolute top-16 right-8 w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-12 left-8 w-1 h-1 bg-pink-500 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-8 right-16 w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                style={{ animationDelay: "1.5s" }}
              ></div>

              {/* Glowing effect */}
              <div className="absolute inset-12 rounded-full bg-pink-500/10 animate-pulse"></div>

              {/* Wireframe overlay */}
              <div className="absolute inset-8 rounded-full border border-pink-400/20 pointer-events-none">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-pink-500/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-black font-semibold w-full sm:w-auto">
                EXPLORE EVENTS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-black w-full sm:w-auto"
              >
                ABOUT US
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <Card className="bg-black/50 border-pink-500/30 hover:border-pink-500 transition-colors">
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">50+ Events</h3>
              <p className="text-gray-400">Technical competitions and workshops</p>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-pink-500/30 hover:border-pink-500 transition-colors">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">10K+ Participants</h3>
              <p className="text-gray-400">Students from across the nation</p>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-pink-500/30 hover:border-pink-500 transition-colors">
            <CardContent className="p-6 text-center">
              <Trophy className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">₹10L+ Prizes</h3>
              <p className="text-gray-400">Exciting rewards and recognition</p>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border-pink-500/30 hover:border-pink-500 transition-colors">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">3 Days</h3>
              <p className="text-gray-400">Non-stop technical extravaganza</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section with Contact Button */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Innovate?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Join thousands of tech enthusiasts in the ultimate technical challenge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-black font-semibold w-full sm:w-auto"
            >
              REGISTER NOW
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-black w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

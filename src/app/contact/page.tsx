import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
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
            <Link href="/about" className="text-white hover:text-pink-400 transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-pink-400 font-semibold border-b-2 border-pink-400 pb-1">
              CONTACT
            </Link>
          </div>
          <Button variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-black">
            REGISTER
          </Button>
        </div>
      </nav>

      {/* Contact Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            CONTACT <span className="text-pink-400">US</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with us for any queries, suggestions, or collaboration opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-black/50 border-pink-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-300">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    className="bg-gray-800 border-pink-500/30 text-white focus:border-pink-500"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-300">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    className="bg-gray-800 border-pink-500/30 text-white focus:border-pink-500"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="bg-gray-800 border-pink-500/30 text-white focus:border-pink-500"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-300">
                  Subject
                </Label>
                <Input
                  id="subject"
                  className="bg-gray-800 border-pink-500/30 text-white focus:border-pink-500"
                  placeholder="Event Inquiry"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  className="bg-gray-800 border-pink-500/30 text-white focus:border-pink-500 min-h-[120px]"
                  placeholder="Your message here..."
                />
              </div>
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-black font-semibold">Send Message</Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-black/50 border-pink-500/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-pink-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                </div>
                <p className="text-gray-300">info@excelmec2025.org</p>
                <p className="text-gray-300">events@excelmec2025.org</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-pink-500/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-pink-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Phone</h3>
                </div>
                <p className="text-gray-300">+91 98765 43210</p>
                <p className="text-gray-300">+91 87654 32109</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-pink-500/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-pink-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Address</h3>
                </div>
                <p className="text-gray-300">
                  ExcelMEC 2025 Campus
                  <br />
                  Innovation Drive, Tech City
                  <br />
                  State - 123456
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-pink-500/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-pink-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Office Hours</h3>
                </div>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-300">Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

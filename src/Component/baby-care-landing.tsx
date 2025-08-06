"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Heart,
  Baby,
  Shield,
  Clock,
  Users,
  Star,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Menu,
  ArrowRight,
  Play,
} from "lucide-react"

export default function BabyCareLanding() {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
        
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
                {/* Enhanced Header */}
                <header
                 className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                    isScrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-pink-100 shadow-sm"
            : "bg-white/80 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 lg:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <div className="flex size-10 lg:size-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 shadow-lg ring-2 ring-pink-200">
              <div className="relative">
                <Heart className="size-5 lg:size-6 text-white fill-white" />
                <div className="absolute -top-1 -right-1 size-2 bg-white rounded-full opacity-80"></div>
              </div>
            </div>
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              MamaPulse
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors duration-200 relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-pink-600 font-medium"
                onClick={() => navigate('/dashboard')}
              >
                Go to Dashboard
              </Button>
              <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex items-center space-x-3 pb-6 border-b border-pink-100">
                    <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 shadow-lg ring-2 ring-pink-200">
                      <div className="relative">
                        <Heart className="size-5 text-white fill-white" />
                        <div className="absolute -top-1 -right-1 size-2 bg-white rounded-full opacity-80"></div>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-gray-800">MamaPulse</span>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    <button
                      onClick={() => scrollToSection("services")}
                      className="text-left text-lg font-medium text-gray-600 hover:text-pink-600 transition-colors py-2"
                    >
                      Services
                    </button>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="text-left text-lg font-medium text-gray-600 hover:text-pink-600 transition-colors py-2"
                    >
                      About
                    </button>
                    <button
                      onClick={() => scrollToSection("testimonials")}
                      className="text-left text-lg font-medium text-gray-600 hover:text-pink-600 transition-colors py-2"
                    >
                      Testimonials
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-left text-lg font-medium text-gray-600 hover:text-pink-600 transition-colors py-2"
                    >
                      Contact
                    </button>
                  </nav>
                  <div className="space-y-3 mt-6">
                    <Button
                      variant="outline"
                      className="w-full border-pink-300 text-pink-600 hover:bg-pink-50 bg-transparent"
                      onClick={() => navigate('/dashboard')}
                    >
                      Go to Dashboard
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
                      Sign Up
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-transparent to-rose-100/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-100/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <Badge className="bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 hover:from-pink-200 hover:to-rose-200 px-6 py-3 text-sm font-medium border border-pink-200 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="size-2 bg-pink-500 rounded-full animate-pulse"></div>
                    <span>✨ Trusted by 10,000+ Families</span>
                  </div>
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                  Nurturing Care for{" "}
                  <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent relative">
                    Mom & Baby
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-30"></div>
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Expert healthcare services for newborns and mothers. From prenatal care to postpartum support, we're
                  here to guide you through every precious moment of your journey.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
                  onClick={() => navigate('/dashboard')}
                >
                  <div className="flex items-center">
                    Go to Dashboard
                    <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-pink-300 text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <div className="flex items-center">
                    <div className="size-8 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                      <Play className="size-4 text-pink-600 fill-pink-600" />
                    </div>
                    Watch Video
                  </div>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 lg:pt-8 max-w-md mx-auto lg:max-w-none">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 mb-2 group-hover:shadow-lg transition-all duration-200">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                      24/7
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">Support</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 mb-2 group-hover:shadow-lg transition-all duration-200">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                      15+
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">Years Experience</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 mb-2 group-hover:shadow-lg transition-all duration-200">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                      98%
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 rounded-3xl transform rotate-3 opacity-30 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-rose-200 via-pink-200 to-rose-300 rounded-3xl transform -rotate-2 opacity-20"></div>
              <div className="relative">
                <img
                  src="src\assets\img1.png"
                  alt="Mother and baby in peaceful setting"
                  className="rounded-3xl object-cover shadow-2xl w-full max-w-md mx-auto lg:max-w-none ring-4 ring-white/50"
                  style={{ width: "500px", height: "600px" }}
                />
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-4 shadow-2xl max-w-[200px] sm:max-w-none border border-pink-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex size-10 sm:size-12 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100 ring-2 ring-green-200">
                      <CheckCircle className="size-5 sm:size-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">Safe & Secure</div>
                      <div className="text-xs sm:text-sm text-gray-600">Certified Care</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge className="bg-pink-100 text-pink-700 px-4 py-2">Our Services</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Comprehensive Care for Every Stage
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From pregnancy to postpartum, we provide expert care and support for both mother and baby
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Baby,
                title: "Newborn Care",
                description:
                  "Expert care for your precious newborn including health checkups, feeding guidance, and development monitoring",
                features: ["Regular health checkups", "Feeding & nutrition guidance", "Sleep pattern support"],
                bgGradient: "from-pink-100 to-rose-100",
                iconColor: "text-pink-600",
              },
              {
                icon: Heart,
                title: "Maternal Care",
                description: "Comprehensive support for mothers during pregnancy, delivery, and postpartum recovery",
                features: ["Prenatal consultations", "Postpartum recovery", "Breastfeeding support"],
                bgGradient: "from-rose-100 to-pink-100",
                iconColor: "text-rose-600",
              },
              {
                icon: Shield,
                title: "Emergency Care",
                description: "24/7 emergency support and immediate medical attention when you need it most",
                features: ["24/7 helpline", "Rapid response team", "Home visits available"],
                bgGradient: "from-purple-100 to-violet-100",
                iconColor: "text-purple-600",
              },
              {
                icon: Clock,
                title: "Regular Checkups",
                description: "Scheduled health monitoring and developmental assessments for optimal growth",
                features: ["Growth monitoring", "Vaccination schedules", "Development milestones"],
                bgGradient: "from-blue-100 to-sky-100",
                iconColor: "text-blue-600",
              },
              {
                icon: Users,
                title: "Family Support",
                description: "Guidance and education for the entire family on baby care and parenting",
                features: ["Parenting classes", "Family counseling", "Support groups"],
                bgGradient: "from-green-100 to-emerald-100",
                iconColor: "text-green-600",
              },
              {
                icon: Star,
                title: "Wellness Programs",
                description: "Holistic wellness programs focusing on mental health and overall well-being",
                features: ["Yoga & meditation", "Nutrition counseling", "Mental health support"],
                bgGradient: "from-yellow-100 to-amber-100",
                iconColor: "text-yellow-600",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-pink-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group bg-gradient-to-br from-white to-pink-50/30"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.bgGradient} mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg ring-2 ring-white`}
                  >
                    <service.icon className={`size-7 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-gray-900 text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="size-5 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <CheckCircle className="size-3 text-green-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="src\assets\img2.png"
                  alt="Healthcare team"
                  className="rounded-2xl object-cover shadow-xl w-full"
                  style={{ width: "600px", height: "500px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              <Badge className="bg-pink-100 text-pink-700 px-4 py-2">About Us</Badge>
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Dedicated to Your Family's Health & Happiness
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-pink-600 leading-tight">
                  Why You Should Choose Us
                </h3>
              </div>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                With over 15 years of experience in maternal and newborn care, our team of certified healthcare
                professionals is committed to providing the highest quality care for you and your baby.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {["Certified Professionals", "Modern Facilities", "Personalized Care", "24/7 Support"].map(
                  (item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex size-8 items-center justify-center rounded-full bg-pink-100">
                        <CheckCircle className="size-5 text-pink-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ),
                )}
              </div>
              <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                Meet Our Team
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge className="bg-pink-100 text-pink-700 px-4 py-2">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">What Our Families Say</h2>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "New Mother",
                content:
                  "The care and attention we received was exceptional. The team made us feel comfortable and supported throughout our journey.",
                initial: "S",
              },
              {
                name: "Maria Garcia",
                role: "Mother of Two",
                content:
                  "Professional, caring, and always available when we needed them. I couldn't have asked for better support during this precious time.",
                initial: "M",
              },
              {
                name: "Emily Chen",
                role: "First-time Mother",
                content:
                  "The expertise and compassion shown by the entire team gave us confidence and peace of mind during our baby's first months.",
                initial: "E",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-pink-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="size-12 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 flex items-center justify-center">
                      <span className="text-pink-600 font-semibold text-lg">{testimonial.initial}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-pink-500 to-rose-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Start Your Journey with Us?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-pink-100 leading-relaxed">
              Join thousands of families who trust us with their most precious moments. Schedule your consultation
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Book Appointment
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 text-lg bg-transparent transition-all duration-200"
              >
                <Phone className="mr-2 size-5" />
                Call Now: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge className="bg-pink-100 text-pink-700 px-4 py-2">Contact Us</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to answer your questions and support you every step of the way
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  subtitle: "24/7 Support Hotline",
                  content: "(555) 123-4567",
                },
                {
                  icon: Mail,
                  title: "Email",
                  subtitle: "Send us a message",
                  content: "care@mamapulse.com",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  subtitle: "Visit our clinic",
                  content: "123 Care Street, Health City, HC 12345",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-pink-50 transition-colors duration-200"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-pink-100 flex-shrink-0">
                    <contact.icon className="size-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{contact.title}</h3>
                    <p className="text-gray-600 mb-1">{contact.subtitle}</p>
                    <p className="text-pink-600 font-medium text-lg">{contact.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <Card className="border-pink-100 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">First Name</label>
                    <Input placeholder="Your first name" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Last Name</label>
                    <Input placeholder="Your last name" className="h-12" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Phone</label>
                  <Input type="tel" placeholder="(555) 123-4567" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
                  <textarea
                    className="w-full min-h-[120px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white h-12 text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  Send Message
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6 lg:col-span-1">
              <div className="flex items-center space-x-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 shadow-lg ring-2 ring-pink-200">
                  <div className="relative">
                    <Heart className="size-6 text-white fill-white" />
                    <div className="absolute -top-1 -right-1 size-2 bg-white rounded-full opacity-80"></div>
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                  MamaPulse
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Dedicated to providing exceptional care for mothers and newborns with compassion, expertise, and love.
              </p>
              <div className="flex space-x-4">
                <div className="size-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                  <Heart className="size-5 text-white" />
                </div>
                <div className="size-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                  <Mail className="size-5 text-white" />
                </div>
                <div className="size-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                  <Phone className="size-5 text-white" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold mb-6 text-xl text-white">Services</h3>
              <ul className="space-y-4 text-gray-300">
                {["Newborn Care", "Maternal Care", "Emergency Support", "Family Programs"].map((service, index) => (
                  <li key={index} className="group">
                    <a
                      href="#"
                      className="flex items-center space-x-2 hover:text-pink-400 transition-colors duration-200 text-lg"
                    >
                      <div className="size-2 bg-pink-500 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold mb-6 text-xl text-white">Quick Links</h3>
              <ul className="space-y-4 text-gray-300">
                {["About Us", "Our Team", "Testimonials", "Contact"].map((link, index) => (
                  <li key={index} className="group">
                    <a
                      href="#"
                      className="flex items-center space-x-2 hover:text-pink-400 transition-colors duration-200 text-lg"
                    >
                      <div className="size-2 bg-pink-500 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="font-bold mb-6 text-xl text-white">Stay Connected</h3>
              <p className="text-gray-300 mb-4 text-lg">Stay updated with parenting tips and health advice</p>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 h-12 flex-1 focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                  <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 h-12 px-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                    Subscribe
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>
                <p className="text-gray-400 text-sm">Join 5,000+ parents getting weekly tips</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">
                &copy; {new Date().getFullYear()} MamaPulse. All rights reserved. Made with ❤️ for families.
              </p>
              <div className="flex space-x-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-pink-400 transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-pink-400 transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-pink-400 transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
        </footer>
      </div>
  );
}

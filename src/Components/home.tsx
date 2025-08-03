"use client"

import type React from "react"
import { useState } from "react"
import {
  Heart,
  Users,
  Baby,
  Apple,
  FileText,
  Bell,
  User,
  HomeIcon,
  Activity,
  Thermometer,
  Moon,
  Droplets,
  Scale,
  Ruler,
  Camera,
  MessageCircle,
  Shield,
  Phone,
  BookOpen,
  Calendar,
  Clock,
  MapPin,
  AlertCircle,
  CheckCircle,
  Info,
  Stethoscope,
  PhoneCall,
  Video,
  Mail,
  Zap,
  Sun,
  Smile,
  Target,
} from "lucide-react"

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard")

  // Mock data for baby healthcare
  const babyInfo = {
    name: "Emma Rose",
    age: "3 months 2 weeks",
    weight: "5.2 kg",
    height: "58 cm",
    nextAppointment: "Feb 25, 2024",
    lastFeed: "2 hours ago",
    lastSleep: "30 minutes ago",
  }

  const healthStats = [
    { label: "Weight", value: "5.2 kg", change: "+0.3kg", trend: "up", icon: Scale, color: "pink" },
    { label: "Height", value: "58 cm", change: "+2cm", trend: "up", icon: Ruler, color: "peach" },
    { label: "Temperature", value: "36.8°C", change: "Normal", trend: "stable", icon: Thermometer, color: "pink" },
    { label: "Sleep Hours", value: "14h", change: "+1h", trend: "up", icon: Moon, color: "peach" },
  ]

  // Vaccination Schedule Data
  const vaccinationSchedule = [
    {
      id: 1,
      vaccine: "Hepatitis B",
      dueDate: "2024-01-15",
      status: "completed",
      ageRecommended: "Birth",
      nextDose: null,
      description: "Protects against hepatitis B virus infection",
    },
    {
      id: 2,
      vaccine: "DTaP (Diphtheria, Tetanus, Pertussis)",
      dueDate: "2024-04-15",
      status: "upcoming",
      ageRecommended: "2 months",
      nextDose: "4 months",
      description: "Protects against diphtheria, tetanus, and whooping cough",
    },
    {
      id: 3,
      vaccine: "Polio (IPV)",
      dueDate: "2024-04-15",
      status: "upcoming",
      ageRecommended: "2 months",
      nextDose: "4 months",
      description: "Protects against poliomyelitis",
    },
    {
      id: 4,
      vaccine: "Pneumococcal (PCV13)",
      dueDate: "2024-04-15",
      status: "upcoming",
      ageRecommended: "2 months",
      nextDose: "4 months",
      description: "Protects against pneumococcal disease",
    },
    {
      id: 5,
      vaccine: "MMR (Measles, Mumps, Rubella)",
      dueDate: "2024-12-15",
      status: "scheduled",
      ageRecommended: "12 months",
      nextDose: "4-6 years",
      description: "Protects against measles, mumps, and rubella",
    },
  ]

  // Doctor Contact Information
  const doctorContacts = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Pediatrician",
      phone: "+1 (555) 123-4567",
      email: "dr.johnson@babyclinic.com",
      address: "123 Children's Way, Baby City, BC 12345",
      availability: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM",
      emergencyHours: "24/7 Emergency Line",
      type: "primary",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Pediatric Nutritionist",
      phone: "+1 (555) 234-5678",
      email: "dr.chen@nutrition.com",
      address: "456 Health Street, Baby City, BC 12345",
      availability: "Tue, Thu, Sat: 10AM-4PM",
      emergencyHours: "Consultation only",
      type: "specialist",
    },
    {
      id: 3,
      name: "Emergency Pediatric Hotline",
      specialty: "Emergency Care",
      phone: "+1 (555) 911-BABY",
      email: "emergency@babyhospital.com",
      address: "789 Emergency Blvd, Baby City, BC 12345",
      availability: "24/7 Available",
      emergencyHours: "Always available",
      type: "emergency",
    },
  ]

  // Health Records Data
  const healthRecords = [
    {
      id: 1,
      date: "2024-02-10",
      type: "Regular Checkup",
      weight: "5.2 kg",
      height: "58 cm",
      headCircumference: "40 cm",
      temperature: "36.8°C",
      doctor: "Dr. Sarah Johnson",
      notes: "Healthy growth, good appetite, active and alert. Sleeping well through the night.",
      vaccinations: ["None"],
      nextAppointment: "2024-03-10",
    },
    {
      id: 2,
      date: "2024-01-30",
      type: "Weight Check",
      weight: "4.8 kg",
      height: "56 cm",
      headCircumference: "39 cm",
      temperature: "36.7°C",
      doctor: "Dr. Sarah Johnson",
      notes: "Good weight gain, normal development milestones reached.",
      vaccinations: ["None"],
      nextAppointment: "2024-02-10",
    },
    {
      id: 3,
      date: "2024-01-15",
      type: "Vaccination Visit",
      weight: "4.5 kg",
      height: "54 cm",
      headCircumference: "38 cm",
      temperature: "36.9°C",
      doctor: "Dr. Sarah Johnson",
      notes: "Received Hepatitis B vaccine. No adverse reactions observed.",
      vaccinations: ["Hepatitis B"],
      nextAppointment: "2024-01-30",
    },
  ]

  // Education Content
  const educationContent = {
    nutrition: [
      {
        id: 1,
        title: "Breastfeeding Basics",
        content: "Exclusive breastfeeding for the first 6 months provides optimal nutrition and immunity protection.",
        tips: [
          "Feed on demand, typically every 2-3 hours",
          "Ensure proper latch for comfortable feeding",
          "Stay hydrated and maintain a healthy diet",
          "Burp baby after each feeding session",
        ],
        ageGroup: "0-6 months",
      },
      {
        id: 2,
        title: "Introduction to Solid Foods",
        content: "Around 6 months, babies are ready to explore solid foods alongside breast milk or formula.",
        tips: [
          "Start with single-ingredient purees",
          "Introduce new foods one at a time",
          "Watch for allergic reactions",
          "Let baby explore textures and self-feed",
        ],
        ageGroup: "6+ months",
      },
      {
        id: 3,
        title: "Hydration Guidelines",
        content: "Proper hydration is essential for baby's health and development.",
        tips: [
          "Breast milk/formula provides all hydration needs under 6 months",
          "Small amounts of water can be introduced with solids",
          "Avoid juice and sugary drinks",
          "Watch for signs of dehydration",
        ],
        ageGroup: "All ages",
      },
    ],
    lifestyle: [
      {
        id: 1,
        title: "Safe Sleep Practices",
        content: "Creating a safe sleep environment reduces the risk of SIDS and promotes better rest.",
        tips: [
          "Always place baby on their back to sleep",
          "Use a firm sleep surface with fitted sheet",
          "Keep crib free of blankets, pillows, and toys",
          "Maintain comfortable room temperature",
        ],
        importance: "Critical for safety",
      },
      {
        id: 2,
        title: "Tummy Time Benefits",
        content: "Supervised tummy time helps strengthen neck, shoulder, and arm muscles.",
        tips: [
          "Start with 2-3 minutes several times a day",
          "Gradually increase duration as baby grows",
          "Always supervise during tummy time",
          "Make it fun with toys and interaction",
        ],
        importance: "Essential for development",
      },
      {
        id: 3,
        title: "Creating Routines",
        content: "Consistent daily routines help babies feel secure and develop healthy habits.",
        tips: [
          "Establish regular feeding times",
          "Create calming bedtime rituals",
          "Include playtime and interaction",
          "Be flexible as baby's needs change",
        ],
        importance: "Promotes security",
      },
      {
        id: 4,
        title: "Bonding and Interaction",
        content: "Early bonding and interaction support emotional and cognitive development.",
        tips: [
          "Make eye contact during feeding and play",
          "Talk and sing to your baby regularly",
          "Respond to baby's cues and signals",
          "Enjoy skin-to-skin contact",
        ],
        importance: "Builds strong relationships",
      },
    ],
  }

  const getVaccineStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "upcoming":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "scheduled":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "overdue":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getVaccineStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "upcoming":
        return <Clock className="h-5 w-5 text-yellow-600" />
      case "scheduled":
        return <Calendar className="h-5 w-5 text-blue-600" />
      case "overdue":
        return <AlertCircle className="h-5 w-5 text-red-600" />
      default:
        return <Info className="h-5 w-5 text-gray-600" />
    }
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Baby Info Card */}
      <div className="bg-gradient-to-r from-pink-100 to-peach-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
              <Baby className="h-8 w-8 text-pink-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-pink-800">{babyInfo.name}</h2>
              <p className="text-pink-600">{babyInfo.age} old</p>
              <p className="text-sm text-pink-500">Next checkup: {babyInfo.nextAppointment}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-pink-600">Last feed: {babyInfo.lastFeed}</p>
            <p className="text-sm text-pink-600">Last sleep: {babyInfo.lastSleep}</p>
          </div>
        </div>
      </div>

      {/* Health Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {healthStats.map((stat, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-6 shadow-sm border ${
              stat.color === "pink" ? "border-pink-100" : "border-orange-100"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${stat.color === "pink" ? "text-pink-600" : "text-orange-600"}`}>
                  {stat.label}
                </p>
                <p className={`text-2xl font-bold ${stat.color === "pink" ? "text-pink-800" : "text-orange-800"}`}>
                  {stat.value}
                </p>
                <p
                  className={`text-xs ${
                    stat.trend === "up" ? "text-green-600" : stat.trend === "down" ? "text-red-600" : "text-gray-600"
                  }`}
                >
                  {stat.change}
                </p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color === "pink" ? "text-pink-500" : "text-orange-500"}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Log Feed", icon: Droplets, color: "pink" },
          { label: "Record Sleep", icon: Moon, color: "peach" },
          { label: "Take Photo", icon: Camera, color: "pink" },
          { label: "Add Note", icon: FileText, color: "peach" },
        ].map((action, index) => (
          <button
            key={index}
            className={`p-4 rounded-xl border-2 border-dashed transition-all hover:scale-105 ${
              action.color === "pink"
                ? "border-pink-200 hover:border-pink-300 hover:bg-pink-50"
                : "border-orange-200 hover:border-orange-300 hover:bg-orange-50"
            }`}
          >
            <action.icon
              className={`h-6 w-6 mx-auto mb-2 ${action.color === "pink" ? "text-pink-500" : "text-orange-500"}`}
            />
            <p className={`text-sm font-medium ${action.color === "pink" ? "text-pink-700" : "text-orange-700"}`}>
              {action.label}
            </p>
          </button>
        ))}
      </div>

      {/* Quick Overview Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-6">
          <h3 className="text-lg font-semibold text-pink-800 mb-4 flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Next Vaccination
          </h3>
          <div className="space-y-2">
            <p className="font-medium text-pink-800">DTaP Vaccine</p>
            <p className="text-sm text-pink-600">Due: April 15, 2024</p>
            <p className="text-xs text-pink-500">At 2 months old</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6">
          <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
            <Stethoscope className="h-5 w-5 mr-2" />
            Doctor Contact
          </h3>
          <div className="space-y-2">
            <p className="font-medium text-orange-800">Dr. Sarah Johnson</p>
            <p className="text-sm text-orange-600">+1 (555) 123-4567</p>
            <p className="text-xs text-orange-500">Pediatrician</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-6">
          <h3 className="text-lg font-semibold text-pink-800 mb-4 flex items-center">
            <BookOpen className="h-5 w-5 mr-2" />
            Today's Tip
          </h3>
          <div className="space-y-2">
            <p className="font-medium text-pink-800">Tummy Time</p>
            <p className="text-sm text-pink-600">2-3 minutes, several times daily</p>
            <p className="text-xs text-pink-500">Strengthens neck muscles</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderVaccinationSchedule = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-6">
        <h2 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
          <Shield className="h-6 w-6 mr-2" />
          Vaccination Schedule
        </h2>

        {/* Vaccination Progress */}
        <div className="bg-gradient-to-r from-pink-50 to-peach-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-pink-700">Vaccination Progress</span>
            <span className="text-sm text-pink-600">1 of 5 completed</span>
          </div>
          <div className="w-full bg-pink-200 rounded-full h-2">
            <div className="bg-pink-500 h-2 rounded-full" style={{ width: "20%" }}></div>
          </div>
        </div>

        {/* Vaccination List */}
        <div className="space-y-4">
          {vaccinationSchedule.map((vaccine) => (
            <div key={vaccine.id} className="border border-pink-100 rounded-lg p-4 hover:bg-pink-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {getVaccineStatusIcon(vaccine.status)}
                  <div className="flex-1">
                    <h3 className="font-semibold text-pink-800 mb-1">{vaccine.vaccine}</h3>
                    <p className="text-sm text-pink-600 mb-2">{vaccine.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded">Age: {vaccine.ageRecommended}</span>
                      <span className="bg-peach-100 text-peach-700 px-2 py-1 rounded">Due: {vaccine.dueDate}</span>
                      {vaccine.nextDose && (
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Next: {vaccine.nextDose}</span>
                      )}
                    </div>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getVaccineStatusColor(vaccine.status)}`}
                >
                  {vaccine.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Vaccination Reminders */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <Bell className="h-5 w-5 text-yellow-600 mr-2" />
            <div>
              <h4 className="font-medium text-yellow-800">Upcoming Vaccinations</h4>
              <p className="text-sm text-yellow-700">
                You have 3 vaccinations due in the next 2 months. Schedule appointments early!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCallDoctor = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-peach-100 p-6">
        <h2 className="text-2xl font-bold text-peach-800 mb-6 flex items-center">
          <Phone className="h-6 w-6 mr-2" />
          Call a Doctor
        </h2>

        {/* Emergency Alert */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
            <div>
              <h4 className="font-medium text-red-800">Emergency Situations</h4>
              <p className="text-sm text-red-700">
                If your baby is having difficulty breathing, is unresponsive, or has a high fever, call emergency
                services immediately!
              </p>
            </div>
          </div>
        </div>

        {/* Doctor Contacts */}
        <div className="space-y-4">
          {doctorContacts.map((doctor) => (
            <div
              key={doctor.id}
              className={`border rounded-lg p-4 ${
                doctor.type === "emergency"
                  ? "border-red-200 bg-red-50"
                  : doctor.type === "primary"
                    ? "border-peach-200 bg-peach-50"
                    : "border-blue-200 bg-blue-50"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3
                      className={`font-semibold ${
                        doctor.type === "emergency"
                          ? "text-red-800"
                          : doctor.type === "primary"
                            ? "text-peach-800"
                            : "text-blue-800"
                      }`}
                    >
                      {doctor.name}
                    </h3>
                    {doctor.type === "primary" && (
                      <span className="bg-peach-200 text-peach-800 text-xs px-2 py-1 rounded-full">Primary</span>
                    )}
                    {doctor.type === "emergency" && (
                      <span className="bg-red-200 text-red-800 text-xs px-2 py-1 rounded-full">Emergency</span>
                    )}
                  </div>
                  <p
                    className={`text-sm mb-2 ${
                      doctor.type === "emergency"
                        ? "text-red-600"
                        : doctor.type === "primary"
                          ? "text-peach-600"
                          : "text-blue-600"
                    }`}
                  >
                    {doctor.specialty}
                  </p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{doctor.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{doctor.availability}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{doctor.emergencyHours}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      doctor.type === "emergency"
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : doctor.type === "primary"
                          ? "bg-peach-600 hover:bg-peach-700 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>{doctor.phone}</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </button>
                  {doctor.type !== "emergency" && (
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                      <Video className="h-4 w-4" />
                      <span>Video Call</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* When to Call Doctor */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-800 mb-3">When to Call Your Doctor</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-blue-700">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Fever over 100.4°F (38°C)</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Persistent crying or fussiness</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Changes in eating or sleeping patterns</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Unusual rash or skin changes</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Vomiting or diarrhea</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Any concerns about development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderEducation = () => (
    <div className="space-y-6">
      {/* Nutrition Guidance */}
      <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-6">
        <h2 className="text-2xl font-bold text-pink-800 mb-6 flex items-center">
          <Apple className="h-6 w-6 mr-2" />
          Nutrition Guidance
        </h2>
        <div className="space-y-6">
          {educationContent.nutrition.map((item) => (
            <div key={item.id} className="border border-pink-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-pink-800">{item.title}</h3>
                <span className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full">{item.ageGroup}</span>
              </div>
              <p className="text-pink-600 mb-4">{item.content}</p>
              <div className="space-y-2">
                <h4 className="font-medium text-pink-700">Key Tips:</h4>
                <ul className="space-y-1">
                  {item.tips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-pink-600">
                      <Target className="h-4 w-4 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Healthy Lifestyle */}
      <div className="bg-white rounded-xl shadow-sm border border-peach-100 p-6">
        <h2 className="text-2xl font-bold text-peach-800 mb-6 flex items-center">
          <Sun className="h-6 w-6 mr-2" />
          Healthy Lifestyle for Baby
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationContent.lifestyle.map((item) => (
            <div key={item.id} className="border border-peach-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-peach-800">{item.title}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    item.importance === "Critical for safety"
                      ? "bg-red-100 text-red-700"
                      : item.importance === "Essential for development"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {item.importance}
                </span>
              </div>
              <p className="text-peach-600 mb-4">{item.content}</p>
              <div className="space-y-2">
                <h4 className="font-medium text-peach-700">Guidelines:</h4>
                <ul className="space-y-1">
                  {item.tips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-peach-600">
                      <Smile className="h-4 w-4 text-peach-500 mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-gradient-to-r from-pink-50 to-peach-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-pink-800 mb-4 flex items-center">
          <BookOpen className="h-5 w-5 mr-2" />
          Additional Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-pink-100">
            <h4 className="font-medium text-pink-800 mb-2">Baby Development</h4>
            <p className="text-sm text-pink-600">Learn about monthly milestones and what to expect</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-peach-100">
            <h4 className="font-medium text-peach-800 mb-2">Safety Guidelines</h4>
            <p className="text-sm text-peach-600">Essential safety tips for home and travel</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-pink-100">
            <h4 className="font-medium text-pink-800 mb-2">Parent Wellness</h4>
            <p className="text-sm text-pink-600">Taking care of yourself while caring for baby</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderHealthRecords = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-peach-100 p-6">
        <h2 className="text-2xl font-bold text-peach-800 mb-6 flex items-center">
          <FileText className="h-6 w-6 mr-2" />
          Health Records
        </h2>

        {/* Growth Summary */}
        <div className="bg-gradient-to-r from-peach-50 to-pink-50 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-peach-800 mb-4">Growth Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-peach-800">5.2 kg</p>
              <p className="text-sm text-peach-600">Current Weight</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-peach-800">58 cm</p>
              <p className="text-sm text-peach-600">Current Height</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-peach-800">40 cm</p>
              <p className="text-sm text-peach-600">Head Circumference</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-peach-800">75th</p>
              <p className="text-sm text-peach-600">Growth Percentile</p>
            </div>
          </div>
        </div>

        {/* Health Records List */}
        <div className="space-y-4">
          {healthRecords.map((record) => (
            <div key={record.id} className="border border-peach-100 rounded-lg p-4 hover:bg-peach-50 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-peach-800 mb-1">{record.type}</h3>
                  <p className="text-sm text-peach-600">
                    {record.date} • {record.doctor}
                  </p>
                </div>
                <span className="bg-peach-100 text-peach-700 text-xs px-2 py-1 rounded-full">{record.type}</span>
              </div>

              {/* Measurements */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-white rounded-lg p-3 border border-peach-100">
                  <div className="flex items-center space-x-2">
                    <Scale className="h-4 w-4 text-peach-500" />
                    <div>
                      <p className="text-xs text-peach-600">Weight</p>
                      <p className="font-medium text-peach-800">{record.weight}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-peach-100">
                  <div className="flex items-center space-x-2">
                    <Ruler className="h-4 w-4 text-peach-500" />
                    <div>
                      <p className="text-xs text-peach-600">Height</p>
                      <p className="font-medium text-peach-800">{record.height}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-peach-100">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-4 w-4 text-peach-500" />
                    <div>
                      <p className="text-xs text-peach-600">Head Circ.</p>
                      <p className="font-medium text-peach-800">{record.headCircumference}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-peach-100">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="h-4 w-4 text-peach-500" />
                    <div>
                      <p className="text-xs text-peach-600">Temperature</p>
                      <p className="font-medium text-peach-800">{record.temperature}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes and Vaccinations */}
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-peach-700 mb-1">Doctor's Notes:</h4>
                  <p className="text-sm text-peach-600">{record.notes}</p>
                </div>
                {record.vaccinations.length > 0 && record.vaccinations[0] !== "None" && (
                  <div>
                    <h4 className="font-medium text-peach-700 mb-1">Vaccinations Given:</h4>
                    <div className="flex flex-wrap gap-2">
                      {record.vaccinations.map((vaccine, index) => (
                        <span key={index} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                          {vaccine}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between pt-2 border-t border-peach-100">
                  <span className="text-sm text-peach-600">Next Appointment: {record.nextAppointment}</span>
                  <button className="text-sm text-peach-600 hover:text-peach-800 transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Record Button */}
        <div className="mt-6 text-center">
          <button className="bg-peach-600 hover:bg-peach-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Add New Health Record
          </button>
        </div>
      </div>
    </div>
  )

  const renderCommunity = () => (
    <div className="bg-white rounded-xl shadow-sm border border-peach-100 p-6">
      <h2 className="text-2xl font-bold text-peach-800 mb-6 flex items-center">
        <Users className="h-6 w-6 mr-2" />
        Parent Community
      </h2>
      <div className="space-y-4">
        {[
          {
            author: "Sarah M.",
            avatar: "👩",
            post: "My baby started sleeping through the night at 3 months! Any tips for maintaining this routine?",
            likes: 24,
            replies: 12,
            time: "2h ago",
          },
          {
            author: "Mike D.",
            avatar: "👨",
            post: "First vaccination appointment tomorrow. Any advice for keeping baby calm during shots?",
            likes: 18,
            replies: 8,
            time: "4h ago",
          },
          {
            author: "Emma L.",
            avatar: "👩",
            post: "Introducing solids next month. What were your baby's first favorite foods?",
            likes: 31,
            replies: 15,
            time: "6h ago",
          },
        ].map((post, index) => (
          <div key={index} className="p-4 border border-peach-100 rounded-lg hover:bg-peach-50 transition-colors">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-peach-200 rounded-full flex items-center justify-center text-lg">
                {post.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-peach-800">{post.author}</p>
                  <span className="text-xs text-peach-500">{post.time}</span>
                </div>
                <p className="text-sm text-peach-700 mb-3">{post.post}</p>
                <div className="flex items-center space-x-4 text-sm text-peach-500">
                  <span className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {post.likes}
                  </span>
                  <span className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {post.replies}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard()
      case "vaccination":
        return renderVaccinationSchedule()
      case "doctor":
        return renderCallDoctor()
      case "education":
        return renderEducation()
      case "records":
        return renderHealthRecords()
      case "community":
        return renderCommunity()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-peach-50 to-pink-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-peach-400 rounded-full flex items-center justify-center">
                <Baby className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-pink-800">BabyCare</h1>
                <p className="text-xs text-pink-600">Healthcare Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="h-6 w-6 text-pink-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-pink-200 to-peach-200 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-pink-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/60 backdrop-blur-sm shadow-sm border-b border-pink-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: "dashboard", label: "Dashboard", icon: HomeIcon },
              { id: "vaccination", label: "Vaccinations", icon: Shield },
              { id: "doctor", label: "Call Doctor", icon: Phone },
              { id: "education", label: "Education", icon: BookOpen },
              { id: "records", label: "Health Records", icon: FileText },
              { id: "community", label: "Community", icon: Users },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "border-pink-400 text-pink-600 bg-pink-50/50"
                    : "border-transparent text-gray-500 hover:text-pink-600 hover:border-pink-300"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{renderContent()}</main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-pink-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-sm text-pink-600">Made with ❤️ for caring parents • BabyCare Dashboard v1.0</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

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
  Edit,
  Settings,
  UserCheck,
  Flower,
  Brain,
  Bed,
  RefreshCw,
  BookMarkedIcon as MarkAsUnread,
  Trash2,
} from "lucide-react"

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [healthRecordView, setHealthRecordView] = useState("baby")

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

  // Notifications Data
  const notifications = [
    {
      id: 1,
      type: "vaccination",
      title: "Vaccination Reminder",
      message: "DTaP vaccine is due on April 15, 2024. Schedule your appointment now.",
      time: "2 hours ago",
      read: false,
      priority: "high",
      icon: Shield,
      color: "yellow",
    },
    {
      id: 2,
      type: "appointment",
      title: "Upcoming Appointment",
      message: "Regular checkup with Dr. Sarah Johnson tomorrow at 10:00 AM.",
      time: "5 hours ago",
      read: false,
      priority: "medium",
      icon: Calendar,
      color: "blue",
    },
    {
      id: 3,
      type: "milestone",
      title: "Development Milestone",
      message: "Emma has reached a new milestone! Time for tummy time activities.",
      time: "1 day ago",
      read: true,
      priority: "low",
      icon: Baby,
      color: "green",
    },
    {
      id: 4,
      type: "health_tip",
      title: "Daily Health Tip",
      message: "Remember to sterilize bottles and feeding equipment daily.",
      time: "1 day ago",
      read: true,
      priority: "low",
      icon: Apple,
      color: "pink",
    },
    {
      id: 5,
      type: "community",
      title: "New Community Post",
      message: "Dr. Jennifer K. shared expert advice about sleep training methods.",
      time: "2 days ago",
      read: false,
      priority: "low",
      icon: MessageCircle,
      color: "purple",
    },
    {
      id: 6,
      type: "event",
      title: "Event Registration Open",
      message: "Baby Sleep Workshop registration is now open. Limited spots available!",
      time: "3 days ago",
      read: true,
      priority: "medium",
      icon: Calendar,
      color: "blue",
    },
    {
      id: 7,
      type: "health_record",
      title: "Health Record Updated",
      message: "New weight measurement added: 5.2 kg. Growth is on track!",
      time: "4 days ago",
      read: true,
      priority: "low",
      icon: FileText,
      color: "peach",
    },
    {
      id: 8,
      type: "emergency",
      title: "Emergency Contact Update",
      message: "Please verify your emergency contact information is up to date.",
      time: "1 week ago",
      read: false,
      priority: "high",
      icon: Phone,
      color: "red",
    },
  ]

  // Profile data
  const profileData = {
    baby: {
      name: "Emma Rose",
      dateOfBirth: "November 15, 2023",
      gender: "Female",
      bloodType: "O+",
      birthWeight: "3.2 kg",
      birthHeight: "50 cm",
      currentWeight: "5.2 kg",
      currentHeight: "58 cm",
      pediatrician: "Dr. Sarah Johnson",
      emergencyContact: "+1 (555) 123-4567",
      allergies: "None known",
      medicalConditions: "None",
    },
    mother: {
      name: "Jessica Smith",
      age: "28 years",
      dateOfBirth: "March 10, 1995",
      bloodType: "A+",
      deliveryDate: "November 15, 2023",
      deliveryType: "Natural Birth",
      obstetrician: "Dr. Maria Rodriguez",
      postpartumWeeks: "14 weeks",
      breastfeeding: "Yes",
      mentalHealthSupport: "Yes",
      emergencyContact: "+1 (555) 987-6543",
    },
    family: {
      partner: "Michael Smith",
      partnerAge: "30 years",
      siblings: "None",
      address: "123 Family Lane, Baby City, BC 12345",
      insurance: "HealthCare Plus",
      policyNumber: "HC123456789",
    },
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

  // Mother's Health Records Data
  const motherHealthRecords = [
    {
      id: 1,
      date: "2024-02-15",
      type: "6-Week Postpartum Checkup",
      weight: "62 kg",
      bloodPressure: "118/75 mmHg",
      temperature: "36.6°C",
      doctor: "Dr. Maria Rodriguez",
      notes: "Excellent recovery progress. Incision healing well. Cleared for normal activities and exercise.",
      mentalHealth: "Good mood, no signs of postpartum depression",
      breastfeeding: "Going well, no issues",
      nextAppointment: "2024-05-15",
    },
    {
      id: 2,
      date: "2024-01-30",
      type: "Mental Health Check-in",
      weight: "64 kg",
      bloodPressure: "120/78 mmHg",
      temperature: "36.7°C",
      doctor: "Dr. Sarah Thompson (Counselor)",
      notes: "Discussed sleep deprivation and adjustment challenges. Provided coping strategies.",
      mentalHealth: "Mild baby blues, within normal range",
      breastfeeding: "Some initial difficulties, improving with support",
      nextAppointment: "2024-02-15",
    },
    {
      id: 3,
      date: "2024-01-15",
      type: "2-Week Postpartum Visit",
      weight: "66 kg",
      bloodPressure: "125/80 mmHg",
      temperature: "36.8°C",
      doctor: "Dr. Maria Rodriguez",
      notes: "Normal postpartum recovery. Discussed contraception options and self-care.",
      mentalHealth: "Adjusting well, some emotional fluctuations",
      breastfeeding: "Establishing routine, minor latch issues addressed",
      nextAppointment: "2024-01-30",
    },
  ]

  // Community Data
  const communityCategories = [
    { id: "feeding", name: "Feeding & Nutrition", icon: Apple, count: 156, color: "pink" },
    { id: "sleep", name: "Sleep & Routines", icon: Moon, count: 203, color: "purple" },
    { id: "development", name: "Development", icon: Baby, count: 189, color: "blue" },
    { id: "health", name: "Health & Safety", icon: Shield, count: 142, color: "green" },
    { id: "postpartum", name: "Postpartum Care", icon: Heart, count: 98, color: "peach" },
    { id: "general", name: "General Discussion", icon: MessageCircle, count: 267, color: "gray" },
  ]

  const trendingTopics = [
    { topic: "Sleep Training Methods", posts: 45, trend: "up" },
    { topic: "Introducing Solids", posts: 38, trend: "up" },
    { topic: "Postpartum Recovery", posts: 29, trend: "stable" },
    { topic: "Baby-Led Weaning", posts: 24, trend: "up" },
    { topic: "Vaccination Schedules", posts: 19, trend: "down" },
  ]

  const communityPosts = [
    {
      id: 1,
      author: "Sarah M.",
      avatar: "👩",
      verified: true,
      post: "My baby started sleeping through the night at 3 months! The key was establishing a consistent bedtime routine. Here's what worked for us...",
      category: "Sleep & Routines",
      likes: 24,
      replies: 12,
      time: "2h ago",
      tags: ["sleep", "routine", "3months"],
    },
    {
      id: 2,
      author: "Mike D.",
      avatar: "👨",
      verified: false,
      post: "First vaccination appointment tomorrow. Any advice for keeping baby calm during shots? I'm more nervous than my wife! 😅",
      category: "Health & Safety",
      likes: 18,
      replies: 8,
      time: "4h ago",
      tags: ["vaccination", "firsttime", "advice"],
    },
    {
      id: 3,
      author: "Emma L.",
      avatar: "👩",
      verified: true,
      post: "Introducing solids next month. What were your baby's first favorite foods? Looking for ideas beyond the typical rice cereal start.",
      category: "Feeding & Nutrition",
      likes: 31,
      replies: 15,
      time: "6h ago",
      tags: ["solids", "nutrition", "6months"],
    },
    {
      id: 4,
      author: "Dr. Jennifer K.",
      avatar: "👩‍⚕️",
      verified: true,
      expert: true,
      post: "Quick reminder: Tummy time is crucial for your baby's development! Start with 2-3 minutes several times a day. Here are some fun ways to make it engaging...",
      category: "Development",
      likes: 67,
      replies: 23,
      time: "8h ago",
      tags: ["tummytime", "development", "expert"],
    },
  ]

  // Events Data - Add after community data
  const upcomingEvents = [
    {
      id: 1,
      title: "Baby Sleep Workshop",
      organizer: "Dr. Sarah Johnson",
      clinic: "Children's Health Clinic",
      date: "2024-03-15",
      time: "10:00 AM - 12:00 PM",
      location: "123 Children's Way, Baby City, BC 12345",
      type: "workshop",
      category: "Sleep & Development",
      description: "Learn effective sleep training techniques and create healthy sleep routines for your baby.",
      capacity: 20,
      registered: 12,
      price: "Free",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["sleep", "newborn", "parenting"],
      requirements: "Babies 0-12 months welcome",
    },
    {
      id: 2,
      title: "Infant CPR & First Aid Certification",
      organizer: "Dr.Michael Chen",
      clinic: "Baby Emergency Training Center",
      date: "2024-03-20",
      time: "2:00 PM - 5:00 PM",
      location: "456 Safety Street, Baby City, BC 12345",
      type: "certification",
      category: "Safety & Emergency",
      description: "Get certified in infant CPR and learn essential first aid skills every parent should know.",
      capacity: 15,
      registered: 8,
      price: "$75",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["CPR", "first aid", "safety", "certification"],
      requirements: "No prior experience needed",
    },
    {
      id: 3,
      title: "Breastfeeding Support Group",
      organizer: "Dr. Lisa Rodriguez",
      clinic: "Maternal Health Center",
      date: "2024-03-22",
      time: "11:00 AM - 1:00 PM",
      location: "789 Mother's Care Ave, Baby City, BC 12345",
      type: "support_group",
      category: "Feeding & Nutrition",
      description: "Join other new mothers for breastfeeding support, tips, and community connection.",
      capacity: 25,
      registered: 18,
      price: "Free",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["breastfeeding", "support", "mothers", "nutrition"],
      requirements: "New and expecting mothers",
    },
    {
      id: 4,
      title: "Baby's First Foods Cooking Class",
      organizer: "Dr. Amanda Wilson",
      clinic: "Pediatric Nutrition Institute",
      date: "2024-03-25",
      time: "3:00 PM - 5:30 PM",
      location: "321 Healthy Eats Blvd, Baby City, BC 12345",
      type: "class",
      category: "Feeding & Nutrition",
      description: "Learn to prepare nutritious, age-appropriate meals for babies starting solids.",
      capacity: 12,
      registered: 9,
      price: "$45",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["nutrition", "cooking", "solids", "6months+"],
      requirements: "Babies 4-8 months",
    },
    {
      id: 5,
      title: "Postpartum Mental Health Seminar",
      organizer: "Dr. Jennifer Thompson",
      clinic: "Women's Wellness Hospital",
      date: "2024-03-28",
      time: "6:00 PM - 8:00 PM",
      location: "555 Wellness Way, Baby City, BC 12345",
      type: "seminar",
      category: "Mental Health",
      description: "Understanding postpartum depression, anxiety, and available support resources.",
      capacity: 30,
      registered: 22,
      price: "Free",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["mental health", "postpartum", "support", "mothers"],
      requirements: "New mothers and partners welcome",
    },
    {
      id: 6,
      title: "Baby Development Milestones Check",
      organizer: "Dr. Robert Kim",
      clinic: "Child Development Center",
      date: "2024-04-02",
      time: "9:00 AM - 11:00 AM",
      location: "888 Growth Lane, Baby City, BC 12345",
      type: "screening",
      category: "Development",
      description: "Free developmental screening and milestone assessment for babies 0-24 months.",
      capacity: 40,
      registered: 15,
      price: "Free",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["development", "milestones", "screening", "assessment"],
      requirements: "Babies 0-24 months",
    },
  ]

  const eventCategories = [
    { id: "all", name: "All Events", count: upcomingEvents.length },
    { id: "workshop", name: "Workshops", count: upcomingEvents.filter((e) => e.type === "workshop").length },
    {
      id: "certification",
      name: "Certifications",
      count: upcomingEvents.filter((e) => e.type === "certification").length,
    },
    {
      id: "support_group",
      name: "Support Groups",
      count: upcomingEvents.filter((e) => e.type === "support_group").length,
    },
    { id: "class", name: "Classes", count: upcomingEvents.filter((e) => e.type === "class").length },
    { id: "seminar", name: "Seminars", count: upcomingEvents.filter((e) => e.type === "seminar").length },
    { id: "screening", name: "Screenings", count: upcomingEvents.filter((e) => e.type === "screening").length },
  ]

  // Education Content - Enhanced with Mother's Health
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
    motherHealth: [
      {
        id: 1,
        title: "Physical Recovery After Birth",
        content:
          "Your body needs time to heal and recover after childbirth. Understanding what to expect helps you take better care of yourself.",
        tips: [
          "Rest when your baby sleeps - your body is healing",
          "Stay hydrated and eat nutritious meals",
          "Take gentle walks when you feel ready",
          "Don't lift anything heavier than your baby for 6 weeks",
          "Use ice packs for perineal pain relief",
          "Wear supportive, comfortable clothing",
        ],
        timeframe: "0-6 weeks postpartum",
        icon: RefreshCw,
      },
      {
        id: 2,
        title: "Mental Health & Emotional Wellbeing",
        content:
          "Postpartum mental health is just as important as physical health. It's normal to experience a range of emotions.",
        tips: [
          "Baby blues are normal in the first 2 weeks",
          "Seek help if sadness persists beyond 2 weeks",
          "Connect with other new mothers for support",
          "Don't hesitate to ask for professional help",
          "Practice mindfulness and relaxation techniques",
          "Communicate openly with your partner about feelings",
        ],
        timeframe: "Ongoing",
        icon: Brain,
      },
      {
        id: 3,
        title: "Breastfeeding Support for Mom",
        content:
          "Breastfeeding is beneficial for both baby and mother, but it can come with challenges that need support.",
        tips: [
          "Eat an extra 300-500 calories per day while breastfeeding",
          "Stay well-hydrated - drink water before each feeding",
          "Use lanolin cream for sore nipples",
          "Get proper support with a well-fitting nursing bra",
          "Rest and sleep when possible to maintain milk supply",
          "Seek lactation consultant help if needed",
        ],
        timeframe: "While breastfeeding",
        icon: Heart,
      },
      {
        id: 4,
        title: "Self-Care and Personal Time",
        content: "Taking care of yourself isn't selfish - it's necessary for being the best mother you can be.",
        tips: [
          "Accept help from family and friends",
          "Take short breaks for yourself daily",
          "Maintain personal hygiene routines",
          "Stay connected with friends and family",
          "Engage in activities you enjoy when possible",
          "Remember that asking for help is a sign of strength",
        ],
        timeframe: "Ongoing",
        icon: Flower,
      },
      {
        id: 5,
        title: "Nutrition for New Mothers",
        content: "Proper nutrition supports your recovery and energy levels, especially if you're breastfeeding.",
        tips: [
          "Focus on whole foods: fruits, vegetables, lean proteins",
          "Include calcium-rich foods for bone health",
          "Take prenatal vitamins as recommended by your doctor",
          "Limit caffeine and avoid alcohol if breastfeeding",
          "Prepare healthy snacks for easy access",
          "Don't skip meals - your body needs consistent fuel",
        ],
        timeframe: "Ongoing",
        icon: Apple,
      },
      {
        id: 6,
        title: "Sleep and Rest Strategies",
        content: "Quality sleep is crucial for recovery and mental health, even with a newborn's schedule.",
        tips: [
          "Sleep when the baby sleeps, even during the day",
          "Create a comfortable sleep environment",
          "Share nighttime duties with your partner",
          "Limit screen time before bed",
          "Practice relaxation techniques before sleep",
          "Don't feel guilty about resting - it's necessary",
        ],
        timeframe: "Ongoing",
        icon: Bed,
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

  const getNotificationColor = (color: string) => {
    switch (color) {
      case "red":
        return "bg-red-50 border-red-200"
      case "yellow":
        return "bg-yellow-50 border-yellow-200"
      case "blue":
        return "bg-blue-50 border-blue-200"
      case "green":
        return "bg-green-50 border-green-200"
      case "purple":
        return "bg-purple-50 border-purple-200"
      case "pink":
        return "bg-pink-50 border-pink-200"
      case "peach":
        return "bg-orange-50 border-orange-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const getNotificationIconColor = (color: string) => {
    switch (color) {
      case "red":
        return "text-red-600 bg-red-100"
      case "yellow":
        return "text-yellow-600 bg-yellow-100"
      case "blue":
        return "text-blue-600 bg-blue-100"
      case "green":
        return "text-green-600 bg-green-100"
      case "purple":
        return "text-purple-600 bg-purple-100"
      case "pink":
        return "text-pink-600 bg-pink-100"
      case "peach":
        return "text-orange-600 bg-orange-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  const renderNotifications = () => (
    <div className="space-y-6">
      {/* Notifications Header */}
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-200 rounded-full flex items-center justify-center relative">
              <Bell className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              {unreadCount > 0 && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{unreadCount}</span>
                </div>
              )}
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800">Notifications</h2>
              <p className="text-blue-600">
                {unreadCount > 0 ? `${unreadCount} unread notifications` : "All caught up!"}
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors font-medium text-sm">
              Mark All Read
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Notification Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">Filter Notifications</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "All", count: notifications.length },
            { id: "unread", label: "Unread", count: unreadCount },
            {
              id: "vaccination",
              label: "Vaccinations",
              count: notifications.filter((n) => n.type === "vaccination").length,
            },
            {
              id: "appointment",
              label: "Appointments",
              count: notifications.filter((n) => n.type === "appointment").length,
            },
            { id: "emergency", label: "Emergency", count: notifications.filter((n) => n.type === "emergency").length },
          ].map((filter) => (
            <button
              key={filter.id}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors text-sm"
            >
              <span className="text-blue-700 font-medium">{filter.label}</span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">{filter.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-xl shadow-sm border p-4 sm:p-6 transition-all hover:shadow-md ${
              !notification.read ? "border-l-4 border-l-blue-500" : ""
            } ${getNotificationColor(notification.color)}`}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getNotificationIconColor(
                  notification.color,
                )}`}
              >
                <notification.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                    <h3 className={`font-semibold ${!notification.read ? "text-gray-900" : "text-gray-700"}`}>
                      {notification.title}
                    </h3>
                    {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        notification.priority === "high"
                          ? "bg-red-100 text-red-700"
                          : notification.priority === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {notification.priority}
                    </span>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed mb-3 ${!notification.read ? "text-gray-800" : "text-gray-600"}`}>
                  {notification.message}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm">
                    {!notification.read && (
                      <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors">
                        <CheckCircle className="h-4 w-4" />
                        <span>Mark as Read</span>
                      </button>
                    )}
                    {notification.read && (
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors">
                        <MarkAsUnread className="h-4 w-4" />
                        <span>Mark as Unread</span>
                      </button>
                    )}
                    <button className="flex items-center space-x-1 text-red-500 hover:text-red-700 transition-colors">
                      <Trash2 className="h-4 w-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                  {(notification.type === "vaccination" || notification.type === "appointment") && (
                    <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium">
                      Take Action →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Load More Notifications
        </button>
      </div>
    </div>
  )

  const renderProfile = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-pink-100 to-peach-100 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center">
              <Baby className="h-10 w-10 text-pink-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-pink-800">{profileData.baby.name}</h2>
              <p className="text-pink-600">Born: {profileData.baby.dateOfBirth}</p>
              <p className="text-sm text-pink-500">
                {profileData.baby.gender} • {profileData.baby.bloodType}
              </p>
            </div>
          </div>
          <button className="flex items-center space-x-2 bg-white text-pink-600 px-4 py-2 rounded-lg border border-pink-200 hover:bg-pink-50 transition-colors">
            <Edit className="h-4 w-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Profile Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Baby Information */}
        <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-6">
          <h3 className="text-lg font-semibold text-pink-800 mb-4 flex items-center">
            <Baby className="h-5 w-5 mr-2" />
            Baby Information
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-pink-600">Full Name</label>
                <p className="text-pink-800">{profileData.baby.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-pink-600">Date of Birth</label>
                <p className="text-pink-800">{profileData.baby.dateOfBirth}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-pink-600">Gender</label>
                <p className="text-pink-800">{profileData.baby.gender}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-pink-600">Blood Type</label>
                <p className="text-pink-800">{profileData.baby.bloodType}</p>
              </div>
            </div>

            <div className="border-t border-pink-100 pt-4">
              <h4 className="font-medium text-pink-700 mb-3">Birth Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-pink-600">Birth Weight</label>
                  <p className="text-pink-800">{profileData.baby.birthWeight}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-pink-600">Birth Height</label>
                  <p className="text-pink-800">{profileData.baby.birthHeight}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-pink-100 pt-4">
              <h4 className="font-medium text-pink-700 mb-3">Current Stats</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-pink-600">Current Weight</label>
                  <p className="text-pink-800">{profileData.baby.currentWeight}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-pink-600">Current Height</label>
                  <p className="text-pink-800">{profileData.baby.currentHeight}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-pink-100 pt-4">
              <h4 className="font-medium text-pink-700 mb-3">Medical Information</h4>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-pink-600">Pediatrician</label>
                  <p className="text-pink-800">{profileData.baby.pediatrician}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-pink-600">Allergies</label>
                  <p className="text-pink-800">{profileData.baby.allergies}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-pink-600">Medical Conditions</label>
                  <p className="text-pink-800">{profileData.baby.medicalConditions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mother Information */}
        <div className="bg-white rounded-xl shadow-sm border border-peach-100 p-6">
          <h3 className="text-lg font-semibold text-peach-800 mb-4 flex items-center">
            <UserCheck className="h-5 w-5 mr-2" />
            Mother Information
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-peach-600">Full Name</label>
                <p className="text-peach-800">{profileData.mother.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-peach-600">Age</label>
                <p className="text-peach-800">{profileData.mother.age}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-peach-600">Blood Type</label>
                <p className="text-peach-800">{profileData.mother.bloodType}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-peach-600">Postpartum</label>
                <p className="text-peach-800">{profileData.mother.postpartumWeeks}</p>
              </div>
            </div>

            <div className="border-t border-peach-100 pt-4">
              <h4 className="font-medium text-peach-700 mb-3">Delivery Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-peach-600">Delivery Date</label>
                  <p className="text-peach-800">{profileData.mother.deliveryDate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-peach-600">Delivery Type</label>
                  <p className="text-peach-800">{profileData.mother.deliveryType}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-peach-100 pt-4">
              <h4 className="font-medium text-peach-700 mb-3">Healthcare</h4>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-peach-600">Obstetrician</label>
                  <p className="text-peach-800">{profileData.mother.obstetrician}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-peach-600">Breastfeeding</label>
                    <p className="text-peach-800">{profileData.mother.breastfeeding}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-peach-600">Mental Health Support</label>
                    <p className="text-peach-800">{profileData.mother.mentalHealthSupport}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Family Information */}
      <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-6">
        <h3 className="text-lg font-semibold text-pink-800 mb-4 flex items-center">
          <Users className="h-5 w-5 mr-2" />
          Family Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-pink-700 mb-3">Family Details</h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-pink-600">Partner</label>
                <p className="text-pink-800">{profileData.family.partner}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-pink-600">Partner Age</label>
                <p className="text-pink-800">{profileData.family.partnerAge}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-pink-600">Siblings</label>
                <p className="text-pink-800">{profileData.family.siblings}</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-pink-700 mb-3">Contact Information</h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-pink-600">Address</label>
                <p className="text-pink-800 text-sm">{profileData.family.address}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-pink-600">Emergency Contact</label>
                <p className="text-pink-800">{profileData.mother.emergencyContact}</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-pink-700 mb-3">Insurance</h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-pink-600">Provider</label>
                <p className="text-pink-800">{profileData.family.insurance}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-pink-600">Policy Number</label>
                <p className="text-pink-800">{profileData.family.policyNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-peach-100 p-6">
        <h3 className="text-lg font-semibold text-peach-800 mb-4 flex items-center">
          <Settings className="h-5 w-5 mr-2" />
          Settings & Preferences
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-peach-700 mb-3">Notifications</h4>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-peach-300 text-peach-600" defaultChecked />
                <span className="text-sm text-peach-700">Vaccination reminders</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-peach-300 text-peach-600" defaultChecked />
                <span className="text-sm text-peach-700">Appointment reminders</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-peach-300 text-peach-600" />
                <span className="text-sm text-peach-700">Daily health tips</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-peach-300 text-peach-600" defaultChecked />
                <span className="text-sm text-peach-700">Milestone alerts</span>
              </label>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-peach-700 mb-3">Privacy</h4>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-peach-300 text-peach-600" defaultChecked />
                <span className="text-sm text-peach-700">Share data with healthcare providers</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-peach-300 text-peach-600" />
                <span className="text-sm text-peach-700">Allow community interactions</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-peach-300 text-peach-600" defaultChecked />
                <span className="text-sm text-peach-700">Backup data to cloud</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Baby Info Card */}
      <div className="bg-gradient-to-r from-pink-100 to-peach-100 rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-200 rounded-full flex items-center justify-center">
              <Baby className="h-6 w-6 sm:h-8 sm:w-8 text-pink-600" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-pink-800">{babyInfo.name}</h2>
              <p className="text-pink-600">{babyInfo.age} old</p>
              <p className="text-sm text-pink-500">Next checkup: {babyInfo.nextAppointment}</p>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-sm text-pink-600">Last feed: {babyInfo.lastFeed}</p>
            <p className="text-sm text-pink-600">Last sleep: {babyInfo.lastSleep}</p>
          </div>
        </div>
      </div>

      {/* Health Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {healthStats.map((stat, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-4 sm:p-6 shadow-sm border ${
              stat.color === "pink" ? "border-pink-100" : "border-orange-100"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-xs sm:text-sm font-medium ${stat.color === "pink" ? "text-pink-600" : "text-orange-600"}`}
                >
                  {stat.label}
                </p>
                <p
                  className={`text-lg sm:text-2xl font-bold ${stat.color === "pink" ? "text-pink-800" : "text-orange-800"}`}
                >
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
              <stat.icon
                className={`h-6 w-6 sm:h-8 sm:w-8 ${stat.color === "pink" ? "text-pink-500" : "text-orange-500"}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {[
          { label: "Log Feed", icon: Droplets, color: "pink" },
          { label: "Record Sleep", icon: Moon, color: "peach" },
          { label: "Take Photo", icon: Camera, color: "pink" },
          { label: "Add Note", icon: FileText, color: "peach" },
        ].map((action, index) => (
          <button
            key={index}
            className={`p-3 sm:p-4 rounded-xl border-2 border-dashed transition-all hover:scale-105 ${
              action.color === "pink"
                ? "border-pink-200 hover:border-pink-300 hover:bg-pink-50"
                : "border-orange-200 hover:border-orange-300 hover:bg-orange-50"
            }`}
          >
            <action.icon
              className={`h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-2 ${action.color === "pink" ? "text-pink-500" : "text-orange-500"}`}
            />
            <p
              className={`text-xs sm:text-sm font-medium ${action.color === "pink" ? "text-pink-700" : "text-orange-700"}`}
            >
              {action.label}
            </p>
          </button>
        ))}
      </div>

      {/* Quick Overview Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-pink-800 mb-4 flex items-center">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Next Vaccination
          </h3>
          <div className="space-y-2">
            <p className="font-medium text-pink-800">DTaP Vaccine</p>
            <p className="text-sm text-pink-600">Due: April 15, 2024</p>
            <p className="text-xs text-pink-500">At 2 months old</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-orange-800 mb-4 flex items-center">
            <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Doctor Contact
          </h3>
          <div className="space-y-2">
            <p className="font-medium text-orange-800">Dr. Sarah Johnson</p>
            <p className="text-sm text-orange-600">+1 (555) 123-4567</p>
            <p className="text-xs text-orange-500">Pediatrician</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-pink-800 mb-4 flex items-center">
            <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
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
      <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-pink-800 mb-6 flex items-center">
          <Shield className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
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
              <div className="flex flex-col sm:flex-row items-start justify-between">
                <div className="flex items-start space-x-4 mb-4 sm:mb-0 flex-1">
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
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getVaccineStatusColor(vaccine.status)} whitespace-nowrap`}
                >
                  {vaccine.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Vaccination Reminders */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start">
            <Bell className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
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
    <div className="space-y-4 sm:space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-peach-100 via-pink-100 to-peach-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-white/20 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-8 sm:translate-y-12 -translate-x-8 sm:-translate-x-12"></div>
        <div className="relative">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-peach-800 mb-3 sm:mb-4 flex items-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-peach-200 rounded-full flex items-center justify-center mr-3 sm:mr-4">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-peach-600" />
            </div>
            Healthcare Support
          </h2>
          <p className="text-peach-700 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
            Get immediate help when you need it most. We're here for you and your baby 24/7.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/50 rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-peach-600" />
              <span className="text-xs sm:text-sm font-medium text-peach-800">24/7 Available</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/50 rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-peach-600" />
              <span className="text-xs sm:text-sm font-medium text-peach-800">Expert Care</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/50 rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-peach-600" />
              <span className="text-xs sm:text-sm font-medium text-peach-800">Family Focused</span>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Triage */}
      <div className="bg-white rounded-xl shadow-sm border border-red-100 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-red-800 flex items-center mb-2 sm:mb-0">
            <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
            Emergency Assessment
          </h3>
          <div className="bg-red-100 text-red-700 text-xs px-2 sm:px-3 py-1 rounded-full font-medium">Quick Check</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
              </div>
              <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full font-medium">URGENT</span>
            </div>
            <h4 className="font-semibold text-red-800 mb-1 sm:mb-2 text-sm sm:text-base">Call 911 Now</h4>
            <p className="text-xs sm:text-sm text-red-700 leading-tight">
              Difficulty breathing, unresponsive, severe injury
            </p>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
              </div>
              <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full font-medium">SOON</span>
            </div>
            <h4 className="font-semibold text-yellow-800 mb-1 sm:mb-2 text-sm sm:text-base">Call Doctor Today</h4>
            <p className="text-xs sm:text-sm text-yellow-700 leading-tight">Fever, persistent crying, feeding issues</p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all cursor-pointer group sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full font-medium">ROUTINE</span>
            </div>
            <h4 className="font-semibold text-blue-800 mb-1 sm:mb-2 text-sm sm:text-base">Schedule Appointment</h4>
            <p className="text-xs sm:text-sm text-blue-700 leading-tight">General questions, routine check-ups</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="mb-3 sm:mb-0">
              <h4 className="font-bold text-base sm:text-lg mb-1">🚨 Emergency Hotline</h4>
              <p className="text-red-100 text-sm">If your baby is in immediate danger</p>
            </div>
            <button className="bg-white text-red-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-lg hover:bg-red-50 transition-colors w-full sm:w-auto">
              Call 911
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {[
          {
            label: "Video Call",
            icon: Video,
            color: "blue",
            description: "Face-to-face consultation",
            available: true,
          },
          {
            label: "Chat Support",
            icon: MessageCircle,
            color: "green",
            description: "Text with a nurse",
            available: true,
          },
          {
            label: "Symptom Checker",
            icon: Activity,
            color: "purple",
            description: "AI-powered assessment",
            available: true,
          },
          {
            label: "Book Appointment",
            icon: Calendar,
            color: "peach",
            description: "Schedule a visit",
            available: true,
          },
        ].map((action, index) => (
          <button
            key={index}
            className={`p-3 sm:p-4 rounded-xl border-2 transition-all hover:scale-105 hover:shadow-lg group ${
              action.color === "blue"
                ? "border-blue-200 hover:border-blue-300 hover:bg-blue-50"
                : action.color === "green"
                  ? "border-green-200 hover:border-green-300 hover:bg-green-50"
                  : action.color === "purple"
                    ? "border-purple-200 hover:border-purple-300 hover:bg-purple-50"
                    : "border-peach-200 hover:border-peach-300 hover:bg-peach-50"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform ${
                  action.color === "blue"
                    ? "bg-blue-100"
                    : action.color === "green"
                      ? "bg-green-100"
                      : action.color === "purple"
                        ? "bg-purple-100"
                        : "bg-peach-100"
                }`}
              >
                <action.icon
                  className={`h-5 w-5 sm:h-6 sm:w-6 ${
                    action.color === "blue"
                      ? "text-blue-600"
                      : action.color === "green"
                        ? "text-green-600"
                        : action.color === "purple"
                          ? "text-purple-600"
                          : "text-peach-600"
                  }`}
                />
              </div>
              <p
                className={`font-semibold mb-1 text-xs sm:text-sm ${
                  action.color === "blue"
                    ? "text-blue-800"
                    : action.color === "green"
                      ? "text-green-800"
                      : action.color === "purple"
                        ? "text-purple-800"
                        : "text-peach-800"
                }`}
              >
                {action.label}
              </p>
              <p className="text-xs text-gray-600 leading-tight hidden sm:block">{action.description}</p>
              {action.available && (
                <div className="mt-1 sm:mt-2">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Available</span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Healthcare Team */}
      <div className="bg-white rounded-xl shadow-sm border border-peach-100 p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-peach-800 mb-4 sm:mb-6 flex items-center">
          <Users className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
          Your Healthcare Team
        </h3>

        <div className="space-y-4 sm:space-y-6">
          {doctorContacts.map((doctor) => (
            <div
              key={doctor.id}
              className={`relative overflow-hidden rounded-xl p-4 sm:p-6 transition-all hover:shadow-lg ${
                doctor.type === "emergency"
                  ? "bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200"
                  : doctor.type === "primary"
                    ? "bg-gradient-to-r from-peach-50 to-pink-50 border-2 border-peach-200"
                    : "bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200"
              }`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-20 sm:h-20 opacity-10">
                <Stethoscope className="w-full h-full" />
              </div>

              <div className="relative flex flex-col space-y-4">
                <div className="flex flex-col sm:flex-row items-start justify-between">
                  <div className="flex-1 mb-4 sm:mb-0">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
                          doctor.type === "emergency"
                            ? "bg-red-200"
                            : doctor.type === "primary"
                              ? "bg-peach-200"
                              : "bg-blue-200"
                        }`}
                      >
                        <Stethoscope
                          className={`h-6 w-6 sm:h-8 sm:w-8 ${
                            doctor.type === "emergency"
                              ? "text-red-600"
                              : doctor.type === "primary"
                                ? "text-peach-600"
                                : "text-blue-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                          <h3
                            className={`text-lg sm:text-xl font-bold ${
                              doctor.type === "emergency"
                                ? "text-red-800"
                                : doctor.type === "primary"
                                  ? "text-peach-800"
                                  : "text-blue-800"
                            }`}
                          >
                            {doctor.name}
                          </h3>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {doctor.type === "primary" && (
                              <span className="bg-peach-200 text-peach-800 text-xs px-2 sm:px-3 py-1 rounded-full font-medium">
                                ⭐ Primary
                              </span>
                            )}
                            {doctor.type === "emergency" && (
                              <span className="bg-red-200 text-red-800 text-xs px-2 sm:px-3 py-1 rounded-full font-medium">
                                🚨 Emergency
                              </span>
                            )}
                          </div>
                        </div>
                        <p
                          className={`font-medium text-sm sm:text-base ${
                            doctor.type === "emergency"
                              ? "text-red-600"
                              : doctor.type === "primary"
                                ? "text-peach-600"
                                : "text-blue-600"
                          }`}
                        >
                          {doctor.specialty}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-tight">{doctor.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                        <span className="text-gray-700">{doctor.availability}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                        <span className="text-gray-700">{doctor.emergencyHours}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                        <span className="text-gray-700 break-all">{doctor.email}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    className={`flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all hover:scale-105 text-sm sm:text-base ${
                      doctor.type === "emergency"
                        ? "bg-red-600 hover:bg-red-700 text-white shadow-lg"
                        : doctor.type === "primary"
                          ? "bg-peach-600 hover:bg-peach-700 text-white shadow-lg"
                          : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                    }`}
                  >
                    <PhoneCall className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="break-all">{doctor.phone}</span>
                  </button>

                  <div className="flex gap-2 sm:gap-2">
                    <button className="flex-1 flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors text-sm">
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">Email</span>
                    </button>
                    {doctor.type !== "emergency" && (
                      <button className="flex-1 flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors text-sm">
                        <Video className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="hidden sm:inline">Video</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Symptom Guide */}
      <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-4 sm:mb-6 flex items-center">
          <Activity className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
          When to Seek Medical Care
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-red-800 flex items-center text-sm sm:text-base">
              <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Call 911 Immediately If:
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                "Baby is not breathing or turning blue",
                "Unresponsive or extremely lethargic",
                "Severe injury or bleeding",
                "Choking and cannot breathe",
                "Seizure lasting more than 5 minutes",
              ].map((symptom, index) => (
                <div key={index} className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-red-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm text-red-800 font-medium leading-tight">{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-yellow-800 flex items-center text-sm sm:text-base">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Call Doctor Same Day If:
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                "Fever over 100.4°F (38°C)",
                "Persistent vomiting or diarrhea",
                "Unusual crying for hours",
                "Rash with fever",
                "Refusing to eat for 8+ hours",
              ].map((symptom, index) => (
                <div key={index} className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm text-yellow-800 font-medium leading-tight">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Preparedness */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 sm:p-6 border border-green-200">
        <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-3 sm:mb-4 flex items-center">
          <Shield className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
          Emergency Preparedness Tips
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-white rounded-lg p-3 sm:p-4 border border-green-100">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
            </div>
            <h4 className="font-semibold text-green-800 mb-1 sm:mb-2 text-sm sm:text-base">Keep Numbers Handy</h4>
            <p className="text-xs sm:text-sm text-green-700 leading-tight">
              Save all emergency contacts in your phone and post them visibly at home.
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 sm:p-4 border border-blue-100">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
            </div>
            <h4 className="font-semibold text-blue-800 mb-1 sm:mb-2 text-sm sm:text-base">Learn Baby CPR</h4>
            <p className="text-xs sm:text-sm text-blue-700 leading-tight">
              Take a certified infant CPR class. It could save your baby's life.
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 sm:p-4 border border-purple-100 sm:col-span-2 lg:col-span-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2 sm:mb-3">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
            </div>
            <h4 className="font-semibold text-purple-800 mb-1 sm:mb-2 text-sm sm:text-base">Medical Info Ready</h4>
            <p className="text-xs sm:text-sm text-purple-700 leading-tight">
              Keep a list of medications, allergies, and medical history easily accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  const renderEducation = () => (
    <div className="space-y-6">
      {/* Nutrition Guidance */}
      <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-pink-800 mb-6 flex items-center">
          <Apple className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
          Nutrition Guidance
        </h2>
        <div className="space-y-6">
          {educationContent.nutrition.map((item) => (
            <div key={item.id} className="border border-pink-100 rounded-lg p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3">
                <h3 className="text-base sm:text-lg font-semibold text-pink-800 mb-2 sm:mb-0">{item.title}</h3>
                <span className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                  {item.ageGroup}
                </span>
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
      <div className="bg-white rounded-xl shadow-sm border border-peach-100 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-peach-800 mb-6 flex items-center">
          <Sun className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
          Healthy Lifestyle for Baby
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {educationContent.lifestyle.map((item) => (
            <div key={item.id} className="border border-peach-100 rounded-lg p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3">
                <h3 className="text-base sm:text-lg font-semibold text-peach-800 mb-2 sm:mb-0">{item.title}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
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

      {/* Mother's Health After Birth */}
      <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-pink-800 mb-6 flex items-center">
          <Heart className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
          Mother's Health After Birth
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {educationContent.motherHealth.map((item) => (
            <div key={item.id} className="border border-pink-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <item.icon className="h-5 w-5 text-pink-500" />
                  <h3 className="text-base sm:text-lg font-semibold text-pink-800">{item.title}</h3>
                </div>
                <span className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                  {item.timeframe}
                </span>
              </div>
              <p className="text-pink-600 mb-4">{item.content}</p>
              <div className="space-y-2">
                <h4 className="font-medium text-pink-700">Important Tips:</h4>
                <ul className="space-y-1">
                  {item.tips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-pink-600">
                      <Heart className="h-4 w-4 text-pink-500 mt-0.5 flex-shrink-0" />
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
      <div className="bg-gradient-to-r from-pink-50 to-peach-50 rounded-xl p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-pink-800 mb-4 flex items-center">
          <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
          Additional Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      {/* Toggle between Baby and Mother Records */}
      <div className="bg-white rounded-xl shadow-sm border border-peach-100 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-peach-800 mb-4 sm:mb-0 flex items-center">
            <FileText className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
            Health Records
          </h2>
          <div className="flex bg-peach-100 rounded-lg p-1">
            <button
              onClick={() => setHealthRecordView("baby")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                healthRecordView === "baby"
                  ? "bg-white text-peach-800 shadow-sm"
                  : "text-peach-600 hover:text-peach-800"
              }`}
            >
              Baby Records
            </button>
            <button
              onClick={() => setHealthRecordView("mother")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                healthRecordView === "mother"
                  ? "bg-white text-peach-800 shadow-sm"
                  : "text-peach-600 hover:text-peach-800"
              }`}
            >
              Mother Records
            </button>
          </div>
        </div>

        {healthRecordView === "baby" ? (
          <>
            {/* Baby Growth Summary */}
            <div className="bg-gradient-to-r from-peach-50 to-pink-50 rounded-lg p-4 mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-peach-800 mb-4">Baby Growth Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-peach-800">5.2 kg</p>
                  <p className="text-sm text-peach-600">Current Weight</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-peach-800">58 cm</p>
                  <p className="text-sm text-peach-600">Current Height</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-peach-800">40 cm</p>
                  <p className="text-sm text-peach-600">Head Circumference</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-peach-800">75th</p>
                  <p className="text-sm text-peach-600">Growth Percentile</p>
                </div>
              </div>
            </div>

            {/* Baby Health Records List */}
            <div className="space-y-4">
              {healthRecords.map((record) => (
                <div
                  key={record.id}
                  className="border border-peach-100 rounded-lg p-4 hover:bg-peach-50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-peach-800 mb-1">{record.type}</h3>
                      <p className="text-sm text-peach-600">
                        {record.date} • {record.doctor}
                      </p>
                    </div>
                    <span className="bg-peach-100 text-peach-700 text-xs px-2 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                      {record.type}
                    </span>
                  </div>

                  {/* Measurements */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
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
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 border-t border-peach-100">
                      <span className="text-sm text-peach-600 mb-2 sm:mb-0">
                        Next Appointment: {record.nextAppointment}
                      </span>
                      <button className="text-sm text-peach-600 hover:text-peach-800 transition-colors">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Mother Health Summary */}
            <div className="bg-gradient-to-r from-pink-50 to-peach-50 rounded-lg p-4 mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-pink-800 mb-4">Mother Health Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-pink-800">62 kg</p>
                  <p className="text-sm text-pink-600">Current Weight</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-pink-800">118/75</p>
                  <p className="text-sm text-pink-600">Blood Pressure</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-pink-800">14 weeks</p>
                  <p className="text-sm text-pink-600">Postpartum</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-pink-800">Excellent</p>
                  <p className="text-sm text-pink-600">Recovery Status</p>
                </div>
              </div>
            </div>

            {/* Mother Health Records List */}
            <div className="space-y-4">
              {motherHealthRecords.map((record) => (
                <div
                  key={record.id}
                  className="border border-pink-100 rounded-lg p-4 hover:bg-pink-50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-pink-800 mb-1">{record.type}</h3>
                      <p className="text-sm text-pink-600">
                        {record.date} • {record.doctor}
                      </p>
                    </div>
                    <span className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
                      {record.type}
                    </span>
                  </div>

                  {/* Measurements */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-3 border border-pink-100">
                      <div className="flex items-center space-x-2">
                        <Scale className="h-4 w-4 text-pink-500" />
                        <div>
                          <p className="text-xs text-pink-600">Weight</p>
                          <p className="font-medium text-pink-800">{record.weight}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-pink-100">
                      <div className="flex items-center space-x-2">
                        <Activity className="h-4 w-4 text-pink-500" />
                        <div>
                          <p className="text-xs text-pink-600">Blood Pressure</p>
                          <p className="font-medium text-pink-800">{record.bloodPressure}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-pink-100">
                      <div className="flex items-center space-x-2">
                        <Thermometer className="h-4 w-4 text-pink-500" />
                        <div>
                          <p className="text-xs text-pink-600">Temperature</p>
                          <p className="font-medium text-pink-800">{record.temperature}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Health Details */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-pink-700 mb-1">Doctor's Notes:</h4>
                      <p className="text-sm text-pink-600">{record.notes}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-pink-700 mb-1">Mental Health:</h4>
                        <p className="text-sm text-pink-600">{record.mentalHealth}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-pink-700 mb-1">Breastfeeding:</h4>
                        <p className="text-sm text-pink-600">{record.breastfeeding}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 border-t border-pink-100">
                      <span className="text-sm text-pink-600 mb-2 sm:mb-0">
                        Next Appointment: {record.nextAppointment}
                      </span>
                      <button className="text-sm text-pink-600 hover:text-pink-800 transition-colors">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Add Record Button */}
        <div className="mt-6 text-center">
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-colors text-white ${
              healthRecordView === "baby" ? "bg-peach-600 hover:bg-peach-700" : "bg-pink-600 hover:bg-pink-700"
            }`}
          >
            Add New {healthRecordView === "baby" ? "Baby" : "Mother"} Health Record
          </button>
        </div>
      </div>
    </div>
  )

  const renderCommunity = () => (
    <div className="space-y-6">
      {/* Community Header */}
      <div className="bg-gradient-to-r from-peach-100 to-pink-100 rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-peach-800 mb-2 flex items-center">
              <Users className="h-6 w-6 mr-2" />
              Parent Community
            </h2>
            <p className="text-peach-600">Connect, share, and learn from other parents</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button className="bg-white text-peach-600 px-4 py-2 rounded-lg border border-peach-200 hover:bg-peach-50 transition-colors font-medium">
              + New Post
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Category Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-peach-100 p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-peach-800 mb-4">Categories</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {communityCategories.map((category) => (
                <button
                  key={category.id}
                  className={`flex items-center space-x-2 p-3 rounded-lg border transition-colors hover:scale-105 ${
                    category.color === "pink"
                      ? "border-pink-200 hover:bg-pink-50"
                      : category.color === "purple"
                        ? "border-purple-200 hover:bg-purple-50"
                        : category.color === "blue"
                          ? "border-blue-200 hover:bg-blue-50"
                          : category.color === "green"
                            ? "border-green-200 hover:bg-green-50"
                            : category.color === "peach"
                              ? "border-orange-200 hover:bg-orange-50"
                              : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <category.icon
                    className={`h-5 w-5 ${
                      category.color === "pink"
                        ? "text-pink-500"
                        : category.color === "purple"
                          ? "text-purple-500"
                          : category.color === "blue"
                            ? "text-blue-500"
                            : category.color === "green"
                              ? "text-green-500"
                              : category.color === "peach"
                                ? "text-orange-500"
                                : "text-gray-500"
                    }`}
                  />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-800">{category.name}</p>
                    <p className="text-xs text-gray-500">{category.count} posts</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Community Posts */}
          <div className="space-y-4">
            {communityPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-sm border border-peach-100 p-4 sm:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-peach-200 rounded-full flex items-center justify-center text-lg">
                      {post.avatar}
                    </div>
                    {post.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    )}
                    {post.expert && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Stethoscope className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                        <p className="font-semibold text-peach-800">{post.author}</p>
                        {post.expert && (
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Expert</span>
                        )}
                        {post.verified && (
                          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Verified</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="bg-peach-100 text-peach-700 text-xs px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-peach-500">{post.time}</span>
                      </div>
                    </div>
                    <p className="text-peach-700 mb-3 leading-relaxed">{post.post}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-peach-500">
                        <button className="flex items-center space-x-1 hover:text-peach-700 transition-colors">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-peach-700 transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.replies}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-peach-700 transition-colors">
                          <span>Share</span>
                        </button>
                      </div>
                      <button className="text-sm text-peach-600 hover:text-peach-800 transition-colors font-medium">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <button className="bg-peach-600 hover:bg-peach-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Load More Posts
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <div className="bg-white rounded-xl shadow-sm border border-peach-100 p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-peach-800 mb-4 flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              Trending Topics
            </h3>
            <div className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 hover:bg-peach-50 rounded-lg transition-colors"
                >
                  <div>
                    <p className="font-medium text-peach-800 text-sm">{topic.topic}</p>
                    <p className="text-xs text-peach-600">{topic.posts} posts</p>
                  </div>
                  <div
                    className={`text-xs px-2 py-1 rounded-full ${
                      topic.trend === "up"
                        ? "bg-green-100 text-green-700"
                        : topic.trend === "down"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {topic.trend === "up" ? "↗" : topic.trend === "down" ? "↘" : "→"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="bg-white rounded-xl shadow-sm border border-peach-100 p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-peach-800 mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Community Guidelines
            </h3>
            <div className="space-y-3 text-sm text-peach-700">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Be respectful and supportive</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Share experiences, not medical advice</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Keep posts relevant to parenting</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>No spam or promotional content</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-peach-100 p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-peach-800 mb-4">Community Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-peach-600">Active Members</span>
                <span className="font-semibold text-peach-800">2,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-peach-600">Posts Today</span>
                <span className="font-semibold text-peach-800">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-peach-600">Expert Contributors</span>
                <span className="font-semibold text-peach-800">23</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderEvents = () => (
    <div className="space-y-4 sm:space-y-6">
      {/* Events Header */}
      <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-white/20 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full translate-y-8 sm:translate-y-12 -translate-x-8 sm:-translate-x-12"></div>
        <div className="relative">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-3 sm:mb-4 flex items-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-200 rounded-full flex items-center justify-center mr-3 sm:mr-4">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600" />
            </div>
            Upcoming Medical Events
          </h2>
          <p className="text-blue-700 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
            Join expert-led workshops, classes, and support groups designed for new parents and families.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/50 rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2">
              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-800">Expert Led</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/50 rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-800">Local Clinics</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/50 rounded-full px-2 sm:px-3 lg:px-4 py-1 sm:py-2">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-800">Family Friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Event Categories Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-4 flex items-center">
          <Activity className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
          Event Categories
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {eventCategories.map((category) => (
            <button
              key={category.id}
              className="flex flex-col items-center p-3 sm:p-4 rounded-lg border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all hover:scale-105 group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <p className="font-semibold text-blue-800 text-xs sm:text-sm text-center">{category.name}</p>
              <p className="text-xs text-blue-600">{category.count} events</p>
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-sm border border-blue-100 p-4 sm:p-6 hover:shadow-lg transition-all hover:scale-[1.02] group"
          >
            {/* Event Image */}
            <div className="relative mb-4 rounded-lg overflow-hidden">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.type === "workshop"
                      ? "bg-green-100 text-green-700"
                      : event.type === "certification"
                        ? "bg-red-100 text-red-700"
                        : event.type === "support_group"
                          ? "bg-purple-100 text-purple-700"
                          : event.type === "class"
                            ? "bg-orange-100 text-orange-700"
                            : event.type === "seminar"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {event.type.replace("_", " ")}
                </span>
              </div>
              <div className="absolute bottom-2 left-2">
                <span className="bg-white/90 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  {event.category}
                </span>
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-blue-600 leading-relaxed">{event.description}</p>
              </div>

              {/* Event Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Stethoscope className="h-4 w-4 text-blue-500" />
                  <span className="text-blue-700">
                    <strong>{event.organizer}</strong> • {event.clinic}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span className="text-blue-700">
                    {event.date} • {event.time}
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-700 leading-tight">{event.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-blue-700">
                    {event.registered}/{event.capacity} registered • {event.requirements}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Registration Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-3 border-t border-blue-100">
                <div className="mb-3 sm:mb-0">
                  <p className="text-lg font-bold text-blue-800">{event.price}</p>
                  <p className="text-xs text-blue-600">{event.capacity - event.registered} spots remaining</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                    Register Now
                  </button>
                  <button className="flex-1 sm:flex-none border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Registration CTA */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Don't Miss Out!</h3>
            <p className="text-blue-100 text-sm sm:text-base">
              Get notified about new events and early registration opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button className="bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors text-sm sm:text-base">
              Subscribe to Updates
            </button>
            <button className="border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-white/10 transition-colors text-sm sm:text-base">
              View Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard()
      case "profile":
        return renderProfile()
      case "notifications":
        return renderNotifications()
      case "vaccination":
        return renderVaccinationSchedule()
      case "doctor":
        return renderCallDoctor()
      case "events":
        return renderEvents()
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
              <button
                onClick={() => setActiveTab("notifications")}
                className="relative hover:scale-110 transition-transform"
              >
                <Bell className="h-6 w-6 text-pink-500" />
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{unreadCount}</span>
                  </div>
                )}
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className="w-8 h-8 bg-gradient-to-r from-pink-200 to-peach-200 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <User className="h-5 w-5 text-pink-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/60 backdrop-blur-sm shadow-sm border-b border-pink-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 sm:space-x-8 overflow-x-auto">
            {[
              { id: "dashboard", label: "Dashboard", icon: HomeIcon },
              { id: "vaccination", label: "Vaccinations", icon: Shield },
              { id: "doctor", label: "Call Doctor", icon: Phone },
              { id: "events", label: "Events", icon: Calendar },
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
                <span className="hidden sm:inline">{tab.label}</span>
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
            <p className="text-sm text-pink-600">Made with ❤️ for caring parents • BabyCare Dashboard </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

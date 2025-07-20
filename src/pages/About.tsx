import React, { useState } from "react";
import {
  Heart,
  Users,
  Globe,
  Award,
  Target,
  Lightbulb,
  Shield,
  Leaf,
  TrendingUp,
  MapPin,
  Calendar,
  ChevronRight,
  Play,
  CheckCircle,
} from "lucide-react";

const About = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Every decision we make starts with our customers in mind. Your satisfaction drives our innovation.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "We believe in transparent business practices and secure transactions that protect your data.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Committed to eco-friendly practices and supporting brands that care about our planet.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuously improving our platform with cutting-edge technology and fresh ideas.",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const team = [
    {
      name: "SPT Pheaktra",
      role: "CEO & Founder",
      bio: "Former tech executive with 15+ years in e-commerce. Passionate about creating exceptional customer experiences.",
      image: "SPT",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "SOT SOPHEAKTRA",
      role: "CTO",
      bio: "Technology leader who built scalable platforms for millions of users. Believes in the power of innovation.",
      image: "SPT",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const stats = [
    { number: "2M+", label: "Happy Customers", icon: Users },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "99.9%", label: "Uptime", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Born from a passion to make online shopping more personal,
              sustainable, and delightful for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Founded in 2019</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Based in San Francisco</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Award-winning platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Beginning
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                It started with a simple frustration. Sarah, our founder, was
                tired of impersonal online shopping experiences that treated
                customers like numbers. She envisioned a platform where
                technology meets human touch, where every interaction feels
                personal and meaningful.
              </p>
              <p>
                In 2019, with a small team of passionate individuals, we set out
                to build something different. Not just another ecommerce
                platform, but a community where customers, brands, and
                technology work together to create exceptional experiences.
              </p>
              <p>
                Today, we're proud to serve millions of customers worldwide, but
                our mission remains the same: to make online shopping more
                personal, sustainable, and joyful for everyone.
              </p>
            </div>
            <button className="mt-8 inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors transform hover:scale-105">
              <Play className="w-5 h-5" />
              Watch Our Story
            </button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white text-center">
                <Target className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                <p className="text-indigo-100">
                  To revolutionize e-commerce by creating meaningful connections
                  between customers and the products they love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we
              serve our community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Values List */}
            <div className="space-y-4">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeValue === index ? "transform scale-105" : ""
                    }`}
                    onClick={() => setActiveValue(index)}
                  >
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 ${
                        activeValue === index
                          ? "border-indigo-500 shadow-indigo-500/20"
                          : "border-transparent hover:border-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${value.color} text-white`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {value.title}
                          </h3>
                          <ChevronRight
                            className={`w-5 h-5 text-gray-400 transform transition-transform ${
                              activeValue === index ? "rotate-90" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Value Detail */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10">
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${values[activeValue].color} text-white mb-6`}
              >
                {React.createElement(values[activeValue].icon, {
                  className: "w-8 h-8",
                })}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {values[activeValue].title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {values[activeValue].description}
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Implemented in every customer interaction
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Guides our product development
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Shapes our company culture
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeTeamMember === index
                    ? "transform scale-105"
                    : "hover:transform hover:scale-102"
                }`}
                onClick={() => setActiveTeamMember(index)}
              >
                <div
                  className={`bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border-2 ${
                    activeTeamMember === index
                      ? "border-indigo-500 shadow-indigo-500/20"
                      : "border-transparent"
                  }`}
                >
                  <div
                    className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-white text-2xl font-bold`}
                  >
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Team Member Bio */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center">
            <div
              className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${team[activeTeamMember].color} flex items-center justify-center text-white text-3xl font-bold`}
            >
              {team[activeTeamMember].image}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {team[activeTeamMember].name}
            </h3>
            <p className="text-indigo-600 font-medium text-lg mb-4">
              {team[activeTeamMember].role}
            </p>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {team[activeTeamMember].bio}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">By the Numbers</h2>
            <p className="text-xl text-blue-100">
              Our impact in numbers tells our story
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center transform hover:scale-110 transition-transform duration-300"
                >
                  <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-lg">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of our story as we continue to innovate and create amazing
            shopping experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors transform hover:scale-105">
              Start Shopping
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 transition-colors transform hover:scale-105">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

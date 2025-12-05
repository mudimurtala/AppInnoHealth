import { motion } from "framer-motion";
import { Heart, Activity, Database, ChartBar } from "lucide-react";
import { ImageWithFallback } from "../ui/image-with-fallback";

// Quick service cards
const quickServices = [
  { icon: Heart, label: "Primary Care", iconBg: "bg-inno-pulse" },
  { icon: Activity, label: "Specialized Care", iconBg: "bg-inno-vivid" },
  { icon: Database, label: "Health Informatics", iconBg: "bg-inno-steel" },
  { icon: ChartBar, label: "Analytics & Insights", iconBg: "bg-inno-deep" }
];

// Blog/News cards data
const newsCards = [
  {
    src: "https://images.unsplash.com/photo-1718010588689-9806ce642d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZWxkZXJseSUyMHBhdGllbnQlMjBjYXJlfGVufDF8fHx8MTc2MDc1Mzg4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Community Health Outreach",
    title: "Community Health Outreach",
    desc: "Providing accessible healthcare services to underserved communities across Kano State"
  },
  {
    src: "https://images.unsplash.com/photo-1632054229892-21103035a686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZG9jdG9yJTIwcGF0aWVudHxlbnwxfHx8fDE3NjAxNzgyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Senior Care Services",
    title: "Quality Patient Care",
    desc: "Delivering exceptional medical consultations and treatments to families in Katsina communities"
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMEFmcmljYXxlbnwxfHx8fDE3NjAxNzgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "AI-Powered Disease Detection",
    title: "AI-Powered Healthcare Solutions",
    desc: "Implementing cutting-edge technology to revolutionize healthcare delivery in Northern Nigeria"
  },
  {
    src: "https://images.unsplash.com/photo-1684607632041-32d729cdee35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWVkaWNhbCUyMGNsaW5pY3xlbnwxfHx8fDE3NjAxNzgyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Maternal Health Program",
    title: "Modern Medical Facilities",
    desc: "State-of-the-art diagnostic and treatment centers serving the people of Katsina"
  },
  {
    src: "https://images.unsplash.com/photo-1650153265880-889a8b60a10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhJTIwbWVkaWNhbCUyMG91dHJlYWNofGVufDF8fHx8MTc2MDE3ODI4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Smart Health Records",
    title: "Telemedicine Services",
    desc: "Bridging the gap in healthcare access through remote consultations and digital health services"
  },
  {
    src: "https://images.unsplash.com/photo-1696861308115-54a5e5a134b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhhcm1hY2V1dGljYWwlMjBzZXJ2aWNlcyUyMGluJTIwbm9ydGhlcm4lMjBuaWdlcmlhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    alt: "Telemedicine Access",
    title: "Pharmaceutical Services",
    desc: "Ensuring access to quality medications and pharmaceutical care for all residents"
  }
];

export default function TransformingHealthcare() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Transforming Healthcare in Nigeria
          </h2>
          <p className="text-gray-600">
            Witness the positive change we're bringing to communities across Nigeria 
            through innovative healthcare solutions and compassionate service delivery.
          </p>
        </div>

        {/* Quick Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {quickServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-brand-md text-center hover:shadow-brand-xl hover:scale-105 border border-transparent hover:border-inno-care transition-all duration-300 transform"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm">{service.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* News/Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsCards.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-brand-md overflow-hidden hover:shadow-brand-xl hover:scale-105 border border-transparent hover:border-inno-care transition-all duration-300 transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ImageWithFallback 
                src={card.src}
                alt={card.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="mb-2">{card.title}</h4>
                <p className="text-sm text-text-light">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

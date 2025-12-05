import { motion } from "framer-motion";
import { Activity, Heart, Users, Database, Shield, TrendingUp } from "lucide-react";

// Service card data
const services = [
  {
    icon: Activity,
    title: "Laboratory, Biomedical & Diagnostic Services",
    description: "State-of-the-art diagnostic equipment, biomedical solutions, and comprehensive medical testing for accurate analysis and research.",
    iconBg: "bg-inno-care",
    iconColor: "text-inno-pulse"
  },
  {
    icon: Heart,
    title: "Healthcare Consultancy Services",
    description: "Expert guidance on healthcare system optimization, technology integration, and operational excellence.",
    iconBg: "bg-inno-vivid/10",
    iconColor: "text-inno-vivid"
  },
  {
    icon: Users,
    title: "Customer Experience Services",
    description: "Enjoy good customer service experience with us, as we always do our best to make you happier. You are the most valuable asset we have, and we must serve you well.",
    iconBg: "bg-inno-care",
    iconColor: "text-inno-pulse"
  },
  {
    icon: Database,
    title: "Pharmaceutical Drugs & E-Pharmacy",
    description: "High-quality pharmaceutical products and convenient online pharmacy services meeting international standards for patient care.",
    iconBg: "bg-inno-vivid/10",
    iconColor: "text-inno-vivid"
  },
  {
    icon: Shield,
    title: "Telemedicine Services",
    description: "Remote healthcare consultations and digital health platforms connecting patients with medical professionals across Africa.",
    iconBg: "bg-inno-care",
    iconColor: "text-inno-pulse"
  },
  {
    icon: TrendingUp,
    title: "High-Tech AI Healthcare Solutions",
    description: "Cutting-edge artificial intelligence systems for diagnostics, patient management, and data analysis.",
    iconBg: "bg-inno-vivid/10",
    iconColor: "text-inno-vivid"
  }
];

export default function HealthcareSolutions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Comprehensive Healthcare Solutions
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-brand-md hover:shadow-brand-xl hover:scale-105 border border-transparent hover:border-inno-care transition-all duration-300 transform"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h3 className="mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

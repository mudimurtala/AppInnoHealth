import { motion } from "framer-motion";
import { Smartphone, Calendar, FileText, MessageSquare } from "lucide-react";

// Feature data
const features = [
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "Access healthcare services anytime, anywhere",
    iconBg: "bg-inno-pulse"
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Book appointments with ease",
    iconBg: "bg-inno-vivid"
  },
  {
    icon: FileText,
    title: "Digital Records",
    description: "Secure and accessible health records",
    iconBg: "bg-inno-steel"
  },
  {
    icon: MessageSquare,
    title: "24/7 Support",
    description: "Round-the-clock healthcare assistance",
    iconBg: "bg-inno-deep"
  }
];

export default function FingertipsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Healthcare at Your Fingertips
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="text-center bg-white rounded-2xl shadow-brand-md p-6 hover:shadow-brand-xl hover:scale-105 border border-transparent hover:border-inno-care transition-all duration-300 transform"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={`w-16 h-16 ${feature.iconBg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

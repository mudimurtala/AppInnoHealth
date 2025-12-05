import { Heart, ChartBar, Shield, UserCheck, TrendingUp, Activity } from "lucide-react";
import { ImageWithFallback } from "../ui/image-with-fallback";

// Excellence features data
const excellenceFeatures = [
  {
    icon: Heart,
    title: "Innovation-Driven",
    description: "Pioneering next-generation healthcare technologies tailored for African markets.",
    iconBg: "bg-inno-pulse"
  },
  {
    icon: ChartBar,
    title: "Uncompromising Quality",
    description: "International standards with rigorous quality control and certification",
    iconBg: "bg-inno-vivid"
  },
  {
    icon: Shield,
    title: "Reliable & Trusted",
    description: "Dependable solutions backed by comprehensive support and maintenance",
    iconBg: "bg-inno-steel"
  },
  {
    icon: UserCheck,
    title: "Local Expertise",
    description: "Deep understanding of African healthcare challenges and requirements",
    iconBg: "bg-inno-pulse"
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description: "Proven track record of improving healthcare outcomes across the continent",
    iconBg: "bg-inno-deep"
  },
  {
    icon: Activity,
    title: "Rapid Deployment",
    description: "Efficient implementation processes minimizing downtime and disruption",
    iconBg: "bg-inno-vivid"
  }
];

export default function PartnerExcellence() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Your Partner in Healthcare Excellence
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-8">
            {excellenceFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-2">{feature.title}</h4>
                    <p className="text-sm text-text-light">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image */}
          <div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1679134015772-943d09a750ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGljYWwlMjBsYWJvcmF0b3J5JTIwd2l0aCUyMGFuJTIwYWZyaWNhbiUyMGxhYiUyMHByYWN0aXRpb25lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=300"
              alt="Healthcare Excellence"
              className="w-full h-full min-h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

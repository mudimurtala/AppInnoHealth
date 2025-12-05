import { ImageWithFallback } from "../ui/image-with-fallback";

export default function LeadingInnovation() {
  return (
    <section className="py-16 bg-inno-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMGFmcmljYXxlbnwxfHx8fDE3NTk1MDg4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Healthcare professionals"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">
              Leading Healthcare Innovation in Africa
            </h2>
            <p className="text-gray-600 mb-6">
              InnoHealth Africa Technology develops, manufactures, and supplies healthcare 
              solutions that address the unique challenges facing African healthcare systems. 
              We combine global expertise with local knowledge to deliver impactful, 
              sustainable solutions.
            </p>
            <p className="text-gray-600">
              Our comprehensive suite of digital health solutions also empowers healthcare 
              providers to deliver better outcomes while reducing costs and improving efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

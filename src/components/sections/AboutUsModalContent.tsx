import React from "react";

interface AboutUsModalContentProps {
  // Optionally accept a close handler for accessibility
  onClose?: () => void;
}


export const AboutUsModalContent: React.FC<AboutUsModalContentProps> = ({ onClose }) => {
  return (
    <div
      className="w-full max-w-3xl bg-[#0B0F39] shadow-2xl p-8 text-white relative mx-auto"
      style={{
        minHeight: '60vh',
        maxHeight: '80vh',
        overflowY: 'auto',
        border: '2px solid rgba(255, 255, 255, 0.25)',
        borderRadius: '24px',
        boxSizing: 'border-box',
        background: 'linear-gradient(135deg, #0B0F39 80%, #00E5CC11 100%)',
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .about-modal-content p,
          .about-modal-content li {
            font-size: 0.85rem !important;
          }
          .about-modal-content h2 {
            font-size: 1.3rem !important;
          }
          .about-modal-content h3 {
            font-size: 1.08rem !important;
          }
        }
      `}</style>
      <div className="about-modal-content">
      <h2 className="text-4xl font-extrabold mb-8 text-center tracking-tight" style={{ color: '#00E5CC', letterSpacing: '0.01em' }}>About InnoHealth Africa</h2>
      <section className="mb-10">
        <p className="text-lg leading-relaxed mb-3 font-medium">
          <span className="font-bold text-[#00E5CC]">InnoHealth Africa Technology Ltd</span> is a registered social enterprise in Nigeria focused on transforming healthcare delivery in underserved communities through technology, data, and innovation.
        </p>
        <p className="text-base leading-relaxed mb-2">
          Founded in early 2025 and registered with the Corporate Affairs Commission (CAC) (RC: 8321942), InnoHealth Africa works at the intersection of public health and digital innovation, with a strong focus on maternal and child health outcomes in Northern Nigeria.
        </p>
        <p className="text-base leading-relaxed italic text-[#B5CCFF]">
          We believe that access to quality healthcare should not depend on location, income, or circumstance — and that technology can help bridge this gap.
        </p>
      </section>
      <SectionDivider>What We Do</SectionDivider>
      <section className="mb-10">
        <p className="text-base leading-relaxed mb-3">
          Our work is centred on building practical, technology-driven solutions that strengthen public health systems and improve lives. We focus on:
        </p>
        <ul className="list-none pl-0 text-base leading-relaxed mb-3">
          <ModernBullet>Reducing maternal mortality</ModernBullet>
          <ModernBullet>Improving child nutrition and survival</ModernBullet>
          <ModernBullet>Strengthening the digital capacity of public health workers</ModernBullet>
          <ModernBullet>Expanding access to telemedicine and remote consultations</ModernBullet>
          <ModernBullet>Supporting data-driven health planning and decision-making</ModernBullet>
        </ul>
        <p className="text-base leading-relaxed text-[#B5CCFF]">
          Through a mix of digital tools, training programmes, and partnerships, we support health facilities, communities, and institutions to deliver better care.
        </p>
      </section>
      <SectionDivider>Our Approach</SectionDivider>
      <section className="mb-10">
        <p className="text-base leading-relaxed mb-2">
          InnoHealth Africa operates using a hybrid social enterprise model — combining revenue-generating digital health services with donor-funded programmes and community interventions.
        </p>
        <p className="text-base leading-relaxed mb-2">
          This model allows us to:
        </p>
        <ul className="list-none pl-0 text-base leading-relaxed mb-3">
          <ModernBullet>Build sustainable health technology solutions</ModernBullet>
          <ModernBullet>Implement high-impact public health programmes</ModernBullet>
          <ModernBullet>Remain accountable, transparent, and community-focused</ModernBullet>
        </ul>
        <p className="text-base leading-relaxed text-[#B5CCFF]">
          We work closely with governments, NGOs, health facilities, and development partners to design solutions that are scalable, inclusive, and locally relevant.
        </p>
      </section>
      <SectionDivider>Our Vision</SectionDivider>
      <section className="mb-10">
        <p className="text-base leading-relaxed text-[#B5CCFF]">
          To build an Africa where technology improves the quality, accessibility, and equity of healthcare for mothers, children, and communities.
        </p>
      </section>
      <SectionDivider>Our Mission</SectionDivider>
      <section className="mb-10">
        <p className="text-base leading-relaxed text-[#B5CCFF]">
          To strengthen public health delivery across Nigeria and Africa by using digital health innovation, data systems, and capacity building to reduce maternal and child mortality.
        </p>
      </section>
      <SectionDivider>Our Values</SectionDivider>
      <section className="mb-10">
        <p className="text-base leading-relaxed mb-3">Everything we do is guided by a clear set of values:</p>
        <ul className="list-none pl-0 text-base leading-relaxed mb-3">
          <ModernBullet><span className="font-semibold">Integrity</span> – Accountability and transparency in our work</ModernBullet>
          <ModernBullet><span className="font-semibold">Equity</span> – Inclusive access to health and technology</ModernBullet>
          <ModernBullet><span className="font-semibold">Innovation</span> – Applying modern tools to solve real health challenges</ModernBullet>
          <ModernBullet><span className="font-semibold">Capacity Building</span> – Empowering health workers with digital skills</ModernBullet>
          <ModernBullet><span className="font-semibold">Collaboration</span> – Working with communities, governments, and partners</ModernBullet>
          <ModernBullet><span className="font-semibold">Sustainability</span> – Building systems that last beyond individual projects</ModernBullet>
        </ul>
      </section>
      <SectionDivider>Where We Work</SectionDivider>
      <section className="mb-10">
        <p className="text-base leading-relaxed text-[#B5CCFF]">
          InnoHealth Africa is headquartered in Kaduna, Nigeria, with additional operations in Katsina State, supporting programmes across Northern Nigeria and beyond.
        </p>
      </section>
      <SectionDivider>Looking Ahead</SectionDivider>
      <section className="mb-2">
        <ul className="list-none pl-0 text-base leading-relaxed mb-3">
          <ModernBullet>Expand telemedicine services integrated with national health insurance</ModernBullet>
          <ModernBullet>Develop training and certification platforms for digital public health skills</ModernBullet>
          <ModernBullet>Strengthen partnerships with local and international organisations</ModernBullet>
          <ModernBullet>Become a regional leader in data-driven health innovation</ModernBullet>
        </ul>
      </section>
      </div>
    </div>
  );
};

// Section divider with centered heading
const SectionDivider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full flex items-center justify-center my-12">
    <div className="flex-1 h-1 rounded-full" style={{ background: '#FFD600', opacity: 1 }} />
    <span className="mx-8 text-3xl font-extrabold tracking-wide text-center" style={{ color: '#00E5CC', whiteSpace: 'nowrap', letterSpacing: '0.01em', minWidth: '200px', padding: '0.5rem 0' }}>{children}</span>
    <div className="flex-1 h-1 rounded-full" style={{ background: '#FFD600', opacity: 1 }} />
  </div>
);

const ModernBullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start mb-2">
    <span className="mt-2 text-lg font-bold mr-4" style={{ color: '#00E5CC', minWidth: '1.5em', display: 'inline-block', textAlign: 'center' }}>•</span>
    <span>{children}</span>
  </li>
);

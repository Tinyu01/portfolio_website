import React from 'react';
import Card, { CardContent } from '../components/ui/Card';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillsSection from '../components/SkillsSection';
import CertificationsGallery from '../components/CertificationsGallery';

const AboutPage = () => {
  return (
    <div className="space-y-12">
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="/api/placeholder/400/400"
              alt="Masingita Ottis Maluleke"
              className="rounded-lg w-full max-w-md mx-auto"
            />
            <div>
              <h1 className="text-3xl font-bold mb-4">About Me</h1>
              <p className="text-lg text-muted-foreground">
                I'm a passionate Software Engineer and Designer with expertise in full-stack development,
                UX design, and project management. Based in Roodepoort, I specialize in creating
                scalable web applications and intuitive user experiences.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <SkillsSection />
      <ExperienceTimeline />
      <CertificationsGallery />
    </div>
  );
};

export default AboutPage;
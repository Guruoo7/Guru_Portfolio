import HeroSection from '../sections/HeroSection'
import SkillsSection from '../sections/SkillsSection'
import WorkExperience from '../sections/WorkExperience'
import ProjectsSection from '../sections/ProjectsSection'
import ProfilesSection from '../sections/ProfilesSection'
import ContactSection from '../sections/ContactSection'

function SinglePage() {
    return (
        <main className="single-page">
            <HeroSection />
            <SkillsSection />
            <WorkExperience />
            <ProjectsSection />
            <ProfilesSection />
            <ContactSection />
        </main>
    )
}

export default SinglePage

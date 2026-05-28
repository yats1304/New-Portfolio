import { ProjectHero } from "./ProjectHero"
import { ResultsSection } from "./ResultsSection"
import { ApproachSection } from "./ApproachSection"
import { LargeReview } from "../LargeReview"
import { MoreProjectsSection } from "./MoreProjectsSection"
import { ProjectData } from "../../data/project-data"
import { RecruiterContact } from "../RecruiterContact"


const ProjectDisplay: React.FC<{ projectData: ProjectData }> = ({ projectData }) => {
  return (
    <main className="overflow-hidden">
      <script
        id="id-project-schema"
        type="application/ld+json"
      />
      <ProjectHero {...projectData.hero} />
      <ResultsSection analyticCards={projectData.results} />
      {projectData.review && <LargeReview {...projectData.review} />}
      <MoreProjectsSection />
      <RecruiterContact />
    </main>
  )
}

export default ProjectDisplay

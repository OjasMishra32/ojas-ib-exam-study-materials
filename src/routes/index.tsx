import { createFileRoute } from '@tanstack/react-router'
import { CentralIcon } from "@central-icons-react/all";
import { centralIconPropsFilled20 } from "@/lib/icon-props";

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-2 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 lg:pt-12">
      <h1 className="text-4xl font-bold font-manrope tracking-tight text-foreground">
        <span className="text-accent-pirateib">Ojas&apos;s</span> Dojo: IB study materials, <span className="text-accent-pirateib">free for everyone</span>.
      </h1>
      <p className="text-muted-foreground">
        Ojas&apos;s Dojo brings together IB notes, questions, cheatsheets, flashcards, and coursework resources in one
        free study archive.
        If you have any questions, suggestions, or ideas for the future of this
        website, please{' '}
        <a href="https://discord.pirateib.sh/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">
          join our Discord
        </a>.
      </p>

      <h1 className="text-4xl font-bold font-manrope tracking-tight text-foreground mt-8">
        <span className="text-accent-pirateib">Contributions</span> and roadmap
      </h1>
      <p className="text-muted-foreground">
        This project is being cleaned up into Ojas&apos;s Dojo, a low-friction IB resource archive that is easier to browse,
        maintain, and keep free.
        We are open to contributions, so if you are interested, please join our <a href="https://discord.pirateib.sh/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Discord</a> and let us know.
        This includes improving resource quality, source attribution, UI polish, and any tools that make studying less painful.

        <br/><br/>The current roadmap goals are below:
        <ul className="list-disc list-inside">
          <li>Additional videos</li>
          <li>Additional lessons</li>
          <li>Additional exercises</li>
          <li>Additional vocabulary practice</li>
          <li>Better source attribution and cleanup</li>
          <li>Free AI for grading/etc.</li>
          <li>Any algorithms for tools that Ojas's Dojo provides</li>
        </ul>

        <br/>If you like designing UI, or find any problems with the UI of this website, let us know. We are making Ojas's Dojo easier to use without the cost.
      </p>
    </div>
  )

}

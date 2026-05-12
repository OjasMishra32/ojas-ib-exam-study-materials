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
        <span className="text-accent-pirateib">PirateIB</span> Dojo: AI slop, <span className="text-accent-pirateib">but free for everyone</span>.
      </h1>
      <p className="text-muted-foreground">
        If you're here, you already know{' '}
        <a href="https://pirateib.sh" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline" >
          PirateIB
        </a>{' '}
        is the best place to get all your notes, questions, and resources to guide you through your IB journey. This
        website is Ojas's Dojo, a free IB study archive with notes, questions, cheatsheets, flashcards, and more.
        If you have any questions, suggestions, or ideas for the future of this
        website, please{' '}
        <a href="https://discord.pirateib.sh/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">
          join our Discord
        </a>.
      </p>

      <h1 className="text-4xl font-bold font-manrope tracking-tight text-foreground mt-8">
        <span className="text-accent-pirateib">Contributions</span> to the project
      </h1>
      <p className="text-muted-foreground">
        This project is made by <span className="text-foreground">notblack</span> and maintained by <span className="text-foreground">Kale</span> from <span className="text-foreground">pirateIB team</span>.
        If you are interested in helping, this codebase (yes, everything) is open source on <a href="https://git.pirateib.su/pirateIB/rdojo" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">PirateIB Git</a>.
        We are open to contributions, so if you are interested, please join our <a href="https://discord.pirateib.sh/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Discord</a> and let us know.
        This includes both <span className="text-foreground">donating accounts</span>, and writing a scraper which works competently (preferrably without a cookie or authentication).

        <br/><br/>The current roadmap goals is below:
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

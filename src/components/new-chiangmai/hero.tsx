import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const articleContent = `
<div>
<p>We are excited to announce the upcoming research-focused event, <strong>Next Generation Proof System</strong>, taking place in <strong>Chiang Mai, Thailand</strong> from <strong>October 20 to November 10, 2024</strong>. This initiative aims to explore the rapidly evolving landscape of zero-knowledge (ZK) technologies and their applications within the blockchain domain.</p>
<h3 id="heading-event-overview">Event Overview</h3>
<p>The event will accommodate <strong>15-20 participants</strong> who will engage in collaborative research on various topics related to next-generation proof systems. Participants will start by examining the current ZK landscape and then select individual research topics of interest, working closely with mentors to define specific research objectives. The culmination of this three-week program will be a public demonstration of research findings.</p>
<h3 id="heading-logistics">Logistics</h3>
<p>Participants will enjoy <strong>free accommodation</strong> near downtown Chiang Mai, sharing hotel rooms (two people per room, each with a separate bed).</p>
<h3 id="heading-potential-research-topics">Potential Research Topics</h3>
<p>Participants can choose from a variety of intriguing topics, including:</p>
<ul>
<li>
<p>Linear Coding / Tensor IOP</p>
</li>
<li>
<p>Sumcheck and GKR Protocols</p>
</li>
<li>
<p>Folding Scheme</p>
</li>
<li>
<p>Small Field Optimization</p>
</li>
<li>
<p>ZKVM Architecture and Optimization</p>
</li>
<li>
<p>Lookup Arguments</p>
</li>
<li>
<p>Bitcoin and Zero-Knowledge Proofs</p>
</li>
</ul>
<h3 id="heading-program-structure">Program Structure</h3>
<p><strong>Week 1:</strong></p>
<ul>
<li>
<p>Mentors will share insights on the ZK landscape.</p>
</li>
<li>
<p>Participants will identify their research goals, read relevant papers, and share their findings.</p>
</li>
<li>
<p>Research objectives will be tailored to individual experience levels:</p>
<ul>
<li>
<p>Beginners can focus on understanding specific protocols.</p>
</li>
<li>
<p>Experienced participants may explore new areas or deepen their existing knowledge.</p>
</li>
</ul>
</li>
</ul>
<p><strong>Week 2:</strong></p>
<ul>
<li>Participants will form teams to tackle their research goals and share progress updates.</li>
</ul>
<p><strong>Week 3:</strong></p>
<ul>
<li>Completion of research objectives and preparation for the demo presentation.</li>
</ul>
<h3 id="heading-participant-requirements">Participant Requirements</h3>
<p>We hope to attract individuals who:</p>
<ul>
<li>
<p>Have experience in developing ZKP circuits or cryptographic protocols.</p>
</li>
<li>
<p>Are familiar with at least one SNARK proof system.</p>
</li>
<li>
<p>Have read and can discuss a scholarly paper on SNARKs.</p>
</li>
</ul>
<h3 id="heading-application-process">Application Process</h3>
<p>Interested candidates can apply through the following link: <a href="https://tally.so/r/wookBe" rel="noreferrer" target="_blank">Application Link</a>.</p>
<h3 id="heading-partners">Partners</h3>
<p>This event is hosted in collaboration with <strong>Invisible Garden</strong>, a cultural pop-up city in Chiang Mai that fosters synergy between technology, culture, and community, and <strong>Secbit Labs</strong>, which focuses on developing infrastructure and security tools for the era of encrypted information, with a particular emphasis on zero-knowledge proof theory and technology.</p>
<p>Join us for this unique opportunity to delve into the future of zero-knowledge proof systems and contribute to the advancement of this exciting field!</p></div>
`;

export const Hero = (props: React.ComponentProps<"div">) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative" {...props}>
        <StaticImage
          alt="Coset Chiangmai event poster"
          src="./images/poster.png"
          className="w-full lg:h-[920px] object-contain"
          objectFit="contain"
        />

        {/* <div className="flex flex-col pt-14 justify-center items-center text-center absolute bottom-8">
          <a
            href="https://tally.so/r/wookBe"
            target="_blank"
            rel="external"
            className="inline-flex py-4 px-10 uppercase text-xs font-semibold bg-web-black text-white rounded-sm border border-web-black mt-6 hover:opacity-80 transition-colors"
          >
            Apply to join
          </a>
        </div> */}
      </div>

      <section className="py-8 px-4 md:px-0 md:py-20 flex flex-col space-y-12 justify-center items-center bg-web-paper">
        <article
          className="prose prose-xl lg:prose-3xl max-w-5xl"
          dangerouslySetInnerHTML={{
            __html: articleContent,
          }}
        />
      </section>
    </>
  );
};

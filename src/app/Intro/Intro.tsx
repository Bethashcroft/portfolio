"use client";

const INTRO_WORDING = `
Hello! I'm Beth, a passionate software developer based in the vibrant tech scene of Greater Manchester. With two years of hands-on experience, I've honed my skills in a diverse range of technologies that are crucial in modern software development.

My expertise includes:
• C# for robust backend development
• SQL for efficient database management
• JavaScript for dynamic front-end experiences
• Azure DevOps for streamlined CI/CD pipelines

I'm also well-versed in quality assurance, with experience in both unit testing using Xunit and comprehensive manual testing. This ensures that the software I develop is not only functional but also reliable and user-friendly.

I'm always eager to take on new challenges and expand my skill set. Whether it's diving into a complex problem or collaborating on innovative projects, I bring enthusiasm and a keen eye for detail to every task.

If you're looking for a dedicated developer who can bring your ideas to life or strengthen your team, I'd love to chat! Feel free to reach out via email, and let's discuss how we can work together to create something amazing.
`;

const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl">About me</h2>
      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <img
            src="/me.JPG"
            alt="a photo of Beth"
            className="h-full w-[300px] rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>
            Hello! I&apos;m Beth, a passionate software developer based in the
            vibrant tech scene of Greater Manchester. With two years of hands-on
            experience, I&apos;ve honed my skills in a diverse range of
            technologies that are crucial in modern software development.
          </p>
          <div>
            <p>My expertise includes:</p>
            <ul className="list-disc pl-5">
              <li>C# for robust backend development</li>
              <li>SQL for efficient database management</li>
              <li>JavaScript for dynamic front-end experiences</li>
              <li>Azure DevOps for streamlined CI/CD pipelines</li>
            </ul>
          </div>
          <p>
            I&apos;m also well-versed in quality assurance, with experience in
            both unit testing using Xunit and comprehensive manual testing. This
            ensures that the software I develop is not only functional but also
            reliable and user-friendly.
          </p>
          <p>
            I&apos;m always eager to take on new challenges and expand my skill
            set. Whether it&apos;s diving into a complex problem or
            collaborating on innovative projects, I bring enthusiasm and a keen
            eye for detail to every task.
          </p>
          <p>
            If you&apos;re looking for a dedicated developer who can bring your
            ideas to life or strengthen your team, I&apos;d love to chat! Feel
            free to reach out via email, and let&apos;s discuss how we can work
            together to create something amazing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;

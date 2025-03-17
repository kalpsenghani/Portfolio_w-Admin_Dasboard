import React from "react";

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-start bg-glassmorphism bg-no-repeat
        py-16 md:min-h-[calc(100vh-5rem)]"
    >
      <div className="w-full text-center mb-12">
        <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl mb-6">
          Professional Certifications
        </h2>
        <p className="my-4 text-lightColor max-w-3xl mx-auto">
          Showcasing my technical expertise and professional achievements through industry-recognized certifications.
        </p>
      </div>

      <div className="max-w-screen-2xl w-full px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-semibold text-secondaryColor mb-2">IBM Data Science Professional Certificate</h3>
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base">
    I completed the IBM Data Science Professional Certificate program on Coursera, where I:
    <ul className="list-disc pl-5 space-y-1">
        <li>Mastered data science methodologies, tools, and Python for AI and data science.</li>
        <li>Developed expertise in SQL database management, data visualization, and data analysis using various tools.</li>
        <li>Applied machine learning techniques to build predictive models and completed a great capstone project.</li>
    </ul>
    This program has equipped me with the technical skills to effectively analyze complex data and build data-driven solutions.
</p>

            <a
              href="https://www.credly.com/badges/6366a28e-790a-4f83-9825-308fd4b1ed07/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-secondaryColor px-8 py-2 text-sm font-medium text-darkColor
                transition duration-300 hover:bg-secondaryLight hover:text-lightColor focus:outline-none focus:ring
                focus:ring-yellow-400"
            >
              View Certificate
            </a>
          </article>

          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-semibold text-secondaryColor mb-2">Google Data Analytics Certificate</h3>
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base">
    I completed the Google Data Analytics Certificate, where I:
    <ul className="list-disc pl-5 space-y-1">
        <li>Gained an immersive understanding of data analysis practices and processes used by data analysts.</li>
        <li>Developed skills in data cleaning, analysis, and visualization using tools like spreadsheets, SQL, R, and Tableau.</li>
        <li>Mastered data cleaning, analysis, and visualization to deliver actionable insights through dashboards and reports.</li>
    </ul>
    It has strengthened my ability to clean, analyze, and visualize complex data, preparing me to provide data-driven insights in a professional setting.
</p>

            <a
              href="https://coursera.org/share/78df71ebb72a9bd8164067f3d98a8dd4"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-secondaryColor px-8 py-2 text-sm font-medium text-darkColor
                transition duration-300 hover:bg-secondaryLight hover:text-lightColor focus:outline-none focus:ring
                focus:ring-yellow-400"
            >
              View Certificate
            </a>
          </article>

          <article
            className="flex flex-col min-h-24 items-center justify-start gap-4 rounded-lg border border-lightColor
              bg-gray-50/[0.04] bg-center px-4 py-6 backdrop-blur-md md:min-h-40"
          >
            <h3 className="text-xl font-semibold text-secondaryColor mb-2">Full Stack Development</h3>
            <p className="text-sm leading-6 text-gray-300 text-center lg:text-left lg:text-base">
    I completed a Frontend Development Certificate, where I:
    <ul className="list-disc pl-5 space-y-1">
        <li>Mastered front-end technologies like HTML, CSS, JavaScript, and React.js to build dynamic, user-friendly web applications.</li>
        <li>Developed responsive and accessible websites, ensuring seamless user experiences across devices and platforms.</li>
        <li>Utilized modern web frameworks and libraries to enhance application performance and maintainability.</li>
    </ul>
    This certification has equipped me with the essential skills to create interactive and visually appealing front-end solutions.
</p>

            <a
              href="/certi.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-secondaryColor px-8 py-2 text-sm font-medium text-darkColor
                transition duration-300 hover:bg-secondaryLight hover:text-lightColor focus:outline-none focus:ring
                focus:ring-yellow-400"
            >
              View Certificate
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

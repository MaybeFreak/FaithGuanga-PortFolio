import "./Resume.css";

const Resume = () => {
  return (
    <main className="resume">
      <div id="Resume">
        <div id="ResumeLeft">
          <h2>EDUCATION</h2>
          <div>
            <p>B.A. Writing, Literature, and Publishing: Publishing</p>
            <em>
              Emerson College, Boston MA <br /> December 2023 (expected)
            </em>
          </div>
          <div>
            <p>Inbound Marketing Certification</p>
            <em>HubSpot Academy, June 2023</em>
          </div>
          <div>
            <p>Comics: Art in Relationship Certification</p>
            <em>Kadenze, August 2017</em>
          </div>
          <h2>TECHNICAL SKILLS</h2>
          <p>
            Microsoft Office Programs <em>(Word, PowerPoint, and Excel)</em>
          </p>
          <p>
            Adobe Creative Suite{" "}
            <em>
              (Photoshop, InDesign, Illustrator, Premiere Rush, and Audition)
            </em>
          </p>
          <p>
            Google Applications{" "}
            <em>(Drive, Docs, Slides, Sheets, and Forms)</em>
          </p>
          <p>
            Social Media
            <em>(Facebook and Instagram)</em>
          </p>
        </div>
        <div id="ResumeRight">
          <div id="ResumeHeader">
            <h2>Faith</h2>
            <h2>Guanga</h2>
          </div>
          <div id="Experience">
            <h2>RELEVANT WORK EXPERIENCE</h2>
            <div>
              <h3>Design and Production Intern</h3>
              <div className="at">
                <p>Ploughshares</p>
                <p className="from">(Sept. 2022-May 2023)</p>
              </div>
              <p>Boston MA</p>
              <ul>
                <li>
                  Formatted poetry, prose, and longform pieces to fit
                  Ploughshares’ house style
                </li>
                <li>
                  Proofread poetry, prose, and longform pieces to ensure any
                  errors or inconsistencies were fixed before its publication
                </li>
                <li>
                  Researched and compiled a list of different artists and their
                  work to use for future cover art
                </li>
                <li>
                  Designed social graphics to be displayed on Ploughshares’
                  social media platforms
                </li>
                <li>
                  Designed ads to promote the literary journal on both print and
                  digital platforms
                </li>
                <li>
                  Uploaded HTML files of proofed submissions to Ploughshares’
                  website for digital publishing
                </li>
              </ul>
            </div>
            <div>
              <h3>Graphic Designer</h3>
              <div className="at">
                <p>ASIA’s Lunchbox Zine</p>
                <p className="from">(Sept. 2021-April 2022)</p>
              </div>
              <p>Emerson College, Boston, MA </p>
              <ul>
                <li>
                  Created digital art for the zine’s front cover and spread
                  pages
                </li>
                <li>
                  Designed and edited spreads to accommodate the zine’s seasonal
                  theme
                </li>
                <li>
                  Attended bi-weekly meetings to give progress reports and
                  discuss any concerns for the zine or the organization
                </li>
              </ul>
            </div>
            <h2>OTHER WORK EXPERIENCE</h2>
            <div>
              <h3>Copyeditor</h3>
              <div className="at">
                <p>PubClub</p>
                <div className="from">(Sept. 2021-April 2022)</div>
              </div>
              <p>Emerson College, Boston, MA</p>
              <ul>
                <li>
                  Attended meetings to collaborate and share ideas for upcoming
                  book projects
                </li>
                <li>
                  Copyedited manuscripts to prepare for final proofreadings
                  before print
                </li>
                <li>
                  Created style sheets to clarify the copyedits that were made
                  in manuscripts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;

import React from "react";

function About() {
    return (
        <div
            name="About"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
        >
            <div>
                <h1 className="text-3xl font-bold mb-5">About</h1>
                <p>
                    Hello, I'm Sai, a passionate Progrramer and Developer with keen interest in Web Development. Currently pursuing Bachleor's Degree in Electronics and Telecommunication from SIES Graduate School of Technology.
                </p>
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Education & Training
                </h1>
                <span>
                    SIES Graduate School of Technology (2021-2025)
                </span>
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Skills & Expertise
                </h1>
                <span>
                    Proficient in Java/Javascript .Experienced with HTML,CSS,JS,React JS. Strong grasp of [Design Principles/Concepts]
                    Excellent problem-solving skills Effective communicator and
                    collaborator
                </span>
                <br />
                <br />
                
                {/* <h1 className="text-green-600 font-semibold text-xl">
                    Achievements & Awards
                </h1>
                <span>
                    [Award/Recognition], [Organization/Institution], [Year] [Achievement],
                    [Organization/Platform], [Year]
                </span>
                <br />
                <br /> */}
                <h1 className="text-green-600 font-semibold text-xl">
                    Mission Statement
                </h1>
                <p>
                    My mission is to leverage my skills and creativity to deliver
                    innovative [Your Field] solutions that exceed client expectations and
                    contribute positively to the digital landscape. I am committed to
                    continuous learning and growth, always seeking new challenges and
                    opportunities to expand my horizons.
                </p>
            </div>
        </div>
    );
}

export default About;
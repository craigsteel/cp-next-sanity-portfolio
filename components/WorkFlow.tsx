import { Container, Col, Row } from 'react-bootstrap';
import Image from 'next/image'
import { full } from '@cloudinary/url-gen/qualifiers/fontHinting';

function WorkFlow() {
  return (

    <section>


      <div className='relative z-0 mx-10 mt-10 rounded-lg bg-gradient-to-tr from-slate-100 from-40% via-blue-300 via-60% to-slate-300'>
        <h2 className="grid pl-10 py-5 text-2xl uppercase font-light text-slate-950">Workflow</h2>

        <div className='px-10 pb-10 grid md:grid-cols-3 md:gap-6 text-slate-900 lg:grid-cols-6 lg:gap-6'>
            <div className=''>
              <h3 className='uppercase'>User Research</h3>
              <p className='font-light text-[12px]'>
                This provides an important start and should be ongoing.
                Identifying and Interviewing different user types, their likes, needs and potential frustrations.
                Alongside the client uncover the goals for the project and the user’s needs.
                Draft an outline to determine milestones that align with the goals and fit within the budget, deadline and technical resources.
              </p>
            </div>
            <div className=''>
              <h3 className='uppercase'>Brainstorming</h3>
              <p className='font-light text-[12px]'>
                Explore the needs and wants of the user and build personas around each type of user
                Research competitors in the market. Gather resources to carry out the project.
                Sketch out rough ideas
              </p>
            </div>
            <div className=''>
              <h3 className='uppercase'>UX Design</h3>
              <p className='font-light text-[12px]'>
                Break down the brief into smaller, actionable goals.
                Research established UX patterns for achieving a similar goal.
                Construct user flows to determine how to complete each goal in the least amount of steps.
                Break down the user flows into a system of interconnected components.
                Develop wireframes based on the components.
                Determine various states for each wireframe e.g. empty filled, logged in, error etc
              </p>
            </div>
            <div className=''>
              <h3 className='uppercase'>UI Design</h3>
              <p className='font-light text-[12px]'>
                Explore visual design patterns.
                Research framework and/or guidelines if necessary.
                Experiment with different styles, colours and typography most suited to the needs.
                Transform the wireframes into high-fidelity mockups.
                Collaborate with developers to determine any technical constraints related to the visuals.
                Generate a consistent UI kit for reusable components.
              </p>
            </div>
            <div className=''>
              <h3 className='uppercase'>Prototyping</h3>
              <p className='font-light text-[12px]'>
                Determine the start, processing and end state for each action.
                Build interactive prototypes for the client to demonstrate motion,feedback, state and context.
                Collaborate with developers to determine any technical constraints related to the visuals.
                Animate visual components such as logos for intro screens and pre-loaders.
              </p>
            </div>
            <div className=''>
            <h3 className='uppercase'>Usability Testing</h3>
            <p className='font-light text-[12px]'>
              Usability testing People need to be given specific tasks that you want them to perform.
              Finalise assets for handover to developers.
              Ensure visuals are accessible, on-brand and within cultural boundaries.
              Determine whether the visuals are adaptable to various sizes.
              Collaborate with developers to determine any technical constraints related to the visuals.
            </p>
          </div>
        </div>

        <Image
          src="/infinity.svg"
          fill
          className="-z-10 absolute opacity-10 p-5 bg-no-repeat bg-center"
          loading='lazy'
          alt={'Infinity symbol'}
        />
      </div>
    </section>
  )
}

export default WorkFlow

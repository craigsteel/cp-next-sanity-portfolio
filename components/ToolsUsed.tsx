import { Container, Col, Row } from 'react-bootstrap';
import _JSXStyle from 'styled-jsx/style'

function ToolsUsed() {
  return (
    <section className='my-10'>

      <div className='relative mx-10 mt-10 rounded-lg bg-gradient-to-tr from-slate-950 from-40% via-blue-950 via-60% to-slate-950'>

        <h2 className="grid pl-10 pt-5 text-2xl uppercase font-light">
          Tools I use
        </h2>

        <div className='p-10 font-light uppercase grid md:grid-cols-1 md:gap-6 lg:grid-cols-1 lg:gap-6'>
          <h3>Photoshop  /  Illustrator  /  INDESIGN  /  AdobeXD   /  InVision  /  VSC  /  GITHUB  /  Google</h3>
          <style jsx>{ `h3 { word-spacing: 1em; } `}</style>
        </div>

      </div>

    </section>

  )
}

export default ToolsUsed
import uniqid from 'uniqid'
import { miscprojects } from '../../portfolio'
import MiscProjectContainer from '../MiscProjectContainer/MiscProjectContainer'
import './MiscProjects.css'

const MiscProjects = () => {
  if (!miscprojects.length) return null

  return (
    <section id='miscprojects' className='section miscprojects'>
      <h2 className='section__title'>Misc Projects</h2>

      <div className='miscprojects__grid'>
        {miscprojects.map((miscproject) => (
          <MiscProjectContainer key={uniqid()} miscproject={miscproject} />
        ))}
      </div>
    </section>
  )
}

export default MiscProjects

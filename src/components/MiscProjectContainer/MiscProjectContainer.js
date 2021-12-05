import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './MiscProjectContainer.css'

const MiscProjectContainer = ({ miscproject }) => (
  <div className='miscproject'>
    <h3>{miscproject.name}</h3>

    <p className='miscproject__description'>{miscproject.description}</p>
    {miscproject.stack && (
      <ul className='miscproject__stack'>
        {miscproject.stack.map((item) => (
          <li key={uniqid()} className='miscproject__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {miscproject.sourceCode && (
      <a
        href={miscproject.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {miscproject.livePreview && (
      <a
        href={miscproject.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default MiscProjectContainer

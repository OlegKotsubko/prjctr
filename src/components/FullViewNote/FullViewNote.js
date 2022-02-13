import Button from "../Button/Button";
import {
  useNavigate,
  useParams,
} from 'react-router-dom'

import useNoteContext from "../../hooks/useNoteContext";

import styles from './FullViewNote.module.scss'
import useViewModeContext from "../../hooks/useViewModeContext";
import Content from "../Content/Content";

const FullViewNote = () => {
  const {
    state,
  } = useNoteContext();

  const { modeActions } = useViewModeContext()
  const navigate = useNavigate()
  const {id} = useParams()

  const activeNote = () => {
    return state.find(item => item.id === Number(id))
  }

  const contentClickHandler = (e) => {
    if(e.target.tagName === 'A' && !window.confirm('Do you want to open this link?')) {
      e.preventDefault()
    }
  }

  return (
    <Content>
      <div className={styles.header}>
        <h1>{activeNote().title}</h1>
        <Button clickHandler={() => {
          modeActions.onDefaultView()
          navigate('/notes')
        }}>Back</Button>
      </div>
      <div
        onClick={(e) => contentClickHandler(e)}
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: activeNote().sanitizedHTML }}
      />
    </Content>
  )
}

export default FullViewNote

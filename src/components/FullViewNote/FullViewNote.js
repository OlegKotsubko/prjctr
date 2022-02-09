import Button from "../Button/Button";

import useNoteContext from "../../hooks/useNoteContext";

import styles from './FullViewNote.module.scss'
import useViewModeContext from "../../hooks/useViewModeContext";

const FullViewNote = () => {
  const {activeNote, deleteActiveNote} = useNoteContext();

  const {togglePreview} = useViewModeContext()

  const contentClickHandler = (e) => {
    if(e.target.tagName === 'A' && !window.confirm('Do you want to open this link?')) {
      e.preventDefault()
    }
  }
  return (
    <div>
      <div className={styles.header}>
        <h1>{activeNote?.title}</h1>
        <Button clickHandler={() => {
          deleteActiveNote()
          togglePreview()
        }}>Back</Button>
      </div>
      <div
        onClick={(e) => contentClickHandler(e)}
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: activeNote?.sanitizedHTML }}
      />
    </div>
  )
}

export default FullViewNote

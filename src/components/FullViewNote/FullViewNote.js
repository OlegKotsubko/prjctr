import Button from "../Button/Button";

import useNoteContext from "../../hooks/useNoteContext";

import styles from './FullViewNote.module.scss'
import Content from "../Content/Content";

const FullViewNote = () => {
  const {
    activeNote,
    deleteActiveNote
  } = useNoteContext();

  const contentClickHandler = (e) => {
    if(e.target.tagName === 'A' && !window.confirm('Do you want to open this link?')) {
      e.preventDefault()
    }
  }
  return (
    <Content>
      <div className={styles.header}>
        <h1>{activeNote?.title}</h1>
        <Button clickHandler={() => {
          deleteActiveNote()
        }}>Back</Button>
      </div>
      <div
        onClick={(e) => contentClickHandler(e)}
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: activeNote?.sanitizedHTML }}
      />
    </Content>
  )
}

export default FullViewNote

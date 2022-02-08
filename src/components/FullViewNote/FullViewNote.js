import Button from "../Button/Button";

import useNoteContext from "../../hooks/useNoteContext";

import styles from './FullViewNote.module.scss'

const FullViewNote = () => {
  const {previewMode, backToForm} = useNoteContext();

  const contentClickHandler = (e) => {
    if(e.target.tagName === 'A' && !window.confirm('Do you want to open this link?')) {
      e.preventDefault()
    }
  }
  return (
    <div>
      <div className={styles.header}>
        <h1>{previewMode.title}</h1>
        <Button clickHandler={() => backToForm()}>Back</Button>
      </div>
      <div
        onClick={(e) => contentClickHandler(e)}
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: previewMode.sanitizedHTML }}
      />
    </div>
  )
}

export default FullViewNote

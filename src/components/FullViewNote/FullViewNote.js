import Button from "../Button/Button";

import styles from './FullViewNote.module.scss'

const FullViewNote = ({
  onResetActivation,
  activeNote,
}) => {

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
          onResetActivation()
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

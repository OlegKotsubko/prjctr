import Button from "../Button/Button";

import styles from './Note.module.scss'

const Note = ({
  onStepBack,
  activeNote,
}) => {

  const contentClickHandler = (e) => {
    if(e.target.tagName === 'A' && !window.confirm('Do you want to open this link?')) {
      e.preventDefault()
    }
  }
  return (
    <div>
      <Button
        mod="empty"
        clickHandler={onStepBack}
      >
        Back
      </Button>
      <h1>{activeNote?.title}</h1>
      <div
        onClick={(e) => contentClickHandler(e)}
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: activeNote?.sanitizedHTML }}
      />
    </div>
  )
}

export default Note

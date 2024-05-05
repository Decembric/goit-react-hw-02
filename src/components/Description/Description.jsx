import css from "./Description.module.css";

const Description = () => {
  return (
    <>
      <h1 className={css.mainTitle}>Sip Happens Café</h1>
      <h2 className={css.paragraph}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </h2>
    </>
  )
}

export default Description
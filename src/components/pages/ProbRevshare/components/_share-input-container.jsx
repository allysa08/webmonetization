import styles from '../styles.module.css'

export function ShareInputContainer({ children }) {
  return (
    <div class={styles.tableWrapper}>
      <table className={styles.revShareTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Pointer</th>
            <th className={styles.weightCell}>Weight</th>
            <th className={styles.percentCell}>Percent</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

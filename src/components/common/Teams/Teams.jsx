import { participants, teams } from "../../../utils/utils";
import styles from "./Teams.module.css";

const Teams = () => {
  return (
    <div className={styles.teamsContainer}>
      {teams.map((team) => {
        return (
          <section key={team.id} className={styles.teamSection}>
            <img src={team.box} alt={team.id} className={styles.box}/>
            <img src={team.img} alt={team.id} className={styles.teamName} />
            <div className={styles.score}>
              {participants.map((person) => {
                return (
                  <>
                    <div key={person.id} className={styles.scoreInfo}>
                      <p className={styles.name}>{person.name}</p>
                      <p className={styles.numbers}>{person.score}</p>
                    </div>
                    {person.id === 8 ? null : <hr style={{opacity:'0.5'}}/>}
                  </>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Teams;

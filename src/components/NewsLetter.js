import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={styles.newsLetter}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.subscribeToOurNewsLetterParent}>
          <div className={styles.subscribeToOur}>
            Subscribe To Our News Letter
          </div>
          <div className={styles.subscribeOurNewsContainer}>
            <p className={styles.subscribeOurNews}>
              Subscribe our news letter to get
            </p>
            <p className={styles.subscribeOurNews}>latest news and updates</p>
          </div>
        </div>
        <TextField
          className={styles.groupItem}
          color="primary"
          label="Enter Your Email"
          size="medium"
          placeholder="Placeholder"
          sx={{ width: 510 }}
          variant="filled"
          type="text"
        />
      </div>
    </div>
  );
};

export default NewsLetter;

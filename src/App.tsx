import React, { useState, ChangeEvent } from "react";
import styles from "./App.module.scss";
import Button from "./formFields/Button/Button";
import ProgressBar from "./components/ProgressBar";
import Select from "./formFields/Select/Select";
import { createOptions } from "./misc/utils";
import { IAppProps } from ".";

const App = ({ config }: { config: IAppProps }): JSX.Element => {
  const initialProgress: { [key: number]: number } = {};
  config.bar.map((elm: number, index: number): null => {
    initialProgress[index] = elm;
    return null;
  });

  const [progress, setProgress] = useState<{ [key: number]: number }>(
    initialProgress
  );
  const [porgressSelected, setProgressSelected] = useState<number>(0);

  const handleSelection = (event: ChangeEvent<HTMLSelectElement>): void => {
    setProgressSelected(parseInt(event.target.value));
  };

  const handleClick = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    let copyProgress = { ...progress };
    let updatedValue = progress[porgressSelected] + parseInt(target.innerText);
    if (updatedValue < 0) {
      updatedValue = 0;
    }
    copyProgress[porgressSelected] = updatedValue;
    setProgress(copyProgress);
  };

  return (
    <div className={styles.container}>
      <div className={styles.app}>
        {Object.keys(progress).map((elm, index) => (
          <div
            data-testid={`progrss-bar-${index}`}
            key={`bar_${index}`}
            className={styles.bar}
          >
            <ProgressBar
              testId={`bar-value-${index}`}
              value={`${progress[index]}`}
            />
          </div>
        ))}
        <div className={styles.controllers}>
          <div data-testid="select-controller" className={styles.left}>
            <Select
              onChange={handleSelection}
              options={createOptions(progress)}
              defaultValue={porgressSelected}
              customStyleClass={styles.selectBox}
            />
          </div>
          <div className={styles.right}>
            {config.controllers.map((elm, index) => (
              <div
                className={styles.buttonContainer}
                key={`buttonIndex_${index}`}
                data-testid={`button-container-${index}`}
              >
                <Button type="button" onClick={handleClick} value={elm} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

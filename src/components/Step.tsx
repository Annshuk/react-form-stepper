import * as React from 'react';
import clsx from 'clsx';
import Connector from './Connector';
import { StepDTO, StepStyleDTO, StepStyleProps } from '../types';
import { useStepStyles, stepStyleDefaults } from '../styles';

interface StepProps extends StepDTO {
  key?: any;
  first?: boolean;
  connectorStateColors?: boolean;
  styleConfig?: StepStyleDTO;
  className?: string;
}

const Step: React.FC<StepProps> = ({
  children,
  label = '',
  first,
  styleConfig = stepStyleDefaults,
  connectorStateColors = false,
  completed = false,
  active = false,
  className,
  ...rest
}) => {
  const stepStyleProps: StepStyleProps = { ...styleConfig!, completed, active };
  const classes = useStepStyles(stepStyleProps);

  return (
    <div className={classes.StepContainer}>
      {!first && (
        <Connector
          completed={completed}
          active={active}
          stateColors={connectorStateColors}
        />
      )}
      <div className={classes.StepMain}>
        <button
          disabled={!active && !completed}
          className={clsx(
            classes.StepCircle,
            classes.StepButton,
            { active },
            { completed },
            className
          )}
          {...rest}
        >
          <span
            className={clsx(
              classes.StepCircleContent,
              { active },
              { completed }
            )}
          >
            {children}
          </span>
        </button>
        {label && (
          <div className={classes.LabelContainer}>
            <span className={classes.Label}>{label}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step;
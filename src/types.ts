export interface StepState {
  active: boolean;
  completed: boolean;
}

export interface StepDTO {
  label?: string;
  active?: boolean;
  completed?: boolean;
}

export interface StepStyleDTO {
  [key: string]: any;
  activeBgColor: string;
  activeTextColor: string;
  completedBgColor: string;
  completedTextColor: string;
  inactiveBgColor: string;
  inactiveTextColor: string;
  size: string | number;
  circleFontSize: string | number;
  labelFontSize: string | number;
  borderRadius: string | number;
  fontWeight: string | number;
}

export interface StepStyleProps extends StepStyleDTO, StepState {}

export interface ConnectorStyleProps {
  disabledColor: string;
  activeColor: string;
  completedColor: string;
  size: string | number;
  style: string;
}
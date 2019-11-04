
export const spinner = ['⠋ ', '⠙ ', '⠹ ', '⠸ ', '⠼ ', '⠴ ', '⠦ ', '⠧ ', '⠇ ', '⠏ '];

export const loadingSpinner = ({
  onLoading,
  onLoad,
  delay,
  repeatCount,
  delayUpdate,
}: {
  onLoading?: string;
  onLoad?: string;
  delay?: number;
  repeatCount?: number;
  delayUpdate?: number;
} = {}) => (
  {
    text: '✔ ' + (onLoad || 'Loaded'),
    cmd: false,
    repeat: true,
    repeatCount: repeatCount || 1,
    frames: spinner.map((spinner) => ({
      text: spinner + (onLoading || 'Loading'),
      delay: delayUpdate || 40,
    })),
    delay,
  }
);
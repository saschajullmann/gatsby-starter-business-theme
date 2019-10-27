import Typography from 'typography'
import deYoung from 'typography-theme-de-young'

deYoung.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
      color: 'inherit'
    }
})

const typography = new Typography(deYoung);

export default typography;

import sys from 'system-components'

export const Slider = sys({
  is: 'input',
  type: 'range',
  width: 1,
  mx: 0,
  my: 2,
  color: 'inherit',
  bg: 'gray',
  borderRadius: 99999,
}, props => ({
  display: 'block',
  height: '4px',
  cursor: 'pointer',
  appearance: 'none',
  '&:focus': {
    outline: 0,
  },

  /*

  TODO: Vertical slider

  transform: rotate(90deg);
  transform-origin: 5px 5px;

  */

  '&::-webkit-slider-thumb': {
    width: '16px',
    height: '16px',
    backgroundColor: 'currentcolor',
    border: 0,
    borderRadius: '99999px',
    appearance: 'none'
  },
}))

Slider.displayName = 'Slider'

export default Slider

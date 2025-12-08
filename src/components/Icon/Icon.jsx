const Icon = ({ name, size = 48 }) => (
  <svg width={size} height={size}>
    <use href={`/icons/sprite.svg#${name}`}></use>
  </svg>
);
export default Icon;

export const Box = ({
  children,
  className = '',
  size = 'small',
  styles = {},
  ...rest
}) => (
  <div
    className={`box box--${size} ${className}`}
    style={{ fontStyle: 'italic', ...styles }}
    {...rest}
  >
    {children}
  </div>
)

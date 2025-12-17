import styled from 'styled-components';

export const Button = styled.button`
  padding: ${({ size }) =>
        size === 'large' ? '14px 32px' :
            size === 'small' ? '8px 16px' :
                '12px 24px'};
  font-size: ${({ size, theme }) =>
        size === 'large' ? theme.fontSizes.lg :
            size === 'small' ? theme.fontSizes.sm :
                theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: ${({ theme }) => theme.transitions.normal};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  white-space: nowrap;

  ${({ variant, theme }) => {
        switch (variant) {
            case 'primary':
                return `
          background: ${theme.colors.gradient};
          color: ${theme.colors.white};
          box-shadow: ${theme.shadows.sm};
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.md};
          }
          
          &:active {
            transform: translateY(0);
          }
        `;
            case 'secondary':
                return `
          background: ${theme.colors.gradientOrange};
          color: ${theme.colors.white};
          box-shadow: ${theme.shadows.sm};
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.md};
          }
        `;
            case 'outline':
                return `
          background: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          
          &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
          }
        `;
            case 'white':
                return `
          background: ${theme.colors.white};
          color: ${theme.colors.primary};
          box-shadow: ${theme.shadows.sm};
          
          &:hover {
            box-shadow: ${theme.shadows.md};
            transform: translateY(-2px);
          }
        `;
            default:
                return `
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
        `;
        }
    }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      transform: none;
    }
  }
`;

export default Button;

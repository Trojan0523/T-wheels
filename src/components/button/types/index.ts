/**
 * @description button component props type
 */
export interface IButtonProps {
  /**
     * @params size
     * @description choose button size
     */
  size: string,
  /**
     * @params loading
     * @description able to load
     */
  loading: boolean,
  /**
     * @params theme/types
     * @description colors
     */
  theme: string,
  /**
     * @params disabled
     * ability to touch
     */
  disabled: boolean,
  /**
     * @params level
     * @description notify level
     */
  level: string,
}

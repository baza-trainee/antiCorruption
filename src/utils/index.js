export const defineSliderPosition = (
  isMobilePosition,
  isTabletPosition,
  isMaxDesktopPosition,
  xPosition,
  containerBoundingRect,
  slider
) => {
  if (isMobilePosition) {
    if (xPosition < containerBoundingRect.left + 30) {
      return 0.03;
    } else if (xPosition > containerBoundingRect.right - 30) {
      return 0.97;
    } else {
      return slider;
    }
  } else if (isTabletPosition || isMaxDesktopPosition) {
    if (xPosition < containerBoundingRect.left + 16) {
      return 0.016;
    } else if (xPosition > containerBoundingRect.right - 16) {
      return 0.984;
    } else {
      return slider;
    }
  } else {
    if (xPosition < containerBoundingRect.left + 22) {
      return 0.022;
    } else if (xPosition > containerBoundingRect.right - 22) {
      return 0.978;
    } else {
      return slider;
    }
  }
};

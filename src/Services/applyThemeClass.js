function applyThemeClass(theme, styles) {
  return theme === "purple"
    ? styles.purple
    : theme === "dark"
    ? styles.dark
    : styles.white;
}

export default applyThemeClass;

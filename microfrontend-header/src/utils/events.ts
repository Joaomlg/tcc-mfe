export const navigate = (path: string) => {
  document.dispatchEvent(
    new CustomEvent("tcc-mfe:navigate", {
      bubbles: true,
      detail: { path },
    })
  );
};

export const logout = () => {
  document.dispatchEvent(
    new CustomEvent("tcc-mfe:logout", {
      bubbles: true,
    })
  );
};

export const emitLoginEvent = (sessionId: string) => {
  document.dispatchEvent(
    new CustomEvent("tcc-mfe:login", {
      bubbles: true,
      detail: { sessionId },
    })
  );
};

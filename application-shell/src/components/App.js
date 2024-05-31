import { useCallback, useEffect, useState } from "react";
import { TCC_MFE_LOGIN_EVENT, TCC_MFE_LOGOUT_EVENT } from "../utils/events";
import {
  getConfig,
  getFragmentConfigByTraffic,
  replaceContainerFragment,
  tryLoadFragment,
} from "../utils/fragments";
import "./App.css";
import Container from "./Container";

function App() {
  const [session, setSession] = useState(null);
  const [fragmentsConfig, setFragmentsConfig] = useState(null);

  const initialize = useCallback(async () => {
    const config = await getConfig();

    setFragmentsConfig(config);

    const sessionId = localStorage.getItem("tcc-mfe-session");

    if (sessionId) {
      setSession(sessionId);
    } else {
      const loginFragmentHeader = getFragmentConfigByTraffic(
        config.common.login
      );

      await tryLoadFragment(loginFragmentHeader.url);

      replaceContainerFragment(
        "application-shell-login",
        loginFragmentHeader.tagName
      );
    }
  }, []);

  const handleLoginEvent = useCallback(async (event) => {
    let sessionId = event.detail.sessionId;
    localStorage.setItem("tcc-mfe-session", sessionId);
    setSession(sessionId);
  }, []);

  const handleLogoutEvent = useCallback(async (event) => {
    localStorage.removeItem("tcc-mfe-session");
    window.location.reload();
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    document.addEventListener(TCC_MFE_LOGIN_EVENT, handleLoginEvent);
    return () => {
      document.removeEventListener(TCC_MFE_LOGIN_EVENT, handleLoginEvent);
    };
  }, [handleLoginEvent]);

  useEffect(() => {
    document.addEventListener(TCC_MFE_LOGOUT_EVENT, handleLogoutEvent);
    return () => {
      document.removeEventListener(TCC_MFE_LOGOUT_EVENT, handleLogoutEvent);
    };
  }, [handleLogoutEvent]);

  return session ? (
    <Container config={fragmentsConfig} />
  ) : (
    <div id="application-shell-login">
      <span>Carregando...</span>
    </div>
  );
}

export default App;

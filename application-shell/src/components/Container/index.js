import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TCC_MFE_NAVIGATE_EVENT } from "../../utils/events";
import {
  getFragmentConfigByTraffic,
  replaceContainerFragment,
  setContainerError,
  setContainerLoadingFragment,
  tryLoadFragment,
} from "../../utils/fragments";
import { getRootPath } from "../../utils/regex";
import "./styles.css";

function Container(props) {
  const [initialized, setInitialized] = useState(false);
  const [headerloaded, setHeaderLoaded] = useState(false);
  const [fragmentsLoaded, setFragmentsLoaded] = useState([]);
  const [currentPath, setCurrentPath] = useState(
    getRootPath(window.location.pathname)
  );

  const fragmentsConfig = useMemo(() => props.config, [props.config]);

  const navigate = useNavigate();

  const loadHeader = useCallback(async () => {
    if (!headerloaded) {
      const headerFragmentConfig = getFragmentConfigByTraffic(
        fragmentsConfig.common.header
      );
      await tryLoadFragment(headerFragmentConfig.url);
      replaceContainerFragment(
        "application-shell-header",
        headerFragmentConfig.tagName
      );
      setHeaderLoaded(true);
    }
  }, [fragmentsConfig.common.header, headerloaded]);

  const loadPathFragment = useCallback(
    async (path) => {
      try {
        if (!path || (initialized && path === currentPath)) {
          return;
        }

        setCurrentPath(path);

        if (path === "error") {
          setContainerError("application-shell-content");
          return;
        }

        if (!(path in fragmentsConfig.routes)) {
          throw new Error("Invalid path:", path);
        }

        const currentFragmentConfig = getFragmentConfigByTraffic(
          fragmentsConfig.routes[path]
        );

        if (!fragmentsLoaded.includes(currentFragmentConfig.tagName)) {
          setContainerLoadingFragment("application-shell-content");

          const fragmentLoaded = await tryLoadFragment(
            currentFragmentConfig.url
          );

          if (!fragmentLoaded) {
            throw Error();
          }

          setFragmentsLoaded([
            ...fragmentsLoaded,
            currentFragmentConfig.tagName,
          ]);
        }

        navigate(path);

        replaceContainerFragment(
          "application-shell-content",
          currentFragmentConfig.tagName
        );

        setInitialized(true);
      } catch (error) {
        console.error("Could not load path fragment! Error:", error);
        navigate("error");
        setContainerError("application-shell-content");
      }
    },
    [
      initialized,
      currentPath,
      fragmentsConfig.routes,
      fragmentsLoaded,
      navigate,
    ]
  );

  const loadPathFragmentFromEvent = useCallback(
    async (event) => {
      let path = event ? getRootPath(event.detail.path) : "";
      loadPathFragment(path);
    },
    [loadPathFragment]
  );

  useEffect(() => {
    loadHeader();
  }, [loadHeader]);

  useEffect(() => {
    loadPathFragment(currentPath || "home");

    document.addEventListener(
      TCC_MFE_NAVIGATE_EVENT,
      loadPathFragmentFromEvent
    );

    return () => {
      document.removeEventListener(
        TCC_MFE_NAVIGATE_EVENT,
        loadPathFragmentFromEvent
      );
    };
  }, [currentPath, loadPathFragment, loadPathFragmentFromEvent]);

  return (
    <div id="application-shell-container">
      <div id="application-shell-header">
        <span>Carregando...</span>
      </div>
      <div id="application-shell-content">
        <span>Carregando...</span>
      </div>
    </div>
  );
}

export default Container;

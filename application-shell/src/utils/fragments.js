export const getConfig = async () => {
  const response = await fetch("http://localhost:3001/config.json", {
    cache: "no-cache",
  });
  if (!response.ok) {
    throw Error("Could no get fragment config file!");
  }
  return await response.json();
};

export const getFragmentConfigByTraffic = (fragmentConfigList) => {
  if (!Array.isArray(fragmentConfigList)) {
    return fragmentConfigList;
  }

  const configsSortedByTraffic = fragmentConfigList.sort(
    (a, b) => (a.traffic || 1) - (b.traffic || 1)
  );

  const random = Math.random();

  for (var i in configsSortedByTraffic) {
    if (random < (configsSortedByTraffic[i].traffic || 1)) {
      return configsSortedByTraffic[i];
    }
  }

  return configsSortedByTraffic.at(-1);
};

export const tryLoadFragment = async (url) => {
  let response;

  try {
    response = await fetch(url);
    if (!response.ok) {
      throw new Error("Fetch response not ok");
    }
  } catch (error) {
    console.error(`Could no fetch ${url}! Error:`, error);
    return false;
  }

  var blobContent = await response.blob();
  var objUrl = URL.createObjectURL(blobContent);

  const script = document.createElement("script");
  script.src = objUrl;
  script.type = "text/javascript";

  document.body.appendChild(script);

  return true;
};

export const replaceContainerFragment = (containerId, fragmentTagName) => {
  var container = document.getElementById(containerId);
  var fragmentElement = document.createElement(fragmentTagName);
  container.replaceChildren(fragmentElement);
};

export const setContainerLoadingFragment = (containerId) => {
  var container = document.getElementById(containerId);
  var loadingElement = document.createElement("span");
  loadingElement.innerHTML = "Carregando...";
  container.replaceChildren(loadingElement);
};

export const setContainerError = (containerId) => {
  var container = document.getElementById(containerId);
  var loadingElement = document.createElement("span");
  loadingElement.innerHTML = "Erro!";
  container.replaceChildren(loadingElement);
};

import type { NextPage } from "next";
import { Unity, useUnityContext } from "react-unity-webgl";
import { createGlobalStyle } from "styled-components";
import { isBrowser } from "react-device-detect";
import HeadMeta from "./headMeta";

const GloablStyles = createGlobalStyle`
  body{
    background-color: black;
  }
`;

const Home: NextPage = () => {
  const { unityProvider, sendMessage, isLoaded, loadingProgression } =
    useUnityContext({
      loaderUrl: "Build/MyBuild.loader.js",
      dataUrl: "/Build/MyBuild.data",
      frameworkUrl: "Build/MyBuild.framework.js",
      codeUrl: "Build/MyBuild.wasm",
      webglContextAttributes: {
        preserveDrawingBuffer: true,
      },
    });

  return (
    <>
      <GloablStyles />
      <HeadMeta />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Unity
          style={{
            position: "absolute",
            visibility: isLoaded ? "visible" : "hidden",
            width: "1920px",
            height: "1080px",
            top: "0"
          }}
          unityProvider={unityProvider}
        />
      </div>
    </>
  );
};

export default Home;

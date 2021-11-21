import React from "react";
import ReadmeImg from "./ReadmeImg";
import Text from "./TextWhite";

export interface Props {
  cover?: string;
  track: string;
  artist: string;
  progress: number;
  duration: number;
  isPlaying: boolean;
}

export const Player: React.FC<Props> = ({
  cover,
  track,
  artist,
  progress,
  duration,
  isPlaying,
}) => {
  return (
    <ReadmeImg width="256" height="93">
      <style>
        {`
            .paused {
              animation-play-state: paused !important;
              background: #e1e4e8 !important;
            }

            img:not([src]) {
              content: url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
              border-radius: 6px;
              background: #FFF;
              border: 1px solid #e1e4e8;
            }

            p {
              display: block;
              opacity: 0;
            }

            .progress-bar {
              position: relative;
              width: 100%;
              height: 4px;
              margin: -1px;
              border: 1px solid rgba(255,255,255,0.2);
              border-radius: 4px;
              overflow: hidden;
              padding: 2px;
              z-index: 0;
            }

            #progress {
              position: absolute;
              top: -1px;
              left: 0;
              width: 100%;
              height: 6px;
              transform-origin: left center;
              background-color: #fff;
              animation: progress ${duration}ms linear;
              animation-delay: -${progress}ms;
            }
            
            .progress-bar,
            #track,
            #artist,
            #cover,
            #text,
            #logo {
              opacity: 0;
              animation: appear 300ms ease-out forwards;
            }

            #track {
              animation-delay: 400ms;
            }
            #artist {
              animation-delay: 500ms;
            }
            .progress-bar {
              animation-delay: 550ms;
              margin-top: 4px;
            }

            #cover {
              animation-name: cover-appear;
              animation-delay: 300ms;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.05);
            }

            #cover:not([src]) {
              box-shadow: none;
            }

            #text {
              font-family: Roboto Slab,Helvetica,Arial,sans-serif !important;
              margin-bottom: 8px;
              color: rgba(255,255,255,0.75) !important;
            }

            @keyframes cover-appear {
              from {
                opacity: 0;
                transform: scale(0.8);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes appear {
              from {
                opacity: 0;
                transform: translateX(-8px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes progress {
              from {
                transform: scaleX(0)
              }
              to {
                transform: scaleX(1)
              }
            }
        `}
      </style>
      <div
        className={isPlaying ? "disabled" : ""}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "8px 4px",
          flexDirection: "column",
        }}
      >
        <Text id="text">I'm currently listening to:</Text>
        <div
          style={{
            display: "flex",
            flex: 1,
            width: "100%",
          }}
        >
          <img id="cover" src={cover ?? null} width="48" height="48" />
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              marginTop: -4,
              marginLeft: 8,
              maxWidth: 195,
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Text id="track" weight="bold">
                {`${track ?? ""} `.trim()}
              </Text>
              <img id="logo" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE2OHB4IiB3aWR0aD0iMTY4cHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2OCAxNjgiPgogPHBhdGggZmlsbD0iIzFFRDc2MCIgZD0ibTgzLjk5NiAwLjI3N2MtNDYuMjQ5IDAtODMuNzQzIDM3LjQ5My04My43NDMgODMuNzQyIDAgNDYuMjUxIDM3LjQ5NCA4My43NDEgODMuNzQzIDgzLjc0MSA0Ni4yNTQgMCA4My43NDQtMzcuNDkgODMuNzQ0LTgzLjc0MSAwLTQ2LjI0Ni0zNy40OS04My43MzgtODMuNzQ1LTgzLjczOGwwLjAwMS0wLjAwNHptMzguNDA0IDEyMC43OGMtMS41IDIuNDYtNC43MiAzLjI0LTcuMTggMS43My0xOS42NjItMTIuMDEtNDQuNDE0LTE0LjczLTczLjU2NC04LjA3LTIuODA5IDAuNjQtNS42MDktMS4xMi02LjI0OS0zLjkzLTAuNjQzLTIuODEgMS4xMS01LjYxIDMuOTI2LTYuMjUgMzEuOS03LjI5MSA1OS4yNjMtNC4xNSA4MS4zMzcgOS4zNCAyLjQ2IDEuNTEgMy4yNCA0LjcyIDEuNzMgNy4xOHptMTAuMjUtMjIuODA1Yy0xLjg5IDMuMDc1LTUuOTEgNC4wNDUtOC45OCAyLjE1NS0yMi41MS0xMy44MzktNTYuODIzLTE3Ljg0Ni04My40NDgtOS43NjQtMy40NTMgMS4wNDMtNy4xLTAuOTAzLTguMTQ4LTQuMzUtMS4wNC0zLjQ1MyAwLjkwNy03LjA5MyA0LjM1NC04LjE0MyAzMC40MTMtOS4yMjggNjguMjIyLTQuNzU4IDk0LjA3MiAxMS4xMjcgMy4wNyAxLjg5IDQuMDQgNS45MSAyLjE1IDguOTc2di0wLjAwMXptMC44OC0yMy43NDRjLTI2Ljk5LTE2LjAzMS03MS41Mi0xNy41MDUtOTcuMjg5LTkuNjg0LTQuMTM4IDEuMjU1LTguNTE0LTEuMDgxLTkuNzY4LTUuMjE5LTEuMjU0LTQuMTQgMS4wOC04LjUxMyA1LjIyMS05Ljc3MSAyOS41ODEtOC45OCA3OC43NTYtNy4yNDUgMTA5LjgzIDExLjIwMiAzLjczIDIuMjA5IDQuOTUgNy4wMTYgMi43NCAxMC43MzMtMi4yIDMuNzIyLTcuMDIgNC45NDktMTAuNzMgMi43Mzl6Ii8+Cjwvc3ZnPgo=" width="20px" height="20px"></img>
            </div>
            <Text id="artist" color={!track ? "gray" : undefined}>
              {artist || "Nothing playing..."}
            </Text>
            {track && (
              <div className="progress-bar">
                <div id="progress" className={!isPlaying ? "paused" : ""} />
              </div>
            )}
          </div>
        </div>
      </div>
    </ReadmeImg>
  );
};

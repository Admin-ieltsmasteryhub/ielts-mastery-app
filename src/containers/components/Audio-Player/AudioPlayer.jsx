import React, { useState, useEffect } from 'react';
import H5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './audioplayer.css'; // Import the CSS file for styling
import { TbRewindForward5,TbRewindBackward5,TbPlayerPlay,TbPlayerPause,TbVolumeOff,TbVolume } from "react-icons/tb";

const AudioPlayer = ({ youtubeVideoID }) => {
  const [link, setLink] = useState('');

  useEffect(() => {
    console.log(youtubeVideoID);
    var vid = youtubeVideoID;
    fetch("https://images" + ~~(Math.random() * 33) + "-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURIComponent("https://www.youtube.com/watch?hl=en&v=" + vid))
      .then((response) => {
        if (response.ok) {
          response.text().then((data) => {
            const regex = /(?:ytplayer\.config\s*=\s*|ytInitialPlayerResponse\s?=\s?)(.+?)(?:;var|;\(function|\)?;\s*if|;\s*if|;\s*ytplayer\.|;\s*<\/script)/gmsu;
            data = data.split('window.getPageData')[0];
            data = data.replace('ytInitialPlayerResponse = null', '');
            data = data.replace('ytInitialPlayerResponse=window.ytInitialPlayerResponse', '');
            data = data.replace('ytplayer.config={args:{raw_player_response:ytInitialPlayerResponse}};', '');
            const matches = regex.exec(data);
            const playerData = matches && matches.length > 1 ? JSON.parse(matches[1]) : false;
            const streams = [];
            if (playerData.streamingData) {
              if (playerData.streamingData.adaptiveFormats) {
                streams.push(...playerData.streamingData.adaptiveFormats);
              }
              if (playerData.streamingData.formats) {
                streams.push(...playerData.streamingData.formats);
              }
            } else {
              return false;
            }
            const audioStreams = {};
            streams.forEach((stream) => {
              const itag = stream.itag * 1;
              let quality = false;
              switch (itag) {
                case 139:
                  quality = "48kbps";
                  break;
                case 140:
                  quality = "128kbps";
                  break;
                case 141:
                  quality = "256kbps";
                  break;
                case 249:
                  quality = "webm_l";
                  break;
                case 250:
                  quality = "webm_m";
                  break;
                case 251:
                  quality = "webm_h";
                  break;
              }
              if (quality) audioStreams[quality] = stream.url;
            });
            const selectedLink = audioStreams['256kbps'] || audioStreams['128kbps'] || audioStreams['48kbps'];
            setLink(selectedLink);
          });
        }
      });
  }, []); // Use an empty dependency array

  return (<>
    <H5AudioPlayer src={link} style={{ width: '100%' }} className="audio-player"  customAdditionalControls={[]} autoPlay="false" customIcons={{
      rewind: <TbRewindBackward5/>,forward: <TbRewindForward5/>,play:<TbPlayerPlay/>,pause:<TbPlayerPause/>,volume:<TbVolume/>,volumeMute:<TbVolumeOff/>}}></H5AudioPlayer>
      </>
  );
};

export default AudioPlayer;

import React, { useState, useMemo } from 'react';
import {
  AnimateEnterExit,
  AnimateDiscordButton,
  AnimateDiscordChat,
  AnimateOverlay,
} from './animations';
import WidgetBot from '@widgetbot/react-embed';
import { _discord, _overlay, _chat, _button } from './Discord.styled';
import DiscordIcon from 'design/icons/discord/Discord';
import { useKeys } from 'core/hooks/useKeys';
import { useRemix } from 'core/hooks/remix/useRemix';
import { DISCORD_ACTIVE } from 'core/remix/state/bubbles';

const Discord = () => {
  const key = useKeys(10);
  const [active, setActive] = useRemix(DISCORD_ACTIVE, false);

  const watch = [active];
  return useMemo(
    () => (
      <_discord {...key[0]}>
        {active && (
          <AnimateOverlay {...key[1]}>
            <_overlay
              {...key[2]}
              onClick={() => {
                setActive(false);
              }}
            />
          </AnimateOverlay>
        )}
        <AnimateEnterExit>
          {active && (
            <AnimateDiscordChat {...key[3]}>
              <_chat {...key[4]}>
                <WidgetBot
                  {...key[5]}
                  server="715225479652704295"
                  channel="828686282330341427"
                  width={'320px'}
                  height={'480px'}
                />
              </_chat>
            </AnimateDiscordChat>
          )}
          {!active && (
            <AnimateDiscordButton {...key[6]}>
              <_button
                {...key[7]}
                onClick={() => {
                  setActive(true);
                }}
              >
                <DiscordIcon {...key[8]} />
              </_button>
            </AnimateDiscordButton>
          )}
        </AnimateEnterExit>
      </_discord>
    ),
    watch,
  );
};

export default Discord;

import React, { useState } from "react";
import { Portal, PortalWithState } from "react-portal";
import InfoMessageModal from "../components/info-message";

export function useInfoMessage(
  message: string,
  initial: boolean
): [JSX.Element | null, (state: boolean) => void] {
  const [hide, setHide] = useState(!!initial);

  const portal = hide ? null : (
    <Portal>
      <InfoMessageModal
        onClickClose={() => {
          setHide(true);
        }}
        message={message}
      />
    </Portal>
  );

  return [portal, setHide];
}
